// declare global variables and objects
var pokemonList = [];
var playerOnePicks = [];
var playerTwoPicks = [];
var playerOneList = [];
var playerTwoList = [];
// var score = {
//   playerone: 10,
//   playertwo: 10
// };

function chosingFighter2(event) {
  var fighterP2 = {};
  if (event.path[1].className === 'img-grid-p2') {
    var fighterNumber = event.path[0].alt;
    document.getElementById(event.path[0].id).className = 'fighting';
    fighterP2.weight = playerTwoList[fighterNumber].weight;
    fighterP2.height = playerTwoList[fighterNumber].height;
    fighterP2.abilities = playerTwoList[fighterNumber].abilities.length;
    fighterP2.moves = playerTwoList[fighterNumber].moves.length;
    fighterP2.base_exp = playerTwoList[fighterNumber].base_experience;
    document.querySelector('#message').textContent = 'Player 2, pickup a weapon';
    window.removeEventListener('click', chosingFighter2);
  }
}

function chosingWeapon(event) {
  if (event.path[1].className === 'img-grid-w') {
    document.getElementById(event.path[0].id).classList.add('picked');
    window.removeEventListener('click', chosingWeapon);
    document.querySelector('#message').textContent = 'Player 2, pickup a fighter';
  }
}

function chosingFighter1(event) {
  var fighterP1 = {};
  if (event.path[1].className === 'img-grid-p1') {

    var fighterNumber = event.path[0].alt;
    document.getElementById(event.path[0].id).className = 'fighting';
    fighterP1.weight = playerOneList[fighterNumber].weight;
    fighterP1.height = playerOneList[fighterNumber].height;
    fighterP1.abilities = playerOneList[fighterNumber].abilities.length;
    fighterP1.moves = playerOneList[fighterNumber].moves.length;
    fighterP1.base_exp = playerOneList[fighterNumber].base_experience;
    document.querySelector('#message').textContent = 'Player 1, pickup a weapon';
    window.removeEventListener('click', chosingFighter1);
  }
}

function eachFight(battle) {

  if (battle % 2 === 1) {
    // player 1 choose a fighter
    document.querySelector('#message').textContent = 'Player 1, choose a fighter';

    window.addEventListener('click', chosingFighter1);

    window.addEventListener('click', chosingWeapon);

    window.addEventListener('click', chosingFighter2);
  }
}

function fights() {
  for (var i = 1; i <= 10; i++) {
    eachFight(i);
  }
}

function pickingNames() {
  // routine to obtein players names
  var $player1 = document.querySelector('#player1');
  var $player2 = document.querySelector('#player2');

  // name of the first player
  $player1.addEventListener('click', naming1);
  function naming1(event) {
    var name1 = prompt('Enter player\'s name', 'Player One');
    if (name1 != null) {
      $player1.textContent = name1;
    }
    var $player1div = document.querySelector('.player1');
    $player1div.className = 'player1nohover';
    $player1.removeEventListener('click', naming1);
    document.querySelector('#message').textContent = 'Enter Player 2 name...';
  }

  // name of the first player
  $player2.addEventListener('click', naming2);
  function naming2(event) {
    var name2 = prompt('Enter player\'s name', 'Player Two');
    if (name2 != null) {
      $player2.textContent = name2;
    }
    var $player2div = document.querySelector('.player2');
    $player2div.className = 'player2nohover';
    $player2.removeEventListener('click', naming2);
    fights();
  }
}

function startGame() {
  document.querySelector('#message').textContent = 'Starting the game...';

  function helloThere() {
    document.querySelector('#message').textContent = 'Enter Player 1 name...';
  }
  setTimeout(helloThere, 2000);
  pickingNames();
}

function battles() {
  document.querySelector('#p1c1').src = playerOneList[0].sprites.front_default;
  document.querySelector('#p1c2').src = playerOneList[1].sprites.front_default;
  document.querySelector('#p1c3').src = playerOneList[2].sprites.front_default;
  document.querySelector('#p1c4').src = playerOneList[3].sprites.front_default;
  document.querySelector('#p1c5').src = playerOneList[4].sprites.front_default;
  document.querySelector('#p1c6').src = playerOneList[5].sprites.front_default;
  document.querySelector('#p1c7').src = playerOneList[6].sprites.front_default;
  document.querySelector('#p1c8').src = playerOneList[7].sprites.front_default;
  document.querySelector('#p1c9').src = playerOneList[8].sprites.front_default;
  document.querySelector('#p1c10').src = playerOneList[9].sprites.front_default;

  document.querySelector('#p2c1').src = playerTwoList[0].sprites.front_default;
  document.querySelector('#p2c2').src = playerTwoList[1].sprites.front_default;
  document.querySelector('#p2c3').src = playerTwoList[2].sprites.front_default;
  document.querySelector('#p2c4').src = playerTwoList[3].sprites.front_default;
  document.querySelector('#p2c5').src = playerTwoList[4].sprites.front_default;
  document.querySelector('#p2c6').src = playerTwoList[5].sprites.front_default;
  document.querySelector('#p2c7').src = playerTwoList[6].sprites.front_default;
  document.querySelector('#p2c8').src = playerTwoList[7].sprites.front_default;
  document.querySelector('#p2c9').src = playerTwoList[8].sprites.front_default;
  document.querySelector('#p2c10').src = playerTwoList[9].sprites.front_default;

  startGame();
}

function getPokemonData(name, player) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (player === 'player1') {
      playerOneList.push(xhr.response);
    } else {
      playerTwoList.push(xhr.response);
    }
    if (playerOneList.length === 10 && playerTwoList.length === 10) {
      battles();
    }
  });
  xhr.send();
}

// function do obtain all pokemon names from pokeapi
function getPokemonNames() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  request.responseType = 'json';

  // load function: randomly assign 10 creaturs to each player
  request.addEventListener('load', function () {

    // routine to read all pokemon creatures
    // and push them to pokemonList
    for (var i = 0; i < request.response.results.length; i++) {
      pokemonList.push({ name: request.response.results[i].name });
    }

    // random pick 10 creatures from pokemonList and
    // assign them to each player
    var picks;
    for (let i = 0; i < 20; i++) {
      picks = Math.floor(Math.random() * (150 - 0 + 1) + 0);
      if (i % 2 === 0) {
        playerOnePicks.push(getPokemonData(pokemonList[picks].name, 'player1'));
      } else {
        playerTwoPicks.push(getPokemonData(pokemonList[picks].name, 'player2'));
      }
    }

  });
  request.send();
}

getPokemonNames();
