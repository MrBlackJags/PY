// Extinct Animals Database
const extinctAnimals = [
  {
    id: "mammoth",
    name: "Woolly Mammoth",
    scientificName: "Mammuthus primigenius",
    era: "ice-age",
    eraLabel: "Ice Age (Pleistocene)",
    extinctDate: "c. 2000 BCE (Wrangel Island)",
    habitat: "Mammoth Steppe (Arctic & Subarctic)",
    diet: "Herbivore (Grasses, sedges, mosses)",
    heightWeight: "3.4m tall / up to 6 metric tons",
    causes: "Abrupt climate warming altering vegetation, exacerbated by human hunting.",
    snippet: "Equipped with curved tusks up to 4 meters long and thick shaggy coats, these iconic giants roamed cold northern tundras.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    funFact: "A small isolated population survived on Wrangel Island off the Siberian coast until roughly 4,000 years ago—meaning mammoths were still alive while the Great Pyramids were being built!",
    lesson: "Demonstrates how environmental shifts combined with apex predator pressure (humans) can collapse even massive, resilient species."
  },
  {
    id: "dodo",
    name: "Dodo",
    scientificName: "Raphus cucullatus",
    era: "historical",
    eraLabel: "Historical (17th Century)",
    extinctDate: "c. 1662",
    habitat: "Mauritius (Indian Ocean)",
    diet: "Frugivore (Fallen fruit, seeds, nuts)",
    heightWeight: "1m tall / ~15–20 kg",
    causes: "Introduction of invasive animals (pigs, dogs, rats, monkeys) that raided ground nests, plus human habitat disruption.",
    snippet: "A flightless bird endemic to Mauritius that evolved without natural terrestrial predators, making it curiously fearless of humans.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    funFact: "The dodo's closest living relative is the vibrant Nicobar pigeon, a brightly colored bird found on coastal islands in Southeast Asia.",
    lesson: "The primary symbol of anthropogenic extinction; showed the devastating vulnerability of isolated island species to invasive fauna."
  },
  {
    id: "thylacine",
    name: "Tasmanian Tiger",
    scientificName: "Thylacinus cynocephalus",
    era: "modern",
    eraLabel: "Modern Era (20th Century)",
    extinctDate: "September 7, 1936",
    habitat: "Tasmania, Australia, & New Guinea",
    diet: "Carnivore (Wallabies, birds, small mammals)",
    heightWeight: "60cm tall / ~15–30 kg",
    causes: "Intense government-sponsored bounty hunting, habitat encroachment, wild dogs, and epidemic disease.",
    snippet: "The largest modern carnivorous marsupial, recognizable by dark transverse stripes across its lower back and a jaw opening up to 80 degrees.",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
    funFact: "Both male and female thylacines had pouches! The male pouch protected reproductive organs when running through dense brush.",
    lesson: "Illustrates the danger of misinformation: farmers wrongly blamed them for widespread sheep killings, triggering catastrophic eradication campaigns."
  },
  {
    id: "smilodon",
    name: "Sabre-toothed Cat",
    scientificName: "Smilodon fatalis",
    era: "ice-age",
    eraLabel: "Ice Age (Pleistocene)",
    extinctDate: "c. 10,000 BCE",
    habitat: "Grasslands & pine forests across the Americas",
    diet: "Carnivore (Megafauna like bison, ground sloths, young mammoths)",
    heightWeight: "1.2m at shoulder / up to 280 kg",
    causes: "Extinction of large herbivore prey at the end of the last glacial period, combined with competing human predators.",
    snippet: "Possessed enormous canine teeth up to 28 cm long, adapted to ambush prey and deliver fatal throat lacerations.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
    funFact: "Despite popular belief, Smilodon was not closely related to modern tigers—it belonged to an entirely separate, extinct feline subfamily (Machairodontinae).",
    lesson: "Hyper-specialized apex predators are especially vulnerable to cascading collapse when their specialized prey disappears."
  },
  {
    id: "passenger-pigeon",
    name: "Passenger Pigeon",
    scientificName: "Ectopistes migratorius",
    era: "modern",
    eraLabel: "Modern Era (20th Century)",
    extinctDate: "September 1, 1914",
    habitat: "Deciduous forests of eastern North America",
    diet: "Granivore (Acorns, beechnuts, chestnuts, berries)",
    heightWeight: "40cm long / ~340 g",
    causes: "Uncontrolled commercial slaughter enabled by railroads and telegraphs, coupled with vast forest clearing.",
    snippet: "Once the most abundant bird in North America, with single migratory flocks numbering in the billions that darkened the skies for days.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    funFact: "The last surviving individual, named Martha, passed away at the Cincinnati Zoo on September 1, 1914, marking an exact known extinction moment.",
    lesson: "Even an organism with staggering billions of individuals can be completely wiped out in decades without sustainable wildlife regulation."
  },
  {
    id: "quagga",
    name: "Quagga",
    scientificName: "Equus quagga quagga",
    era: "modern",
    eraLabel: "Modern Era (19th Century)",
    extinctDate: "August 12, 1883",
    habitat: "Arid Karoo and grasslands of South Africa",
    diet: "Herbivore (Native grasses)",
    heightWeight: "1.3m tall / ~250 kg",
    causes: "Relentless overhunting by settlers for meat and leather, and competition with domestic livestock.",
    snippet: "A unique zebra subspecies distinguished by zebra stripes covering only the head and neck, fading into solid chestnut brown on the rear.",
    image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=800&q=80",
    funFact: "The Quagga was the first extinct animal whose DNA was analyzed in a lab (in 1984), confirming it was a variant of the plains zebra.",
    lesson: "Led to modern selective breeding programs (the Quagga Project) attempting to revive its distinct coat pattern from plains zebra populations."
  },
  {
    id: "irish-elk",
    name: "Irish Elk / Giant Deer",
    scientificName: "Megaloceros giganteus",
    era: "ice-age",
    eraLabel: "Ice Age (Late Pleistocene)",
    extinctDate: "c. 5,700 BCE",
    habitat: "Open woodlands & parklands across Eurasia",
    diet: "Herbivore (Grasses, willow, birch leaves)",
    heightWeight: "2.1m at shoulder / up to 700 kg",
    causes: "Rapid changes in plant composition during post-glacial warming, reducing mineral availability needed to grow giant antlers.",
    snippet: "Famous for possessing the largest antlers of any known deer species, spanning up to 3.65 meters (12 feet) from tip to tip.",
    image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
    funFact: "Despite its popular name, it was neither exclusively Irish nor strictly an elk; it was widespread across Europe and Asia and closely related to fallow deer.",
    lesson: "High sexual selection traits (gigantic antlers requiring intense calcium intake) can turn into fatal handicaps when resource ecosystems change."
  },
  {
    id: "great-auk",
    name: "Great Auk",
    scientificName: "Pinguinus impennis",
    era: "modern",
    eraLabel: "Modern Era (19th Century)",
    extinctDate: "c. 1844",
    habitat: "Rocky, remote North Atlantic islands and cold waters",
    diet: "Piscivore (Fish, crustaceans)",
    heightWeight: "75–85cm tall / ~5 kg",
    causes: "Intense hunting for their down feathers, meat, fishing bait, and ultimately by museum collectors when they became rare.",
    snippet: "A large, flightless alcid dubbed the 'original penguin' due to its sleek black-and-white plumage and agile swimming prowess.",
    image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80",
    funFact: "The scientific genus name *Pinguinus* originally belonged to the Great Auk before being applied to the unrelated penguins of the southern hemisphere!",
    lesson: "Rarity can dangerously increase commercial and collector value, speeding up the final demise of dwindling species."
  },
  {
    id: "sea-cow",
    name: "Steller's Sea Cow",
    scientificName: "Hydrodamalis gigas",
    era: "historical",
    eraLabel: "Historical (18th Century)",
    extinctDate: "c. 1768",
    habitat: "Shallow subpolar waters around the Commander Islands",
    diet: "Herbivore (Extensive kelp canopies)",
    heightWeight: "Up to 9m long / 8–10 metric tons",
    causes: "Hunted by Russian fur hunters for meat, fat, and hides within just 27 years of being discovered by science.",
    snippet: "A docile, gigantic sirenian (relative of the dugong and manatee) that grazed peacefully on underwater kelp forests in the icy North Pacific.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    funFact: "Naturalist Georg Wilhelm Steller was shipwrecked on Bering Island in 1741 and was the only trained scientist ever to observe a living sea cow.",
    lesson: "Highlights how modern industrial navigation and trade routes can eliminate large, slow-reproducing animals almost instantaneously."
  }
];

// Explorer & Filtering Logic
function renderAnimals(items) {
  const container = document.getElementById("animalsGrid");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <h3>No animals found</h3>
        <p style="margin-top: 0.5rem;">Try adjusting your search query or era filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(animal => `
    <article class="card" onclick="openDossier('${animal.id}')" tabindex="0" role="button" aria-label="View details for ${animal.name}">
      <div class="card-image-wrap">
        <img class="card-image" src="${animal.image}" alt="${animal.name}" loading="lazy" />
        <span class="card-badge">${animal.eraLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${animal.name}</h3>
        <p class="card-scientific">${animal.scientificName}</p>
        <p class="card-snippet">${animal.snippet}</p>
        <div class="card-meta">
          <span class="card-meta-tag">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
            ${animal.extinctDate}
          </span>
          <span class="learn-more-btn">
            Explore &rarr;
          </span>
        </div>
      </div>
    </article>
  `).join("");
}

// Modal Dossier Logic
function openDossier(animalId) {
  const animal = extinctAnimals.find(a => a.id === animalId);
  if (!animal) return;

  const modal = document.getElementById("dossierModal");
  if (!modal) return;

  document.getElementById("modalImg").src = animal.image;
  document.getElementById("modalImg").alt = animal.name;
  document.getElementById("modalTitle").textContent = animal.name;
  document.getElementById("modalScientific").textContent = animal.scientificName;
  document.getElementById("modalExtinct").textContent = animal.extinctDate;
  document.getElementById("modalHabitat").textContent = animal.habitat;
  document.getElementById("modalDiet").textContent = animal.diet;
  document.getElementById("modalSize").textContent = animal.heightWeight;
  document.getElementById("modalCauses").textContent = animal.causes;
  document.getElementById("modalFact").textContent = animal.funFact;
  document.getElementById("modalLesson").textContent = animal.lesson;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDossier() {
  const modal = document.getElementById("dossierModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Initialize Explorer Page Events
function initExplorer() {
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let currentCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    const filtered = extinctAnimals.filter(animal => {
      const matchesCategory = currentCategory === "all" || animal.era === currentCategory;
      const matchesSearch = 
        animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.habitat.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.diet.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    renderAnimals(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      applyFilters();
    });
  });

  // Render initial list
  renderAnimals(extinctAnimals);

  // Close modal on click outside or ESC
  const modal = document.getElementById("dossierModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeDossier();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDossier();
  });
}

// Interactive Quiz System
const quizQuestions = [
  {
    question: "Where did the last known population of Woolly Mammoths survive until roughly 4,000 years ago?",
    options: [
      "Wrangel Island in the Arctic Ocean",
      "The Scottish Highlands",
      "Patagonia, South America",
      "Greenland Ice Sheet"
    ],
    answer: 0,
    explanation: "Isolated Woolly Mammoths survived on Wrangel Island until around 2000 BCE, coexisting in time with the building of the Egyptian Pyramids."
  },
  {
    question: "What was the primary driver that caused the flightless Dodo bird to vanish from Mauritius?",
    options: [
      "A massive volcanic eruption that covered the island",
      "Invasive predators (pigs, rats, monkeys) preying on ground nests",
      "Glacial freezing temperatures",
      "A poisonous fruit disease"
    ],
    answer: 1,
    explanation: "Because Dodos evolved without land predators, they nested on the bare ground. Introduced species like pigs, rats, and monkeys devastated their eggs and chicks."
  },
  {
    question: "The Tasmanian Tiger (Thylacine) was famous for which unique biological feature?",
    options: [
      "It was a true feline closely related to tigers",
      "Both males and females had a pouch",
      "It could glide between eucalyptus trees",
      "It laid eggs like a platypus"
    ],
    answer: 1,
    explanation: "The Thylacine was a carnivorous marsupial. Uniquely, both males and females possessed pouches (the male's pouch protected its anatomy during runs through thorny bush)."
  },
  {
    question: "Passenger Pigeons once numbered in the billions. What enabled humans to drive them extinct so rapidly?",
    options: [
      "Industrialized commercial netting and hunting facilitated by railways and telegraphs",
      "A meteor impact in North America",
      "A genetic disease that stopped egg fertilization",
      "Competition from introduced European starlings"
    ],
    answer: 0,
    explanation: "Telegraph lines allowed hunters to track migrating roosts, and trains rapidly transported millions of killed pigeons to metropolitan meat markets, devastating their massive colonies."
  },
  {
    question: "Why was Steller's Sea Cow wiped out in just 27 years after its initial discovery in 1741?",
    options: [
      "Catastrophic warming of the Arctic Sea",
      "Intense hunting by fur traders for meat and blubber",
      "Sharks invading the Commander Islands",
      "A toxin in the giant kelp canopy"
    ],
    answer: 1,
    explanation: "Steller's Sea Cows were huge, slow, docile, and had no fear of humans. Russian fur sealers and whalers hunted them relentlessly for food until the last one vanished in 1768."
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuizQuestion() {
  const container = document.getElementById("quizContainer");
  if (!container) return;

  if (currentQuestionIndex >= quizQuestions.length) {
    // Show results
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <h2 style="font-family: var(--font-heading); font-size: 2rem; color: #fff; margin-bottom: 1rem;">Quiz Completed!</h2>
        <p style="font-size: 1.25rem; color: var(--accent-amber-light); font-weight: 700; margin-bottom: 1.5rem;">
          You scored ${score} out of ${quizQuestions.length}
        </p>
        <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 2rem;">
          ${score === quizQuestions.length ? "Incredible work! You are a master of paleo-conservation history." : "Great effort! Review the timeline and dossiers to learn even more about protecting modern biodiversity."}
        </p>
        <button class="next-btn" onclick="restartQuiz()">Try Again</button>
      </div>
    `;
    return;
  }

  const q = quizQuestions[currentQuestionIndex];
  container.innerHTML = `
    <div class="quiz-progress">
      <span>Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</span>
      <span>Score: ${score}</span>
    </div>
    <h3 class="quiz-question">${q.question}</h3>
    <div class="quiz-options">
      ${q.options.map((option, idx) => `
        <button class="quiz-btn" onclick="handleQuizAnswer(${idx})">${option}</button>
      `).join("")}
    </div>
    <div id="quizFeedback" class="quiz-feedback"></div>
    <div id="nextBtnWrap" style="display: none;">
      <button class="next-btn" onclick="nextQuizQuestion()">Next Question &rarr;</button>
    </div>
  `;
}

function handleQuizAnswer(selectedIndex) {
  const q = quizQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".quiz-btn");
  const feedback = document.getElementById("quizFeedback");
  const nextWrap = document.getElementById("nextBtnWrap");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === q.answer) {
    score++;
    feedback.className = "quiz-feedback show correct-feedback";
    feedback.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
  } else {
    feedback.className = "quiz-feedback show wrong-feedback";
    feedback.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
  }

  nextWrap.style.display = "block";
}

function nextQuizQuestion() {
  currentQuestionIndex++;
  loadQuizQuestion();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuizQuestion();
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  initExplorer();
  loadQuizQuestion();
});
