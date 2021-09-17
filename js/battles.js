// function to create battle grid and input players' name

// function to enter players' name
function names() {
  // setTimeout(() => {

    var $message = document.querySelector('#message');
    $message.textContent = 'Welcome Players! Please enter your names...';

    function enterName(event) {
      const player = event.target;
      player.textContent = prompt('Enter player\'s name', 'Player');
      player.removeEventListener('click', enterName);
      player.classList.add('noMoreHover');
    };

    // add name of the first player
    var $playerOne = document.querySelector('#playerOne');
    $playerOne.addEventListener('click', enterName);

    // add name of the second player
    var $playerTwo = document.querySelector('#playerTwo');
    $playerTwo.addEventListener('click', enterName);
  // }, 0);
}

// function to set up screen grid with pokemon creatures
function preparingForBattles() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (var i = 1; i <= 10; i++) {
        document.querySelector(`#p1c${i}`).src = playersPicksObj.player1[i].sprites.front_default;
        document.querySelector(`#p1c${i}C`).textContent = playersPicksObj.player1[i].name;
        document.querySelector(`#p2c${i}`).src = playersPicksObj.player2[i + 10].sprites.front_default;
        document.querySelector(`#p2c${i}C`).textContent = playersPicksObj.player2[i + 10].name;
      }

      const error = false;
      if (!error) resolve();
      else reject('Error: Not able to display battle grid.');

    }, 1000);
  });
}

async function gameOn() {
  await preparingForBattles()
    .then(names)
    .catch(err => console.log(err));

  fights();
}

gameOn();
