// function to create battle grid and input players' name

// function to enter players' name
function startGame() {
  console.log('startGame');

  var enterTwoNames = 0;
  var $message = document.querySelector('#message');
  $message.textContent = 'Welcome Players! Please enter your names...';

  function enterName(event) {
    const player = event.target;
    player.textContent = prompt('Enter player\'s name', 'Player');
    player.removeEventListener('click', enterName);
    player.classList.add('noMoreHover');
    enterTwoNames ++;

    if (enterTwoNames === 2) {
      fights();
    }
  };

  // add name of the first player
  var $playerOne = document.querySelector('#playerOne');
  $playerOne.addEventListener('click', enterName);

  // add name of the second player
  var $playerTwo = document.querySelector('#playerTwo');
  $playerTwo.addEventListener('click', enterName);

}

// function to set up screen grid with pokemon creatures
function buildingTheGrid() {
  console.log('buildingTheGrid');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (var i = 1; i <= 10; i++) {
        document.querySelector(`#p1c${i}`).src = playersPicksObj.player1[i].sprites.front_default;
        document.querySelector(`#p1c${i}C`).textContent = playersPicksObj.player1[i].name;
        document.querySelector(`#p2c${i}`).src = playersPicksObj.player2[i + 10].sprites.front_default;
        document.querySelector(`#p2c${i}C`).textContent = playersPicksObj.player2[i + 10].name;
      }
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

buildingTheGrid()
  .then(startGame)
  .catch(err => console.log(err));
