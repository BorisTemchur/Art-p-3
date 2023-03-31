$(document).ready(function(){
  // камень 1
  $(".kamen12").click(function(){
          $(".kamen13").addClass("onosamoe");
          $(".kamen12").addClass("netosamoe");
      });

// камень 2
      $(".kamen14").click(function(){
              $(".kamen15").addClass("onosamoe1");
              $(".kamen14").addClass("netosamoe1");
          });

          // камень 3
          $(".kamen16").click(function(){
                  $(".kamen17").addClass("onosamoe5");
                  $(".kamen16").addClass("netosamoe6");
              });

              // камень 4
              $(".kamen18").click(function(){
                      $(".kamen19").addClass("onosamoe7");
                      $(".kamen18").addClass("netosamoe8");
                  });

// облака
                  $( function() {
      $( ".sk2" ).draggable();
    } );

    $( function() {
$( ".sk3" ).draggable();
} );

$( function() {
$( ".sk4" ).draggable();
} );

$( function() {
$( ".sk5" ).draggable();
} );

$( function() {
$( ".sk6" ).draggable();
} );

$( function() {
$( ".sk7" ).draggable();
} );

$( function() {
  $( "#dialog" ).dialog();
} );






});
