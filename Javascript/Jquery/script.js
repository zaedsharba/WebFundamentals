$(document).ready(function(){
  $('button').click(function(){
  //var myText = $('#myParagraph').text();
  //alert(myText);

  //$('button').click(function(){
  //$('#myParagraph').text('see how I .text() works as a setter!');

  //})

 $('h4').click(function(){
    //alert('hello');

  })

  $('h1').click(function(){
    alert('bye');
  })


  $('#hide').click(function(){
   $('p').hide(2000);
  })

  $('#show').click(function(){
   $('p').toggle();
  })

  $('h3').hover(function(){
    $('h2').text('go see the space needle!');
  });

  $('.append').click(function(){
    $('.result').append('<h4>.append adds HTML! </h4>');

  });

  $('button').click(function(){
   $('button').css('background-color', 'blue');

  });
  $(function run(){
  $("#clickme").click(function(){
    $("#self").fadeIn("slow");


  })

  //var $newdiv;
    //for (var i = 0; i < 10; i++) {
        //$newdiv = $('<div class="boxes" />');
        //$('body').append($newdiv);
    //}
    //$(".boxes").click(function(){
      //$(this).hide(2000);
    //})




});
