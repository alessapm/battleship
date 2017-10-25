'use strict';
$(document).ready(function(){
  console.log('script loaded')

let gameSquares = $('.square');

let shipLocations = {
  Carrier: {
    shipLength: 5,
    locations: ['A2', 'A3', 'A4', 'A5', 'A6']
  },
  Battleship: {
    shipLength: 4,
    locations: ['D1', 'E1', 'F1', 'G1']
  },
  Submarine: {
    shipLength: 3,
    locations: ['E3', 'E4', 'E5']
  },
  Destroyer: {
    shipLength: 3,
    locations: ['F8', 'F9', 'F10']
  },
  Patrol: {
    shipLength: 2,
    locations: ['I6', 'J6']
  }
}

let numShipsDestroyed = 0;

//onclick, loop to see if that ID exists in any of the object's values.
//slice that value off of that key's locations array.
//check to see if that locations array length is now 0.

// console.log('gameSquares: ', gameSquares)

let allSquares = {};

// console.log('**', gameSquares[1].id)

//creates the object allSquares that looks like this:
// {
//   A3: 'A3',
//   A4: 'A4'
// }

$.each(gameSquares, (index, square) => {
  // console.log('square: ', square)
  let squareValue = square.id;
  allSquares[squareValue] = squareValue;
})



const checkForFleetDestruction = () => {

}


const checkForShipDestruction = (ship) => {
  if (shipLocations[ship].locations.length === 0) {
    alert('ship destroyed');
    numShipsDestroyed++
  }
}


const checkIfShipLocation = (id) => {
    for (let x in shipLocations) {
    // console.log(shipLocations[x].locations)
    let locationArray = shipLocations[x].locations;

    if (locationArray.includes(id)){
      let newArr = locationArray.splice(locationArray.indexOf(id), 1);
      checkForShipDestruction(x)
      return true
    }
  }
  return false;
}

gameSquares.click((e) => {
  console.log(e.target.id);
  let squareId = e.target.id;
  let activeSquare = $(`#${squareId}`);

  // should check if it is present in obj or not-
  //if yes, changes background color to red and border to yellow
  //if no, changes background to gray.
  activeSquare.addClass('inactive');

  checkIfShipLocation(squareId) ? activeSquare.css('background-color', 'red') : activeSquare.css('background-color', '#4A4742')

  console.log('**', shipLocations)

  // on click it should change the UI and mark it as guessed.

})





})
