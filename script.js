// var buttons = document.querySelectorAll('.btn');
// let gamePattern = [];
// let userPattern = [];
// let level = 0;

// // Initialize the game
// function initGame() {
//   gamePattern = [];
//   userPattern = [];
//   level = 0;
//   nextSequence();
// }

// // Generate a random color and add it to the game pattern
// function nextSequence() {
//   var colors = ['green', 'red', 'yellow', 'blue'];
//   var randomColor = colors[Math.floor(Math.random() * 4)];
//   gamePattern.push(randomColor);
//   playSequence();
// }

// // Play the generated sequence
// function playSequence() {
//   for (let i = 0; i < gamePattern.length; i++) {
//     setTimeout(() => {
//       animateButton(gamePattern[i]);
//     }, 1000 * i);
//   }
// }

// // Handle button click events
// function handleButtonClick(color) {
//   animateButton(color);
//   var ardio =  new Audio('sounds/'+color+'.mp3');
//   ardio.play();
//   userPattern.push(color);

//   if (checkAnswer()) {
//     if (userPattern.length === gamePattern.length) {
//       setTimeout(() => {
//         level++;
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     alert('Game Over! Your score: ' + (level - 1));
//     initGame();
//   }
// }

// // Check if the user's sequence matches the game's sequence
// function checkAnswer() {
//   for (let i = 0; i < userPattern.length; i++) {
//     if (userPattern[i] !== gamePattern[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// // Animate button press
// function animateButton(color) {
//   const button = document.getElementById(color);
//   button.classList.add('pressed');
//   setTimeout(() => {
//     button.classList.remove('pressed');
//   }, 100);
// }

// // Attach click event listeners to buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const color = button.id;
//     handleButtonClick(color);
//   });
// });

// // Start the game
// initGame();





// document.querySelectorAll('.btn'); {
//   // var buttons = $('.btn');
//   var gamePattern = [];
//   var userPattern = [];
//   var level = 0;

//   // Initialize the game
//   function initGame() {
//     gamePattern = [];
//     userPattern = [];
//     level = 0;
//     nextSequence();
//   }

//   // Generate a random color and add it to the game pattern
//   function nextSequence() {
//     var colors = ['green', 'red', 'yellow', 'blue'];
//     var randomColor = colors[Math.floor(Math.random() * 4)];
//     gamePattern.push(randomColor);
//     playSequence();
//   }


// function playSequence() {
//   for (let i = 0; i < gamePattern.length; i++) {
//     setTimeout(() => {
//       animateButton(gamePattern[i]);
//     }, 1000 * i);
//   }
// }

//   // Handle button click events
//   function handleButtonClick(csound) {
//     animateButton(sound);
//     var audio = new Audio('sounds/' + sound + '.mp3');
//     audio.play();
//     userPattern.push(color);

//     if (checkAnswer()) {
//       if (userPattern.length === gamePattern.length) {
//         setTimeout(function() {
//           level++;
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       alert('Game Over! Your score: ' + (level - 1));
//       initGame();
//     }
//   }

//   // Check if the user's sequence matches the game's sequence
//   function checkAnswer() {
//     for (var i = 0; i < userPattern.length; i++) {
//       if (userPattern[i] !== gamePattern[i]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   // Animate button press
//   function animateButton(color) {
//     $('#' + color).addClass('pressed');
//     setTimeout(function() {
//       $('#' + color).removeClass('pressed');
//     }, 100);
//   }

//   // Attach click event listeners to buttons
//   $("buttons").click (function() {
//     var color = $(this).attr('id');
//     handleButtonClick(color);
//   });

//   // Start the game
//   initGame();
// };


var colors = ['green', 'red', 'yellow', 'blue'];
var gamePattern = [];
var userPattern = [];
var level = 0;

$(document).ready(function() {
  
// Initialize the game
  function initGame() {
    gamePattern = [];
    userPattern = [];
    level = 0;
    Start();
  }

  // Generate a random color and add it to the game pattern
  function Start() {
    userPattern=[];
    document.getElementById("level-title").innerHTML= "your level "+level;
    var randomColor = colors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);
    play();
  }

  function play() {
      for (let i = 0; i < gamePattern.length; i++) {
        setTimeout(function() {
          animateButton(gamePattern[i]);
        }, 1000 * i);
      }
    }

  // Handle button click events
  function ButtonClick(sound) {
    animateButton(sound);
    var audio = new Audio('sounds/' + sound + '.mp3');
    audio.play();
    userPattern.push(sound);

    if (checkAnswer()) {
      
      if (userPattern.length === gamePattern.length) {
        setTimeout(function() {
          level++;
          Start();
        }, 1000);
      }
    } else {
      alert('user patter' + (userPattern));
      alert( 'gamePattern' + (gamePattern));
      alert('Game Over! Your score: ' + (level ));
      initGame();
    }
  }

  // Check if the user's sequence matches the game's sequence
  function checkAnswer() {
    for (var i = 0; i < userPattern.length; i++) {
      if (userPattern[i] !== gamePattern[i]) {
        return false;
      }
    } 
      return true;
    }

  // Animate button press
  function animateButton(button) {
    $('#' + button).addClass('pressed');
    setTimeout(function() {
      $('#' + button).removeClass('pressed');
    }, 100);
  }

  // Attach click event listeners to buttons
  $('.btn').click(function() {
    var color = $(this).attr('id');
    ButtonClick(color);
  });

  // Start the game
  initGame();
});