const colors = [
  {
    name: "",
    color: ["8ecae6", "219ebc", "023047", "ffb703", "fb8500"],
  },
  {
    name: "",
    color: ["cdb4db", "ffc8dd", "ffafcc", "bde0fe", "a2d2ff"],
  },

  {
    name: "Sunset Bloom",
    color: ["ff9a8b", "ff6a88", "ff99ac", "ffd6e0", "ffe3ec"],
  },
  {
    name: "Ocean Breeze",
    color: ["ade8f4", "48cae4", "00b4d8", "0096c7", "0077b6"],
  },
  {
    name: "Forest Calm",
    color: ["a3b18a", "588157", "3a5a40", "344e41", "dad7cd"],
  },
  {
    name: "Peach Paradise",
    color: ["fff1e6", "ffd6ba", "fcbf49", "f77f00", "d62828"],
  },
  {
    name: "Retro Pop",
    color: ["ffbe0b", "fb5607", "ff006e", "8338ec", "3a86ff"],
  },
  {
    name: "Cotton Candy",
    color: ["fcd5ce", "fae1dd", "f8edeb", "f9dcc4", "fec89a"],
  },
  {
    name: "Earth Tones",
    color: ["e4cda7", "c9ada7", "9a8c98", "4a4e69", "22223b"],
  },
  {
    name: "Cool Serenity",
    color: ["caf0f8", "ade8f4", "90e0ef", "48cae4", "00b4d8"],
  },
  {
    name: "Berry Smoothie",
    color: ["e0aaff", "c77dff", "9d4edd", "7b2cbf", "5a189a"],
  },
  {
    name: "Spring Garden",
    color: ["d8f3dc", "b7e4c7", "95d5b2", "74c69d", "52b788"],
  },
  {
    name: "Lavender Field",
    color: ["e0bbE4", "957DAD", "d291bc", "f3c5ff", "dec9e9"],
  },
  {
    name: "Misty Forest",
    color: ["cce3de", "a4c3b2", "6b9080", "52796f", "354f52"],
  },
  {
    name: "Citrus Pop",
    color: ["f4a261", "e76f51", "fefae0", "e9c46a", "2a9d8f"],
  },
  {
    name: "Blush Romance",
    color: ["ffe5ec", "ffc2d1", "ffb3c6", "ff8fab", "fb6f92"],
  },
  {
    name: "Vintage Mood",
    color: ["faf3dd", "c8d5b9", "8fc0a9", "68b0ab", "4a7c59"],
  },
  {
    name: "Bold Earth",
    color: ["6f1d1b", "bb9457", "432818", "99582a", "ffe6a7"],
  },
  {
    name: "Moody Night",
    color: ["03045e", "023e8a", "0077b6", "0096c7", "00b4d8"],
  },
  {
    name: "Soft Sky",
    color: ["edf6f9", "d6e6f2", "bee1e6", "90e0ef", "caf0f8"],
  },
  {
    name: "Golden Cream",
    color: ["fffbe0", "ffe69a", "f7c59f", "f9d29d", "ffb385"],
  },
  {
    name: "Berry Twist",
    color: ["6a0572", "ab83a1", "f5c7f7", "faedf0", "f3d1dc"],
  },
  {
    name: "Canyon Dust",
    color: ["f4f1de", "e07a5f", "3d405b", "81b29a", "f2cc8f"],
  },
  {
    name: "Rosewater Milk",
    color: ["f7d9d9", "fbe0dc", "fce8e6", "f6d6d6", "efcfd4"],
  },
  {
    name: "Winter Lake",
    color: ["e0fbfc", "c2dfe3", "9db4c0", "5c6b73", "253237"],
  },
  {
    name: "Lemonade Pop",
    color: ["fdfcdc", "fde4cf", "ffc8dd", "ffafcc", "bde0fe"],
  },
  {
    name: "Green Fresh",
    color: ["cbf3f0", "2ec4b6", "ffbf69", "ff9f1c", "e71d36"],
  },
  {
    name: "Muted Desert",
    color: ["e8d8c4", "c7b198", "a68a64", "6c584c", "3c2f2f"],
  },
  {
    name: "Cosmic Sunset",
    color: ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c"],
  },
  {
    name: "Coral Garden",
    color: ["ffddd2", "fcbf49", "e5989b", "b5838d", "6d6875"],
  },
  {
    name: "Faded Denim",
    color: ["e0e1dd", "778da9", "415a77", "1b263b", "0d1b2a"],
  },
  {
    name: "Icy Rose",
    color: ["ffe5e2", "ffc1cc", "f2b5d4", "deaaff", "caaaff"],
  },
  {
    name: "Dawn Horizon",
    color: ["ffcbf2", "f3c4fb", "ecbcfd", "e5b3fe", "e2afff"],
  },
  {
    name: "Pastel Dream",
    color: ["f8edeb", "fcd5ce", "fae1dd", "f9dcc4", "fec89a"],
  },
  {
    name: "Deep Jungle",
    color: ["355070", "6d597a", "b56576", "e56b6f", "eaac8b"],
  },
  {
    name: "Bubble Pop",
    color: ["ffcad4", "f4acb7", "9d8189", "ffe5ec", "ffc2d1"],
  },
  {
    name: "Royal Peony",
    color: ["dec0f1", "b79ced", "957fef", "7d5ba6", "6247aa"],
  },
  {
    name: "Neutral Calm",
    color: ["f5f5f5", "dcdcdc", "c0c0c0", "a9a9a9", "808080"],
  },
  {
    name: "Mango Crush",
    color: ["fff3b0", "ffe066", "fab005", "e67700", "a06100"],
  },
  {
    name: "Ink & Snow",
    color: ["f7f7f7", "d3d3d3", "7f8c8d", "34495e", "2c3e50"],
  },
  {
    name: "Candy Glow",
    color: ["ffd6ec", "ffc6ff", "e7c6ff", "c8b6ff", "b8c0ff"],
  },
  {
    name: "Teal Tones",
    color: ["b2f7ef", "80ed99", "57cc99", "38a3a5", "22577a"],
  },
  {
    name: "Royal Dusk",
    color: ["22223b", "4a4e69", "9a8c98", "c9ada7", "f2e9e4"],
  },
  {
    name: "Dreamy Dusk",
    color: ["f3e5f5", "e1bee7", "ce93d8", "ba68c8", "ab47bc"],
  },
  {
    name: "Warm Sand",
    color: ["fff1cf", "fce38a", "f38181", "fceabb", "fcdab7"],
  },
  {
    name: "Tropical Leaves",
    color: ["b5ead7", "c7f9cc", "80ed99", "57cc99", "38a3a5"],
  },
  {
    name: "Electric Pop",
    color: ["ff4d6d", "f72585", "7209b7", "3a0ca3", "4361ee"],
  },
  {
    name: "Frozen Mint",
    color: ["d0f4de", "a9def9", "e4c1f9", "ff99c8", "fcf6bd"],
  },
  {
    name: "Bold Contrast",
    color: ["11151c", "212d40", "364156", "7d4e57", "d66853"],
  },
  {
    name: "Rose Garden",
    color: ["fcd5ce", "fae1dd", "f8edeb", "f9dcc4", "fec89a"],
  },
  {
    name: "Rustic Charm",
    color: ["ddb892", "b08968", "7f5539", "9c6644", "ede0d4"],
  },
  {
    name: "Fresh Lagoon",
    color: ["bde0fe", "a2d2ff", "72ddf7", "8093f1", "b388eb"],
  },
  {
    name: "Sunflower Joy",
    color: ["fff9b0", "ffe066", "fab005", "fdc500", "e67700"],
  },
  {
    name: "Denim Wave",
    color: ["a2a8d3", "38598b", "113f67", "38598b", "a2a8d3"],
  },
  {
    name: "Summer Breeze",
    color: ["f1faee", "a8dadc", "457b9d", "1d3557", "e63946"],
  },
  {
    name: "Woodland Moss",
    color: ["ccd5ae", "e9edc9", "fefae0", "faedcd", "d4a373"],
  },
  {
    name: "Muted Blush",
    color: ["ffe5ec", "ffc2d1", "f4acb7", "ffcad4", "fff0f3"],
  },
  {
    name: "Berry Milk",
    color: ["dec9e9", "d291bc", "957dad", "cdb4db", "f3c5ff"],
  },
  {
    name: "Ocean Dream",
    color: ["caf0f8", "ade8f4", "90e0ef", "48cae4", "00b4d8"],
  },
  {
    name: "Ivy Vibes",
    color: ["d8f3dc", "b7e4c7", "95d5b2", "74c69d", "52b788"],
  },
  {
    name: "Smoky Plum",
    color: ["a3a1a8", "847996", "5c5470", "352f44", "221c35"],
  },
  {
    name: "Rose Quartz",
    color: ["fadadd", "ffd6e0", "fcbad3", "ffb7b2", "ffdac1"],
  },
  {
    name: "Night Fire",
    color: ["1b1b2f", "1f4068", "1b9cfc", "e43f5a", "facf5a"],
  },
  {
    name: "Gentle Sky",
    color: ["e3f2fd", "bbdefb", "90caf9", "64b5f6", "42a5f5"],
  },
  {
    name: "Spice Market",
    color: ["ffb347", "ffcc33", "ffdd99", "e97451", "cd5c5c"],
  },
  {
    name: "Muted Ocean",
    color: ["4b6584", "60a3bc", "82ccdd", "c8d6e5", "f5f6fa"],
  },
  {
    name: "Olive Garden",
    color: ["b5c18e", "748c69", "a4c3b2", "cce3de", "f4f1de"],
  },
  {
    name: "Dusty Petals",
    color: ["cdb4db", "ffc8dd", "ffafcc", "bde0fe", "a2d2ff"],
  },
  {
    name: "Autumn Woods",
    color: ["ede0d4", "e6ccb2", "ddb892", "b08968", "7f5539"],
  },
  {
    name: "Sunset Coral",
    color: ["ffadad", "ffd6a5", "fdffb6", "caffbf", "9bf6ff"],
  },
  {
    name: "Cobalt Calm",
    color: ["1e3d59", "4a6fa5", "8ea8c3", "c2dfe3", "f5f0e1"],
  },
  {
    name: "Blush Teal",
    color: ["ffc2c7", "ffb5a7", "ff9aa2", "a1eafb", "6dd3ce"],
  },
  {
    name: "Creamy Peach",
    color: ["fff0f5", "ffe4e1", "fad6bf", "ffb6b9", "fcd5ce"],
  },
  {
    name: "Stormy Sky",
    color: ["7897ab", "4b6587", "3b3b98", "2d4059", "1b262c"],
  },
  {
    name: "Papaya Smoothie",
    color: ["ffb997", "f67e7d", "843b62", "0b032d", "74546a"],
  },
  {
    name: "Morning Sun",
    color: ["fff0b3", "ffdd99", "ffc266", "ffb347", "ff9933"],
  },
  {
    name: "Frosty Forest",
    color: ["e8f6ef", "a4d4ae", "7fc8a9", "5ec576", "375e55"],
  },
  {
    name: "Velvet Cherry",
    color: ["a4161a", "ba181b", "e5383b", "b1a7a6", "161a1d"],
  },
  {
    name: "Muted Mint",
    color: ["cce3dc", "eaf4f4", "ffcbf2", "f3c4fb", "ecbcfd"],
  },
  {
    name: "Golden Hour",
    color: ["fdfcdc", "ffe8d6", "f4d35e", "ee964b", "f95738"],
  },
  {
    name: "Purple Dust",
    color: ["cdb4db", "d291bc", "957dad", "845ec2", "7161ef"],
  },
  {
    name: "Sky Candy",
    color: ["fff0f3", "ffccd5", "ffb3c6", "fae0e4", "f8edeb"],
  },
  {
    name: "Jade Whisper",
    color: ["b5ead7", "9debcf", "80d5c0", "57c6a1", "38a08d"],
  },
  {
    name: "Night Bloom",
    color: ["22223b", "4a4e69", "9a8c98", "c9ada7", "f2e9e4"],
  },
  {
    name: "Summer Ice",
    color: ["edf6f9", "d0f4de", "a9def9", "e4c1f9", "ff99c8"],
  },
  {
    name: "Nude Blush",
    color: ["f6ede0", "e4d6c4", "d5bdaF", "c3a995", "8e7c68"],
  },
  {
    name: "Crisp Air",
    color: ["d6e6f2", "bee1e6", "a2d2ff", "89c2d9", "61a5c2"],
  },
  {
    name: "Coral Cloud",
    color: ["ffb5a7", "fcd5ce", "f8edeb", "f9dcc4", "fec89a"],
  },
  {
    name: "Twilight Fog",
    color: ["d8e2dc", "ffe5d9", "ffcad4", "f4acb7", "9d8189"],
  },
  {
    name: "Steel Rose",
    color: ["ffe6e6", "d3c5bd", "8a817c", "463f3a", "000000"],
  },
  {
    name: "Apple Breeze",
    color: ["caffbf", "fdffb6", "ffd6a5", "ffadad", "9bf6ff"],
  },
  {
    name: "Blue Romance",
    color: ["f0f8ff", "cce3ff", "99c2ff", "6699ff", "3366ff"],
  },
  {
    name: "Autumn Leaves",
    color: ["ffbc42", "d81159", "8f2d56", "218380", "73d2de"],
  },
  {
    name: "Peach Cream",
    color: ["fff1e6", "ffddd2", "ffc2b4", "ffa07a", "ff8c69"],
  },
  {
    name: "Sunset Glow",
    color: ["ff9a8b", "ff6a88", "ff99ac", "ffd6e0", "ffe3ec"],
  },
  {
    name: "Ocean Breeze",
    color: ["ade8f4", "48cae4", "00b4d8", "0096c7", "0077b6"],
  },
  {
    name: "Forest Calm",
    color: ["a3b18a", "588157", "3a5a40", "344e41", "dad7cd"],
  },
  {
    name: "Peach Paradise",
    color: ["fff1e6", "ffd6ba", "fcbf49", "f77f00", "d62828"],
  },
  {
    name: "Retro Pop",
    color: ["ffbe0b", "fb5607", "ff006e", "8338ec", "3a86ff"],
  },
  {
    name: "Cotton Candy",
    color: ["fcd5ce", "fae1dd", "f8edeb", "f9dcc4", "fec89a"],
  },
  {
    name: "Earth Tones",
    color: ["e4cda7", "c9ada7", "9a8c98", "4a4e69", "22223b"],
  },
  {
    name: "Cool Serenity",
    color: ["caf0f8", "ade8f4", "90e0ef", "48cae4", "00b4d8"],
  },
  {
    name: "Berry Smoothie",
    color: ["e0aaff", "c77dff", "9d4edd", "7b2cbf", "5a189a"],
  },
  {
    name: "Spring Garden",
    color: ["d8f3dc", "b7e4c7", "95d5b2", "74c69d", "52b788"],
  },
  {
    name: "Lavender Field",
    color: ["e0bbe4", "957dad", "d291bc", "f3c5ff", "dec9e9"],
  },
  {
    name: "Misty Forest",
    color: ["cce3de", "a4c3b2", "6b9080", "52796f", "354f52"],
  },
  {
    name: "Citrus Pop",
    color: ["f4a261", "e76f51", "fefae0", "e9c46a", "2a9d8f"],
  },
  {
    name: "Blush Romance",
    color: ["ffe5ec", "ffc2d1", "ffb3c6", "ff8fab", "fb6f92"],
  },
  {
    name: "Vintage Mood",
    color: ["faf3dd", "c8d5b9", "8fc0a9", "68b0ab", "4a7c59"],
  },
  {
    name: "Bold Earth",
    color: ["6f1d1b", "bb9457", "432818", "99582a", "ffe6a7"],
  },
  {
    name: "Moody Night",
    color: ["03045e", "023e8a", "0077b6", "0096c7", "00b4d8"],
  },
  {
    name: "Soft Sky",
    color: ["edf6f9", "d6e6f2", "bee1e6", "90e0ef", "caf0f8"],
  },
  {
    name: "Golden Cream",
    color: ["fffbe0", "ffe69a", "f7c59f", "f9d29d", "ffb385"],
  },
  {
    name: "Berry Twist",
    color: ["6a0572", "ab83a1", "f5c7f7", "faedf0", "f3d1dc"],
  },
  {
    name: "Canyon Dust",
    color: ["f4f1de", "e07a5f", "3d405b", "81b29a", "f2cc8f"],
  },
  {
    name: "Winter Lake",
    color: ["e0fbfc", "c2dfe3", "9db4c0", "5c6b73", "253237"],
  },
  {
    name: "Lemonade Pop",
    color: ["fdfcdc", "fde4cf", "ffc8dd", "ffafcc", "bde0fe"],
  },
  {
    name: "Green Fresh",
    color: ["cbf3f0", "2ec4b6", "ffbf69", "ff9f1c", "e71d36"],
  },
  {
    name: "Muted Desert",
    color: ["e8d8c4", "c7b198", "a68a64", "6c584c", "3c2f2f"],
  },
  {
    name: "Cosmic Sunset",
    color: ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c"],
  },
  {
    name: "Coral Garden",
    color: ["ffddd2", "fcbf49", "e5989b", "b5838d", "6d6875"],
  },
  {
    name: "Faded Denim",
    color: ["e0e1dd", "778da9", "415a77", "1b263b", "0d1b2a"],
  },
  {
    name: "Icy Rose",
    color: ["ffe5e2", "ffc1cc", "f2b5d4", "deaaff", "caaaff"],
  },
  {
    name: "Dawn Horizon",
    color: ["ffcbf2", "f3c4fb", "ecbcfd", "e5b3fe", "e2afff"],
  },
  {
    name: "Pastel Dream",
    color: ["f8edeb", "fcd5ce", "fae1dd", "f9dcc4", "fec89a"],
  },
  {
    name: "Deep Jungle",
    color: ["355070", "6d597a", "b56576", "e56b6f", "eaac8b"],
  },
  {
    name: "Bubble Pop",
    color: ["ffcad4", "f4acb7", "9d8189", "ffe5ec", "ffc2d1"],
  },
  {
    name: "Royal Peony",
    color: ["dec0f1", "b79ced", "957fef", "7d5ba6", "6247aa"],
  },
  {
    name: "Neutral Calm",
    color: ["f5f5f5", "dcdcdc", "c0c0c0", "a9a9a9", "808080"],
  },
  {
    name: "Mango Crush",
    color: ["fff3b0", "ffe066", "fab005", "e67700", "a06100"],
  },
  {
    name: "Ink & Snow",
    color: ["f7f7f7", "d3d3d3", "7f8c8d", "34495e", "2c3e50"],
  },
  {
    name: "Candy Glow",
    color: ["ffd6ec", "ffc6ff", "e7c6ff", "c8b6ff", "b8c0ff"],
  },
  {
    name: "Teal Tones",
    color: ["b2f7ef", "80ed99", "57cc99", "38a3a5", "22577a"],
  },
  {
    name: "Royal Dusk",
    color: ["22223b", "4a4e69", "9a8c98", "c9ada7", "f2e9e4"],
  },
  {
    name: "Dreamy Dusk",
    color: ["f3e5f5", "e1bee7", "ce93d8", "ba68c8", "ab47bc"],
  },
  {
    name: "Warm Sand",
    color: ["fff1cf", "fce38a", "f38181", "fceabb", "fcdab7"],
  },
  {
    name: "Tropical Leaves",
    color: ["b5ead7", "c7f9cc", "80ed99", "57cc99", "38a3a5"],
  },
  {
    name: "Electric Pop",
    color: ["ff4d6d", "f72585", "7209b7", "3a0ca3", "4361ee"],
  },
  {
    name: "Frozen Mint",
    color: ["d0f4de", "a9def9", "e4c1f9", "ff99c8", "fcf6bd"],
  },
  {
    name: "Bold Contrast",
    color: ["11151c", "212d40", "364156", "7d4e57", "d66853"],
  },
  {
    name: "Rose Garden",
    color: ["fcd5ce", "fae1dd", "f8edeb", "f9dcc4", "fec89a"],
  },
  {
    name: "Rustic Charm",
    color: ["ddb892", "b08968", "7f5539", "9c6644", "ede0d4"],
  },
  {
    name: "Fresh Lagoon",
    color: ["bde0fe", "a2d2ff", "72ddf7", "8093f1", "b388eb"],
  },
];
