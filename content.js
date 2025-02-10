const forbiddenTitles = [
  "100",
  "12 Weeks",
  "2 Good 2 Be True",
  "3 Days 2 Nights in Poblacion",
  "A Family Affair",
  "A Faraway Land",
  "A Girl and A Guy",
  "A Hard Day",
  "A Journey",
  "A Love Story",
  "A Second Chance",
  "A Very Good Girl",
  "Afterlife",
  "Alone/Together",
  "Alter Me",
  "Amo",
  "An Inconvenient Love",
  "Ang Dalawang Mrs. Reyes",
  "Ang Henerasyong Sumuko Sa Love",
  "Ang Larawan",
  "Ang Pangarap Kong Holdap",
  "Ang Pangarap Kong Oskar",
  "Apag",
  "Apocalypse Child",
  "Arisaka",
  "As If It's True",
  "Aurora",
  "Bagong Umaga",
  "Baka Bukas",
  "Balangiga: Howling Wilderness",
  "Balota",
  "Bambanti",
  "Barcelona: A Love Untold",
  "Becky & Badette",
  "Ben X Jim",
  "Beauty and the Bestie",
  "Blackout",
  "Bliss",
  "Blue Room",
  "Born Beautiful",
  "Bride For Rent",
  "BuyBust",
  "Call Me Tita",
  "Can We Still Be Friends?",
  "Can't Buy Me Love",
  "Can't Help Falling in Love",
  "Cara x Jagger",
  "Chances Are You and I",
  "Clarita",
  "Crazy Beautiful You",
  "Crying Ladies",
  "Cuddle Weather",
  "D'Ninang",
  "Dead Kids",
  "Deadma Walking",
  "Dearly Beloved",
  "Dear Other Self",
  "Descendants of the Sun Philippines",
  "Desperadas",
  "Desperadas 2",
  "Die Beautiful",
  "Doll House",
  "Dolce Amore",
  "Dubai",
  "Eerie",
  "Elise",
  "English Only, Please",
  "Everything About Her",
  "Everyday I Love You",
  "Family History",
  "Family of Two (A Mother and Son Story)",
  "Fan Girl",
  "Finding Agnes",
  "Finding You",
  "Finally Found Someone",
  "First Lady",
  "Foolish Love",
  "For the Broken Hearted",
  "Four Sisters and a Wedding",
  "Four Sisters Before the Wedding",
  "Friendly Fire",
  "Fruitcake",
  "Fuchsia Libre",
  "Gameboys",
  "Gameboys Level-Up Edition",
  "Gaya Sa Pelikula",
  "GomBurZa",
  "Haunted Mansion",
  "Hayop Ka! The Nimfa Dimaano Story",
  "He’s Into Her",
  "He’s Into Her",
  "Heartful Café",
  "Here and There",
  "Hihintayin Kita sa Langit",
  "Himala",
  "Hindi Tayo Pwede",
  "How to Be Yours",
  "I Am Not Big Bird",
  "I Can See You: High-Rise Lovers",
  "I Can See You: Love on the Balcony",
  "I Can See You: The Promise",
  "I Can See You: Truly. Madly. Deadly.",
  "I Do Bidoo Bidoo: Heto nApo sila!",
  "I Love Lizzy",
  "I Love You to Death",
  "I'm Drunk, I Love You",
  "Ikaw",
  "Ikaw at Ako",
  "Ikaw at Ako at ang Ending",
  "Ikaw Pa Rin ang Pipiliin Ko",
  "Inang Yaya",
  "Instant Daddy",
  "Isa Pa with Feelings",
  "Iska",
  "It Takes a Man and a Woman",
  "Iti Mapukpukaw",
  "Izla",
  "Jesus Is Dead",
  "Jose and Maria's Bonggang Villa",
  "Jowable",
  "Just A Stranger",
  "Just the 3 of Us",
  "Just The Way You Are",
  "Kampon",
  "Kargo",
  "Kasal",
  "Keys to the Heart",
  "Kidnap for Romance",
  "Kiss in the Wind",
  "Kita Kita",
  "Labyu with an Accent",
  "La Visa Loca",
  "Legal Wives",
  "Leonor Will Never Die",
  "Lola Igna",
  "Lolo and the Kid",
  "Love at First Stream",
  "Love Child",
  "Love Is Blind",
  "Love Is Color Blind",
  "Love Is Colorblind",
  "Love Me Tomorrow",
  "Love of My Life",
  "Love or Money",
  "Love the Way U Lie",
  "Love You Long Time",
  "Love You to the Stars and Back",
  "Maging Sino Ka Man",
  "Magikland",
  "Maledicto",
  "Mallari",
  "Mama's Girl",
  "Mamasapano: Now It Can Be Told",
  "Mano Po 1: My Family",
  "Mano Po 2: My Home",
  "Mano Po 3: My Love",
  "Mano Po 4: Ako Legal Wife",
  "Mano Po 5: Gua Ai Di (I Love You)",
  "Mano Po 6: A Mother's Love",
  "Mano Po 7: Chinoy",
  "Maple Leaf Dreams",
  "Maria",
  "Maria Clara at Ibarra",
  "Markova: Comfort Gay",
  "Maybe This Time",
  "Men Are from QC, Women Are from Alabang",
  "Mga Kwentong Epik: Bernardo Carpio",
  "Mga Kwentong Epik: Maria Makiling",
  "Mga Kwentong Epik: Osyana",
  "Mina-Anud",
  "Missed Connections",
  "Miss Granny",
  "Mommy Issues",
  "Momshies! Your Soul is Mine",
  "Moro",
  "Mother Cutie",
  "Must Be... Love",
  "My 2 Mommies",
  "My Best Friend's Girlfriend",
  "My Ex and Whys",
  "My Fairy Tail Love Story",
  "My Lady Boss",
  "My Neighbor's Wife",
  "My Perfect You",
  "My Rebound Girl",
  "My Zombabe",
  "Nasaan Si Francis?",
  "Ngayon at Kailanman",
  "Niña Niño",
  "No Boyfriend Since Birth",
  "No Other Woman",
  "Northern Lights: A Journey to Love",
  "Now That I Have You",
  "On The Wings of Love",
  "On Vodka, Beers, and Regrets",
  "One Great Love",
  "One More Chance",
  "One More Try",
  "Oro, Plata, Mata",
  "Our Mighty Yaya",
  "Owe My Love",
  "Pagpag 24/7",
  "Pamilya Ordinaryo",
  "Para Kang Papa Mo",
  "Partners in Crime",
  "Pinoy Sunday",
  "Princess 'Daya'Reese",
  "Pula",
  "Pwera usog",
  "Rabid",
  "Rakenrol",
  "Remington and the Curse of the Zombadings",
  "Reroute",
  "Respeto",
  "Rewind",
  "Road Trip",
  "Royal Blood",
  "Sakaling Maging Tayo",
  "Seasons",
  "Seven Sundays",
  "Shake, Rattle & Roll Extreme",
  "She's Dating the Gangster",
  "She's the One",
  "Signal Rock",
  "Sisterakas",
  "Sitsit",
  "Sleep With Me",
  "Smaller and Smaller Circles",
  "So Connected",
  "So It's You",
  "Spellbound",
  "Starting Over Again",
  "Status: It's Complicated!",
  "Stranded",
  "Sunod",
  "Tamang Panahon",
  "The Amazing Praybeyt Benjamin",
  "The Breakup Playlist",
  "The Bride and the Lover",
  "The Cheating Game",
  "The Debutantes",
  "The Entitled",
  "The Escort",
  "The First Nanny",
  "The Girl and the Gun",
  "The Heiress",
  "The Hopeful Romantic",
  "The House Arrest of Us",
  "The Hows of Us",
  "The Janitor",
  "The Love Affair",
  "The Mall, The Merrier!",
  "The Mistress",
  "The Panti Sisters",
  "The Portrait",
  "The Prenup",
  "The Super Parental Guardians",
  "The Sweet Taste of Salted Bread and Undies",
  "The Third Party",
  "The Unmarried Wife",
  "The Woman and the Gun",
  "That Kind of Love",
  "That Thing Called Tadhana",
  "Thelma",
  "Third Is My First",
  "Third World Romance",
  "Through Night and Day",
  "Tía Madré",
  "Time & Again",
  "To Russia with Love",
  "Trese",
  "Trese After Dark",
  "Trip Ubusan: The Lolas vs Zombies",
  "Under Parallel Skies",
  "Unforgettable",
  "Unli Life",
  "Unloving U",
  "UnTrue",
  "Us Again",
  "Vince and Kath and James",
  "Waiting for Sunset",
  "Walang Hanggang Paalam",
  "Walwal",
  "What If",
  "When I Met You in Tokyo",
  "Whistleblower",
  "Whispers in the Wind",
  "Will You Marry",
  "Wish You Were the One",
  "Woke up Like This",
  "Yesterday Today Tomorrow",
  "You to Me Are Everything",
  "You're My Boss",
  "Zsazsa Zaturnnah Ze Moveeh",
  "Love Child",
];

const forbiddenGenres = [
  /\b(philippin(e|ian)|filipino|pinoy)\b/i,
  /\b(indian|desi|tamil|telugu)\b/i,
  /\bbollywood\b/i,
];

const forbiddenPatterns = [
  /\b(philippin(e|ian)|filipino|pinoy)\b/i,
  /\b(indian|desi|tamil|telugu)\b/i,
  /\bbollywood\b/i,
  /Top 10 (TV Shows|Movies) in the Philippines/i,
];

function hideGenreRows() {
  const rows = document.querySelectorAll(
    '[data-automation-id="title-card-list"], .lolomoRow_title_card',
  );

  rows.forEach((row) => {
    const titleElement = row.querySelector(
      '[data-automation-id="title-card-list-title"], .row-header-title',
    );
    if (!titleElement) return;

    const rowText = titleElement.textContent.trim();
    const shouldHide = forbiddenPatterns.some((regex) => regex.test(rowText));

    if (shouldHide) {
      row.style.display = "none";
      row.dataset.filteredGenre = rowText;
    }
  });
}

function normalizeTitle(title) {
  // Normalize apostrophes and quotes
  return title.replace(/[''′`]/g, "'").trim();
}

function hideIndividualTitles() {
  // Get all title cards and slider items
  const titleCards = document.querySelectorAll(".title-card-container");
  const sliderItems = document.querySelectorAll(".slider-item");

  // First check title cards
  titleCards.forEach((card) => {
    // Check aria-label first
    const titleLink = card.querySelector("a[aria-label]");
    const fallbackText = card.querySelector(".fallback-text");

    let title = "";
    if (titleLink) {
      title = titleLink.getAttribute("aria-label");
    } else if (fallbackText) {
      title = fallbackText.textContent.trim();
    }

    if (title) {
      const normalizedTitle = normalizeTitle(title);
      console.log('Found title:', title, 'Normalized:', normalizedTitle);
      
      if (forbiddenTitles.some(forbidden => normalizeTitle(forbidden) === normalizedTitle)) {
        console.log('Filtering title:', title);
        const sliderItem = card.closest(".slider-item");
        if (sliderItem) {
          sliderItem.style.display = "none";
          sliderItem.dataset.filteredTitle = title;
        }
      }
    }
  });

  // Then check slider items directly
  sliderItems.forEach((item) => {
    if (item.dataset.filteredTitle) {
      const title = item.dataset.filteredTitle;
      const normalizedTitle = normalizeTitle(title);
      
      if (forbiddenTitles.some(forbidden => normalizeTitle(forbidden) === normalizedTitle)) {
        item.style.display = "none";
      }
    }
  });
}

const style = document.createElement("style");
style.textContent = `
  [data-filtered-genre]::before {
    content: "Filtered: " attr(data-filtered-genre);
    display: block;
    padding: 10px;
    color: #ff4444;
    background: rgba(0,0,0,0.8);
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    font-size: 14px;
    border-bottom: 1px solid #ff4444;
  }
  
  [data-filtered-title]::before {
    content: "Filtered Title: " attr(data-filtered-title);
    display: block;
    padding: 10px;
    color: #ff4444;
    background: rgba(0,0,0,0.8);
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    font-size: 14px;
    border-bottom: 1px solid #ff4444;
  }
`;
document.head.appendChild(style);

const observer = new MutationObserver((mutations) => {
  if (!mutations.some((m) => m.addedNodes.length)) return;
  hideGenreRows();
  hideIndividualTitles();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
hideGenreRows();
