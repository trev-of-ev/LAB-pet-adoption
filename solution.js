const team = [
    {
      id: 1,
      name: "Dr. T",
      email: "drt@drt.com",
      favoriteColor: "purple",
      image: "https://avatars3.githubusercontent.com/u/29741570?s=460&u=16cc038bd4c459a12eb198fc313043cd37c80a64&v=4"
    },
    {
      id: 2,
      name: "Aja",
      email: "drt@drt.com",
      favoriteColor: "RED",
      image: "https://avatars3.githubusercontent.com/u/57641436?s=400&u=1383b4d27114c6c7e3f05d55a4b4ac536971316a&v=4"
    },
    {
      id: 3,
      name: "Trinity",
      email: "drt@drt.com",
      favoriteColor: "blue",
      image: "https://avatars1.githubusercontent.com/u/31781724?s=460&u=10531433afe0ed55948173fab061a75fc3ffa8c1&v=4"
    },
    {
      id: 4,
      name: "Jameka",
      email: "drt@drt.com",
      favoriteColor: "brown",
      image: "https://avatars.githubusercontent.com/u/14102749?v=4"
    },
    {
      id: 5,
      name: "John",
      email: "drt@drt.com",
      favoriteColor: "blue",
      image: "https://avatars.githubusercontent.com/u/18398407?v=4"
    },
    {
      id: 6,
      name: "April",
      email: "drt@drt.com",
      favoriteColor: "blue",
      image: "https://avatars.githubusercontent.com/u/36495508?v=4"
    },
    {
      id: 7,
      name: "David",
      email: "drt@drt.com",
      favoriteColor: "blue",
      image: "https://avatars.githubusercontent.com/u/46381236?v=4"
    },
  ];
  
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
  const cardsOnDom = (array) => {
    let domString = "";
    for (const member of array) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="${member.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${member.name}</p>
        <button class="btn btn-danger" id="delete--${member.id}">Delete</button>
      </div>
    </div>`;
    }
    renderToDom("#app", domString);
  }
  
  const filter = (array, color) => {
    const colorArray = [];
  
    array.forEach((item) => {
      if (item.favoriteColor === color) {
        colorArray.push(item);
      }
    });
  
    return colorArray;
  }
  
  // ******************** //
  // ****** CREATE ****** //
  // ******************** //
  
  // 1. select/target the form on the DOM
  const form = document.querySelector('form');
  
  // 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate
  const createMember = (e) => {
    e.preventDefault(); // EVERY TIME YOU CREATE A FORM
  
    const newMemberObj = {
      id: team.length + 1,
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      favoriteColor: document.querySelector("#favoriteColor").value,
      image: document.querySelector("#image").value
    }
  
    team.push(newMemberObj);
    cardsOnDom(team);
    form.reset();
  }
  
  // 3. Add an event listener for the form submit and pass it the function (callback)
  form.addEventListener('submit', createMember);
  
  
  
  // ******************** //
  // ****** DELETE ****** //
  // ******************** //
  
  // Here we will be using event bubbling
  // 1. Target the app div
  // 2. Add an event listener to capture clicks
  // 3. check e.target.id includes "delete"
  // 4. add logic to remove from array
  // 5. Repaint the DOM with the updated array
  // 6. Organize code so that everything is in a function except selectors
  
  // 1. Target the app div
  const app = document.querySelector("#app");
  
  // 2. Add an event listener to capture clicks
  
  app.addEventListener('click', (e) => {
    // console.log(e.target.id);
    
  // 3. check e.target.id includes "delete"
    if (e.target.id.includes("delete")) {
      // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
      const [, id] = e.target.id.split("--");
  
  // 4. add logic to remove from array
      // .findIndex is an array method
      const index = team.findIndex(e => e.id === Number(id));
  
      // .splice modifies the original array
      team.splice(index, 1);
  
  // 5. Repaint the DOM with the updated array
      cardsOnDom(team);
    }
  });
  
  const startApp = () => {
    cardsOnDom(team);
    // events(); // ALWAYS LAST
  }
  
  
  startApp();