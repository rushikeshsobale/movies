
$(document).ready(function () {
  $("#bo").click(function () {
    $(".dropbar").slideToggle(500);

  })
  $("#bc").click(function () {
    $(".dropcon").slideToggle(500);

  })
  $("#more").click(function () {
    $(".dropmore").slideToggle(500);

  })
  $("#acc").click(function () {
    $("#fill").slideToggle(500);

  })

  // Toggle dropdown menus
  $(".dropdown-toggle").click(function () {
    const dropdown = $("#" + $(this).data("dropdown"));
    dropdown.toggle();
  });

  // Close dropdowns when clicking outside
  $(document).click(function (event) {
    const dropdownToggle = $(".dropdown-toggle");
    const dropdowns = $(".dropdown-menu");

    if (!dropdownToggle.is(event.target) && dropdownToggle.has(event.target).length === 0 &&
      !dropdowns.is(event.target) && dropdowns.has(event.target).length === 0) {
      dropdowns.hide();
    }
  });


  const itemsPerPage = 5; // Number of items to display per page
  let currentPage = 1; // Current page number

  // Sample data (replace with your own data)
  const data = [

    {
      name: "Walt Disney Pictures",
      founders: ["Walt Disney", "Roy O. Disney"],
      description: "One of the most iconic and influential film production companies in the world, known for its animated and live-action films."
    },
    {
      name: "Warner Bros. Pictures",
      founders: ["Harry Warner", "Albert Warner", "Sam Warner", "Jack L. Warner"],
      description: "A major film studio known for producing a wide range of films, including the Harry Potter series and DC Comics adaptations."
    },
    {
      name: "Universal Pictures",
      founders: ["Carl Laemmle"],
      description: "A film studio with a long history, known for classics like 'Jaws' and 'Jurassic Park.'"
    },
    {
      name: "20th Century Studios (formerly 20th Century Fox)",
      founders: ["William Fox"],
      description: "A major film studio known for classics like 'Star Wars' and 'Avatar.'"
    },
    {
      name: "Paramount Pictures",
      founders: ["Adolph Zukor"],
      description: "A studio known for iconic franchises like 'Transformers' and 'Mission: Impossible.'"
    },
    {
      name: "Columbia Pictures",
      founders: ["Harry Cohn", "Jack Cohn", "Joe Brandt"],
      description: "A film studio known for producing the 'Spider-Man' films and other popular franchises."
    },
    {
      name: "Metro-Goldwyn-Mayer (MGM)",
      founders: ["Marcus Loew"],
      description: "A historic studio known for classics like 'The Wizard of Oz' and the James Bond series."
    },
    {
      name: "DreamWorks Pictures",
      founders: ["Steven Spielberg", "Jeffrey Katzenberg", "David Geffen"],
      description: "A studio known for films like 'Shrek,' 'Saving Private Ryan,' and 'Jurassic Park.'"
    },
    {
      name: "New Line Cinema",
      founders: ["Robert K. Shaye"],
      description: "Known for producing the 'Lord of the Rings' trilogy and the 'Conjuring' series."
    },
    {
      name: "Miramax Films",
      founders: ["Harvey Weinstein", "Bob Weinstein"],
      description: "Known for independent and award-winning films, including 'Pulp Fiction' and 'Shakespeare in Love.'"
    },
    {
      name: "A24",
      founders: ["Daniel Katz", "David Fenkel", "John Hodges"],
      description: "An independent film company known for producing critically acclaimed films like 'Moonlight' and 'Hereditary.'"
    },
    {
      name: "Lionsgate Films",
      founders: ["Frank Giustra"],
      description: "Known for franchises like 'The Hunger Games' and 'Twilight.'"
    },
    {
      name: "Sony Pictures Entertainment",
      founders: ["Sony Corporation"],
      description: "A major film studio known for franchises like 'Spider-Man' and 'Men in Black.'"
    },
    {
      name: "Legendary Pictures",
      founders: ["Thomas Tull"],
      description: "Known for producing blockbuster films like 'The Dark Knight' and 'Godzilla.'"
    },
    {
      name: "Focus Features",
      founders: ["Universal Pictures"],
      description: "A subsidiary of Universal Pictures, known for distributing independent and art-house films."
    }

  ];

  const movies = [
    {
      title: "The Secret of Time",
      year: 2022,
      productionHouse: "Mystic Films",
      description: "Join our heroes on an epic adventure through time as they unravel the mystery of a hidden artifact."
    },
    {
      title: "Lost in Wonderland",
      year: 2021,
      productionHouse: "Wonderland Studios",
      description: "A magical journey awaits as Alice gets lost in a whimsical world filled with peculiar characters."
    },
    {
      title: "City of Dreams",
      year: 2020,
      productionHouse: "Dreamscape Productions",
      description: "Explore the dazzling streets of New York City through the eyes of aspiring artists and dreamers."
    },
    {
      title: "The Enchanted Forest",
      year: 2019,
      productionHouse: "Fantasy Films",
      description: "Venture into an enchanted forest where mythical creatures and ancient magic await discovery."
    },
    {
      title: "Infinite Odyssey",
      year: 2018,
      productionHouse: "Cosmic Pictures",
      description: "Embark on a never-ending journey through the cosmos, exploring the mysteries of the universe."
    },
    {
      title: "The Art of Love",
      year: 2017,
      productionHouse: "Romantic Studios",
      description: "A heartwarming tale of love and friendship set against the backdrop of a charming art gallery."
    },
    {
      title: "Pirate's Gold",
      year: 2016,
      productionHouse: "Treasure Hunt Productions",
      description: "Sail the high seas with a fearless pirate crew in search of legendary treasure and adventure."
    },
    {
      title: "Wild Safari",
      year: 2015,
      productionHouse: "Safari Films",
      description: "Embark on a wild safari through the African savannah, encountering exotic wildlife and breathtaking landscapes."
    },
    {
      title: "The Forgotten Kingdom",
      year: 2014,
      productionHouse: "Mysterious Productions",
      description: "Rediscover a lost kingdom buried in the sands of time, filled with mysteries and ancient secrets."
    },
    {
      title: "Dreams of Tomorrow",
      year: 2013,
      productionHouse: "Dreamcatcher Studios",
      description: "Explore the dreams and aspirations of individuals from diverse backgrounds in this inspiring documentary."
    },
    {
      title: "Island of Legends",
      year: 2012,
      productionHouse: "Legend Studios",
      description: "Journey to an isolated island where legends come to life, and every corner holds a secret."
    },
    {
      title: "Midnight Noir",
      year: 2011,
      productionHouse: "Noir Films",
      description: "Dive into the shadowy world of crime and intrigue in this gripping film noir thriller."
    },
    {
      title: "The Great Escape",
      year: 2010,
      productionHouse: "Freedom Films",
      description: "Follow the daring escape plan of prisoners of war as they strive for freedom behind enemy lines."
    },
    {
      title: "Timeless Love",
      year: 2009,
      productionHouse: "Timeless Pictures",
      description: "A timeless tale of romance that transcends generations and challenges the boundaries of time."
    },
    {
      title: "Underwater Odyssey",
      year: 2008,
      productionHouse: "Deep Blue Films",
      description: "Dive deep into the ocean's depths and witness the wonders and mysteries of underwater life."
    },
    {
      title: "Realm of Fantasy",
      year: 2007,
      productionHouse: "Fantasia Productions",
      description: "Enter a realm of fantasy where mythical creatures and epic adventures await at every turn."
    },
    {
      title: "The Inventor's Legacy",
      year: 2006,
      productionHouse: "Inventor Studios",
      description: "Uncover the secrets of a brilliant inventor's legacy and the marvels it holds for the world."
    },
    {
      title: "Mysteries of the Deep",
      year: 2005,
      productionHouse: "Deep Mysteries Productions",
      description: "Plunge into the uncharted depths of the ocean and witness extraordinary marine life and hidden treasures."
    },
    {
      title: "Sunset Serenade",
      year: 2004,
      productionHouse: "Serenade Pictures",
      description: "Experience the magic of a sunset serenade as music, nature, and love harmonize in perfect rhythm."
    },
    {
      title: "Echoes of History",
      year: 2003,
      productionHouse: "History Revisited Films",
      description: "Trace the echoes of history through the untold stories of those who shaped the world we know today."
    }
    // Add more movie objects here
  ];
  // Accessing individual entries in the array table





  function displayTablePage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableBody = $('#data-table tbody');
    const Newtable = $('#movie-table-body')
    tableBody.empty(); // Clear the table body
    Newtable.empty();
    for (let i = startIndex; i < endIndex && i < data.length; i++) {
      const rowData = data[i];
      const row = `<tr>
                              <td>${rowData.name}</td>
                              <td>${rowData.founders}</td>
                              <td>${rowData.description}</td>
                          </tr>`;
      tableBody.append(row);
      console.log("first loop ")
    }

    for (let i = startIndex; i < endIndex && i < movies.length; i++) {
      const rowMovie = movies[i];
      const newrow = `<tr>
                              <td>${rowMovie.title}</td>
                              <td>${rowMovie.year}</td>
                              <td>${rowMovie.productionHouse}</td>
                            
                          </tr>`;
      Newtable.append(newrow);
      console.log("second loop");
    }

  }

  // Initialize the table with the first page
  displayTablePage(currentPage);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const MoviePages = Math.ceil(movies.length / itemsPerPage);
  // Generate pagination links
  const pagination = $('#pagination');
  for (let i = 1; i <= totalPages || i <= MoviePages; i++) {
    const pageLink = `<li class="page-item"><button class="page-link" href="#">${i}</button></li>`;
    pagination.append(pageLink);
  }

  // Handle page navigation when a pagination link is clicked
  pagination.on('click', 'li.page-item', function () {
    const pageNumber = $(this).text();
    goToPage(parseInt(pageNumber));
  });

  function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= MoviePages) {
      currentPage = pageNumber;
      displayTablePage(currentPage);
      // Update the active pagination link
      pagination.find('li.page-item').removeClass('active');
      pagination.find(`li.page-item:nth-child(${pageNumber})`).addClass('active');
    }
  }

  $("#l1").click(function () {
    $("#inner1").slideToggle(1000);

    $("#inner2").slideUp(1000);

  });

  $("#l2").click(function () {
    $("#inner2").slideToggle(1000);
    $("#inner1").slideUp(1000);
  })

  v
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;


    if (name === "") {
      alert("Please enter your name.");       
      return false;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!validatePassword(password)) {
      alert("Please enter a valid password address.");
      return false;
    }

    // You can add more specific validation for date of birth and phone number here

    return true;
  }

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  function validatePassword(password) {
    // Define a regular expression for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password)
  }
  
  // Example usage:

 // const validationResult = validatePassword(password);
  //console.log(validationResult); // Output: "Password is valid."
  










});