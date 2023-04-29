const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images2.alphacoders.com/546/thumb-1920-546340.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.wallpapers13.com/wp-content/uploads/2016/02/Dinosaurs_live_wallpaper.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://kidssearch.com/picsearch/images/dinosaur-pic-1024x768-82e4ca9.png"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Breed_Pug_Face_Photo.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/12/640/320/1862/1048/dino3.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2018/12/iStock-940586160.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "http://floridaphotomatt.com/wp-content/photos/2012/09/Spiky-Dinosaur.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://static.stacker.com/s3fs-public/2019-01/shutterstock_136832084_2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.fetchfind.com/blog/wp-content/uploads/2017/08/cat-2734999_1920-5-common-cat-sounds.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://images4.alphacoders.com/554/thumb-1920-554172.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://1.bp.blogspot.com/-F9B7MrG9Vl8/T9uevPioqPI/AAAAAAAAACg/FQxPGkupdMk/s1600/cute%2Bcat%2Bpictures%2B(8).jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://animalsbreeds.com/wp-content/uploads/2015/01/Boxer-3.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://1.bp.blogspot.com/-kRnZimNNJsA/UBlEl68mn0I/AAAAAAAARns/yCBKphe6nG4/s1600/funny-cat-pictures-009-001.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://4.bp.blogspot.com/-Tt1JZo5M8R8/WPI2-A_es4I/AAAAAAAA-UQ/JXoQ5IYxVG8sD1pOFdfd_CbB4aNU2QKGQCLcB/s1600/Dinosaurs-13.jpg"
    }
  ];

// Variables
const catBtn = document.querySelector("#btn-cats");
const dogBtn = document.querySelector("#btn-dogs");
const dinoBtn = document.querySelector("#btn-dinos");
const allPetsBtn = document.querySelector("#btn-pets");
const addPetBtn = document.querySelector("#pet-submit");

let maxId = Math.max(...pets.map(obj => obj.id));

// Functions
// Render function adds elements to DOM 
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

// Get the cards on the DOM
const cardsOnDom = (array) => {
  // Empty variable to hold DOM elements
  let domString = "";
  for (const pet of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <h3>${pet.name}</h3>
      <div class="card-image">
        <img src=${pet.imageUrl} class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
        <p class="card-type" style="background-color: ${pet.color};">${pet.type}</p>
    </div>`;
  }
  renderToDom("#app", domString);
}

// function to filter teammates with specific favorite color
const filter = (array, typeString) => {
  const typeArray = [];

  // array.forEach((item) => {
  //   if (item.favoriteColor === colorString) {
  //     colorArray.push(item);
  //   }
  // });

  for (const pet of array) {
    if (pet.type === typeString) {
      typeArray.push(pet);
    }
  }

  return typeArray;
}

catBtn.addEventListener('click', () => {
  const showPets = filter(pets, 'cat');
  console.log('clicked the cat button');
  cardsOnDom(showPets);
});

dogBtn.addEventListener('click', () => {
  const showPets = filter(pets, 'dog');
  console.log('clicked the dog button');
  cardsOnDom(showPets);
});

dinoBtn.addEventListener('click', () => {
  const showPets = filter(pets, 'dino');
  console.log('clicked the dino button');
  cardsOnDom(showPets);
});

allPetsBtn.addEventListener('click', () => {
  console.log('clicked the all button');
  cardsOnDom(pets);
});
  
  // Get the input values from the form
  const petNameInput = document.getElementById('pet-name');
  const newPetName = petNameInput.value;
  const petColorInput = document.getElementById('pet-color');
  const newPetColor = petColorInput.value;
  const petSkillInput = document.getElementById('pet-skill');
  const newPetSkill = petSkillInput.value;
  const petImageInput = document.getElementById('pet-image');
  const newPetImage = petImageInput.value;
  const petTypeInput = document.getElementById('pet-select');
  const newPetType = () => {
    if (petTypeInput.value === "1") {
      return "cat";
    } else if (petTypeInput.value === "2") {
      return "dog";
    } else {
      return "dino";
    }
  }

  const petForm = document.querySelector("#pet-form");
  // Add an event listener to the button
petForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
    // Create a new object with the input values
    let newPetObj = { 
      id: pets.length + 1, 
      name: newPetName,
      color: newPetColor,
      specialSkill: newPetSkill,
      type: newPetType(),
      imageUrl: newPetImage
    };

  // Add the object to the array
  pets.push(newPetObj);
  cardsOnDom(pets)
  
  // Log the updated array to the console
  console.log(pets);
});


