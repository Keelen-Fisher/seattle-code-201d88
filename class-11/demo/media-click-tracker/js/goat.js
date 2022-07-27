'use strict';
// ************** IN CLASS NOTES *****************
// global varriables

console.log('hey world Hey!');

// ******** Global Variables******************
let totalVotes = 15;
let allGoats = []


// ********** DOM REFERENCES*****************
//  YOU NEED TO CREATE 5 REFERENCES: TWO IMG, DIV AND UL, THEN SECTION.
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let resultBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-list')

// ***********LOCAL STORAGE CONTINUES**************

 //  STEP 3: GET DATA OUT OF LOCAL STORAGE

 let retreivedGoats = localStorage.getItem('myGoats');

 console.log('retrievedGoats', retreivedGoats);


 let parsedGoats = JSON.parse(parsedGoats);


 console.log('parsed Goats >>>>', parsedGoats)



// ********* CONSTRUCT FUNCTION **************

function Goat(name, photoExtension = 'jpg'){
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allGoats.push(this);

}


// ***************** OBJECT CREATION ********************

if(retreivedGoats){
allGoats = parsedGoats;
// REBUILD OUR GOAT INSTANCES BY RUNNING PARSED BACK THROUGH THE CONSTRUCTOR 
// for(let i = 0; i < parsedGoats.length; i++){
//   if(parsedGoats[i].name === 'bunny-goat'){
//     let reconstructedBunnyGoat = new Goat('bunny-goat', 'png');
//     reconstructedBunnyGoat.views = parsedGoats[i].views;
//     reconstructedBunnyGoat.votes = parsedGoats[i].votes;
//   }
//   else{
//     let reconstructedGoat = new Goat(parsedGoats[i].name);
//     reconstructedGoat.views = parsedGoats[i].views;
//     reconstructedGoat.votes = parserdGoats[i].votes;
//   }


// }

}

else{
new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('crusin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');
}
console.log('allGoats from Constructor >>>', allGoats);
// *************** Helper FUNCTIONS *******************

function randomIndexGenerator(){
  return Math.floor(Math.random() * allGoats.length);
}

function renderImg(){
  //  Just get 2 images on the page:
 let imgOneIndex = randomIndexGenerator();
 let imgTwoIndex = randomIndexGenerator();

//  make sure they are unique each round 

while(imgOneIndex === imgTwoIndex){
  imgTwoIndex = randomIndexGenerator();

}

// Hint for lab 11: use a container to store your 3 index numbers and do validation against that collectio/container 
  imgOne.src = allGoats[imgOneIndex].photo;
  imgOne.alt = allGoats[imgOneIndex].name;
  allGoats[imgOneIndex].views++;
  imgTwo.src = allGoats[imgTwoIndex].photo;
  imgTwo.alt = allGoats[imgTwoIndex].name;
  allGoats[imgTwoIndex].views++;

}

// **************** INVOKE ***************
renderImg();



// *********** EVENT HANDLERS ***********************
//  click- on the imgs -  rerender new imaged(increase the view on the goats that are rendered) - count the vote of the goat that was clicked/ lower your total number of votes 
function handleClick(event){
  let imgClicked = event.target.alt;
  for(let i = 0; i < allGoats.length; i++){
    if(imgClicked === allGoats[i].name){
      allGoats[i].votes++;
    }
  }
  totalVotes--;
  renderImg();

  console.log(imgClicked);

  if(totalVotes === 0){

    // ************ LOCAL STORAGE FROM CLASS13 STARTS HERE ***********

      // STEP 1: STRINGIFY THE DATA (THE ARRAY OF ALLGOATS)
      let stringifiedGoats = JSON.stringify(allGoats);

      console.log('stringified goats', stringifiedGoats)

      // STEP 2: ADD TO LOCAL STORAGE
      localStorage.setItem('myGoats', stringifiedGoats);

      
  }
  
 }

//  in the new class12, we are going to take off element append for liElem and call on the renderchart function
 function handleShowResults(){
  if(totalVotes === 0){
    renderChart();
 
    resultsBtn.removeEventListener('click', handleShowResults);
  }
 }

// ********** Chart Demo *******************

let canvasElem = document.getElementById('my-chart');

function renderChart(){

let goatNames = [];
let goatVotes = [];
let goatViews = [];

for(let i = 0; i < allGoat.length; i++){
  goatNames.push(allGoats[i].name);
  goatVotes.push(allGoats[i].votes);
  goatViews.push(allGoats[i].views);
}  

  let myObj = {
    type: 'bar',
    data: {
        labels: goatNames,
        datasets: [{
            label: '# of Votes',
            data: goatVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label: '# of Views',
          data: goatViews,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

new Chart(canvasElem, myObj);

}





// ************** EVENT LISTENERS ******************


imgContainer.addEventListener('click', handleClick);

resultsBtn.addEventListener('click', handleShowResults);














































// let goatContainer = document.querySelector('section');
// let resultButton = document.querySelector('section + div');
// let image1 = document.querySelector('section img:first-child');
// let image2 = document.querySelector('section img:nth-child(2)');

// let clicks = 0;
// let maxClicksAllowed = 9;

// // functional logic

// function Goat(name, src) {
//   this.name = name;
//   this.src = src;
//   this.views = 0;
//   this.clicks = 0;
//   Goat.allGoatsArray.push(this);
// }

// Goat.allGoatsArray = [];

// function getRandomNumber() {
//   return Math.floor(Math.random() * Goat.allGoatsArray.length);
// }

// function renderGoats() {
//   // call the getRandomNumber
//   let goat1 = getRandomNumber();
//   let goat2 = getRandomNumber();

//   while (goat1 === goat2) {
//     goat2 = getRandomNumber();
//   }
//   image1.src = Goat.allGoatsArray[goat1].src;
//   image2.src = Goat.allGoatsArray[goat2].src;
//   image1.alt = Goat.allGoatsArray[goat1].name;
//   image2.alt = Goat.allGoatsArray[goat2].name;
//   Goat.allGoatsArray[goat1].views++;
//   Goat.allGoatsArray[goat2].views++;
// }

// function handleGoatClick(event) {
//   if (event.target === goatContainer) {
//     alert('Please click on an image');
//   }
//   clicks++;
//   let clickGoat = event.target.alt;
//   for (let i = 0; i < Goat.allGoatsArray.length; i++) {
//     if (clickGoat === Goat.allGoatsArray[i].name) {
//       Goat.allGoatsArray[i].clicks++;
//       break;
//     }
//   }
//   if (clicks === maxClicksAllowed) {
//     goatContainer.removeEventListener('click', handleGoatClick);
//     // give the button an event lister and styles so the user
//     // knows its an active button:
//     resultButton.addEventListener('click', renderResults);
//     resultButton.className = 'clicks-allowed';
//     goatContainer.className = 'no-voting';
//   } else {
//     renderGoats();
//   }
// }

// function renderResults() {
//   let ul = document.querySelector('ul');
//   for (let i = 0; i < Goat.allGoatsArray.length; i++) {
//     let li = document.createElement('li')
//     li.textContent = `${Goat.allGoatsArray[i].name} had ${Goat.allGoatsArray[i].views} view and was clicked ${Goat.allGoatsArray[i].clicks} times.`;
//     ul.appendChild(li);
//   }
// }

// // executable code

// new Goat('Cruising Goat', './images/cruisin-goat.jpg');
// new Goat('Float Your Goat', './images/float-your-goat.jpg');
// new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg');
// new Goat('Kissing Goat', './images/kissing-goat.jpg');
// new Goat('Sassy Goat', './images/sassy-goat.jpg');
// new Goat('Smiling Goat', './images/smiling-goat.jpg');
// new Goat('Sweater Goat', './images/sweater-goat.jpg');

// renderGoats();

// goatContainer.addEventListener('click', handleGoatClick);
