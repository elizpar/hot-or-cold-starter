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
    if (userEntry % 1 == 0 && userEntry < 100 && userEntry > 1){ 
      $('#guessList').append('<li><span>' +userEntry+ '</span></li>');
      $('#userGuess').val("");
      counter++;
      $('#count').html(counter);

      }

    else {

    alert('Enter a number between 1 and 100!');
         }   
  });

/* if (userEntry == randomNum) {
  $('#feedback').html('Sweet.');
  }
  else if (userEntry - randomNum < randomNum + 10) {
  $('#feedback').html('Very hot!');
  }
else if (userEntry - randomNum < 10) && randomNum + 10) {
  $('#feedback').html('Mmm, close.');
  }
else if (userEntry - randomNum < randomNum + 10) {
  $('#feedback').html('Cool.');
  }
else if (userEntry - randomNum < randomNum + 10) {
  $('#feedback').html('Brrr');
  }
else if (userEntry - randomNum < randomNum + 10) {
  $('#feedback').html('Ice cold!');
  }

  ); check for hot first... order I want to makes these test... what makes a
what are the necessary tests to run? check match first
check for something NaN or outside ... do it with javascript

*/

});