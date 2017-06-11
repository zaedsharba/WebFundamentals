var daysUntilMyBirthday = 60;

while (daysUntilMyBirthday >= 0){
  if(daysUntilMyBirthday === 0){
    console.log(daysUntilMyBirthday + " days. YAY IT'S MY BIRTHDAY!");
  }

  else if(daysUntilMyBirthday < 5){
    console.log(daysUntilMyBirthday + " days until my birthday. ALMOST MY B-DAY!!!");
  }
  else if (daysUntilMyBirthday < 30){
      console.log(daysUntilMyBirthday + " days until my birthday. I can't wait!");
  }
  else {
        console.log(daysUntilMyBirthday + " days until my birthday. This is taking forever!!!!!! :(");
  }
  daysUntilMyBirthday--;
  }
