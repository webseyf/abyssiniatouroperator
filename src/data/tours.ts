export interface DayItinerary {
  day: number | string;
  title: string;
  description: string;
}

export interface Tour {
  id: number;
  slug: string;
  pillarId: number;
  pillarTitle: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  duration: string;
  durationDays: number;
  durationNights?: number;
  routing: string;
  featured: boolean;
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  destinations: string[];
  startingPoint: string;
  endingPoint: string;
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  price?: number;
  priceDisplay?: string;
  priceNote?: string;
  fitnessLevel: string;
  groupType: string;
  bestTimeToVisit: string;
}

export const tourPillars = [
  {
    id: 1,
    name: "Historic North & Cultural Heritage",
    subtitle: "Ancient Christian monoliths, 17th-century royal castles, and 3,000 years of civilization",
    slug: "historic-north"
  },
  {
    id: 2,
    name: "Extreme Adventure & Wilderness Treks",
    subtitle: "Active lava craters, tectonic salt flats, and 4,000m high-altitude escarpment treks",
    slug: "extreme-adventure"
  },
  {
    id: 3,
    name: "South Omo Valley Ethnographic Safaris",
    subtitle: "Respectful cultural immersion with native elders across isolated indigenous nations",
    slug: "omo-valley"
  },
  {
    id: 4,
    name: "Nature, Birdwatching & Coffee Origin",
    subtitle: "Wild Arabica rainforests, Rift Valley bird sanctuaries, and endemic African wildlife",
    slug: "nature-coffee"
  },
  {
    id: 5,
    name: "Grand Circuits & Day Tours",
    subtitle: "Definitive multi-week expeditions and curated same-day capital excursions",
    slug: "grand-circuits"
  }
];

export const allTours: Tour[] = [
  {
    id: 1,
    price: 2160,
    priceDisplay: "$2,160",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "8-day-historic-north-lalibela-unesco-circuit",
    pillarId: 1,
    pillarTitle: "Historic North & Cultural Heritage",
    title: "8-Day Historic North & Lalibela UNESCO Circuit",
    seoTitle: "8-Day Historic North Ethiopia & Lalibela Rock-Hewn Churches Tour",
    metaDescription: "Experience Lalibela monolithic churches, Gondar castles, Lake Tana monasteries, and Simien Mountains with a direct licensed Ethiopian DMC. Private 4x4 & flights.",
    category: "Cultural Heritage & UNESCO Monoliths",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    durationNights: 7,
    routing: "Addis Ababa ➔ Bahir Dar ➔ Gondar ➔ Simien Mountains ➔ Axum ➔ Lalibela ➔ Addis Ababa",
    featured: true,
    heroImage: "/images/tours/tour-1-lalibela-north.jpg",
    cardImage: "/images/tours/tour-1-lalibela-north.jpg",
    galleryImages: [
      "/images/tours/tour-1-lalibela-north.jpg",
      "/images/destinations/gondar-castles.jpg",
      "/images/destinations/lake-tana-monastery.jpg",
      "/images/destinations/simien-baboons.jpg"
    ],
    overview: "Journey across the legendary Northern Historical Circuit of Ethiopia. This flagship 8-day expedition weaves through Lake Tana's 14th-century island monasteries, the imperial stone castles of Gondar, the dramatic Afro-alpine peaks of the Simien Mountains, ancient Axumite stelae, and reaches its pinnacle at the breathtaking 12th-century monolithic rock-hewn churches of Lalibela.",
    highlights: [
      "Marvel at the monolithic rock-hewn cross of Biete Ghiorgis (Church of St. George) in Lalibela",
      "Explore the 17th-century Royal Enclosure (Fasil Ghebbi) and Bath of King Fasilides in Gondar",
      "Private boat cruise on Lake Tana to isolated 14th-century painted monasteries",
      "Gentle escarpment trek in Simien Mountains National Park observing wild Gelada baboon troops",
      "Visit the sacred Axumite Stelae Field and the Chapel of the Tablet (Ark of the Covenant)"
    ],
    destinations: ["Addis Ababa", "Bahir Dar", "Lake Tana", "Gondar", "Simien Mountains", "Axum", "Lalibela"],
    startingPoint: "Addis Ababa (Bole International Airport)",
    endingPoint: "Addis Ababa (Bole International Airport)",
    fitnessLevel: "Moderate (walking on uneven historic stone and gentle escarpment trails)",
    groupType: "Private FIT or Small B2B Group",
    bestTimeToVisit: "October to May (Dry High Season)",
    inclusions: [
      "All ground transportation in private air-conditioned Toyota 4x4 Land Cruisers",
      "Certified native English-speaking lead historical guide throughout",
      "Local site historian guides and scout fees at all national monuments and parks",
      "Private boat charter on Lake Tana with captain and safety gear",
      "Entrance fees to all UNESCO World Heritage sites, museums, and churches",
      "All accommodation on twin-share / double occupancy",
      "Airport arrival and departure transfers with private meet-and-greet",
      "Bottled mineral water cooler replenished daily onboard all vehicles"
    ],
    exclusions: [
      "Domestic and international flight tickets (can be ticketed directly upon request)",
      "Ethiopian entry e-Visa fees ($52 - $82 depending on nationality)",
      "Travel and medical evacuation insurance",
      "Discretionary tipping for lead guides, drivers, and local church deacons",
      "Personal expenses, alcoholic beverages, and souvenir purchases"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Addis Ababa & Flight to Bahir Dar",
        description: "Arrival at Bole International Airport in Addis Ababa. Meet-and-greet by our operations team. Embark on a brief morning city orientation including the National Museum of Ethiopia to view the 3.2-million-year-old hominid fossil 'Lucy' (Dinkinesh) and imperial memorabilia. Afternoon panoramic drive up Entoto Hills for city views before boarding your scheduled domestic flight to Bahir Dar on the southern shore of Lake Tana. Check-in to your lakeside hotel."
      },
      {
        day: 2,
        title: "Lake Tana Island Monasteries & Blue Nile Falls",
        description: "Morning private boat cruise across Lake Tana, source of the Blue Nile. Explore the lush Zege Peninsula to visit the 14th-century circular monastery of Ura Kidane Mehret, famed for its vivid biblical ceiling frescoes and ecclesiastical treasury. In the afternoon, scenic drive south to Tis Abay and hike across historic stone bridges to witness the Blue Nile Falls (Smoking Water). Return to Bahir Dar for sunset over the lake."
      },
      {
        day: 3,
        title: "Scenic Drive to Gondar & Imperial Castles Tour",
        description: "Scenic 3-hour morning drive north through fertile Amhara highlands to the imperial city of Gondar, the 'Camelot of Africa.' Tour the 17th-century UNESCO World Heritage Royal Enclosure (Fasil Ghebbi), including the castles of Emperor Fasilides, Iyasu I, and Empress Mentewab. Visit the historic Bath of King Fasilides, still used for annual Timkat celebrations, and admire the winged angel ceiling frescoes of Debre Berhan Selassie Church."
      },
      {
        day: 4,
        title: "Simien Mountains National Park Day Safari",
        description: "Early morning drive into Simien Mountains National Park, a UNESCO Natural World Heritage site. Embark on a gentle high-altitude nature trek from Buyit Ras along sheer 1,000-meter cliffs. Encounter large, habituated troops of endemic Gelada baboons grazing quietly on the Afro-alpine plateau, and scan the skies for soaring Lammergeier bearded vultures. Late afternoon return drive to Gondar for overnight."
      },
      {
        day: 5,
        title: "Flight to Ancient Axum & Stelae Field",
        description: "Morning domestic flight from Gondar to ancient Axum, the spiritual cradle of Ethiopian Orthodox Christianity and heart of the ancient Axumite Empire. Tour the Northern Stelae Field featuring massive single-block granite obelisks, the subterranean tombs of King Kaleb and Gebre Meskel, the archaeological museum, the Queen of Sheba's Reservoir (Mai Shum), and the sacred compound of St. Mary of Zion where the Ark of the Covenant is enshrined."
      },
      {
        day: 6,
        title: "Flight to Lalibela & Northwestern Churches Exploration",
        description: "Morning domestic flight over rugged mountain canyons to Lalibela (2,500m). Meet your specialist Lalibela historian guide. In the afternoon, begin exploring the UNESCO-protected Northwestern Group of monolithic churches, hand-carved directly out of red volcanic tuff in the 12th century. Marvel at Biete Medhane Alem (largest monolithic rock church in the world), Biete Maryam with its ancient carvings, and Biete Golgotha."
      },
      {
        day: 7,
        title: "Southeastern Churches & Iconic Church of St. George",
        description: "Full-day dedicated exploration of the Southeastern Church cluster, connected by intricate subterranean tunnels, trenches, and ceremonial footbridges: Biete Amanuel, Biete Merkorios, and Biete Gabriel-Rufael. In the afternoon, stand before the architectural zenith of Lalibela: Biete Ghiorgis (Church of St. George), carved entirely below ground level in the perfect shape of a Greek cross. Participate in a traditional Ethiopian coffee ceremony at dusk."
      },
      {
        day: 8,
        title: "Flight to Addis Ababa & Farewell Cultural Banquet",
        description: "Morning flight from Lalibela back to Addis Ababa. Private transfer to daytime hotel rooms or shopping in the Piazza gold market and artisan weaving quarters. In the evening, gather for an authentic farewell cultural banquet featuring Injera, traditional fasting and meat dishes, and live musical and folkloric dance performances celebrating Ethiopia's diverse ethnic nationalities. Late night transfer to Bole International Airport for international departures."
      }
    ]
  },
  {
    id: 2,
    price: 1340,
    priceDisplay: "$1,340",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "5-day-compact-lalibela-gondar-heritage",
    pillarId: 1,
    pillarTitle: "Historic North & Cultural Heritage",
    title: "5-Day Compact Lalibela & Gondar Heritage Highlights",
    seoTitle: "5-Day Compact Lalibela Churches & Gondar Castles Tour",
    metaDescription: "Express 5-day Ethiopia northern circuit tour. Visit UNESCO rock-carved churches in Lalibela and royal castles in Gondar with expert native guides.",
    category: "Heritage Express",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    routing: "Addis Ababa ➔ Gondar ➔ Lalibela ➔ Addis Ababa",
    featured: true,
    heroImage: "/images/destinations/gondar-castles.jpg",
    cardImage: "/images/destinations/gondar-castles.jpg",
    galleryImages: [
      "/images/destinations/gondar-castles.jpg",
      "/images/tours/tour-1-lalibela-north.jpg",
      "/images/destinations/lalibela-st-george.jpg"
    ],
    overview: "Designed for travelers with limited time who refuse to compromise on depth. This streamlined 5-day fly-in itinerary connects Ethiopia's two supreme UNESCO historical monuments: the medieval castle fortress of Gondar and the world-wonder rock-hewn monolithic churches of Lalibela.",
    highlights: [
      "Explore Emperor Fasilides' 17th-century stone palaces inside Gondar's Royal Enclosure",
      "Admire the legendary painted angel ceiling at Debre Berhan Selassie Church",
      "Complete guided exploration of both northern and southern Lalibela rock-cut church clusters",
      "Stand above and walk through the subterranean cruciform masterpiece of Biete Ghiorgis",
      "Sample authentic Ethiopian Tej (honey wine) and attend a native mountain village coffee ceremony"
    ],
    destinations: ["Addis Ababa", "Gondar", "Lalibela"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Light to Moderate",
    groupType: "Private FIT or Small Group",
    bestTimeToVisit: "Year-Round (Best Oct–May)",
    inclusions: [
      "All airport transfers and private ground transit in Toyota 4x4 or minivan",
      "Expert native English-speaking historian guides in Gondar and Lalibela",
      "All monument, church, and UNESCO heritage site entry permits",
      "4 nights hotel accommodation with daily breakfast",
      "Traditional coffee ceremony and authentic honey wine tasting",
      "Bottled mineral water during all tours"
    ],
    exclusions: [
      "Domestic airfares Addis-Gondar, Gondar-Lalibela, Lalibela-Addis",
      "International flights and Ethiopian e-Visa",
      "Gratuities and personal incidental expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly Addis Ababa to Gondar & Imperial Castles Tour",
        description: "Morning flight from Addis Ababa to Gondar. Direct transfer and check-in. Half-day guided exploration of the Fasil Ghebbi Royal Enclosure, Fasilides Bath, and the radiant 17th-century murals of Debre Berhan Selassie Church."
      },
      {
        day: 2,
        title: "Fly to Lalibela & Northern Church Cluster",
        description: "Morning scenic flight across rugged Lasta mountain gorges to Lalibela. Afternoon guided tour of the Northern Group of churches: Biete Medhane Alem, Biete Maryam, and Biete Meskel."
      },
      {
        day: 3,
        title: "Southern Churches, Biete Ghiorgis & Yemrehana Krestos Option",
        description: "Full day in Lalibela covering the Southern Group (Biete Amanuel, Biete Gabriel-Rufael) and the iconic cruciform Church of St. George. Optional morning excursion to the built-up marble cave church of Yemrehana Krestos."
      },
      {
        day: 4,
        title: "Lasta Mountain Cultural Walk & Traditional Evening",
        description: "Morning gentle cultural hike through traditional highland villages surrounding Lalibela. Visit a native home for freshly roasted coffee and a tasting of local Tej (fermented honey wine). Evening authentic dinner."
      },
      {
        day: 5,
        title: "Flight to Addis Ababa & Departure",
        description: "Morning flight back to Addis Ababa. Opportunity for afternoon artisan souvenir shopping in Merkato or Churchill Avenue before your international flight."
      }
    ]
  },
  {
    id: 3,
    price: 2510,
    priceDisplay: "$2,510",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "10-day-grand-historic-route-tigray-cliff-churches",
    pillarId: 1,
    pillarTitle: "Historic North & Cultural Heritage",
    title: "10-Day Grand Historic Route & Tigray Cliff Churches",
    seoTitle: "10-Day Grand Historic Route & Tigray Rock-Hewn Churches Tour",
    metaDescription: "Deep historical northern Ethiopia expedition covering Bahir Dar, Gondar, Simien Mountains, Axum, Tigray cliff churches, and Lalibela monoliths.",
    category: "Extended Northern Heritage",
    duration: "10 Days / 9 Nights",
    durationDays: 10,
    durationNights: 9,
    routing: "Addis Ababa ➔ Bahir Dar ➔ Gondar ➔ Simien Mountains ➔ Axum ➔ Gheralta (Tigray) ➔ Lalibela ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/tigray-gheralta.jpg",
    cardImage: "/images/destinations/tigray-gheralta.jpg",
    galleryImages: [
      "/images/destinations/tigray-gheralta.jpg",
      "/images/destinations/axum-stelae.jpg",
      "/images/tours/tour-1-lalibela-north.jpg",
      "/images/destinations/simien-baboons.jpg"
    ],
    overview: "The definitive grand northern expedition. In addition to Lake Tana, Gondar, Simiens, and Lalibela, this 10-day journey ventures deep into the sandstone pinnacles of Tigray's Gheralta mountains to reach rock-hewn cliff churches perched hundreds of meters above the desert floor.",
    highlights: [
      "Climb to the breathtaking cliff-face aerie of Abuna Yemata Guh or Maryam Korkor in Tigray",
      "Witness ancient Axumite monolithic obelisks and the legendary Ark of the Covenant sanctuary",
      "Cruise Lake Tana's medieval monastic islands and witness Blue Nile Falls",
      "Explore Gondar's 17th-century castles and trek with Gelada baboons in Simien Mountains",
      "Complete exploration of all 11 UNESCO rock-hewn churches of King Lalibela"
    ],
    destinations: ["Addis Ababa", "Bahir Dar", "Gondar", "Simien Mountains", "Axum", "Gheralta", "Lalibela"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Active (includes optional technical cliff climbing with safety ropes)",
    groupType: "Private FIT or Small Group",
    bestTimeToVisit: "October to April",
    inclusions: [
      "Private heavy-duty Toyota 4x4 Land Cruiser with expert mountain driver",
      "Lead historical guide and specialist Tigray climbing guides with harnesses",
      "All church, monastery, national park, and archaeological entrance permits",
      "9 nights quality hotel and mountain lodge accommodation",
      "Bottled mineral water throughout"
    ],
    exclusions: [
      "Flights and travel visa",
      "Personal climbing gloves or specialized personal gear",
      "Gratuities for guides, drivers, and local rope assistants"
    ],
    itinerary: [
      { day: 1, title: "Arrive Addis Ababa, museum tour, fly to Bahir Dar", description: "Arrive Addis Ababa, city museum tour with Lucy fossil, afternoon flight to Bahir Dar." },
      { day: 2, title: "Lake Tana boat tour and Blue Nile Falls hike", description: "Private boat tour to Zege Peninsula monasteries and afternoon hike to Blue Nile Falls." },
      { day: 3, title: "Drive to Gondar; tour royal castles and Fasilides pool", description: "Scenic drive to Gondar; explore the Royal Enclosure, Fasilides Bath, and Debre Berhan Selassie." },
      { day: 4, title: "Simien Mountains National Park excursion; spot Gelada baboons", description: "Day excursion to Buyit Ras in Simien Mountains; walk alongside peaceful troops of endemic Geladas." },
      { day: 5, title: "Drive through the dramatic Tekeze River gorge to ancient Axum", description: "Breathtaking overland crossing of the Tekeze River gorge arriving in the holy city of Axum." },
      { day: 6, title: "Explore Axumite archaeological sites and proceed to Gheralta Mountains", description: "Tour Axum stelae, Kaleb tombs, Queen of Sheba palace, then scenic drive to Hawzen/Gheralta." },
      { day: 7, title: "Guided rock-climbing hikes to Abuna Yemata Guh or Maryam Korkor", description: "Exhilarating ascent up sandstone cliffs to visit cliff-hewn churches with ancient parchment gospels." },
      { day: 8, title: "Drive from Gheralta to Lalibela via scenic mountain passes", description: "Full-day scenic overland crossing of high Lasta mountain passes reaching Lalibela by dusk." },
      { day: 9, title: "Comprehensive tour of all 11 Lalibela UNESCO church clusters", description: "In-depth guided immersion through Northern and Southern church clusters, ending at St. George." },
      { day: 10, title: "Fly to Addis Ababa for final sightseeing, cultural dinner, and departure", description: "Morning flight back to Addis Ababa; souvenir shopping, farewell cultural dinner, and airport transfer." }
    ]
  },
  {
    id: 4,
    price: 930,
    priceDisplay: "$930",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "3-day-lalibela-monolith-pilgrimage-express",
    pillarId: 1,
    pillarTitle: "Historic North & Cultural Heritage",
    title: "3-Day Lalibela Monolith Pilgrimage (Fly-In Express)",
    seoTitle: "3-Day Express Lalibela Rock-Hewn Churches Pilgrimage Tour",
    metaDescription: "Short 3-day fly-in Lalibela tour package. Explore all UNESCO rock-carved churches with private transfers and expert local historian guides.",
    category: "Pilgrimage Express",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    routing: "Addis Ababa ➔ Lalibela ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/lalibela-st-george.jpg",
    cardImage: "/images/destinations/lalibela-st-george.jpg",
    galleryImages: [
      "/images/destinations/lalibela-st-george.jpg",
      "/images/tours/tour-1-lalibela-north.jpg"
    ],
    overview: "The ideal weekend or short-transit pilgrimage for travelers wanting a focused encounter with the eighth wonder of the world. With direct daily domestic flights, experience the sacred heart of Ethiopian Christianity without unnecessary road travel.",
    highlights: [
      "Guided walk through all 11 monolithic and semi-monolithic churches",
      "Attend early morning liturgical chant service with orthodox priests",
      "Marvel at the cross-shaped church of St. George (Biete Ghiorgis)",
      "Visit the dramatic cave monastery of Ne'akuto Le'ab with its holy natural spring waters"
    ],
    destinations: ["Addis Ababa", "Lalibela"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate",
    groupType: "Private FIT",
    bestTimeToVisit: "Year-Round",
    inclusions: [
      "Airport transfers in Lalibela with private 4x4",
      "Expert local historian guide",
      "Comprehensive UNESCO church entrance passes",
      "2 nights accommodation with breakfast",
      "Bottled water during excursions"
    ],
    exclusions: [
      "Domestic air tickets (can be arranged on Ethiopian Airlines)",
      "Gratuities for guide, driver, and priest blessings"
    ],
    itinerary: [
      { day: 1, title: "Flight to Lalibela & Northwestern Church Group", description: "Morning flight from Addis Ababa to Lalibela. Immediate transfer to explore the Northwestern Church Group (Biete Medhane Alem, Biete Maryam, Biete Golgotha)." },
      { day: 2, title: "Southeastern Church Group & St. George (Biete Ghiorgis)", description: "Full day dedicated to the Southeastern Group and the masterpiece Church of St. George (Biete Ghiorgis), carved 12 meters into solid volcanic bedrock." },
      { day: 3, title: "Ne'akuto Le'ab Cave Monastery & Return Flight", description: "Morning visit to Ne'akuto Le'ab cave monastery built inside an overhanging cavern before airport transfer for return flight to Addis Ababa." }
    ]
  },
  {
    id: 5,
    price: 1500,
    priceDisplay: "$1,500",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "6-day-lake-tana-monasteries-source-of-nile",
    pillarId: 1,
    pillarTitle: "Historic North & Cultural Heritage",
    title: "6-Day Historic Monasteries & Lake Tana Source of the Nile",
    seoTitle: "6-Day Lake Tana Monasteries & Blue Nile Falls Nature Tour",
    metaDescription: "Tour Lake Tana island monasteries, Blue Nile Falls, Gondar royal castles, and Lalibela churches. Comprehensive 6-day northern Ethiopia culture trip.",
    category: "Monastic & Island Heritage",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    routing: "Addis Ababa ➔ Bahir Dar ➔ Gondar ➔ Lalibela ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/lake-tana-monastery.jpg",
    cardImage: "/images/destinations/lake-tana-monastery.jpg",
    galleryImages: [
      "/images/destinations/lake-tana-monastery.jpg",
      "/images/destinations/gondar-castles.jpg",
      "/images/tours/tour-1-lalibela-north.jpg"
    ],
    overview: "A rich 6-day journey connecting Ethiopia's waterborne spiritual history on Lake Tana with royal castles in Gondar and the living monoliths of Lalibela.",
    highlights: [
      "Cruise across Africa's highest lake to secluded 14th-century monastery sanctuaries",
      "Walk to the thundering cascades of Tis Abay (Blue Nile Falls)",
      "Discover imperial stone castles in Gondar's Fasil Ghebbi",
      "Complete exploration of Lalibela's UNESCO rock churches with local priests"
    ],
    destinations: ["Addis Ababa", "Bahir Dar", "Lake Tana", "Gondar", "Lalibela"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate",
    groupType: "Private FIT or Small Group",
    bestTimeToVisit: "September to May",
    inclusions: [
      "Private ground transport in 4x4 Land Cruiser",
      "Private boat charter on Lake Tana",
      "Expert native guides at all destinations",
      "5 nights hotel accommodation",
      "All church, park, and monument permits"
    ],
    exclusions: ["Domestic flights", "Tips and personal items"],
    itinerary: [
      { day: 1, title: "Fly to Bahir Dar & Zege Peninsula Monasteries", description: "Fly to Bahir Dar. Afternoon boat excursion to Zege Peninsula monasteries (Azwa Maryam, Ura Kidane Mehret) with 16th-century paintings." },
      { day: 2, title: "Blue Nile Falls (Tis Abay) & Drive to Gondar", description: "Hike to the Blue Nile Falls (Tis Abay). Afternoon scenic drive through mountain farmland to Gondar." },
      { day: 3, title: "Gondar Royal Enclosure & Empress Mentewab Palace", description: "Full day in Gondar exploring Fasil Ghebbi, Empress Mentewab’s palace, Bath of Fasilides, and local markets." },
      { day: 4, title: "Fly to Lalibela & First Church Group", description: "Fly to Lalibela. Begin afternoon exploration of the first group of rock-carved churches." },
      { day: 5, title: "Second Church Group, St. George & Orthodox Chants", description: "Detailed tour of the remaining Lalibela churches and attendance at morning orthodox chant services." },
      { day: 6, title: "Flight back to Addis Ababa & Departure", description: "Flight back to Addis Ababa, city transit, and international departure." }
    ]
  },
  {
    id: 6,
    price: 1240,
    priceDisplay: "$1,240",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "4-day-danakil-depression-erta-ale-lava-lake",
    pillarId: 2,
    pillarTitle: "Extreme Adventure & Wilderness Treks",
    title: "4-Day Danakil Depression & Erta Ale Lava Lake Expedition",
    seoTitle: "4-Day Danakil Depression & Erta Ale Volcano Expedition Ethiopia",
    metaDescription: "Extreme 4-day Danakil Depression tour. Trek Erta Ale active lava lake, photograph Dallol sulfur springs, and float on Lake Afrera salt water. Private 4x4s.",
    category: "Extreme Desert Expedition",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    durationNights: 3,
    routing: "Semera ➔ Lake Afrera ➔ Erta Ale Volcano ➔ Dallol Hydrothermal Springs ➔ Semera",
    featured: true,
    heroImage: "/images/destinations/danakil-dallol.jpg",
    cardImage: "/images/destinations/danakil-dallol.jpg",
    galleryImages: [
      "/images/destinations/danakil-dallol.jpg",
      "/images/destinations/erta-ale-volcano.jpg",
      "/images/about/fleet-4x4-landcruiser.jpg"
    ],
    overview: "A journey into the lowest, hottest, and most otherworldly place on planet Earth. Plunging 125 meters below sea level in the Afar triangle, the Danakil Depression showcases neon sulfur hydrothermal springs, vast shimmering salt flats, camel salt caravans, and the boiling magma cauldron of Erta Ale shield volcano.",
    highlights: [
      "Stand on the caldera rim of Erta Ale, one of the world's few permanent molten lava lakes",
      "Photograph the surreal, vivid neon yellow and green hydrothermal sulfur springs at Dallol",
      "Witness timeless Afar camel caravans traversing the boundless salt crust of Lake Assale",
      "Float weightlessly in the hyper-saline thermal waters of Lake Afrera",
      "Travel in a convoy of heavy-duty 4x4 Toyota Land Cruisers with native Afar scouts and private desert camp chefs"
    ],
    destinations: ["Semera", "Lake Afrera", "Erta Ale Volcano", "Dallol", "Lake Assale", "HamedEla"],
    startingPoint: "Semera Airport (Afar Region)",
    endingPoint: "Semera Airport (Afar Region)",
    fitnessLevel: "Challenging (high ambient temperatures, night volcanic hike, mobile desert camping)",
    groupType: "Private 4x4 Expedition Convoy",
    bestTimeToVisit: "November to March (Cooler Desert Months)",
    inclusions: [
      "Heavy-duty Toyota 4x4 Land Cruisers with dual air conditioning and desert tires",
      "Official armed Afar regional police escort and local tribal road wardens",
      "Native English-speaking desert expedition expedition leader and mechanics",
      "Private wilderness catering team serving freshly cooked meals and chilled drinks",
      "Complete outdoor desert camping equipment (mattresses, sheets, pillows)",
      "Daily unlimited bottled mineral water",
      "All regional Afar community fees, permits, and road tolls"
    ],
    exclusions: [
      "Domestic flights Addis Ababa - Semera - Addis Ababa",
      "Personal headlamp and trekking poles",
      "Tips for Afar scouts, drivers, and camp chefs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Semera, Drive across Desert Basalt & Lake Afrera",
        description: "Fly from Addis Ababa to Semera, modern capital of the Afar region. Rendezvous with your private 4x4 convoy and desert support team. Drive across black basalt volcanic fields to Lake Afrera, an emerald saline lake surrounded by salt extraction pans. Enjoy an outdoor thermal hot spring soak. Continue off-road across desert sands to set up night camp near the base of Erta Ale."
      },
      {
        day: 2,
        title: "Ascend Erta Ale Volcano & Caldera Lava Lake Night Trek",
        description: "Late afternoon guided trek up the gently sloping volcanic shield of Erta Ale (The Smoking Mountain). Reach the summit caldera as darkness falls. Stand safely along the crater rim to observe the active, boiling basaltic lava lake bubbling and cracking with crimson fissures. Overnight in open-air Afar stone shelters or safari mattresses under the desert stars on the rim."
      },
      {
        day: 3,
        title: "Descend to Salt Flats & Sunset at Lake Assale",
        description: "Early morning final views of the active crater before descending the volcano back to base camp for a hearty field breakfast. Board 4x4s and drive north across dazzling white salt flats to HamedEla base camp. In the late afternoon, drive onto the mirror-like salt crust of Lake Assale. Sip chilled sundowners while photographing Afar salt miners cutting salt slabs and long camel caravans trekking into the horizon."
      },
      {
        day: 4,
        title: "Dallol Hydrothermal Sulfur Pools & Return to Semera",
        description: "Early dawn departure to Dallol, the hottest inhabited place on Earth (125m below sea level). Explore neon yellow, lime green, and copper brine springs, miniature geysers, salt canyons, and bizarre mineral formations. Visit the nearby oily sulfur pool and salt pillars. Return drive across the desert plain to Semera Airport for your evening flight back to Addis Ababa."
      }
    ]
  },
  {
    id: 7,
    price: 1290,
    priceDisplay: "$1,290",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "6-day-simien-mountains-escarpment-trek",
    pillarId: 2,
    pillarTitle: "Extreme Adventure & Wilderness Treks",
    title: "6-Day Simien Mountains Escarpment Trek",
    seoTitle: "6-Day Simien Mountains Trekking & Wildlife Expedition Ethiopia",
    metaDescription: "Hike Afro-alpine escarpments in Simien Mountains National Park. Spot Gelada baboons, Walia Ibex, and Ethiopian wolves. Full eco-camping team included.",
    category: "High-Altitude Trekking",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    routing: "Gondar ➔ Debark ➔ Sankaber ➔ Geech ➔ Imet Gogo ➔ Chennek ➔ Gondar",
    featured: true,
    heroImage: "/images/destinations/simien-baboons.jpg",
    cardImage: "/images/destinations/simien-baboons.jpg",
    galleryImages: [
      "/images/destinations/simien-baboons.jpg",
      "/images/destinations/gondar-castles.jpg"
    ],
    overview: "Trek along the 'Roof of Africa' in the dramatic Simien Mountains National Park, a UNESCO World Heritage wilderness of plunging escarpments, 1,000-meter drop-offs, and endemic Afro-alpine wildlife found nowhere else on Earth.",
    highlights: [
      "Stand atop Imet Gogo peak (3,926m) for the most spectacular 360-degree canyon views in Africa",
      "Walk within feet of peaceful wild troops of endemic Gelada baboons grazing at Buyit Ras",
      "Ascend Mount Bwahit (4,430m) to track endangered Walia Ibex and Ethiopian wolves",
      "Witness Jinbar Waterfall plunging 500 meters down a sheer vertical abyss",
      "Full high-altitude mobile camping support team with pack mules, mountain guides, and private chef"
    ],
    destinations: ["Gondar", "Debark", "Sankaber", "Geech", "Imet Gogo", "Chennek"],
    startingPoint: "Gondar",
    endingPoint: "Gondar / Addis Ababa",
    fitnessLevel: "Challenging (mountain trekking at 3,200m – 4,430m elevation)",
    groupType: "Private Trekking Group",
    bestTimeToVisit: "October to April",
    inclusions: [
      "Private 4x4 transfers Gondar - Simiens - Gondar",
      "Certified English-speaking mountain guide and armed national park scout",
      "Private high-altitude field chef providing hot meals daily",
      "Luggage pack mules and mule handlers for all personal and camp gear",
      "High-grade mountain tents, foam sleeping pads, and dining mess tent",
      "National park entrance and camping permits"
    ],
    exclusions: ["Personal sleeping bag (can be rented)", "Trekking poles and mountain clothing"],
    itinerary: [
      { day: 1, title: "Drive Gondar to Debark & Trek to Sankaber (3,250m)", description: "Drive from Gondar to Debark park headquarters. Hike from Buyit Ras to Sankaber campsite (3,250m). Spot Gelada baboons." },
      { day: 2, title: "Trek Sankaber to Geech past Jinbar Falls (3,600m)", description: "Trek from Sankaber past Jinbar Waterfall to Geech village campsite (3,600m) across alpine moorlands." },
      { day: 3, title: "Imet Gogo Summit (3,926m) & Trek to Chennek (3,620m)", description: "Early hike to Imet Gogo peak (3,926m) for 360-degree canyon views. Continue past Koba Peak to Chennek campsite." },
      { day: 4, title: "Summit Mount Bwahit (4,430m) & Spot Walia Ibex", description: "Summit Mount Bwahit (4,430m) to track endemic Walia Ibex and Ethiopian wolves." },
      { day: 5, title: "Chennek Nature Walk & Vehicle Transfer to Gondar", description: "Morning nature walk around Chennek before private vehicle transfer back to Gondar for hot showers and hotel stay." },
      { day: 6, title: "Flight from Gondar to Addis Ababa", description: "Morning flight from Gondar to Addis Ababa for onward international travel." }
    ]
  },
  {
    id: 8,
    price: 1300,
    priceDisplay: "$1,300",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "7-day-bale-mountains-wilderness-ethiopian-wolf-safari",
    pillarId: 2,
    pillarTitle: "Extreme Adventure & Wilderness Treks",
    title: "7-Day Bale Mountains Wilderness & Ethiopian Wolf Safari",
    seoTitle: "7-Day Bale Mountains Trekking & Ethiopian Wolf Wildlife Safari",
    metaDescription: "Explore Bale Mountains National Park, Sanetti Plateau, and Harenna Forest. Track rare Ethiopian wolves and endemic mountain nyala with expert naturalists.",
    category: "Wildlife & Ecosystem Trekking",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    durationNights: 6,
    routing: "Addis Ababa ➔ Dinsho ➔ Adelay ➔ Sodota ➔ Sanetti Plateau ➔ Harenna Forest ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/bale-mountains-wolf.jpg",
    cardImage: "/images/destinations/bale-mountains-wolf.jpg",
    galleryImages: [
      "/images/destinations/bale-mountains-wolf.jpg",
      "/images/destinations/lake-ziway-birds.jpg"
    ],
    overview: "Explore one of Africa's most bio-diverse wilderness realms. Bale Mountains National Park features the highest continuous Afro-alpine plateau in Africa, home to over half of the world's remaining population of the critically endangered Ethiopian wolf (Canis simensis).",
    highlights: [
      "Track the world's rarest canid: the Ethiopian Wolf on the high Sanetti Plateau (4,000m+)",
      "Encounter endemic Mountain Nyala and Menelik's Bushbuck around Dinsho headquarters",
      "Descend into the mystical, moss-draped cloud canopy of the pristine Harenna Forest",
      "Spot endemic birds including the Blue-winged Goose and Rouget's Rail",
      "Stay in eco-lodges and pristine wilderness campsites with dedicated naturalist guides"
    ],
    destinations: ["Addis Ababa", "Dinsho", "Web Valley", "Sodota", "Sanetti Plateau", "Harenna Forest"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate to Challenging",
    groupType: "Private Wildlife Expedition",
    bestTimeToVisit: "November to April",
    inclusions: [
      "4x4 Land Cruiser with expert driver throughout",
      "Expert local naturalist and wildlife tracking guide",
      "National park scout and entrance fees",
      "Eco-camping and lodge accommodation with meals"
    ],
    exclusions: ["International flights and travel insurance"],
    itinerary: [
      { day: 1, title: "Drive Addis Ababa through Rift Valley to Dinsho", description: "Drive south from Addis Ababa through Rift Valley to Dinsho Park HQ. Spot Mountain Nyala and Menelik’s Bushbuck." },
      { day: 2, title: "Trek through Web Valley towards Sodota Campsite (3,500m)", description: "Begin trekking through Web Valley towards Sodota campsite (3,500m) along scenic waterfalls and gorge cliffs." },
      { day: 3, title: "Trek Afro-Alpine Moorlands to Wasama (3,900m)", description: "Trek across Afro-alpine moorlands to Wasama campsite (3,900m) with sightings of giant root rats and raptors." },
      { day: 4, title: "Cross Sanetti Plateau (4,000m+) & Wolf Sightings", description: "Cross the high plateau to Sanetti Plateau campsite (4,000m+); prime habitat for Ethiopian wolf sightings." },
      { day: 5, title: "Descend into Misty Harenna Cloud Forest", description: "Descend through the misty, moss-draped Harenna Cloud Forest. Stay at an eco-lodge." },
      { day: 6, title: "Harenna Forest Canopy Walk & Endemic Birds", description: "Guided birdwatching and canopy walks in Harenna Forest searching for endemic primates and birds." },
      { day: 7, title: "Scenic Return Drive to Addis Ababa via Lake Ziway", description: "Scenic drive back to Addis Ababa via Lake Ziway with aquatic bird stops." }
    ]
  },
  {
    id: 9,
    price: 1590,
    priceDisplay: "$1,590",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "5-day-omo-river-suri-tribal-wilderness-expedition",
    pillarId: 2,
    pillarTitle: "Extreme Adventure & Wilderness Treks",
    title: "5-Day Omo River & Suri Tribal Wilderness Expedition",
    seoTitle: "5-Day Suri Tribe Expedition & West Omo Valley Adventure",
    metaDescription: "Off-the-beaten-track expedition to Western Omo Valley. Visit the Suri (Surma) tribe, witness traditional lip plates, body painting, and pristine wilderness.",
    category: "Remote Ethnographic Expedition",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    routing: "Addis Ababa ➔ Jimma ➔ Mizan Teferi ➔ Kibish (Suri Country) ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/suri-tribe.jpg",
    cardImage: "/images/destinations/suri-tribe.jpg",
    galleryImages: [
      "/images/destinations/suri-tribe.jpg",
      "/images/destinations/kaffa-coffee.jpg"
    ],
    overview: "A remote, raw expedition to the western bank of the Omo River, home to the enigmatic Suri (Surma) people. Known for elaborate geometric body painting, clay lip plates, and age-old stick fighting (Donga) traditions.",
    highlights: [
      "Venture to Kibish in the remote western Omo wilderness reachable only by heavy 4x4",
      "Witness elaborate natural clay body painting and ceremonial scarring artistry",
      "Visit cattle camps and experience authentic pastoral lifestyle unaffected by mass tourism",
      "Drive through lush coffee rainforests and emerald tea estates of southwestern Ethiopia"
    ],
    destinations: ["Addis Ababa", "Jimma", "Mizan Teferi", "Kibish", "Bebeka"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Active (rough off-road travel, wilderness camping)",
    groupType: "Private 4x4 Safari",
    bestTimeToVisit: "November to March & July to August",
    inclusions: [
      "Rugged Toyota 4x4 Land Cruiser with recovery gear",
      "Native expedition guide and village elders clearance",
      "Private mobile camp setup and camp cook",
      "All tribal photography and village community fees"
    ],
    exclusions: ["Domestic flights Addis - Jimma", "Personal camping sleeping bag"],
    itinerary: [
      { day: 1, title: "Fly to Jimma & Drive to Mizan Teferi", description: "Fly to Jimma or drive to Mizan Teferi through lush tea plantations and rainforests." },
      { day: 2, title: "Off-Road 4x4 Expedition to Kibish (Suri Heartland)", description: "Off-road 4x4 expedition into Kibish, the heartland of the Suri people. Set up mobile safari camp." },
      { day: 3, title: "Full Day Immersed in Suri Culture & Cattle Camps", description: "Full day immersed in Suri culture: body painting art, traditional stick fighting (Donga) practice, and cattle camp visits." },
      { day: 4, title: "Morning Village Exchange & Drive to Mizan Teferi", description: "Morning cultural exchange in surrounding Suri villages. Drive back to Mizan Teferi." },
      { day: 5, title: "Overland Return to Jimma & Flight to Addis Ababa", description: "Overland return to Jimma and fly back to Addis Ababa." }
    ]
  },
  {
    id: 10,
    price: 1050,
    priceDisplay: "$1,050",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "3-day-erta-ale-volcano-quick-ascent",
    pillarId: 2,
    pillarTitle: "Extreme Adventure & Wilderness Treks",
    title: "3-Day Erta Ale Volcano Quick Ascent",
    seoTitle: "3-Day Express Erta Ale Active Lava Lake Expedition Ethiopia",
    metaDescription: "Direct 3-day fly-in trek to Erta Ale active volcano. Overnight caldera camping with private 4x4 support, field chef, and Afar security detail.",
    category: "Extreme Volcano Express",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    routing: "Semera ➔ Erta Ale Volcano ➔ Lake Afrera ➔ Semera",
    featured: false,
    heroImage: "/images/destinations/erta-ale-volcano.jpg",
    cardImage: "/images/destinations/erta-ale-volcano.jpg",
    galleryImages: [
      "/images/destinations/erta-ale-volcano.jpg",
      "/images/destinations/danakil-dallol.jpg"
    ],
    overview: "A rapid, focused fly-in expedition designed for photographers, geologists, and adventurers who want to experience the raw power of Erta Ale's glowing lava lake with minimum transit time.",
    highlights: [
      "Direct fly-in to Semera and express 4x4 transfer to Erta Ale base camp",
      "Night trek to the crater edge to witness churning red basalt magma",
      "Sleep under the stars on the volcanic caldera rim",
      "Relax in the natural hot springs and hyper-saline waters of Lake Afrera"
    ],
    destinations: ["Semera", "Erta Ale Volcano", "Lake Afrera"],
    startingPoint: "Semera",
    endingPoint: "Semera",
    fitnessLevel: "Challenging (night volcanic hiking and extreme heat)",
    groupType: "Private 4x4 Convoy",
    bestTimeToVisit: "November to March",
    inclusions: [
      "Private 4x4 Land Cruiser with desert equipment",
      "Afar scout and security escorts",
      "Experienced volcano guide and camp cook",
      "Caldera camping equipment and water"
    ],
    exclusions: ["Flights Addis - Semera - Addis"],
    itinerary: [
      { day: 1, title: "Fly to Semera, 4x4 Desert Drive & Crater Night Hike", description: "Fly to Semera. 4x4 expedition across desert sands to Erta Ale base camp. Night hike up the crater." },
      { day: 2, title: "Morning Lava Observation, Descent & Lake Afrera", description: "Morning observation of the lava crater. Descend to base camp and drive to Lake Afrera for hyper-saline salt swimming." },
      { day: 3, title: "Drive back to Semera & Afternoon Flight to Addis", description: "Drive back to Semera for afternoon return flight to Addis Ababa." }
    ]
  },
  {
    id: 11,
    price: 1780,
    priceDisplay: "$1,780",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "7-day-omo-valley-tribal-cultural-photography-safari",
    pillarId: 3,
    pillarTitle: "South Omo Valley Ethnographic Safaris",
    title: "7-Day Omo Valley Tribal Cultural Photography Safari",
    seoTitle: "7-Day Omo Valley Cultural Photography Safari & Tribal Tour",
    metaDescription: "Photographers' cultural safari across Ethiopia's South Omo Valley. Visit Hamer, Mursi, Karo, and Dorze tribes with ethical local guides and private 4x4s.",
    category: "Ethnographic Safari & Photography",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    durationNights: 6,
    routing: "Addis Ababa ➔ Arba Minch ➔ Chencha (Dorze) ➔ Jinka ➔ Mago NP (Mursi) ➔ Turmi (Hamer/Karo) ➔ Omorate (Dassanetch) ➔ Arba Minch ➔ Addis Ababa",
    featured: true,
    heroImage: "/images/destinations/omo-valley-hamer.jpg",
    cardImage: "/images/destinations/omo-valley-hamer.jpg",
    galleryImages: [
      "/images/destinations/omo-valley-hamer.jpg",
      "/images/destinations/mursi-tribe.jpg",
      "/images/destinations/lake-chamo-croc.jpg"
    ],
    overview: "A deeply respectful, culturally immersive journey into Ethiopia's South Omo Valley—one of the world's most linguistically diverse and culturally intact indigenous regions. Designed with professional photographers and ethical travelers in mind.",
    highlights: [
      "Respectful photographic access in Hamer, Mursi, Karo, and Dassanetch ancestral villages",
      "Witness the dramatic Hamer bull jumping ceremony (Ukuli Bula) and Evangadi night dance",
      "Cross the Omo River in traditional dugouts to meet the Dassanetch on the Kenya border",
      "Observe giant elephant-shaped bamboo houses and organic weaving in Dorze mountain villages",
      "Boat safari on Lake Chamo to view giant Nile crocodiles, hippos, and aquatic bird colonies"
    ],
    destinations: ["Addis Ababa", "Arba Minch", "Chencha", "Jinka", "Mago NP", "Turmi", "Omorate", "Konso"],
    startingPoint: "Addis Ababa (Fly to Arba Minch)",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate (village walks and dusty roads)",
    groupType: "Private FIT or Small Photography Group",
    bestTimeToVisit: "June to October & December to March",
    inclusions: [
      "All ground transit in heavy-duty Toyota 4x4 Land Cruisers with A/C",
      "Certified native ethnographic lead guide and native village translators",
      "All village entry permits, elder gifts, and tribal photo compensation fees",
      "Lake Chamo private motorized boat safari",
      "6 nights quality lodge accommodation with breakfast",
      "Chilled bottled mineral water replenished daily"
    ],
    exclusions: [
      "Domestic flights Addis - Arba Minch - Addis",
      "Drone permits (prohibited without specialized CAA clearance)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Arba Minch & Dorze Bamboo Village",
        description: "Fly to Arba Minch. Drive up to Chencha mountain village to meet the Dorze people and see giant elephant-shaped bamboo huts. Learn about Enset (false banana) bread baking and cotton weaving."
      },
      {
        day: 2,
        title: "Drive to Jinka & Omo Cultural Museum",
        description: "Scenic drive down through the Weyto Valley into Jinka. Visit the Omo Child Center and South Omo Cultural Museum to understand the origins and customs of the region's 16 ethnic groups."
      },
      {
        day: 3,
        title: "Mago National Park (Mursi Tribe) & Drive to Turmi",
        description: "Early morning excursion into Mago National Park to visit a Mursi village (famous for terracotta lip plates and body scarification). Afternoon drive to Turmi, capital of the Hamer country."
      },
      {
        day: 4,
        title: "Dus Village (Karo Tribe) & Hamer Bull Jumping",
        description: "Morning trip to Dus to visit the Karo tribe along the banks of the Omo River (famous for intricate chalk body paint). Afternoon visit to a Hamer village; witness the rite-of-passage bull jumping ceremony if occurring."
      },
      {
        day: 5,
        title: "Omorate (Dassanetch Tribe) & Omo River Dugout Crossing",
        description: "Drive to Omorate near the Kenyan border; cross the Omo River in traditional wooden dugouts to meet the Dassanetch agro-pastoralist tribe. Evening return to Turmi."
      },
      {
        day: 6,
        title: "Konso Terraced Landscape & Lake Chamo Crocodile Market",
        description: "Drive back to Arba Minch via Konso UNESCO cultural landscape terraces. Afternoon boat trip on Lake Chamo for giant Nile crocodiles, hippos, and pelicans."
      },
      {
        day: 7,
        title: "Arba Minch Morning Crafts & Return Flight to Addis Ababa",
        description: "Morning relaxed city tour or crafts shopping in Arba Minch before flight back to Addis Ababa for international connection."
      }
    ]
  },
  {
    id: 12,
    price: 1360,
    priceDisplay: "$1,360",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "5-day-compact-omo-valley-tribal-encounter",
    pillarId: 3,
    pillarTitle: "South Omo Valley Ethnographic Safaris",
    title: "5-Day Compact Omo Valley Tribal Encounter",
    seoTitle: "5-Day Express Omo Valley Cultural Tour Ethiopia",
    metaDescription: "Express 5-day South Omo Valley tour. Meet Mursi, Hamer, and Bana tribal communities with private 4x4 transport and verified local village guides.",
    category: "Express Ethnographic Safari",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    routing: "Addis Ababa ➔ Jinka ➔ Mago NP ➔ Turmi ➔ Arba Minch ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/mursi-tribe.jpg",
    cardImage: "/images/destinations/mursi-tribe.jpg",
    galleryImages: [
      "/images/destinations/mursi-tribe.jpg",
      "/images/destinations/omo-valley-hamer.jpg"
    ],
    overview: "A smart, fast fly-in cultural safari utilizing direct regional flights into Jinka and out of Arba Minch, maximizing cultural contact time with the Mursi, Hamer, and Konso nations.",
    highlights: [
      "Fly directly into Jinka avoiding two days of rough road travel",
      "Meet Mursi villagers in Mago National Park",
      "Experience Hamer pastoral culture, markets, and evening gatherings",
      "Tour the ancient stone-walled villages and terraced hills of Konso",
      "Lake Chamo boat cruise with Africa's largest Nile crocodiles"
    ],
    destinations: ["Addis Ababa", "Jinka", "Mago NP", "Turmi", "Konso", "Arba Minch"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate",
    groupType: "Private 4x4 Safari",
    bestTimeToVisit: "Year-Round",
    inclusions: [
      "Toyota 4x4 Land Cruiser with professional driver",
      "Local licensed tribal guides and community fees",
      "4 nights hotel and lodge accommodation",
      "Lake Chamo boat excursion and park permits"
    ],
    exclusions: ["Domestic flights Addis - Jinka / Arba Minch - Addis"],
    itinerary: [
      { day: 1, title: "Fly Addis Ababa to Jinka & Town Markets", description: "Fly from Addis Ababa to Jinka. Visit local markets and town center." },
      { day: 2, title: "Mago National Park (Mursi Tribe) & Drive to Turmi", description: "Excursion to Mago National Park to meet the Mursi people. Proceed to Turmi." },
      { day: 3, title: "Hamer Villages & Tribal Trade Markets", description: "Explore Hamer cultural villages and local trade markets. Attend night Ukuli bull jumping rites if taking place." },
      { day: 4, title: "Turmi to Arba Minch via Konso Terraces", description: "Drive from Turmi to Arba Minch via Konso terraced agricultural hills." },
      { day: 5, title: "Lake Chamo Boat Safari & Flight to Addis Ababa", description: "Boat ride on Lake Chamo (Crocodile Market) and return flight from Arba Minch to Addis Ababa." }
    ]
  },
  {
    id: 13,
    price: 2010,
    priceDisplay: "$2,010",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "9-day-indepth-omo-valley-rift-valley-lakes-safari",
    pillarId: 3,
    pillarTitle: "South Omo Valley Ethnographic Safaris",
    title: "9-Day In-Depth Omo Valley & Rift Valley Lakes Safari",
    seoTitle: "9-Day In-Depth Omo Valley Tribes & Rift Valley Lakes Safari",
    metaDescription: "Comprehensive 9-day southern Ethiopia expedition. Experience 6 distinct Omo tribes, Konso UNESCO heritage, Lake Chamo boat safaris, and Rift Valley eco-lodges.",
    category: "Comprehensive Ethnographic & Nature Safari",
    duration: "9 Days / 8 Nights",
    durationDays: 9,
    durationNights: 8,
    routing: "Addis Ababa ➔ Tiya ➔ Lake Langano ➔ Arba Minch ➔ Jinka ➔ Turmi ➔ Murulle ➔ Konso ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/omo-valley-karo.jpg",
    cardImage: "/images/destinations/omo-valley-karo.jpg",
    galleryImages: [
      "/images/destinations/omo-valley-karo.jpg",
      "/images/destinations/omo-valley-hamer.jpg",
      "/images/destinations/lake-chamo-croc.jpg"
    ],
    overview: "An overland journey southward from Addis Ababa through the Great Rift Valley lakes to the southernmost borders of Ethiopia, providing complete cultural immersion across 6 distinct ethnic groups.",
    highlights: [
      "Visit Tiya UNESCO carved prehistoric stelae cemetery",
      "Stay in serene lakeside eco-resorts on Lake Langano and Lake Chamo",
      "Encounter Dorze, Mursi, Hamer, Karo, and Dassanetch tribal communities",
      "Meet the King of Konso at his ancestral royal compound",
      "Explore vibrant weekly multi-tribal trading markets in Dimeka or Key Afer"
    ],
    destinations: ["Addis Ababa", "Tiya", "Lake Langano", "Arba Minch", "Jinka", "Turmi", "Murulle", "Konso"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate",
    groupType: "Private 4x4 Expedition",
    bestTimeToVisit: "September to May",
    inclusions: [
      "Heavy-duty Toyota 4x4 Land Cruiser throughout",
      "Lead guide, local tribal interpreters, and community entry clearances",
      "8 nights accommodation in best available eco-lodges",
      "All boat trips and national park fees"
    ],
    exclusions: ["Domestic flights (optional return flight from Arba Minch)", "Personal tips"],
    itinerary: [
      { day: 1, title: "Drive Addis to Lake Langano via Tiya Stelae", description: "Overland drive south from Addis Ababa visiting Tiya UNESCO stelae site and Lake Langano eco-resort." },
      { day: 2, title: "Rift Valley Drive to Arba Minch & Lake Chamo Boat Safari", description: "Drive through Rift Valley lakes to Arba Minch. Boat safari on Lake Chamo." },
      { day: 3, title: "Drive into Omo Valley via Weyto to Jinka", description: "Drive into the Omo Valley via Weyto valley to Jinka." },
      { day: 4, title: "Mago National Park Mursi Visit & Jinka Evening", description: "Full morning with the Mursi tribe in Mago NP. Evening cultural interaction in Jinka." },
      { day: 5, title: "Drive to Turmi & Hamer Evangadi Night Dance", description: "Drive to Turmi. Afternoon visit to Hamer family homesteads and night traditional Evangadi dance." },
      { day: 6, title: "Excursion to Murulle & Korcho Villages (Karo People)", description: "Excursion to Murulle and Korcho villages overlooking the Omo River to meet the Karo people." },
      { day: 7, title: "Omorate (Dassanetch) & Weekly Regional Tribal Market", description: "Visit Omorate (Dassanetch tribe) and explore weekly regional tribal trade markets (Dimeka or Turmi)." },
      { day: 8, title: "Drive to Konso UNESCO Site & King of Konso Audience", description: "Drive to Konso UNESCO site; meet the King of Konso and tour ancient walled stone villages." },
      { day: 9, title: "Drive to Arba Minch & Return Flight to Addis Ababa", description: "Drive back to Arba Minch and fly to Addis Ababa." }
    ]
  },
  {
    id: 14,
    price: 1080,
    priceDisplay: "$1,080",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "6-day-great-rift-valley-lakes-birdwatching-safari",
    pillarId: 4,
    pillarTitle: "Nature, Birdwatching & Coffee Origin",
    title: "6-Day Great Rift Valley Lakes & Birdwatching Safari",
    seoTitle: "6-Day Ethiopia Rift Valley Lakes & Endemic Birdwatching Safari",
    metaDescription: "Spot rare African raptors, flamingos, and endemic bird species across Lake Ziway, Abijatta-Shalla, Lake Awassa, and Bale Mountains foothill reserves.",
    category: "Avian & Nature Safari",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    routing: "Addis Ababa ➔ Lake Ziway ➔ Lake Awassa ➔ Senkelle Sanctuary ➔ Lake Langano ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/lake-ziway-birds.jpg",
    cardImage: "/images/destinations/lake-ziway-birds.jpg",
    galleryImages: [
      "/images/destinations/lake-ziway-birds.jpg",
      "/images/destinations/lake-chamo-croc.jpg"
    ],
    overview: "Ethiopia boasts over 860 bird species with more than 30 endemics. This specialized avian safari follows the great East African Rift Valley lake chain, teeming with flamingos, pelicans, fish eagles, and rare antelopes.",
    highlights: [
      "Private birdwatching boat cruise on Lake Ziway among white pelicans and African pygmy geese",
      "Witness thousands of lesser and greater flamingos on the alkaline waters of Lake Abijatta",
      "Track the endangered Swayne's Hartebeest at Senkelle Sanctuary",
      "Observe Colobus monkeys and marabou storks at the Awassa morning fish market",
      "Relax at Lake Langano, the only bilharzia-free swimming lake in the Rift Valley"
    ],
    destinations: ["Addis Ababa", "Lake Ziway", "Lake Awassa", "Senkelle Sanctuary", "Lake Langano", "Debre Zeit"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Easy to Moderate",
    groupType: "Private Nature & Birding Tour",
    bestTimeToVisit: "November to March (Palaearctic Migrants)",
    inclusions: [
      "Private 4x4 with specialized birding guide with spotting scope",
      "All sanctuary and national park entrance fees",
      "Boat charters on Lake Ziway and Lake Awassa",
      "5 nights comfortable lakeside eco-lodges"
    ],
    exclusions: ["International flights and personal gear"],
    itinerary: [
      { day: 1, title: "Drive Addis Ababa to Lake Ziway & Aquatic Bird Cruise", description: "Drive from Addis Ababa to Lake Ziway. Private boat tour for aquatic birds (pelicans, African fish eagles, storks)." },
      { day: 2, title: "Lake Awassa Morning Fish Market & Colobus Monkeys", description: "Proceed to Lake Awassa. Visit the morning fish market at Amora Gedel; spot black-and-white colobus monkeys and marabou storks." },
      { day: 3, title: "Senkelle Swayne's Hartebeest Sanctuary Safari", description: "Day safari to Senkelle Swayne's Hartebeest Sanctuary to view rare antelopes and endemic savanna birds." },
      { day: 4, title: "Abijatta-Shalla National Park Flamingos & Hot Springs", description: "Drive to Abijatta-Shalla Lakes National Park; observe flamingo colonies and geothermal hot springs." },
      { day: 5, title: "Relaxing Eco-Lodge Day at Lake Langano", description: "Relaxing day at Lake Langano eco-lodge. Swimming, forest walks, and nocturnal birdwatching." },
      { day: 6, title: "Return to Addis Ababa via Debre Zeit Crater Lakes", description: "Overland return drive to Addis Ababa stopping at crater lakes in Debre Zeit." }
    ]
  },
  {
    id: 15,
    price: 1070,
    priceDisplay: "$1,070",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "5-day-kaffa-wild-arabica-coffee-origin-rainforest",
    pillarId: 4,
    pillarTitle: "Nature, Birdwatching & Coffee Origin",
    title: "5-Day Kaffa Wild Arabica Coffee Origin & Rainforest Tour",
    seoTitle: "5-Day Birthplace of Coffee Tour Kaffa Rainforest Ethiopia",
    metaDescription: "Journey to Kaffa rainforests, the original home of Wild Arabica coffee. Experience traditional coffee ceremonies, tea plantations, and pristine nature.",
    category: "Coffee Origin & Botanical Tour",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    routing: "Addis Ababa ➔ Jimma ➔ Bonga (Kaffa) ➔ Mankira Coffee Forest ➔ Addis Ababa",
    featured: true,
    heroImage: "/images/destinations/kaffa-coffee.jpg",
    cardImage: "/images/destinations/kaffa-coffee.jpg",
    galleryImages: [
      "/images/destinations/kaffa-coffee.jpg",
      "/images/destinations/kaffa-forest.jpg"
    ],
    overview: "Journey to the UNESCO Kaffa Biosphere Reserve in southwestern Ethiopia—the precise biological birthplace of wild Coffea Arabica. Walk through pristine cloud rainforests where coffee shrubs still grow wild beneath towering trees.",
    highlights: [
      "Stand in Mankira Village forest, the historic site where wild coffee was first discovered by Kaldi the goat herder",
      "Participate in authentic forest coffee ceremonies roasted fresh over open charcoal braziers",
      "Visit King Abba Jifar's wooden palace in historic Jimma",
      "Hike to hidden waterfalls, natural stone bridges, and bamboo groves inside the Kaffa Biosphere",
      "Tour fair-trade coffee cooperatives and learn traditional bean processing methods"
    ],
    destinations: ["Addis Ababa", "Jimma", "Bonga", "Mankira Forest", "Kaffa"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate (rainforest walking trails)",
    groupType: "Private Botanical & Coffee Tour",
    bestTimeToVisit: "October to April (Coffee Harvest: Nov–Jan)",
    inclusions: [
      "Private 4x4 Land Cruiser with professional driver",
      "Specialist botanical and coffee origin guide",
      "Rainforest permits and local guide fees",
      "4 nights hotel and eco-guesthouse accommodation",
      "Coffee tastings and traditional ceremony demonstrations"
    ],
    exclusions: ["Domestic flight Addis - Jimma - Addis"],
    itinerary: [
      { day: 1, title: "Drive or Fly to Jimma & King Abba Jifar Palace", description: "Drive or fly to Jimma, historic coffee trading hub. Visit King Abba Jifar’s Palace." },
      { day: 2, title: "Scenic Drive into Bonga & Rainforest Walk", description: "Scenic drive into Bonga, capital of the Kaffa Biosphere Reserve. Guided rainforest walk." },
      { day: 3, title: "Trek to Mankira Coffee Forest & Wild Arabica Origin", description: "Trek into Mankira Village forest, the precise historical site where wild Coffea Arabica was discovered. Participate in a traditional forest coffee ceremony." },
      { day: 4, title: "Coffee Cooperatives, Waterfalls & Bamboo Groves", description: "Visit local coffee processing cooperatives, natural waterfalls, and bamboo forests around Bonga." },
      { day: 5, title: "Return Drive to Jimma & Flight to Addis Ababa", description: "Return drive to Jimma and flight back to Addis Ababa." }
    ]
  },
  {
    id: 16,
    price: 740,
    priceDisplay: "$740",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "4-day-awash-national-park-wildlife-safari",
    pillarId: 4,
    pillarTitle: "Nature, Birdwatching & Coffee Origin",
    title: "4-Day Awash National Park & Wildlife Safari",
    seoTitle: "4-Day Awash National Park Wildlife & Oryx Safari Ethiopia",
    metaDescription: "Game drives in Awash National Park. View Beisa oryx, gazelles, baboons, Awash River waterfalls, and Filwoha palm hot springs in the Rift Valley.",
    category: "Savanna Wildlife Safari",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    durationNights: 3,
    routing: "Addis Ababa ➔ Awash National Park ➔ Filwoha Hot Springs ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/awash-falls.jpg",
    cardImage: "/images/destinations/awash-falls.jpg",
    galleryImages: [
      "/images/destinations/awash-falls.jpg",
      "/images/destinations/lake-ziway-birds.jpg"
    ],
    overview: "Located only 225 kilometers east of Addis Ababa at the junction of the Great Rift Valley, Awash National Park features classic East African acacia savanna, dramatic river gorges, and volcanic hot springs.",
    highlights: [
      "Track graceful herds of Beisa Oryx and Soemmerring's Gazelles across Ilala Sala plains",
      "Marvel at the thundering cascades of Awash River Falls directly from the lodge terrace",
      "Bathe in the natural turquoise hot springs of Filwoha beneath tall Doum palms",
      "Over 450 recorded bird species, including ostrich, hornbills, and predatory raptors"
    ],
    destinations: ["Addis Ababa", "Awash National Park", "Filwoha Hot Springs", "Awash Falls"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Easy",
    groupType: "Private 4x4 Wildlife Safari",
    bestTimeToVisit: "October to May",
    inclusions: [
      "Private 4x4 Land Cruiser with pop-up safari roof option",
      "Expert naturalist guide and armed park scout",
      "All park and sanctuary entrance fees",
      "3 nights safari lodge accommodation"
    ],
    exclusions: ["Personal tips and drinks"],
    itinerary: [
      { day: 1, title: "Drive Addis Ababa to Awash & Sunset Game Drive", description: "Drive east from Addis Ababa down the Great Rift Valley escarpment into Awash National Park. Sunset game drive near Awash Falls." },
      { day: 2, title: "Ilala Sala Plains Game Drives (Oryx & Gazelles)", description: "Full day game drives across Ilala Sala plains tracking Beisa oryx, Soemmerring's gazelles, kudus, and over 450 bird species." },
      { day: 3, title: "Filwoha Natural Palm Hot Springs & Baboon Troops", description: "Morning drive to Filwoha natural hot springs surrounded by doum palm trees; spot hamadryas baboon troops." },
      { day: 4, title: "Awash Gorge Safari Walk & Return to Addis Ababa", description: "Morning safari walk along Awash Gorge before scenic afternoon drive back to Addis Ababa." }
    ]
  },
  {
    id: 17,
    price: 3490,
    priceDisplay: "$3,490",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "14-day-grand-ethiopia-combined-north-south-voyage",
    pillarId: 5,
    pillarTitle: "Grand Circuits & Day Tours",
    title: "14-Day Grand Ethiopia Combined North & South Voyage",
    seoTitle: "14-Day Ultimate Grand Ethiopia Combined North & South Tour",
    metaDescription: "The ultimate 2-week Ethiopian voyage. Combines Lalibela rock churches, Gondar castles, Simien Mountains, and complete South Omo Valley tribal circuit.",
    category: "Ultimate Signature Voyage",
    duration: "14 Days / 13 Nights",
    durationDays: 14,
    durationNights: 13,
    routing: "Addis Ababa ➔ Bahir Dar ➔ Gondar ➔ Simiens ➔ Lalibela ➔ Arba Minch ➔ Jinka ➔ Mago NP ➔ Turmi ➔ Konso ➔ Addis Ababa",
    featured: true,
    heroImage: "/images/tours/tour-17-grand-north-south.jpg",
    cardImage: "/images/tours/tour-17-grand-north-south.jpg",
    galleryImages: [
      "/images/tours/tour-17-grand-north-south.jpg",
      "/images/destinations/gondar-castles.jpg",
      "/images/destinations/omo-valley-hamer.jpg",
      "/images/destinations/simien-baboons.jpg"
    ],
    overview: "The quintessential comprehensive two-week Ethiopian odyssey. This master circuit bridges two completely different worlds: the ancient Christian monuments, medieval castles, and high escarpments of the North with the living indigenous cultures, wildlife lakes, and ceremonies of the South Omo Valley.",
    highlights: [
      "Complete UNESCO Northern Circuit: Lalibela rock churches, Gondar castles, Lake Tana monasteries, and Simiens",
      "Full South Omo Valley tribal circuit: Mursi, Hamer, Karo, and Dassanetch communities",
      "Lake Chamo boat safari for giant Nile crocodiles and Dorze bamboo village visit",
      "Konso terraced stone village UNESCO cultural landscape and King's compound",
      "Seamless logistics with combined domestic flights and heavy-duty 4x4 private ground handling"
    ],
    destinations: ["Addis Ababa", "Bahir Dar", "Gondar", "Simiens", "Lalibela", "Arba Minch", "Jinka", "Mago NP", "Turmi", "Omorate", "Konso", "Lake Langano"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Moderate",
    groupType: "Private Signature Tour or B2B Series",
    bestTimeToVisit: "October to April",
    inclusions: [
      "All domestic private 4x4 Land Cruiser transport with fuel and expert driver",
      "Expert native multi-lingual tour director throughout",
      "Local site specialists, historians, park scouts, and tribal interpreters",
      "All church, park, monastery, and tribal village entry fees",
      "Lake Tana and Lake Chamo private boat charters",
      "13 nights quality lodge and hotel accommodation",
      "Meet-and-assist at all airports with priority luggage handling"
    ],
    exclusions: ["Domestic flights (can be bundled seamlessly)", "International visas and insurance"],
    itinerary: [
      { day: 1, title: "Arrive Addis Ababa, museum tour, fly to Bahir Dar", description: "Arrive Addis Ababa; museum tour with Lucy fossil and fly to Bahir Dar." },
      { day: 2, title: "Lake Tana boat tour and drive to Gondar for castle visits", description: "Lake Tana boat tour to Zege Peninsula monasteries and drive to Gondar for castle visits." },
      { day: 3, title: "Day trip to Simien Mountains National Park for wildlife", description: "Day trip to Simien Mountains National Park for wildlife viewing and Gelada baboons." },
      { day: 4, title: "Fly to Lalibela; tour Northwestern Church Group", description: "Fly to Lalibela; tour the Northwestern Church Group (Biete Medhane Alem, Biete Maryam)." },
      { day: 5, title: "Detailed tour of Lalibela Southeastern Churches & St. George", description: "Detailed tour of Lalibela Southeastern Church Group and St. George Church (Biete Ghiorgis)." },
      { day: 6, title: "Fly back to Addis Ababa; transit flight to Arba Minch", description: "Fly back to Addis Ababa; afternoon transit drive or flight to Arba Minch." },
      { day: 7, title: "Lake Chamo boat safari and visit Dorze village in Chencha", description: "Lake Chamo boat safari for giant crocodiles and visit Dorze village in Chencha." },
      { day: 8, title: "Drive to Jinka; visit local culture museum", description: "Drive through Weyto Valley to Jinka; visit local culture museum." },
      { day: 9, title: "Mago National Park excursion to meet Mursi tribe; continue to Turmi", description: "Mago National Park excursion to meet Mursi tribe; continue to Turmi." },
      { day: 10, title: "Hamer village cultural encounter & Evangadi dance", description: "Hamer village cultural encounter, bull jumping rites, and Evangadi night dance." },
      { day: 11, title: "Excursion to Omorate (Dassanetch tribe) along Omo River", description: "Excursion to Omorate (Dassanetch tribe) along the Omo River." },
      { day: 12, title: "Drive from Turmi to Konso UNESCO terraced cultural landscape", description: "Drive from Turmi to Konso UNESCO terraced cultural landscape." },
      { day: 13, title: "Overland drive through Rift Valley lakes to Lake Langano", description: "Overland drive through Rift Valley lakes back to Lake Langano eco-lodge." },
      { day: 14, title: "Return to Addis Ababa, farewell dinner & departure", description: "Return to Addis Ababa for final shopping, farewell cultural dinner, and airport transfer." }
    ]
  },
  {
    id: 18,
    price: 4780,
    priceDisplay: "$4,780",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "21-day-complete-all-ethiopia-grand-expedition",
    pillarId: 5,
    pillarTitle: "Grand Circuits & Day Tours",
    title: "21-Day Complete All-Ethiopia Grand Expedition",
    seoTitle: "21-Day Complete All-Ethiopia Grand Overland Expedition",
    metaDescription: "3-week definitive expedition covering Historic North, Simien Trekking, Danakil Lava Lakes, Harar Jugal walled city, and South Omo Valley tribes.",
    category: "Master Expedition",
    duration: "21 Days / 20 Nights",
    durationDays: 21,
    durationNights: 20,
    routing: "Addis Ababa ➔ Bahir Dar ➔ Gondar ➔ Simiens ➔ Axum ➔ Tigray ➔ Lalibela ➔ Danakil ➔ Harar ➔ Awash ➔ Omo Valley ➔ Addis Ababa",
    featured: true,
    heroImage: "/images/tours/tour-18-complete-ethiopia.jpg",
    cardImage: "/images/tours/tour-18-complete-ethiopia.jpg",
    galleryImages: [
      "/images/tours/tour-18-complete-ethiopia.jpg",
      "/images/destinations/danakil-dallol.jpg",
      "/images/destinations/harar-hyena.jpg",
      "/images/destinations/omo-valley-hamer.jpg"
    ],
    overview: "The most comprehensive, all-encompassing expedition across Ethiopia ever designed. Over 3 unforgettable weeks, explore the complete northern historic kingdom, trek the Simien escarpment, cross the tectonic Danakil lava desert, wander the medieval walled Islamic city of Harar with its nocturnal hyena feeding ritual, and traverse the entire indigenous South Omo Valley.",
    highlights: [
      "Historic North circuit: Bahir Dar monasteries, Blue Nile Falls, Gondar castles, and Simien trekking",
      "Ancient Axum stelae and cliff churches of Tigray's Gheralta mountains",
      "Complete Lalibela monolithic rock churches immersion",
      "Danakil Depression: Erta Ale lava lake, neon Dallol springs, and Lake Assale salt flats",
      "Harar Jugal walled city: 4th holiest Islamic city and night hyena feeding ritual",
      "Awash National Park savanna wildlife & hot springs",
      "South Omo Valley: Dorze, Mursi, Hamer, Karo, and Konso communities",
      "Rift Valley lake retreats and Addis Ababa cultural finale"
    ],
    destinations: ["Addis Ababa", "Bahir Dar", "Gondar", "Simiens", "Axum", "Tigray", "Lalibela", "Danakil", "Harar", "Awash", "Omo Valley", "Lake Langano"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Active & Adventurous",
    groupType: "Private Master Expedition",
    bestTimeToVisit: "November to March",
    inclusions: [
      "Expedition-grade 4x4 Toyota Land Cruisers with seasoned drivers",
      "Dedicated Abyssinian Lead Expedition Director throughout",
      "All regional guides, scouts, Afar security details, and village clearances",
      "Complete mix of boutique lodges, heritage hotels, and desert camp setups",
      "Private wilderness camp chef in Danakil and Simiens",
      "All national parks, UNESCO heritage sites, and community fees"
    ],
    exclusions: ["International flights", "Personal travel insurance"],
    itinerary: [
      { day: "1–5", title: "Historic North Circuit", description: "Historic North circuit: Bahir Dar monasteries, Blue Nile Falls, Gondar castles, and Simien Mountains trek." },
      { day: "6–8", title: "Ancient Axum & Tigray Cliff Churches", description: "Ancient Axum stelae, Gheralta cliff churches, and scenic mountain drive to Lalibela." },
      { day: "9–10", title: "Complete Lalibela Rock Churches Tour", description: "Comprehensive exploration of all 11 Lalibela UNESCO rock-hewn monolithic churches." },
      { day: "11–13", title: "Danakil Depression & Erta Ale Expedition", description: "Danakil Depression expedition: Erta Ale active lava lake, Dallol sulfur pools, and Lake Assale salt flats." },
      { day: "14–15", title: "Harar Jugal Walled City & Night Hyena Feeding", description: "Drive to Harar Jugal (4th holiest Islamic city); night hyena feeding ritual and ancient walled city walk." },
      { day: "16–19", title: "Complete South Omo Valley Passage", description: "Complete South Omo Valley passage: Dorze, Mursi, Hamer, Karo tribes, and Konso terraced landscapes." },
      { day: "20–21", title: "Rift Valley Retreat & Addis Ababa Departure", description: "Rift Valley lakes retreat, return to Addis Ababa, farewell dinner, and international departure." }
    ]
  },
  {
    id: 19,
    price: 140,
    priceDisplay: "$140",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "1-day-addis-ababa-layover-city-heritage-tour",
    pillarId: 5,
    pillarTitle: "Grand Circuits & Day Tours",
    title: "1-Day Addis Ababa Layover City & Heritage Tour",
    seoTitle: "1-Day Addis Ababa Layover City & Cultural Tour Ethiopia",
    metaDescription: "Best 1-day Addis Ababa city tour. Visit National Museum (Lucy fossil), Entoto Park, Merkato market, Tomoca coffee, and authentic dinner show.",
    category: "Transit & Day Tour",
    duration: "1 Day (8 to 10 Hours)",
    durationDays: 1,
    durationNights: 0,
    routing: "Full City Tour within Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/addis-ababa-city.jpg",
    cardImage: "/images/destinations/addis-ababa-city.jpg",
    galleryImages: [
      "/images/destinations/addis-ababa-city.jpg",
      "/images/destinations/kaffa-coffee.jpg"
    ],
    overview: "Turn an airport layover into an unforgettable Ethiopian cultural introduction. Discover the bustling diplomatic capital of Africa, home to ancient hominid fossils, imperial palaces, and world-renowned coffee.",
    highlights: [
      "View the 3.2-million-year-old fossil skeleton of 'Lucy' (Dinkinesh) at the National Museum",
      "Panoramic views of Addis Ababa from eucalyptus-forested Entoto Mountain (3,200m)",
      "Specialty coffee tasting at the original 1953 Tomoca Coffee roaster",
      "Guided walk through the vibrant open-air labyrinth of Merkato market",
      "Visit Holy Trinity Cathedral, the final resting place of Emperor Haile Selassie",
      "Farewell cultural dinner with live folkloric music and tribal dance performances"
    ],
    destinations: ["Addis Ababa"],
    startingPoint: "Addis Ababa (Airport or Hotel)",
    endingPoint: "Addis Ababa (Airport or Hotel)",
    fitnessLevel: "Easy",
    groupType: "Private Tour",
    bestTimeToVisit: "Year-Round",
    inclusions: [
      "Private air-conditioned vehicle with dedicated driver",
      "Licensed native English-speaking city guide",
      "All museum and cathedral entry fees",
      "Authentic Ethiopian lunch with coffee tasting",
      "Cultural dinner with live music and dance show",
      "Airport pick-up and drop-off"
    ],
    exclusions: ["Personal souvenir purchases", "Alcoholic beverages"],
    itinerary: [
      {
        day: 1,
        title: "Full Day Addis Ababa Cultural & Heritage Immersion",
        description: "Morning: Airport pickup. Visit the National Museum of Ethiopia to view 3.2-million-year-old hominid fossil 'Lucy' (Dinkinesh) and imperial artifacts. Drive up to Entoto Mountain for panoramic city views and visit King Menelik II’s palace. Midday: Authentic Ethiopian lunch (Injera) and specialty coffee tasting at original Tomoca Coffee house. Afternoon: Guided walk through Merkato (one of Africa's largest open-air markets) and visit Holy Trinity Cathedral (burial site of Emperor Haile Selassie). Evening: Farewell cultural dinner at a traditional restaurant featuring live music and dance performances representing Ethiopia’s multi-ethnic heritage. Airport drop-off."
      }
    ]
  },
  {
    id: 20,
    price: 160,
    priceDisplay: "$160",
    priceNote: "Per Person (Based on 2 Travelers)",
    slug: "1-day-debre-libanos-monastery-blue-nile-gorge",
    pillarId: 5,
    pillarTitle: "Grand Circuits & Day Tours",
    title: "1-Day Debre Libanos Monastery & Blue Nile Gorge Excursion",
    seoTitle: "1-Day Debre Libanos Monastery & Blue Nile Gorge Day Tour",
    metaDescription: "1-day excursion from Addis Ababa. Visit 13th-century Debre Libanos monastery, Portuguese Bridge, view endemic Gelada baboons, and Blue Nile Gorge.",
    category: "Excursion Day Tour",
    duration: "1 Day (8 Hours)",
    durationDays: 1,
    durationNights: 0,
    routing: "Addis Ababa ➔ Entoto ➔ Debre Libanos ➔ Blue Nile Gorge ➔ Addis Ababa",
    featured: false,
    heroImage: "/images/destinations/debre-libanos-bridge.jpg",
    cardImage: "/images/destinations/debre-libanos-bridge.jpg",
    galleryImages: [
      "/images/destinations/debre-libanos-bridge.jpg",
      "/images/destinations/simien-baboons.jpg"
    ],
    overview: "Escape the city for a scenic day excursion north of Addis Ababa across the high central plateau to Ethiopia's most revered 13th-century monastic sanctuary, overlooking the sheer 1,000-meter Jamma River Canyon.",
    highlights: [
      "Tour the historic 13th-century monastery of Debre Libanos and holy cave spring",
      "Walk across the 16th-century Portuguese Bridge spanning a plunging waterfall",
      "Observe wild troops of endemic Gelada baboons foraging freely on cliff edges",
      "Take in dizzying panoramic views over the vast Blue Nile Gorge canyon system",
      "Enjoy lunch overlooking the canyon at Ethio-German Park Lodge"
    ],
    destinations: ["Addis Ababa", "Debre Libanos", "Portuguese Bridge", "Blue Nile Gorge"],
    startingPoint: "Addis Ababa",
    endingPoint: "Addis Ababa",
    fitnessLevel: "Easy to Moderate",
    groupType: "Private Day Tour",
    bestTimeToVisit: "Year-Round",
    inclusions: [
      "Private 4x4 or minivan with driver",
      "Expert native guide throughout",
      "Monastery and canyon bridge entrance fees",
      "Traditional Ethiopian lunch overlooking the gorge",
      "Bottled water"
    ],
    exclusions: ["Personal tips"],
    itinerary: [
      {
        day: 1,
        title: "Debre Libanos Monastery, Portuguese Bridge & Blue Nile Gorge",
        description: "08:00 AM: Pick up from Addis Ababa hotel or airport. Scenic drive north across the Entoto plateau. 10:30 AM: Arrive at Debre Libanos, historic 13th-century monastic center. Explore the modern cathedral, cave church of Saint Tekle Haymanot, and museum. 12:30 PM: Short walk to the 16th-century Portuguese Bridge overlooking the dramatic Jamma River Gorge. Observe wild Gelada baboon troops roaming the cliff edges. 02:00 PM: Traditional Ethiopian lunch at Ethio-German Lodge enjoying views of the canyon. 04:00 PM: Viewpoint stop over the vast Blue Nile Gorge basin before scenic late-afternoon return drive to Addis Ababa."
      }
    ]
  }
];

