// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
var maya = {
  firstName: "Maya",
  lastName: "Angelou",
  drink: 1,
  spirit: "Wine",
  cleanCut: 1,
  loner: 1,
  disciplined: 1,
  office: 0,
  profession: "Author"
};
var twain = {
  firstName: "Mark",
  lastName: "Twain",
  drink: 1,
  spirit: "Liquor",
  cleanCut: 0,
  loner: 1,
  disciplined: 1,
  office: 1,
  profession: "Author"
};
var agatha = {
  firstName: "Agatha",
  lastName: "Christie",
  drink: 0,
  cleanCut: 0,
  loner: 1,
  disciplined: 1,
  office: 0,
  profession: "Author"
};
var george = { 
  firstName: "George",
  lastName: "Orwell",
  drink: 0,
  cleanCut: 0,
  loner: 1,
  disciplined: 1,
  office: 0,
  profession: "Author"
  };
var albert = {
  firstName: "Albert",
  lastName: "Einstein",
  drink: 0,
  cleanCut: 0,
  loner: 1,
  disciplined: 1,
  office: 1,
  profession: "Scientist"
};
var andy = {
  firstName: "Andy",
  lastName: "Warhol",
  drink: 1,
  spirit: "Liquor",
  cleanCut: 1,
  loner: 0,
  disciplined: 0,
  office: 1,
  profession: "Artist"
};
var pablo = {
  firstName: "Pablo",
  lastName: "Picasso",
  drink: 0,
  cleanCut: 1,
  loner: 0,
  disciplined: 1,
  office: 1,
  profession: "Artist"
};
var tesla = { 
  firstName: "Nikola",
  lastName: "Tesla",
  drink: 0,
  cleanCut: 1,
  loner: 1,
  disciplined: 1,
  office: 1,
  profession: "Inventor"
};
var darwin = {
  firstName: "Charles",
  lastName: "Darwin",
  drink: 0,
  cleanCut: 0,
  loner: 1,
  disciplined: 0,
  office: 1,
  profession: "Scientist"
};
var freud = {
  firstName: "Sigmund",
  lastName: "Freud",
  drink: 0,
  cleanCut: 1,
  loner: 1,
  disciplined: 1,
  office: 1,
  profession: "Scientist"
};
var flw = {
  firstName: "Frank Lloyd",
  lastName: "Wright",
  drink: 0,
  cleanCut: 1,
  disciplined: 0,
  office: 0,
  profession: "Architect"
};


// Questions
//var ans1 = prompt("Do you drink reguraly?");
//var ans3 = prompt("Do you have style?");
//var ans2 = prompt("Do you prefer wine or liquor?");
// var ans4 = prompt("Are you a social butterfly?");
// var ans5 = prompt("Are you a procrastinator?");
// var ans6 = prompt("Would you prefer working in an office or your living room?");
// var ans7 = prompt("Do you find enough time throughout the day to hone your craft?");
// Troubleshooting Tree 
var ans1 = prompt("Do you drink reguraly?");
  if (ans1 === "yes") {  //Drink regularly?
    var ans2 = prompt("Do you prefer wine or liquor?");
      if (ans2 === "wine") {
        alert("Maya Angelou the famous author as well enjoys a bottle sherri when she get's down to writing.");
      }
      else {
        var ans4 = prompt("Are you a social butterfly?");
          if (ans4 === "yes") {
            alert("You have much in common with Andy Warhol. Mr. Warhol was quite the social butterfly routinely having cocktails at lunchtime meetings and known for secretly videotaping his friends. A creative soul indeed!")
          }
          else {
            alert("Mark Twain the famous American Author also had a taste for liquor, especially whisky as he wrote many of his tales, including Huckleberry Finn.");
          };
      };
  }  
  else {
    var ans3 = prompt("Do you have style?");
   //Fashionable?
  };
  if (ans3 === "no") { //Do You Have Style?
    alert("Albert Einstein is a relative match to your daily life.");
  }
  else {
    var ans5 = prompt("Are you a procrastinator?");
  };
    if (ans5 === "yes") {
      alert("The great architect Frank Lloyd Wright was also quite the procrastinator. It was said he did most of his drafting in his head. At times he would be wait until the very last minute with a client before he put his ideas onto paper.");
    }
    else {

    }
  // if (ans2 === "wine") {
    // var ans6 = prompt("Do you prefer working in an office or living room?");
   //}
    //else { 
      //alert(")
    //};

  // }
  // else {
  //   prompt(ans5)
  // };
  // if (ans3 === "yes") { //Do you have style?
  //   prompt(ans4);  //Social Butterfly?
  // }
  // else {
  //   prompt(ans7);  //Free Time?
  // };
  // if (ans4 === "yes") { //Social butterfly?
  //   prompt(ans6); //Office or Living Room?
  // }
  // else {
  //   prompt(ans7); //Free Time or Not
  // };
  
  // if (ans6 === "Office") {
  //   alert(maya);
  // }
  // else {
  //   alert(agatha);
  // };
  
