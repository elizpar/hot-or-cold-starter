$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

$('.new').on('click', function(event){
  location.reload();
});

var counter= 0;
var randomNum= Math.floor((Math.random() * 100) + 1);
console.log(randomNum);

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
  
  var choiceDiff= userEntry - randomNum;

  if (userEntry === randomNum) {
    $('#feedback').html('Sweet.');
    console.log('sweet');
  }

  else if (choiceDiff <= 10) {
    $('#feedback').html('Very hot!');
    console.log('very hot');
    console.log(randomNum);
  }

  else if (choiceDiff <= 25) {
    $('#feedback').html('Mmm, close.');
    console.log('Mmm, close.');
    console.log(randomNum);
  }

  else if (choiceDiff <=50) {
    $('#feedback').html('Cool.');
    console.log('cool');
    console.log(randomNum);
  }

  else if (choiceDiff <= 75) {
    $('#feedback').html('Brrr');
    console.log('Brrr');
    console.log(randomNum);
  }

  else {
    $('#feedback').html('Ice cold!');
    console.log('ice cold');
    console.log(randomNum);
  }
/*
  ); check for hot first... order I want to makes these test... what makes a
what are the necessary tests to run? check match first
check for something NaN or outside ... do it with javascript

*/
});
});


