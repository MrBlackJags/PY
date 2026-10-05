# 🌋 PRIMORDIA — Chronicles of Deep Time

A vast, primordial interactive platform exploring Earth's most iconic and catastrophic extinct creatures across deep geological time (from the Cambrian Explosion 541 MYA to the close of the Pleistocene).

Built with **React**, **Tailwind CSS**, **Shadcn UI design paradigms**, **Express.js**, and an embedded **SQLite** database.

---

## 🌌 The Three Primordial Realms & Themes

The entire interface dynamically shifts its atmosphere, ambient canvas particle system, color palette, and procedural Web Audio resonance based on the chosen realm:

1. **🌋 LAND (Terra / Pangaea)**:
   - **Visuals**: Deep volcanic obsidian and magma gradients with floating ash/ember particles.
   - **Featured Titans**: *Tyrannosaurus Rex*, *Spinosaurus*, *Brachiosaurus*, *Dimetrodon*, *Arthropleura*, *Titanoboa*.
   - **Theme**: Heavy, monolithic terrestrial predators and continental giants.

2. **🌊 OCEAN (The Abyss / Ancient Tethys)**:
   - **Visuals**: Abyssal midnight ocean trench with glowing bioluminescent cyan and floating marine snow particles.
   - **Featured Titans**: *Otodus Megalodon*, *Mosasaurus*, *Dunkleosteus*, *Anomalocaris*, *Liopleurodon*.
   - **Theme**: Weightless, silent oceanic leviathans and armored placoderms.

3. **🪽 AIR (The Aether / Ancient Atmosphere)**:
   - **Visuals**: Stratospheric storm slates, ozone violet radiance, and high-altitude mist particles.
   - **Featured Titans**: *Quetzalcoatlus*, *Meganeura*, *Argentavis*, *Pteranodon*, *Archaeopteryx*.
   - **Theme**: Giraffe-sized pterosaurs, giant teratorns, and the earliest transitional flyers.

---

## ⚡ Core Features

- **Minimalist, Vast Landing Page**: Clean, uncluttered UI with minimal buttons:
  - **Minimal Realm Switcher**: `[ 🌋 LAND ]` `[ 🌊 OCEAN ]` `[ 🪽 AIR ]`
  - **Deep Time Era Scrubber**: Toggle between All Eras, Paleozoic, Mesozoic, and Cenozoic.
  - **Instant Search**: Search by name, scientific binomial, diet, or fossil locality.
  - **Random Discovery (`🔀`)**: Summons a random creature from across deep time.
- **Atmospheric Canvas Engine**: 60fps lightweight particle system generating embers (Land), bioluminescence (Ocean), or wind shear mist (Air).
- **Procedural Primordial Soundscape**: Synthesizes custom subterranean volcanic rumbles, hydrostatic pulses, and high-altitude winds via the browser's native Web Audio API (no external audio files needed).
- **Specimen Dossier (Shadcn-style Modal)**:
  - Biometric metrics (Length, Mass, Bite Force in Newtons / Wingspan).
  - Deep time stratigraphic position.
  - Anatomical and evolutionary adaptations breakdown.
  - Extinction cataclysm analysis.
  - Primary fossil discovery locations.
  - **Live SQLite Field Observations Ledger**: Add observations, notes, and research entries that persist directly into the SQLite database.
- **Titan Comparative Analysis**: Side-by-side comparative juxtaposition of any two prehistoric beasts (e.g., T-Rex vs Megalodon).

---

## 🏗️ Technical Architecture

- **Frontend (`client/`)**:
  - React 18 / Vite
  - Tailwind CSS with custom primordial theme extensions
  - Lucide React icon set
  - Custom canvas particle engine & Web Audio synthesizer
- **Backend (`server/`)**:
  - Express.js REST API
  - Embedded `better-sqlite3` database with WAL mode
  - Auto-seeding of 16+ detailed primordial creatures with full biometrics
  - Dynamic filtering, sorting, random creature selection, and field observation submission

### REST API Endpoints

- `GET /api/creatures` — Fetch creatures with optional query filters (`?realm=land|ocean|air`, `?era=...`, `?search=...`, `?sort=...`)
- `GET /api/creatures/:id` — Fetch creature dossier and persisted user notes
- `GET /api/stats` — Overall counts by realm, oldest fossil record, and heaviest creature
- `GET /api/random` — Return a random creature for instant discovery
- `POST /api/creatures/:id/notes` — Submit a field observation (persists to SQLite)

---

## 🚀 How to Run

### Option 1: Full-Stack Mode (Single Command)

Runs the backend API, SQLite database, and serves the pre-built frontend together:

```bash
npm start
```

Then visit **`http://localhost:5000`** in your browser.

---

### Option 2: Development Mode (Hot Reload)

To run both client and server concurrently with instant hot reloading:

```bash
npm run dev
```

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
