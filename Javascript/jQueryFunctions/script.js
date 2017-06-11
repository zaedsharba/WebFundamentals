$(document).ready(function(){

$("#mac").click(function(){
  $("#mac").hide(2000);
})

$("#show").click(function(){
  $("#mac").show(2000);
})

$("#toggle").click(function(){
  $("#mac2").toggle(2000);
})

$("#slideDown").click(function(){
  $("#mac2").slideDown(2000);
})

$("#slideDown2").click(function(){
  $("p").slideDown(2000);
})

$("#slideUp").click(function(){
  $("p").slideUp(2000);
})

$("#slideToggle").click(function(){
  $("#mac3").slideToggle(2000);
})

$("#fadeIn").click(function(){
  $("#mac4").fadeIn(2000);

})

$("#fadeOut").click(function(){
  $("p").fadeOut(2000);

})

$("#addClass").click(function(){
  $("#first").addClass("para style");
})

$("#removeClass").click(function(){
  $(".para2,  #first").removeClass("para2 para");
})

$(".top4").before("<p>Before</p>");

$(".para2").after("<p>After</p>");

$(".top4").append("<p>append</p>");

$("div.top4").html();

$("h4").hover(function(){
  $("h3").text("Going to win the superbowl!");

})

$("img").click(function(){
  $(this).hide(2000);
})


});
