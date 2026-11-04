export interface Destination {
  id: string;
  name: string;
  region: string;
  category: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  relatedTourSlugs: string[];
  altitude: string;
  keyAttractions: string[];
}

export const destinationsList: Destination[] = [
  {
    id: "lalibela",
    name: "Lalibela",
    region: "Amhara Highlands (Lasta)",
    category: "Historical & Monolithic UNESCO Heritage",
    heroImage: "/images/destinations/lalibela-st-george.jpg",
    shortDescription: "The Jerusalem of Africa, home to 11 monolithic rock-hewn churches carved out of solid volcanic bedrock in the 12th and 13th centuries.",
    fullDescription: "Perched high in the rugged Lasta mountains at 2,500 meters, Lalibela is one of the world's greatest architectural and spiritual wonders. Commissioned by King Lalibela in the 12th century as a 'New Jerusalem' following the Muslim conquest of the Holy Land, each church was chiselled downwards from solid reddish volcanic tuff without mortar, wood, or external stones. The cruciform Church of St. George (Biete Ghiorgis), sunk 12 meters deep into a cavernous pit, stands as the crowning masterpiece of medieval Christian architecture.",
    highlights: [
      "11 UNESCO World Heritage rock-hewn monolithic churches",
      "Subterranean tunnels, ceremonial baptismal pools, and catacombs",
      "Living Ethiopian Orthodox liturgical chants, golden crosses, and ancient manuscripts",
      "Biete Medhane Alem: the largest monolithic rock-hewn church in the world",
      "Spectacular Lasta mountain canyon scenery and traditional honey wine houses"
    ],
    bestTimeToVisit: "October to April (Orthodox Christmas 'Genna' in January & Timkat)",
    altitude: "2,500 m (8,200 ft)",
    keyAttractions: ["Biete Ghiorgis", "Biete Medhane Alem", "Biete Maryam", "Ne'akuto Le'ab Cave", "Asheten Maryam"],
    relatedTourSlugs: [
      "8-day-historic-north-lalibela-unesco-circuit",
      "5-day-compact-lalibela-gondar-heritage",
      "3-day-lalibela-monolith-pilgrimage-express",
      "14-day-grand-ethiopia-combined-north-south-voyage",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "gondar",
    name: "Gondar",
    region: "Amhara Highlands",
    category: "Medieval Imperial Castles & Royal Architecture",
    heroImage: "/images/destinations/gondar-castles.jpg",
    shortDescription: "The 'Camelot of Africa,' founded in 1636 by Emperor Fasilides, featuring stone castles, sunken royal bathhouses, and angel-painted frescoes.",
    fullDescription: "Gondar was the imperial capital of the Ethiopian Empire for over two centuries. Within the UNESCO-listed Fasil Ghebbi (Royal Enclosure), stone castles built by successive emperors blend Portuguese, Moorish, and traditional Axumite architectural influences. Nearby, the sunken stone bath of King Fasilides becomes the epicenter of Timkat celebrations, while Debre Berhan Selassie church mesmerizes visitors with its iconic ceiling of winged cherub faces.",
    highlights: [
      "Fasil Ghebbi stone castle complex of Emperors Fasilides, Yohannes I, and Iyasu I",
      "Submerged royal bath of King Fasilides used for baptismal Timkat rituals",
      "Debre Berhan Selassie Church with its world-famous winged angel ceiling",
      "Palace of Empress Mentewab at Kuskuam",
      "Gateway city to the high escarpments of the Simien Mountains"
    ],
    bestTimeToVisit: "October to May",
    altitude: "2,133 m (7,000 ft)",
    keyAttractions: ["Fasil Ghebbi", "Fasilides Bath", "Debre Berhan Selassie", "Kuskuam Compound"],
    relatedTourSlugs: [
      "8-day-historic-north-lalibela-unesco-circuit",
      "5-day-compact-lalibela-gondar-heritage",
      "6-day-simien-mountains-escarpment-trek",
      "17-day-grand-ethiopia-combined-north-south-voyage",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "simien-mountains",
    name: "Simien Mountains",
    region: "Northern Highlands",
    category: "Afro-Alpine Trekking & Endemic Wildlife",
    heroImage: "/images/destinations/simien-baboons.jpg",
    shortDescription: "A UNESCO Natural World Heritage wilderness characterized by precipitous 1,000-meter escarpments, endemic Gelada baboons, and Mount Bwahit.",
    fullDescription: "Massive volcanic erosion over millions of years sculpted the Simien plateau into one of the most rugged landscapes in Africa, with sheer canyon drop-offs plunging more than a kilometer into valleys below. Known as the 'Roof of Africa,' the national park protects rare endemic wildlife: tens of thousands of peaceful Gelada baboons grazing quietly beside hikers, the agile Walia Ibex leaping along cliff ledges, and the rare Ethiopian Wolf.",
    highlights: [
      "Close-range encounters with wild, habituated troops of endemic Gelada baboons",
      "Panoramic 360-degree canyon vistas from Imet Gogo viewpoint (3,926m)",
      "Tracking endangered Walia Ibex on the crags of Mount Bwahit (4,430m)",
      "Spectacular 500-meter drop of Jinbar Waterfall",
      "Professional wilderness camping with private mountain chefs and park scout escorts"
    ],
    bestTimeToVisit: "October to April (Lush wildflowers in Oct/Nov; dry trekking Dec–Apr)",
    altitude: "3,200 m – 4,533 m (Ras Dejen)",
    keyAttractions: ["Imet Gogo", "Chennek Campsite", "Sankaber", "Jinbar Waterfall", "Mount Bwahit"],
    relatedTourSlugs: [
      "7-day-simien-mountains-escarpment-trek",
      "8-day-historic-north-lalibela-unesco-circuit",
      "10-day-grand-historic-route-tigray-cliff-churches",
      "17-day-grand-ethiopia-combined-north-south-voyage",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "danakil-depression",
    name: "Danakil Depression & Erta Ale",
    region: "Afar Triangle (Great Rift Valley)",
    category: "Extreme Desert & Volcanic Expeditions",
    heroImage: "/images/destinations/danakil-dallol.jpg",
    shortDescription: "One of the most extreme geological wonders on Earth: glowing active lava lakes, neon-green hydrothermal sulfur chimneys, and blinding salt flats.",
    fullDescription: "Sitting at the triple junction of tectonic plates where the African continent is slowly tearing apart, the Danakil Depression dips 125 meters below sea level. It is officially the hottest inhabited place on Earth. Expeditions here feel like visiting another planet: the bubbling molten basalt lava lake of Erta Ale volcano, the psychedelic acid brine terraces of Dallol, hyper-saline swimming in Lake Afrera, and ancient Afar camel caravans hauling white salt blocks along ancient trading paths.",
    highlights: [
      "Boiling crimson molten lava lake inside the active summit caldera of Erta Ale",
      "Neon yellow, orange, and emerald acid brine hydrothermal pools at Dallol",
      "Floating weightlessly in the hyper-saline thermal waters of Lake Afrera",
      "Witnessing Afar salt miners hand-hewing salt slabs across Lake Assale salt flats",
      "Heavy-duty Toyota 4x4 convoy supported by native Afar scouts and private catering"
    ],
    bestTimeToVisit: "November to March (Crucial to avoid extreme summer heat)",
    altitude: "-125 m below sea level to 613 m (Erta Ale summit)",
    keyAttractions: ["Erta Ale Lava Lake", "Dallol Sulfur Springs", "Lake Assale Salt Flats", "Lake Afrera"],
    relatedTourSlugs: [
      "4-day-danakil-depression-erta-ale-lava-lake",
      "3-day-erta-ale-volcano-quick-ascent",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "south-omo-valley",
    name: "South Omo Valley",
    region: "Southern Nations, Nationalities, and Peoples",
    category: "Indigenous Ethnographic & Cultural Safaris",
    heroImage: "/images/destinations/omo-valley-hamer.jpg",
    shortDescription: "A living cultural sanctuary along the Omo River, home to over 16 distinct indigenous ethnic communities preserving age-old pastoralist traditions.",
    fullDescription: "Recognized as a UNESCO World Heritage cultural basin, the South Omo Valley is one of the world's most fascinating ethnographic regions. Here, pastoral and agro-pastoral communities maintain unique spiritual rites, body ornamentation, and cultural identity. From the terracotta lip plates of the Mursi to the intricate chalk body painting of the Karo and the famous Bull Jumping rites and Evangadi dances of the Hamer, Abyssinian Tour Operator guarantees respectful, community-approved cultural interactions led by native guides.",
    highlights: [
      "Witness the traditional rite-of-passage Bull Jumping ceremony (Ukuli Bula) of the Hamer",
      "Meet Mursi villagers in Mago National Park known for circular clay lip plates",
      "Visit Karo homesteads overlooking the Omo River with magnificent body art",
      "Cross the Omo River in wooden dugouts to visit Dassanetch settlements",
      "Elephant-shaped woven bamboo architecture of the mountain Dorze in Chencha"
    ],
    bestTimeToVisit: "June to October & December to March",
    altitude: "450 m – 1,800 m",
    keyAttractions: ["Mago National Park", "Turmi Hamer Heartland", "Dus Karo Village", "Omorate", "Chencha Dorze"],
    relatedTourSlugs: [
      "7-day-omo-valley-tribal-cultural-photography-safari",
      "5-day-compact-omo-valley-tribal-encounter",
      "9-day-indepth-omo-valley-rift-valley-lakes-safari",
      "14-day-grand-ethiopia-combined-north-south-voyage",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "lake-tana-blue-nile",
    name: "Lake Tana & Blue Nile Falls",
    region: "Bahir Dar, Amhara Region",
    category: "Island Monasteries & River Headwaters",
    heroImage: "/images/destinations/lake-tana-monastery.jpg",
    shortDescription: "Ethiopia's largest lake and source of the Blue Nile, dotted with 14th-century circular monasteries hiding sacred ecclesiastical treasures.",
    fullDescription: "Covering over 3,000 square kilometers, Lake Tana is the spiritual source of the Blue Nile. Scattered across its tranquil waters and secluded peninsulas are more than 20 monastic churches founded between the 13th and 17th centuries, adorned with vibrant hand-painted biblical murals, sacred relics, and imperial crowns. Just 30 kilometers downstream, the river plunges 45 meters over the basalt canyon rim at Tis Abay (The Smoking Water).",
    highlights: [
      "Boat charters to painted circular monasteries on the forested Zege Peninsula (Ura Kidane Mehret)",
      "View sacred 14th-century illuminated parchment manuscripts, processional crosses, and royal robes",
      "Hike to the roaring mist and spray of Tis Abay (Blue Nile Falls)",
      "Spot pelicans, African fish eagles, hippos, and traditional Papyrus Tankwa boats",
      "Lakeside dining on fresh Nile perch while watching sunset over Bahir Dar"
    ],
    bestTimeToVisit: "September to May (Falls are most spectacular Sept–Nov right after rainy season)",
    altitude: "1,788 m (5,866 ft)",
    keyAttractions: ["Ura Kidane Mehret", "Azwa Maryam", "Tis Abay Falls", "Dega Estifanos"],
    relatedTourSlugs: [
      "6-day-lake-tana-monasteries-source-of-nile",
      "8-day-historic-north-lalibela-unesco-circuit",
      "10-day-grand-historic-route-tigray-cliff-churches",
      "14-day-grand-ethiopia-combined-north-south-voyage",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "axum",
    name: "Ancient Axum",
    region: "Tigray Region",
    category: "Ancient Empires & Archaeological Heritage",
    heroImage: "/images/destinations/axum-stelae.jpg",
    shortDescription: "The ancient capital of the Axumite Empire, the cradle of Ethiopian civilization, and the sacred resting place of the biblical Ark of the Covenant.",
    fullDescription: "Axum was once ranked alongside Rome, Persia, and China as one of the four greatest powers of the ancient world. From the 1st to the 10th century CE, the Axumite Kingdom controlled lucrative maritime trade routes across the Red Sea and minted its own gold coinage. Today, colossal single-block granite obelisks stand in the Northern Stelae Park, while subterranean royal tombs, the palace of the legendary Queen of Sheba, and the Chapel of the Tablet at St. Mary of Zion preserve mysteries spanning three millennia.",
    highlights: [
      "Colossal 24-meter upright granite obelisks in the UNESCO Northern Stelae Field",
      "Chapel of the Tablet at the Church of Our Lady Mary of Zion (sanctuary of the Ark of the Covenant)",
      "Underground megalithic tombs of 6th-century King Kaleb and King Gebre Meskel",
      "Dungur archaeological excavations (Palace of the Queen of Sheba)",
      "Ancient trilingual Ezana stone inscriptions in Ge'ez, Sabaean, and Greek"
    ],
    bestTimeToVisit: "October to April",
    altitude: "2,131 m (6,991 ft)",
    keyAttractions: ["Northern Stelae Park", "St. Mary of Zion", "Queen of Sheba's Palace", "King Kaleb's Tomb"],
    relatedTourSlugs: [
      "8-day-historic-north-lalibela-unesco-circuit",
      "10-day-grand-historic-route-tigray-cliff-churches",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "tigray-gheralta",
    name: "Tigray & Gheralta Mountains",
    region: "Tigray Region",
    category: "Rock-Climbing & Cliff-Face Monasteries",
    heroImage: "/images/destinations/tigray-gheralta.jpg",
    shortDescription: "Dramatic sandstone massifs rising from desert plains, concealing medieval rock-hewn cliff churches accessible by thrilling vertical climbs.",
    fullDescription: "The Gheralta mountain range in Tigray presents one of Africa's most breathtaking geological and spiritual landscapes: towering red sandstone towers, cliffs, and mesas that resemble the American Southwest. Hidden high in sheer rock faces are more than 120 rock-cut churches carved between the 4th and 15th centuries. Reaching sanctuaries like Abuna Yemata Guh requires climbing vertical footholds and crossing narrow cliff ledges with specialized local safety assistants.",
    highlights: [
      "Exhilarating climb up sandstone cliffs to Abuna Yemata Guh perched 200m above the valley",
      "Admire 15th-century ceiling paintings depicting the Nine Saints and Apostles",
      "Hike to Maryam Korkor and Daniel Korkor perched atop high mountain plateaus",
      "Panoramic views across the golden Gheralta plains at sunrise and sunset",
      "Private 4x4 expedition with experienced climbing escorts and ropes"
    ],
    bestTimeToVisit: "October to April",
    altitude: "1,900 m – 2,600 m",
    keyAttractions: ["Abuna Yemata Guh", "Maryam Korkor", "Daniel Korkor", "Hawzen Plains"],
    relatedTourSlugs: [
      "10-day-grand-historic-route-tigray-cliff-churches",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "bale-mountains",
    name: "Bale Mountains National Park",
    region: "Oromia Highlands",
    category: "High-Altitude Wilderness & Endemic Wildlife",
    heroImage: "/images/destinations/bale-mountains-wolf.jpg",
    shortDescription: "Africa's highest continuous Afro-alpine plateau, home to the rare Ethiopian Wolf, Mountain Nyala, and mystical moss-draped Harenna cloud forest.",
    fullDescription: "Bale Mountains National Park encompasses pristine alpine habitats and the largest continuous Afro-alpine moorland on the African continent (the Sanetti Plateau, over 4,000 meters above sea level). It is the premier global stronghold for the critically endangered Ethiopian wolf (Canis simensis). Beyond the tundra lies the Harenna Forest, a dense, mystical cloud canopy draped with moss, lichens, wild coffee plants, and rare primates.",
    highlights: [
      "Track the world's rarest canid: the Ethiopian Wolf across the Sanetti Plateau",
      "Encounter majestic Mountain Nyala and Menelik's Bushbuck at Dinsho Park Headquarters",
      "Explore the dense moss-covered canopy of the prehistoric Harenna Cloud Forest",
      "Over 300 bird species, including 16 Ethiopian and Eritrean endemics",
      "Trek along rushing mountain trout rivers and dramatic glacial tarns"
    ],
    bestTimeToVisit: "November to April",
    altitude: "1,500 m – 4,377 m (Mount Tullu Demtu)",
    keyAttractions: ["Sanetti Plateau", "Harenna Forest", "Dinsho Headquarters", "Web Valley", "Mount Tullu Demtu"],
    relatedTourSlugs: [
      "7-day-bale-mountains-wilderness-ethiopian-wolf-safari"
    ]
  },
  {
    id: "kaffa-biosphere",
    name: "Kaffa Biosphere Reserve",
    region: "Southwest Ethiopia",
    category: "Coffee Origin & Botanical Cloud Rainforests",
    heroImage: "/images/destinations/kaffa-coffee.jpg",
    shortDescription: "The certified UNESCO biological birthplace of wild Coffea Arabica, featuring untouched rainforests, cascading waterfalls, and ancient coffee rituals.",
    fullDescription: "Kaffa gave the world the word 'coffee.' Tucked into the lush green highlands of southwestern Ethiopia, the UNESCO Kaffa Biosphere Reserve contains ancient cloud rainforests where wild Arabica coffee trees have grown naturally under the canopy for millennia. Visitors trek into Mankira village forest—the precise legendary site where the goatherd Kaldi observed his goats dancing after eating red coffee cherries—and experience authentic traditional forest coffee ceremonies roasted over open wood coals.",
    highlights: [
      "Trek through ancient wild Arabica rainforests in Mankira Village",
      "Traditional multi-step Ethiopian forest coffee ceremony with native roasters",
      "Explore hidden waterfalls, natural stone bridges, and bamboo groves near Bonga",
      "Tour historic palaces of the Kaffa Kingdom and King Abba Jifar in Jimma",
      "Learn about fair-trade organic coffee harvesting and cooperative washing stations"
    ],
    bestTimeToVisit: "October to April (Harvest season runs November through January)",
    altitude: "1,600 m – 2,400 m",
    keyAttractions: ["Mankira Forest", "Bonga Waterfall", "King Abba Jifar Palace", "Kaffa Museum"],
    relatedTourSlugs: [
      "5-day-kaffa-wild-arabica-coffee-origin-rainforest"
    ]
  },
  {
    id: "harar-jugol",
    name: "Harar Jugol Walled City",
    region: "Eastern Ethiopia",
    category: "Islamic Heritage & Medieval Walled City",
    heroImage: "/images/destinations/harar-hyena.jpg",
    shortDescription: "The 4th holiest city in Islam, enclosed by 16th-century stone walls with 82 historic mosques and the nightly ritual of feeding wild hyenas by hand.",
    fullDescription: "Surrounded by 16th-century defensive stone walls (the Jugol) pierced by five historic gates, Harar is a vibrant, labyrinthine Islamic cultural enclave in eastern Ethiopia. Within its compact three square kilometers are 82 mosques and over 100 shrines. Outside the ancient stone walls at dusk, generations of 'Hyena Men' call wild spotted hyenas out of the bush to feed them meat by hand and mouth in a ritual dating back to the 19th century.",
    highlights: [
      "UNESCO-listed 16th-century Jugol stone walls and 368 narrow cobbled alleyways",
      "Witness the nightly wild spotted hyena feeding ritual outside the historic city walls",
      "Visit Arthur Rimbaud House, dedicated to the famous French poet who traded here",
      "Explore bustling spice markets, vibrant textile stalls, and traditional Harari homes",
      "Sample locally grown Harar Longberry coffee, renowned for its winey, fruity notes"
    ],
    bestTimeToVisit: "October to May",
    altitude: "1,885 m (6,184 ft)",
    keyAttractions: ["Jugol Old City Walls", "Hyena Feeding Site", "Rimbaud Cultural Center", "Ras Makonnen Palace"],
    relatedTourSlugs: [
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  },
  {
    id: "addis-ababa",
    name: "Addis Ababa",
    region: "Central Ethiopia",
    category: "Diplomatic Capital & Cultural Museums",
    heroImage: "/images/destinations/addis-ababa-city.jpg",
    shortDescription: "The political and diplomatic capital of Africa, headquarters of the African Union, boasting the Lucy hominid fossil and Merkato.",
    fullDescription: "Founded in 1886 by Emperor Menelik II and Empress Taytu, Addis Ababa (meaning 'New Flower' in Amharic) is Africa's diplomatic capital. At an average elevation of 2,400 meters, it is one of the highest capital cities in the world. Visitors can stand before the 3.2-million-year-old fossilized skeleton of 'Lucy' (Dinkinesh) at the National Museum, explore the panoramic eucalyptus forests of Entoto Mountain, wander through Merkato—one of Africa's largest open-air markets—and sip world-famous espresso at Tomoca.",
    highlights: [
      "View the famous 3.2-million-year-old hominid fossil 'Lucy' at the National Museum of Ethiopia",
      "Panoramic views and visit Emperor Menelik II's imperial palace at Entoto Mountain Park",
      "Guided walk through Merkato, Africa's vast open-air spice, leather, and craft trading bazaar",
      "Visit Holy Trinity Cathedral, containing the imperial tombs of Emperor Haile Selassie and Empress Menen",
      "Authentic Ethiopian cultural banquets with live traditional dance and music"
    ],
    bestTimeToVisit: "Year-Round (Best Oct–May)",
    altitude: "2,355 m (7,726 ft)",
    keyAttractions: ["National Museum", "Entoto Park", "Merkato", "Holy Trinity Cathedral", "Tomoca Coffee"],
    relatedTourSlugs: [
      "1-day-addis-ababa-layover-city-heritage-tour",
      "1-day-debre-libanos-monastery-blue-nile-gorge",
      "8-day-historic-north-lalibela-unesco-circuit",
      "14-day-grand-ethiopia-combined-north-south-voyage",
      "21-day-complete-all-ethiopia-grand-expedition"
    ]
  }
];

