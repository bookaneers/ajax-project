var pokemonList = [];

var playerOnePicks = [];

var playerTwoPicks = [];

var playerOneList = [];

var playerTwoList = [];

// routine to obtein players names
var $player1 = document.querySelector('#player1');
var $player2 = document.querySelector('#player2');
// name of the first player
$player1.addEventListener('click', function (event) {
  var name1 = prompt('Enter player1\'s name', 'Player One');
  if (name1 != null) {
    $player1.textContent = name1;
  }
});
// name of the second player
$player2.addEventListener('click', function (event) {
  var name2 = prompt('Enter player2\'s name', 'Player Two');
  if (name2 != null) {
    $player2.textContent = name2;
  }
});

function battles() {

  document.querySelector('#p1c1').src = playerOneList[0].sprites.back_default;
  document.querySelector('#p1c2').src = playerOneList[1].sprites.back_default;
  document.querySelector('#p1c3').src = playerOneList[2].sprites.back_default;
  document.querySelector('#p1c4').src = playerOneList[3].sprites.back_default;
  document.querySelector('#p1c5').src = playerOneList[4].sprites.back_default;
  document.querySelector('#p1c6').src = playerOneList[5].sprites.back_default;
  document.querySelector('#p1c7').src = playerOneList[6].sprites.back_default;
  document.querySelector('#p1c8').src = playerOneList[7].sprites.back_default;
  document.querySelector('#p1c9').src = playerOneList[8].sprites.back_default;
  document.querySelector('#p1c10').src = playerOneList[9].sprites.back_default;

  document.querySelector('#p2c1').src = playerTwoList[0].sprites.back_default;
  document.querySelector('#p2c2').src = playerTwoList[1].sprites.back_default;
  document.querySelector('#p2c3').src = playerTwoList[2].sprites.back_default;
  document.querySelector('#p2c4').src = playerTwoList[3].sprites.back_default;
  document.querySelector('#p2c5').src = playerTwoList[4].sprites.back_default;
  document.querySelector('#p2c6').src = playerTwoList[5].sprites.back_default;
  document.querySelector('#p2c7').src = playerTwoList[6].sprites.back_default;
  document.querySelector('#p2c8').src = playerTwoList[7].sprites.back_default;
  document.querySelector('#p2c9').src = playerTwoList[8].sprites.back_default;
  document.querySelector('#p2c10').src = playerTwoList[9].sprites.back_default;

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
