// This is the content for your dive-data.js file

const diveSites = [
  {
    id: 1,
    name: "Great Barrier Reef",
    position: [-18.2871, 147.6992],
    depth: "18-30m",
    reviews: [
      { author: "Alice M.", stars: 5, comment: "Absolutely breathtaking! The coral diversity is unmatched." },
      { author: "Ben T.", stars: 4, comment: "Saw so many fish. A must-do for any diver." },
      { author: "Clara S.", stars: 5, comment: "Unforgettable experience. Healthy and vibrant reef." }
    ],
    photos: [
      "images/dives/great-barrier-reef1.jpg", 
      "images/dives/great-barrier-reef2.jpg", 
      "images/dives/great-barrier-reef3.jpg"
    ]
  },
  {
    id: 2,
    name: "Blue Hole, Belize",
    position: [17.3158, -87.5346],
    depth: "124m",
    reviews: [
      { author: "David P.", stars: 4, comment: "Deep and mysterious. Fascinating stalactites." },
      { author: "Eva L.", stars: 3, comment: "Unique dive, but visibility can be challenging at depth." },
      { author: "Frank G.", stars: 5, comment: "Incredible geology and clear water on the way down." }
    ],
    photos: [
      "images/dives/blue-hole1.jpg", 
      "images/dives/blue-hole2.jpg", 
      "images/dives/blue-hole3.jpg"
    ]
  },
  {
    id: 3,
    name: "SS Thistlegorm, Egypt",
    position: [27.8106, 33.9203],
    depth: "30m",
    reviews: [
      { author: "Grace R.", stars: 5, comment: "An amazing historical wreck. So much to see!" },
      { author: "Harry W.", stars: 5, comment: "Absolutely incredible! Penetration dives were a highlight." },
      { author: "Ivy K.", stars: 4, comment: "Vibrant marine life on the wreck. Strong currents sometimes." }
    ],
    photos: [
      "images/dives/ss-thistlegorm1.jpg",
      "images/dives/ss-thistlegorm2.jpg",
      "images/dives/ss-thistlegorm3.jpg"
    ]
  },
  {
    id: 4,
    name: "Barracuda Point, Sipadan, Malaysia",
    position: [4.1167, 118.6333],
    depth: "5-40m",
    reviews: [
      { author: "Jack O.", stars: 5, comment: "Barracuda vortex was insane! Sharks everywhere." },
      { author: "Laura F.", stars: 5, comment: "Best dive of my life. Unforgettable encounters." },
      { author: "Mike C.", stars: 5, comment: "Currents can be strong, but totally worth it for the action." }
    ],
    photos: [
      "images/dives/barracuda-point1.jpg",
      "images/dives/barracuda-point2.jpg",
      "images/dives/barracuda-point3.jpg"
    ]
  },
  {
    id: 5,
    name: "Richelieu Rock, Thailand",
    position: [9.3667, 98.0500],
    depth: "5-35m",
    reviews: [
      { author: "Nina Z.", stars: 5, comment: "Saw a whale shark! So much macro life too." },
      { author: "Oscar D.", stars: 4, comment: "Great visibility and unique creatures. Top-notch." },
      { author: "Pam E.", stars: 5, comment: "A truly unique seamount with incredible biodiversity." }
    ],
    photos: [
      "images/dives/richelieu-rock1.jpg",
      "images/dives/richelieu-rock2.jpg",
      "images/dives/richelieu-rock3.jpg"
    ]
  },
  {
    id: 6,
    name: "Darwin's Arch, Galapagos",
    position: [0.1819, -91.9861],
    depth: "10-40m",
    reviews: [
      { author: "Quinn B.", stars: 5, comment: "Hammerhead sharks by the hundreds! A dream come true." },
      { author: "Rachel H.", stars: 5, comment: "Incredible density of marine life, truly wild." },
      { author: "Sam I.", stars: 5, comment: "Beyond words. Every dive was an epic adventure." }
    ],
    photos: [
      "images/dives/darwins-arch1.jpg",
      "images/dives/darwins-arch2.jpg",
      "images/dives/darwins-arch3.jpg"
    ]
  },
  {
    id: 7,
    name: "Yongala Wreck, Australia",
    position: [-19.3400, 147.3600],
    depth: "14-30m",
    reviews: [
      { author: "Tina V.", stars: 5, comment: "Historic wreck teeming with huge fish." },
      { author: "Umar X.", stars: 5, comment: "Giant groupers and so many turtles. Fantastic!" },
      { author: "Vicky Y.", stars: 4, comment: "Visibility wasn't perfect but the marine life made up for it." }
    ],
    photos: [
      "images/dives/yongala1.jpg",
      "images/dives/yongala2.jpg",
      "images/dives/yongala3.jpg"
    ]
  },
  {
    id: 8,
    name: "Sistema Dos Ojos, Mexico",
    position: [20.3200, -87.4100],
    depth: "5-20m",
    reviews: [
      { author: "Wendy C.", stars: 4, comment: "Cenote diving is unique. Eerie and beautiful." },
      { author: "Xavier N.", stars: 4, comment: "Crystal clear water and stunning light beams." },
      { author: "Yara P.", stars: 3, comment: "A different kind of dive, good for experienced cavern divers." }
    ],
    photos: [
      "images/dives/sistema-dos-ojos1.jpg",
      "images/dives/sistema-dos-ojos2.jpg",
      "images/dives/sistema-dos-ojos3.jpg"
    ]
  },
  {
    id: 9,
    name: "Malapascua, Philippines",
    position: [11.3333, 124.1167],
    depth: "20-30m",
    reviews: [
      { author: "Zoe D.", stars: 5, comment: "Thresher sharks! That's all you need to know." },
      { author: "Aaron F.", stars: 5, comment: "Regular thresher shark sightings. Amazing experience." },
      { author: "Beth G.", stars: 4, comment: "Good macro life as well, very healthy reefs." }
    ],
    photos: [
      "images/dives/malapascua1.jpg",
      "images/dives/malapascua2.jpg",
      "images/dives/malapascua3.jpg"
    ]
  },
  {
    id: 10,
    name: "Raja Ampat, Indonesia",
    position: [-0.5000, 130.5000],
    depth: "5-40m",
    reviews: [
      { author: "Caleb H.", stars: 5, comment: "Unbelievable biodiversity. Like an aquarium." },
      { author: "Diana J.", stars: 5, comment: "Every dive was better than the last. Pristine corals." },
      { author: "Ethan K.", stars: 5, comment: "The most beautiful reefs I've ever seen." }
    ],
    photos: [
      "images/dives/raja-ampat1.jpg",
      "images/dives/raja-ampat2.jpg",
      "images/dives/raja-ampat3.jpg"
    ]
  },
  {
    id: 11,
    name: "Daedalus Reef, Red Sea, Egypt",
    position: [24.9667, 35.8833],
    depth: "20-40m",
    reviews: [
      { author: "Fiona L.", stars: 5, comment: "Shark paradise! Oceanic whitetips were curious." },
      { author: "George M.", stars: 5, comment: "Hammerhead schools were breathtaking. Strong currents." },
      { author: "Hannah N.", stars: 4, comment: "Remote and wild, exactly what I hoped for." }
    ],
    photos: [
      "images/dives/daedalus-reef1.jpg",
      "images/dives/daedalus-reef2.jpg",
      "images/dives/daedalus-reef3.jpg"
    ]
  },
  {
    id: 12,
    name: "Cocos Island, Costa Rica",
    position: [5.5333, -87.0667],
    depth: "10-50m",
    reviews: [
      { author: "Ian O.", stars: 5, comment: "Shark capital of the world, no exaggeration." },
      { author: "Julia P.", stars: 5, comment: "Hammerheads, Galapagos sharks, whitetips... all in one dive!" },
      { author: "Kyle Q.", stars: 5, comment: "Long journey but absolutely worth every penny." }
    ],
    photos: [
      "images/dives/cocos-island1.jpg",
      "images/dives/cocos-island2.jpg",
      "images/dives/cocos-island3.jpg"
    ]
  },
  {
    id: 13,
    name: "Tubbataha Reefs Natural Park, Philippines",
    position: [8.9333, 119.9667],
    depth: "5-50m",
    reviews: [
      { author: "Liam R.", stars: 5, comment: "Stunning pristine reefs and abundant marine life." },
      { author: "Mia S.", stars: 5, comment: "Manta rays and sharks daily. Truly untouched beauty." },
      { author: "Noah T.", stars: 5, comment: "A conservation success story, and amazing diving." }
    ],
    photos: [
      "images/dives/tubbataha1.jpg",
      "images/dives/tubbataha2.jpg",
      "images/dives/tubbataha3.jpg"
    ]
  },
  {
    id: 14,
    name: "SS President Coolidge, Vanuatu",
    position: [-15.5333, 167.1667],
    depth: "20-70m",
    reviews: [
      { author: "Olivia U.", stars: 5, comment: "World-class wreck dive. So much history." },
      { author: "Peter V.", stars: 5, comment: "Exploring the cargo holds was incredible. A must-do." },
      { author: "Quinn W.", stars: 4, comment: "Deep and dark, but incredibly rewarding for wreck enthusiasts." }
    ],
    photos: [
      "images/dives/ss-president-coolidge1.jpg",
      "images/dives/ss-president-coolidge2.jpg",
      "images/dives/ss-president-coolidge3.jpg"
    ]
  },
  {
    id: 15,
    name: "Aldabra Atoll, Seychelles",
    position: [-9.4167, 46.4000],
    depth: "10-40m",
    reviews: [
      { author: "Riley X.", stars: 5, comment: "Remote and wild, incredible untouched ecosystem." },
      { author: "Sophia Y.", stars: 5, comment: "Giant tortoises on land and amazing sharks underwater." },
      { author: "Tom Z.", stars: 5, comment: "Truly a privilege to dive here. Pristine and vibrant." }
    ],
    photos: [
      "images/dives/aldabra-atoll1.jpg",
      "images/dives/aldabra-atoll2.jpg",
      "images/dives/aldabra-atoll3.jpg"
    ]
  }
];