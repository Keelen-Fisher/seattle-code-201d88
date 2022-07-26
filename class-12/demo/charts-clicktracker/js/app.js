'use strict';


const ctx = document.getElementById('myChart').getContext('2d');
// Constructor (larg - my canvas element, 2nd arg - big ol object)
const myChart = new Chart(ctx, {
  // passing in as an anoum
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
});


// // global varriables

// let goatContainer = document.querySelector('section');
// let resultButton = document.querySelector('section + div');
// let image1 = document.querySelector('section img:first-child');
// let image2 = document.querySelector('section img:nth-child(2)');

// let clicks = 0;
// let maxClicksAllowed = 9;
// let uniqueImageCount = 4;
// let indexArray = [];

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
  
//   while (indexArray.length < uniqueImageCount) {
//     let randomNumber = getRandomNumber();
//     if (!indexArray.includes(randomNumber)) {
//       indexArray.push(randomNumber);
//     }
//   }
//   /* refer to goat-array-includes.png in the facilitator/whiteboard-diagrams folder for a visualization of this */
//   console.log(indexArray);

//   let goat1 = indexArray.shift();
//   let goat2 = indexArray.shift();
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
//     goatContainer.className = 'no-voting';
//     renderChart();
//   } else {
//     renderGoats();
//   }
// }

// function renderChart() {
//   let goatNames = [];
//   let goatLikes = [];
//   let goatViews = [];
//   for (let i = 0; i < Goat.allGoatsArray.length; i++) {
//     goatNames.push(Goat.allGoatsArray[i].name);
//     goatLikes.push(Goat.allGoatsArray[i].clicks);
//     goatViews.push(Goat.allGoatsArray[i].views);
//   }

//   /* refer to Chart.js > Chart Types > Bar Chart: 
//   https://www.chartjs.org/docs/latest/charts/bar.html 
//   and refer to Chart.js > Getting Started > Getting Started:
//   https://www.chartjs.org/docs/latest/getting-started/ */
//   const data = {
//     labels: goatNames,
//     datasets: [{
//       label: 'Likes',
//       data: goatLikes,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)'
//       ],
//       borderWidth: 1
//     },
//     {
//       label: 'Views',
//       data: goatViews,
//       backgroundColor: [
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 159, 64)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   const config = {
//     type: 'bar',
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };
//   let canvasChart = document.getElementById('myChart');
//   const myChart = new Chart(canvasChart, config);
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
