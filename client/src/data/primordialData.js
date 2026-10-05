export const SCENERIES = {
  land: {
    id: "land",
    name: "Terra Primordia",
    subtitle: "Pangaean Calderas & Mesozoic Floodplains",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=90", // Dramatic ancient volcanic valley & mist
    alternateMoods: [
      {
        name: "Primeval Dawn",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=90",
        desc: "Morning mist rising from geothermal fissures across fern-carpeted basalt rifts.",
        atmosphere: "O₂: 32% • Temp: 26°C • Barometer: 1040 hPa"
      },
      {
        name: "Volcanic Ashfront",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",
        desc: "Jagged tectonic ridges bathed in smoldering amber twilight and volcanic plume fallout.",
        atmosphere: "O₂: 24% • Temp: 34°C • Particulates: High"
      },
      {
        name: "Equatorial Rainforest",
        image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=2400&q=90",
        desc: "Towering prehistoric conifer and giant tree-fern canopies dripping in equatorial moisture.",
        atmosphere: "O₂: 35% • Humidity: 98% • Temp: 30°C"
      }
    ],
    hotspots: [
      { id: "hotspot-1", title: "Hell Creek Floodplain", x: 28, y: 55, creatureId: "tyrannosaurus-rex", creatureName: "T-Rex Territory", icon: "🌋" },
      { id: "hotspot-2", title: "Bahariya Mangrove Delta", x: 65, y: 70, creatureId: "spinosaurus", creatureName: "Spinosaurus River", icon: "🐊" },
      { id: "hotspot-3", title: "Morrison High Canopy", x: 80, y: 40, creatureId: "brachiosaurus", creatureName: "Brachiosaurus Browse", icon: "🦕" },
      { id: "hotspot-4", title: "Carboniferous Peat Swamp", x: 45, y: 82, creatureId: "arthropleura", creatureName: "Arthropleura Floor", icon: "🌿" }
    ]
  },
  ocean: {
    id: "ocean",
    name: "The Abyssal Tethys",
    subtitle: "Prehistoric Ocean Trenches & Pelagic Megafauna",
    heroImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2400&q=90", // Vast deep blue sunbeams underwater
    alternateMoods: [
      {
        name: "Pelagic Sunbeams",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2400&q=90",
        desc: "God-rays piercing through 500 meters of pristine prehistoric ocean water.",
        atmosphere: "Depth: -250m • Salinity: 36 PSU • Temp: 19°C"
      },
      {
        name: "Abyssal Trench",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2400&q=90",
        desc: "Pitch-black bathypelagic zone illuminated only by drifting bioluminescent plankton.",
        atmosphere: "Depth: -2,400m • Pressure: 240 atm • Temp: 2°C"
      },
      {
        name: "Devonian Armored Reef",
        image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=2400&q=90",
        desc: "Ancient stromatolite mounds and rugose coral fields hunting grounds.",
        atmosphere: "Depth: -45m • Visibility: 60m • Temp: 24°C"
      }
    ],
    hotspots: [
      { id: "hotspot-5", title: "Cenomanian Open Pelagic", x: 35, y: 48, creatureId: "megalodon", creatureName: "Megalodon Patrol", icon: "🦈" },
      { id: "hotspot-6", title: "Maastrichtian Seaway", x: 70, y: 62, creatureId: "mosasaurus", creatureName: "Mosasaurus Hunt", icon: "🌊" },
      { id: "hotspot-7", title: "Devonian Shallows", x: 20, y: 75, creatureId: "dunkleosteus", creatureName: "Dunkleosteus Reef", icon: "⚔️" },
      { id: "hotspot-8", title: "Burgess Shale Seafloor", x: 82, y: 80, creatureId: "anomalocaris", creatureName: "Cambrian Cradle", icon: "👁️" }
    ]
  },
  air: {
    id: "air",
    name: "The Ancient Stratosphere",
    subtitle: "High-Altitude Cloudscapes & Prehistoric Thermal Drafts",
    heroImage: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=2400&q=90", // Vast cloudscape & mountain tops
    alternateMoods: [
      {
        name: "Stratospheric Sunset",
        image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=2400&q=90",
        desc: "Endless golden cloud sea sweeping over jagged volcanic peaks at 6,000 meters.",
        atmosphere: "Altitude: 4,500m • Thermal Updraft: +14 m/s • Temp: -8°C"
      },
      {
        name: "Cretaceous Tempest",
        image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=2400&q=90",
        desc: "Supercell storm front churning with violet static electric currents.",
        atmosphere: "Altitude: 2,800m • Wind Speed: 120 km/h • Humidity: 100%"
      },
      {
        name: "Limestone Thermal Escarpment",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",
        desc: "Sheer coastal sea cliffs catching marine onshore winds for effortless soaring.",
        atmosphere: "Altitude: 850m • Laminar Flow: Constant • Temp: 22°C"
      }
    ],
    hotspots: [
      { id: "hotspot-9", title: "Javelina Thermal Corridor", x: 30, y: 35, creatureId: "quetzalcoatlus", creatureName: "Quetzalcoatlus Soar", icon: "🪽" },
      { id: "hotspot-10", title: "Carboniferous Canopy Skies", x: 50, y: 65, creatureId: "meganeura", creatureName: "Meganeura Patrol", icon: "🦗" },
      { id: "hotspot-11", title: "Andean Glider Pass", x: 75, y: 40, creatureId: "argentavis", creatureName: "Argentavis Horizon", icon: "🦅" },
      { id: "hotspot-12", title: "Niobrara Chalk Coast", x: 85, y: 60, creatureId: "pteranodon", creatureName: "Pteranodon Dive", icon: "🌊" }
    ]
  }
};

export const INITIAL_CREATURES = [
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
    unique_adaptations: ["Bone-splintering conical teeth", "Binocular stereoscopic vision", "Septate olfactory bulbs detecting scents over miles", "Massive kinetic skull absorbing tons of impact"],
    extinction_event: "Wiped out by the Chicxulub asteroid impact (Cretaceous-Paleogene extinction) 66 million years ago.",
    image_url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Dense Cretaceous floodplain with giant redwoods and meandering swamp rivers",
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
    unique_adaptations: ["Dense, osteosclerotic bones for aquatic diving ballast", "Fin-like caudal tail for propulsion", "Sensory neurovascular pits in snout", "Giant neural spine sail for thermoregulation"],
    extinction_event: "Severe regional drought and sea-level transgression drying out North Africa's primordial river systems.",
    image_url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Broad tidal river systems and sprawling mangrove deltas under North African sun",
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
    unique_adaptations: ["Pneumatic cervical vertebrae with hollow air sacs", "High-pressure cardiac system pumping 12m vertical", "Chisel teeth for stripping conifer needles"],
    extinction_event: "Environmental transitions at the close of the Jurassic favoring titanosaur lineages.",
    image_url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Semi-arid floodplains with lush conifer and ginkgo river corridors",
    threat_tier: "Continental Titan"
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
    unique_adaptations: ["Tracheal respiratory network powered by extreme oxygen-dense air", "30-segmented armored chitin carapace", "Dozens of articulated traction legs"],
    extinction_event: "Carboniferous Rainforest Collapse: drop in atmospheric oxygen and drying of peat swamps.",
    image_url: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Giant club moss forests and perpetual equatorial peat bogs",
    threat_tier: "Swamp Behemoth"
  },
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
    fossil_locations: "Calvert Cliffs, Maryland; Atacama, Chile; Cadiz, Spain",
    description: "The ultimate apex shark in oceanic history. Its jaws were lined with 276 serrated triangular teeth up to 18 cm tall, capable of crushing whale ribcages and severing swimming appendages in a single pass.",
    unique_adaptations: ["Regional endothermy (warm-blooded swimming muscles)", "Enormous olfactory bulb detecting whale oils across oceans", "Massive serrated cutting teeth"],
    extinction_event: "Global oceanic cooling, collapse in coastal nursery grounds, and competition with emerging great white sharks.",
    image_url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Warm cosmopolitan epicontinental seas and open oceanic whale migratory lanes",
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
    unique_adaptations: ["Double-hinged jaw with pterygoid throat teeth", "Hydrodynamic flippers with crescent tail fin", "Heavy protective dermal scales"],
    extinction_event: "Total marine food web collapse triggered by the Chicxulub asteroid impact at the end of the Cretaceous.",
    image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Warm, shallow epicontinental seas teeming with ammonites and giant sea turtles",
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
    unique_adaptations: ["Kinetic four-bar jaw linkage snapping shut in 1/50th of a second", "Self-sharpening gnathal bone plates", "Solid dermal armor shield up to 5 cm thick"],
    extinction_event: "Late Devonian Hangenberg / Kellwasser mass extinction events decimating placoderm ecosystems.",
    image_url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Shallow, oxygen-variable Devonian coastal shelves and stromatolite reefs",
    threat_tier: "Armored Guillotine"
  },
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
    unique_adaptations: ["Quadrupedal launch vaulting 250 kg into flight", "Internal honeycomb bone trabeculae", "Toothless spear bill snapping prey on land"],
    extinction_event: "The K-Pg meteor impact and the complete collapse of large-bodied pterosaur lineages.",
    image_url: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Semi-arid inland basins, open floodplains, and high thermal corridors",
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
    unique_adaptations: ["Passive spiracle tracheae operating under 35% atmospheric oxygen", "Spiny prehensile legs forming an aerial capture basket", "Multi-thousand-facet ommatidia visual sensors"],
    extinction_event: "Carboniferous swamp drying and drop in atmospheric oxygen preventing diffusion into oversized insect bodies.",
    image_url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Dense tropical fern canopies and warm mist-covered freshwater lakes",
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
    unique_adaptations: ["Dynamic thermal soaring travelling 300+ km daily", "Hooked predatory bill swallowing mammals whole", "Massive pectoral girdle for thermal stability"],
    extinction_event: "Pliocene climatic cooling and vegetation shifts reducing thermal updrafts.",
    image_url: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80",
    habitat_scenery: "Wind-swept Andean foothills, rocky crags, and open semi-arid scrublands",
    threat_tier: "Aether Sovereign"
  }
];
