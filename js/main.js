
// function to enter players' name
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
