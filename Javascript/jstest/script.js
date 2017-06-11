function response(){

  var HOUR = 7;
  var MINUTE = 50;
  var PERIOD = "PM";

  //...your program should print "It's %almost% %9% in the %morning%"
  console.log(HOUR, MINUTE, PERIOD);
  var relativeTime;
  var timeOfDay;

  if (PERIOD === "AM"){
    timeOfDay = "In the morning"
  }
  else if(PERIOD === "PM"){
    timeOfDay = "In the Evening"
  }

  if(MINUTE < 30){
    relativeTime = "just after"
  }
  else if(MINUTE > 30){
    relativeTime = "almost";

    HOUR = HOUR + 1;

  }
console.log("It's " + relativeTime + " " + HOUR + " " + timeOfDay + ".");
}
response();
//And when changed to...

//...your program should print "It's just after 7 in the evening"
