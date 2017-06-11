function millions(){
var sum = 0;
var pay = .01;
var day = 0;
for (var i = 1; i<= 30; i++){
  sum = sum + pay;
  day++;

console.log("Day: " + day + " earned " + pay + ", sum :" + sum);
pay = pay + pay;
}
}
millions();
