var userName = "";
var userEmail = "";

$(function() {
    start();
});

function start(){
  $( "#loginForm" ).slideDown("slow");
  var page = document.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
}


function showGameField(){

  userName = $('#name').val();
  userEmail = $('#email').val();
  var N = 26; 
  var numbers = Array.apply(null, {length: N}).map(Number.call, Number);
  numbers.shift();
  numbers.sort( randOrd );
  //console.log(numbers);

  var orderedNumbers = Array.apply(null, {length: N}).map(Number.call, Number);
  orderedNumbers.shift();

  var firstCell
  var secondCell
  var clickedFirst = false;
  var scores = 100;

  $( "#loginForm" ).fadeOut( "slow", function() {
    $( "#gameField").fadeIn( "slow", function() {
      var i = 0;
      $('table#gameField tr td').each(function () {
        $(this).text(numbers[i]);
        i++
        $(this).on('click', function(event) {

            $('#scores').text(scores);
            scores--;
            $('table#gameField tr td').each(function () {
              $(this).css("background-color", "");
            });

            if(firstCell != null && clickedFirst == true){
            firstCell.css("background-color","#09C"); 
            }

            if(clickedFirst == false){
              firstCell = $(this);
              $(this).css("background-color","#09C");
              clickedFirst = true
            } else if(clickedFirst == true){
              secondCell = $(this);
              $(this).css("background-color","#0aa");
              var temp = firstCell.text();
              firstCell.text($(this).text());
              $(this).text(temp);
              clickedFirst = false;
            }
            
            //check completion
            var index = 0;
            var completed = true;
            $('table#gameField tr td').each(function () {
              if($(this).text() != orderedNumbers[index]){
                completed = false;
              }
              index++;
            });

            if(completed == true){
              firstCell.css("background-color", "");
              secondCell.css("background-color", "");
              alert("Completed");
              $( "#reset" ).fadeIn("slow"); 
              $('#scores').text("Well done, " + userName + ", your scores: " +scores); 
            }
        });
      }); 
    });
  });
}

function randOrd(){
  return (Math.round(Math.random())-0.5);
}

function Reset(){
  $('#scores').text("")
  showGameField(); 
}

/* Created by Alex Pilugin 02.11.2016. */