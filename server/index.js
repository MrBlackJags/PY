const express = require('express');
const cors = require('cors');
const path = require('path');
const { db, initDb } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize database
initDb();

// Helper to format creatures
function formatCreature(row) {
  if (!row) return null;
  return {
    ...row,
    unique_adaptations: JSON.parse(row.unique_adaptations || '[]')
  };
}

// 1. Get all creatures with filtering, search, and sorting
app.get('/api/creatures', (req, { query }, res) => {
  try {
    const { realm, era, search, sort } = req.query;
    let sql = 'SELECT * FROM creatures WHERE 1=1';
    const params = [];

    if (realm && realm !== 'all') {
      sql += ' AND realm = ?';
      params.push(realm.toLowerCase());
    }

    if (era && era !== 'all') {
      sql += ' AND geological_era = ?';
      params.push(era);
    }

    if (search && search.trim() !== '') {
      sql += ' AND (name LIKE ? OR scientific_name LIKE ? OR description LIKE ? OR fossil_locations LIKE ? OR period LIKE ?)';
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term);
    }

    if (sort === 'oldest') {
      sql += ' ORDER BY mya_start DESC';
    } else if (sort === 'newest') {
      sql += ' ORDER BY mya_end ASC';
    } else if (sort === 'heaviest') {
      sql += ' ORDER BY weight_kg DESC';
    } else if (sort === 'longest') {
      sql += ' ORDER BY length_m DESC';
    } else {
      sql += ' ORDER BY mya_start DESC';
    }

    const rows = db.prepare(sql).all(...params);
    const formatted = rows.map(formatCreature);
    res.json({ success: true, count: formatted.length, data: formatted });
  } catch (error) {
    console.error('Error fetching creatures:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Get single creature by ID
app.get('/api/creatures/:id', (req, res) => {
  try {
    const row = db.prepare('SELECT * FROM creatures WHERE id = ?').get(req.params.id);
    if (!row) {
      return res.status(404).json({ success: false, message: 'Creature not found' });
    }

    const notes = db.prepare('SELECT * FROM user_notes WHERE creature_id = ? ORDER BY created_at DESC').all(req.params.id);
    res.json({
      success: true,
      data: {
        ...formatCreature(row),
        notes
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Get high-level database stats for the landing page
app.get('/api/stats', (req, res) => {
  try {
    const totalCount = db.prepare('SELECT COUNT(*) as count FROM creatures').get().count;
    const landCount = db.prepare("SELECT COUNT(*) as count FROM creatures WHERE realm = 'land'").get().count;
    const oceanCount = db.prepare("SELECT COUNT(*) as count FROM creatures WHERE realm = 'ocean'").get().count;
    const airCount = db.prepare("SELECT COUNT(*) as count FROM creatures WHERE realm = 'air'").get().count;
    const oldest = db.prepare('SELECT name, mya_start FROM creatures ORDER BY mya_start DESC LIMIT 1').get();
    const heaviest = db.prepare('SELECT name, weight_kg FROM creatures ORDER BY weight_kg DESC LIMIT 1').get();

    res.json({
      success: true,
      data: {
        totalCreatures: totalCount,
        realms: { land: landCount, ocean: oceanCount, air: airCount },
        oldestRecord: oldest,
        heaviestRecord: heaviest
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 4. Get a random creature
app.get('/api/random', (req, res) => {
  try {
    const row = db.prepare('SELECT * FROM creatures ORDER BY RANDOM() LIMIT 1').get();
    res.json({ success: true, data: formatCreature(row) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 5. Add user field observation / note to a creature
app.post('/api/creatures/:id/notes', (req, res) => {
  try {
    const { author, note } = req.body;
    if (!author || !note) {
      return res.status(400).json({ success: false, message: 'Author and note content required' });
    }

    const result = db.prepare('INSERT INTO user_notes (creature_id, author, note) VALUES (?, ?, ?)').run(req.params.id, author.trim(), note.trim());
    res.status(201).json({ success: true, noteId: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Serve client static build if present
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`🌌 Primordia Engine API running on http://localhost:${PORT}`);
});
