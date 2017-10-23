'use strict';
$(document).ready(function(){
  console.log('script loaded')

let gameSquares = $('.square');

// console.log('gameSquares: ', gameSquares)

let allSquares = {};

console.log('**', gameSquares[1].id)

$.each(gameSquares, (index, square) => {
  // console.log('square: ', square)
  let squareValue = square.id;
  allSquares[squareValue] = squareValue;
})

console.log('allSquares', allSquares)





})
