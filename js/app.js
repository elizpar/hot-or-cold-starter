
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

//generate random number on page load
var randomNum= Math.floor((Math.random() * 100) + 1);

$('#guessButton').on('click', function(event) {
    event.preventDefault();
    var userEntry = $('#userGuess').val();
      $('#guessList').append('<li><span>' +userEntry+ '</span></li>');
      $('#userGuess').val("");
      $('#count').html('1');     
  });

if (randomNum == userEntry) {
  $('#feedback').html('Sweet');
}
if (randomNum > userEntry + 75 && randomNum )

});
});

