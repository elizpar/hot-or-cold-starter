$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

//reload page on click, yes technically cheating

$('.new').on('click', function(event){
  location.reload();
});
//initialize counter, random number
var counter= 0;
var randomNum= Math.floor((Math.random() * 100) + 1);
console.log(randomNum);

//grab user guess, selectively
$('#guessButton').on('click', function(event) {
  event.preventDefault();
  var userEntry = $('#userGuess').val();

    if (userEntry % 1 == 0 && userEntry < 101 && userEntry > 0){ 
      $('#guessList').append('<li><span>' +userEntry+ '</span></li>');
      $('#userGuess').val("");
      counter++;
      $('#count').html(counter);
    }

    else {
      alert('Enter a number between 1 and 100!');
    }   
  //get absolute value of difference between user guess and random number
  var choiceDiff= Math.abs(userEntry - randomNum);

  //logic
  if (userEntry == randomNum) {
    $('#feedback').html('You WON in '+ counter +' guesses!');
    console.log('You won!');
  }

  else if (choiceDiff <= 10) {
    $('#feedback').html('Very hot!');
    console.log('very hot');
    console.log(choiceDiff);
  }

  else if (choiceDiff > 10 && choiceDiff <= 25) {
    $('#feedback').html('Mmm, close.');
    console.log('Mmm, close.');
    console.log(choiceDiff);
  }

  else if (choiceDiff > 25 && choiceDiff <= 50) {
    $('#feedback').html('Cool.');
    console.log('cool');
    console.log(choiceDiff);
  }

  else if (choiceDiff > 50 && choiceDiff <= 75) {
    $('#feedback').html('Brrr');
    console.log('Brrr');
    console.log(choiceDiff);
  }

  else {
    $('#feedback').html('Ice cold!');
    console.log('ice cold');
    console.log(choiceDiff);
  }

});
});


