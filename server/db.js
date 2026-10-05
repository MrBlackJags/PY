const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'primordia.db');
const db = new Database(dbPath);

// Enable WAL mode for high performance
db.pragma('journal_mode = WAL');

function initDb() {
  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS creatures (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      scientific_name TEXT NOT NULL,
      realm TEXT NOT NULL, -- 'land', 'ocean', 'air'
      geological_era TEXT NOT NULL,
      period TEXT NOT NULL,
      mya_start REAL NOT NULL,
      mya_end REAL NOT NULL,
      diet TEXT NOT NULL,
      length_m REAL NOT NULL,
      weight_kg REAL NOT NULL,
      bite_force_n INTEGER,
      wingspan_m REAL,
      fossil_locations TEXT NOT NULL,
      description TEXT NOT NULL,
      unique_adaptations TEXT NOT NULL,
      extinction_event TEXT NOT NULL,
      image_url TEXT NOT NULL,
      sound_frequency TEXT,
      threat_tier TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS user_notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      creature_id TEXT NOT NULL,
      author TEXT NOT NULL,
      note TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (creature_id) REFERENCES creatures(id)
    );
  `);

  const count = db.prepare('SELECT COUNT(*) as cnt FROM creatures').get().cnt;
  if (count === 0) {
    seedData();
  }
}

function seedData() {
  console.log('Seeding primordial creatures database...');
  const insert = db.prepare(`
    INSERT INTO creatures (
      id, name, scientific_name, realm, geological_era, period,
      mya_start, mya_end, diet, length_m, weight_kg, bite_force_n,
      wingspan_m, fossil_locations, description, unique_adaptations,
      extinction_event, image_url, sound_frequency, threat_tier
    ) VALUES (
      @id, @name, @scientific_name, @realm, @geological_era, @period,
      @mya_start, @mya_end, @diet, @length_m, @weight_kg, @bite_force_n,
      @wingspan_m, @fossil_locations, @description, @unique_adaptations,
      @extinction_event, @image_url, @sound_frequency, @threat_tier
    )
  `);

  const creatures = [
    // --- LAND (TERRA) ---
    {
      id: "tyrannosaurus-rex",
      name: "Tyrannosaurus Rex",
      scientific_name: "Tyrannosaurus rex",
      realm: "land",
      geological_era: "Mesozoic",
      period: "Late Cretaceous",
      mya_start: 68,
      mya_end: 66,
      diet: "Apex Megacarnivore",
      length_m: 12.4,
      weight_kg: 8400,
      bite_force_n: 35000,
      wingspan_m: null,
      fossil_locations: "Hell Creek Formation, Montana & South Dakota, USA; Alberta, Canada",
      description: "The tyrant lizard king was one of the largest terrestrial predators to ever walk the Earth, equipped with serrated teeth up to 30 cm long capable of crushing solid bone with unmatched pressure.",
      unique_adaptations: JSON.stringify(["Bone-splintering conical teeth", "Binocular stereoscopic vision (greater field than hawks)", "Septate olfactory bulbs for detecting scents over miles", "Massive kinetic skull absorbing tons of shock"]),
      extinction_event: "Wiped out by the Chicxulub asteroid impact (Cretaceous-Paleogene extinction) 66 million years ago.",
      image_url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Sub-audible infrasound vibrations (14–22 Hz) capable of shaking water miles away",
      threat_tier: "Apex Cataclysm"
    },
    {
      id: "spinosaurus",
      name: "Spinosaurus",
      scientific_name: "Spinosaurus aegyptiacus",
      realm: "land",
      geological_era: "Mesozoic",
      period: "Cretaceous",
      mya_start: 99,
      mya_end: 93.5,
      diet: "Piscivore & River Hunter",
      length_m: 15.0,
      weight_kg: 7600,
      bite_force_n: 19000,
      wingspan_m: null,
      fossil_locations: "Bahariya Formation, Egypt; Kem Kem Beds, Morocco",
      description: "The longest carnivorous dinosaur known, possessing a towering 2-meter dorsal sail, paddle-like tail, and conical crocodile-like jaws engineered for hunting colossal river fish in mangrove deltas.",
      unique_adaptations: JSON.stringify(["Dense, osteosclerotic bones for aquatic diving ballast", "Fin-like caudal tail for propulsion", "Sensory neurovascular pits in snout detecting water pressure waves", "Giant neural spine sail for thermoregulation & display"]),
      extinction_event: "Severe regional drought and sea-level transgression drying out North Africa's primordial river systems.",
      image_url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Guttural aquatic hissing and low resonant hydro-pulses",
      threat_tier: "Apex River Titan"
    },
    {
      id: "brachiosaurus",
      name: "Brachiosaurus",
      scientific_name: "Brachiosaurus altithorax",
      realm: "land",
      geological_era: "Mesozoic",
      period: "Late Jurassic",
      mya_start: 154,
      mya_end: 153,
      diet: "High-Canopy Herbivore",
      length_m: 26.0,
      weight_kg: 42000,
      bite_force_n: 4000,
      wingspan_m: null,
      fossil_locations: "Morrison Formation, Colorado & Utah, USA",
      description: "A monumental high-browsing sauropod whose forelimbs were dramatically longer than its hindlimbs, giving it an elevated giraffe-like stance enabling it to feed on tree crowns 12 meters in the air.",
      unique_adaptations: JSON.stringify(["Elongated cervical vertebrae with pneumatic air sacs reducing skeletal weight", "Heart weighing over 200 kg capable of pumping blood up 10 meters", "Chisel-shaped teeth for stripping tough conifer foliage", "Immense columnar limb bones"]),
      extinction_event: "Environmental transitions at the close of the Jurassic favoring different sauropod lineages like titanosaurs.",
      image_url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Deep low-frequency earth-rumbling calls travel tens of kilometers",
      threat_tier: "Continental Titan"
    },
    {
      id: "dimetrodon",
      name: "Dimetrodon",
      scientific_name: "Dimetrodon grandis",
      realm: "land",
      geological_era: "Paleozoic",
      period: "Early Permian",
      mya_start: 295,
      mya_end: 272,
      diet: "Apex Carnivore",
      length_m: 3.5,
      weight_kg: 250,
      bite_force_n: 4200,
      wingspan_m: null,
      fossil_locations: "Red Beds of Texas & Oklahoma, USA",
      description: "Often mistaken for a dinosaur, Dimetrodon was actually a synapsid (a proto-mammal stem relative). Its colossal neural spine sail allowed rapid thermal absorption at dawn before its reptilian prey could warm up.",
      unique_adaptations: JSON.stringify(["Giant vascularized thermal sail for rapid morning warm-up", "Heterodont dentition (two distinct tooth types: shearing canines & tearing incisors)", "Sprawling heavy quadrupedal gait"]),
      extinction_event: "Climatic shifts and competitive displacement during the Mid-Permian faunal turnover.",
      image_url: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Reptilian-mammalian hybrid hiss and throat clicks",
      threat_tier: "Paleozoic Apex"
    },
    {
      id: "arthropleura",
      name: "Arthropleura",
      scientific_name: "Arthropleura armata",
      realm: "land",
      geological_era: "Paleozoic",
      period: "Carboniferous",
      mya_start: 345,
      mya_end: 295,
      diet: "Detritivore & Herbivore",
      length_m: 2.6,
      weight_kg: 50,
      bite_force_n: 800,
      wingspan_m: null,
      fossil_locations: "Northumberland, UK; Saxony, Germany; Ohio, USA",
      description: "The largest known terrestrial invertebrate in Earth's history. This car-sized millipede relative thrived during the Carboniferous when atmospheric oxygen levels reached an astounding 35%.",
      unique_adaptations: JSON.stringify(["Tracheal respiratory network powered by extreme oxygen-dense atmosphere", "30-segmented chitinous sclerite carapace", "Dozens of articulated traction legs preventing sinking in swamp mud"]),
      extinction_event: "Carboniferous Rainforest Collapse: drop in atmospheric oxygen and rapid drying of equatorial peat swamps.",
      image_url: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Chitinous skittering and low atmospheric vibrations",
      threat_tier: "Swamp Behemoth"
    },
    {
      id: "titanoboa",
      name: "Titanoboa",
      scientific_name: "Titanoboa cerrejonensis",
      realm: "land",
      geological_era: "Cenozoic",
      period: "Paleocene",
      mya_start: 60,
      mya_end: 58,
      diet: "Hyper-Carnivore & Fish",
      length_m: 13.0,
      weight_kg: 1135,
      bite_force_n: 14000,
      wingspan_m: null,
      fossil_locations: "Cerrejón Coal Mine, La Guajira, Colombia",
      description: "Slithering through hot, dense tropical rainforests that arose after the dinosaur extinction, Titanoboa was thick as a human torso and could constrict prey with the force of three Empire State Buildings.",
      unique_adaptations: JSON.stringify(["Unfused cranial bones swallowing giant crocodilians whole", "Gigantism enabled by hyperthermal Paleocene equatorial temperatures (32°C)", "Tremendous muscular constriction mass"]),
      extinction_event: "Global cooling following the Paleocene-Eocene thermal maximum reducing maximum attainable ectothermic body size.",
      image_url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Airway hiss resonating at 40–80 Hz with earth tremors",
      threat_tier: "Swamp Constrictor Apex"
    },

    // --- OCEAN (ABYSS) ---
    {
      id: "megalodon",
      name: "Megalodon",
      scientific_name: "Otodus megalodon",
      realm: "ocean",
      geological_era: "Cenozoic",
      period: "Miocene to Pliocene",
      mya_start: 23,
      mya_end: 3.6,
      diet: "Apex Marine Megapredator",
      length_m: 18.0,
      weight_kg: 60000,
      bite_force_n: 180000,
      wingspan_m: null,
      fossil_locations: "Cosmopolitan marine deposits: Calvert Cliffs, Maryland; Atacama, Chile; Cadiz, Spain",
      description: "The ultimate apex shark in oceanic history. Its jaws were lined with 276 serrated triangular teeth up to 18 cm tall, capable of crushing whale ribcages and severing swimming appendages in a single pass.",
      unique_adaptations: JSON.stringify(["Regional endothermy (warm-blooded swimming muscles)", "Enormous olfactory bulb detecting whale oils across oceans", "Broad serrated cutting teeth designed specifically for marine mammal bone and blubber"]),
      extinction_event: "Global oceanic cooling, collapse in coastal nursery grounds, and competition with emerging great white sharks and killer whales.",
      image_url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Low hydrodynamic cavitation pulse and sub-surface thrashing",
      threat_tier: "Abyssal Emperor"
    },
    {
      id: "mosasaurus",
      name: "Mosasaurus",
      scientific_name: "Mosasaurus hoffmannii",
      realm: "ocean",
      geological_era: "Mesozoic",
      period: "Late Cretaceous",
      mya_start: 82,
      mya_end: 66,
      diet: "Apex Marine Carnivore",
      length_m: 17.1,
      weight_kg: 14000,
      bite_force_n: 60000,
      wingspan_m: null,
      fossil_locations: "Maastricht, Netherlands; Morocco; Western Interior Seaway, North America",
      description: "A terrifying marine squamate (closely related to monitor lizards and snakes) that replaced ichthyosaurs and pliosaurs as the undisputed tyrant of the Late Cretaceous seas.",
      unique_adaptations: JSON.stringify(["Double-hinged jaw with pterygoid teeth in palate to prevent prey escape", "Hydrodynamic flippers and shark-like hypocercal tail fin", "Thick barrel-shaped ribcage and heavy protective dermal scales"]),
      extinction_event: "Total marine food web collapse triggered by the Chicxulub asteroid impact at the end of the Cretaceous.",
      image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Hydrophone resonance clicks and deep tail-stroke bellows",
      threat_tier: "Abyssal Leviathan"
    },
    {
      id: "dunkleosteus",
      name: "Dunkleosteus",
      scientific_name: "Dunkleosteus terrelli",
      realm: "ocean",
      geological_era: "Paleozoic",
      period: "Late Devonian",
      mya_start: 382,
      mya_end: 358,
      diet: "Armored Hypercarnivore",
      length_m: 8.8,
      weight_kg: 4000,
      bite_force_n: 5300,
      wingspan_m: null,
      fossil_locations: "Cleveland Shale, Ohio, USA; Morocco; Poland",
      description: "An armored placoderm terrorizing the Devonian oceans. Instead of real teeth, it possessed protruding self-sharpening dental shear plates formed directly from its cranial armor, closing with guillotine velocity.",
      unique_adaptations: JSON.stringify(["Kinetic four-bar jaw linkage snapping shut in 1/50th of a second", "Self-sharpening gnathal plates forming shear razor points", "Dermal bone cranial shield up to 5 cm thick protecting braincase"]),
      extinction_event: "Late Devonian Hangenberg / Kellwasser mass extinction events decimating shallow-water placoderm ecosystems.",
      image_url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Metallic gnashing of bone plates resounding through dark water",
      threat_tier: "Armored Guillotine"
    },
    {
      id: "anomalocaris",
      name: "Anomalocaris",
      scientific_name: "Anomalocaris canadensis",
      realm: "ocean",
      geological_era: "Paleozoic",
      period: "Cambrian",
      mya_start: 518,
      mya_end: 497,
      diet: "Earth's First Apex Predator",
      length_m: 1.0,
      weight_kg: 5,
      bite_force_n: 300,
      wingspan_m: null,
      fossil_locations: "Burgess Shale, British Columbia, Canada; Chengjiang, China",
      description: "During the Cambrian Explosion when most animal life was only millimeters long, Anomalocaris was a gargantuan one-meter horror equipped with complex compound eyes containing 16,000 lenses and spiked frontal appendages.",
      unique_adaptations: JSON.stringify(["16,000-lens compound eyes offering exceptional visual acuity in primordial sunlight", "Segmented body flaps generating rippling underwater flight", "Radially arranged circular mouth lined with tooth-like serrations"]),
      extinction_event: "Gradual extinction at the end of the Cambrian as newer cephalopod and eurypterid predators evolved.",
      image_url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Silent undulating aquatic ripples",
      threat_tier: "Primordial Pioneer"
    },
    {
      id: "liopleurodon",
      name: "Liopleurodon",
      scientific_name: "Liopleurodon ferox",
      realm: "ocean",
      geological_era: "Mesozoic",
      period: "Middle to Late Jurassic",
      mya_start: 166,
      mya_end: 155,
      diet: "Ambush Pelagic Predator",
      length_m: 7.0,
      weight_kg: 3500,
      bite_force_n: 25000,
      wingspan_m: null,
      fossil_locations: "Oxford Clay, England; Calvados, France; Germany",
      description: "A short-necked pliosaur that ruled European epicontinental seas. With four gigantic hydrofoil flippers, it possessed explosive burst acceleration to ambush ammonites, ichthyosaurs, and giant sharks from the ocean deeps.",
      unique_adaptations: JSON.stringify(["Stereoscopic directional olfaction smelling chemical scents through dual nostrils in water", "Four-flipper synchronized rowing gait granting sudden vertical lunges", "Elongated interlocking canine-like fangs"]),
      extinction_event: "Late Jurassic turnover where pliosaurids were superseded by emerging mosasaurs and advanced polycotylids.",
      image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Whale-like sonar clicks combined with predatory cavitation snaps",
      threat_tier: "Pelagic Stalker"
    },

    // --- AIR (AETHER) ---
    {
      id: "quetzalcoatlus",
      name: "Quetzalcoatlus",
      scientific_name: "Quetzalcoatlus northropi",
      realm: "air",
      geological_era: "Mesozoic",
      period: "Late Cretaceous",
      mya_start: 68,
      mya_end: 66,
      diet: "Terrestrial & Aerial Stalker",
      length_m: 4.8,
      weight_kg: 250,
      bite_force_n: 2800,
      wingspan_m: 11.0,
      fossil_locations: "Javelina Formation, Big Bend National Park, Texas, USA",
      description: "Named after the Aztec feathered serpent god, this azhdarchid pterosaur stood as tall as a giraffe on the ground and possessed a wingspan rivaling a fighter jet, soaring effortlessly on thermal updrafts across continents.",
      unique_adaptations: JSON.stringify(["Quadrupedal launch mechanism vaulting 250 kg into air with forelimb muscles", "Internal honeycomb bone trabeculae providing extreme structural stiffness at featherweight density", "Toothless spear-like beak snapping up juvenile dinosaurs while stalking dry inland plains"]),
      extinction_event: "The K-Pg meteor impact and the complete collapse of large-bodied pterosaur lineages.",
      image_url: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Wind shear wing-thrumming and hollow bill-clattering",
      threat_tier: "Aether Titan"
    },
    {
      id: "meganeura",
      name: "Meganeura",
      scientific_name: "Meganeura monyi",
      realm: "air",
      geological_era: "Paleozoic",
      period: "Late Carboniferous",
      mya_start: 305,
      mya_end: 299,
      diet: "Aerial Insectivore & Small Amphibians",
      length_m: 0.45,
      weight_kg: 0.75,
      bite_force_n: 150,
      wingspan_m: 0.75,
      fossil_locations: "Commentry Coal Measures, Allier, France; Bolsover, UK",
      description: "A predatory griffinflay related to dragonflies with a wingspan the size of a modern hawk. It ruled the hot, humid skies of the Carboniferous coal forests, snatching flying insects and primitive amphibians from treetops.",
      unique_adaptations: JSON.stringify(["Hyper-efficient passive spiracle tracheae operating under 35% atmospheric oxygen", "Spiny prehensile legs forming an aerial capture basket", "Multi-thousand-facet ommatidia visual sensors tracking high-speed targets"]),
      extinction_event: "Carboniferous swamp drying and drop in atmospheric oxygen preventing diffusion into oversized insect bodies.",
      image_url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Deep mechanical droning wing-buzz audible through dense fern forests",
      threat_tier: "Sky Hunter"
    },
    {
      id: "argentavis",
      name: "Argentavis",
      scientific_name: "Argentavis magnificens",
      realm: "air",
      geological_era: "Cenozoic",
      period: "Late Miocene",
      mya_start: 9,
      mya_end: 6.8,
      diet: "Scavenger & Apex Glider",
      length_m: 3.5,
      weight_kg: 72,
      bite_force_n: 1200,
      wingspan_m: 7.0,
      fossil_locations: "Salinas Grandes de Hidalgo & Andalhuala Formations, Argentina",
      description: "The 'Magnificent Argentine Bird' was one of the largest flying birds to ever spread its wings, riding warm Andean thermals like a motorized glider and surveying the vast South American pampas for prey.",
      unique_adaptations: JSON.stringify(["Dynamic thermal soaring: could travel 300+ km a day barely flapping its wings", "Massive hooked beak swallowing mammals the size of sheep whole", "Enormous pectoral girdle anchoring heavy gliding flight muscles"]),
      extinction_event: "Climatic cooling and vegetation shifts in the Pliocene reducing thermal wind velocity and prey density.",
      image_url: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Resonant raptorial screech and wind draft cavitation",
      threat_tier: "Aether Scavenger Sovereign"
    },
    {
      id: "pteranodon",
      name: "Pteranodon",
      scientific_name: "Pteranodon longiceps",
      realm: "air",
      geological_era: "Mesozoic",
      period: "Late Cretaceous",
      mya_start: 86,
      mya_end: 84.5,
      diet: "Pelagic Piscivore",
      length_m: 2.2,
      weight_kg: 35,
      bite_force_n: 600,
      wingspan_m: 6.5,
      fossil_locations: "Niobrara Chalk Formation, Kansas, USA",
      description: "The classic crested flyer of the Western Interior Seaway. Sporting a cranial crest that acted as an aerodynamic rudder and counterweight, Pteranodon skimmed ocean waves for ancient herring and squid.",
      unique_adaptations: JSON.stringify(["Dynamic soaring wing aspect ratio matching modern albatrosses", "Toothless aerodynamic keratinous bill dipping into surface water at high speed", "Hollow, pneumatic cranial crest providing directional stability"]),
      extinction_event: "Environmental sea level changes and eventual K-Pg boundary extinction.",
      image_url: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "High-pitch pelagic cry and crest whistle during dives",
      threat_tier: "Oceanic Glider"
    },
    {
      id: "archaeopteryx",
      name: "Archaeopteryx",
      scientific_name: "Archaeopteryx lithographica",
      realm: "air",
      geological_era: "Mesozoic",
      period: "Late Jurassic",
      mya_start: 150.8,
      mya_end: 148.5,
      diet: "Insectivore & Small Reptiles",
      length_m: 0.5,
      weight_kg: 0.8,
      bite_force_n: 120,
      wingspan_m: 0.5,
      fossil_locations: "Solnhofen Limestone, Bavaria, Germany",
      description: "The seminal transitional fossil bridging non-avian theropod dinosaurs and modern birds. It possessed asymmetrical flight feathers, clawed wing fingers, a long bony tail, and jaws lined with tiny dinosaurian teeth.",
      unique_adaptations: JSON.stringify(["Asymmetrical pennaceous flight feathers identical to modern birds", "Retained theropod dinosaurian features: bony tail, teeth, and hyperextensible killing claw", "Arboreal launch capabilities"]),
      extinction_event: "Naturally replaced as derived avians with pygostyles and keeled breastbones evolved during the Cretaceous.",
      image_url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      sound_frequency: "Chirping reptile-bird hybrid whistle",
      threat_tier: "Primordial Ancestor"
    }
  ];

  const insertMany = db.transaction((list) => {
    for (const c of list) {
      insert.run(c);
    }
  });

  insertMany(creatures);
  console.log(`Successfully seeded ${creatures.length} primordial creatures!`);
}

module.exports = { db, initDb };
