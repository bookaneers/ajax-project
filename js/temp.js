// var pokemonList = [];

// var playerOnePicks = [];

// var playerTwoPicks = [];

// var playerOneList = [];

// var playerTwoList = [];


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

}

function getPokemonData() {

  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  // xhr.responseType = 'json';
  // xhr.addEventListener('load', function () {
  for (var i = 0; i < pokemonList.length; i++) {
    if (i < 10) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokemonList[i]);
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        console.log(xhr.response);
        playersPicksObj.player1[pokemonList[i]] = xhr.response;
      });
      xhr.send();
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokemonList[i]);
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        playersPicksObj.player2[pokemonList[i]] = xhr.response;
      });
      xhr.send();
    }
  }

  console.log(playersPicksObj);


}

// function randomly pick 10 creatures from pokemonList and assign them to each player (2)
function playersPicks() {

  var picks;
  for (let i = 0; i < 20; i++) {
    picks = Math.floor(Math.random() * (150 - 0 + 1) + 0);
    console.log(pokemonList[picks]);
    if (i < 10) {
      if (playersPicksObj.player1['pokemonList[picks]']) i--;
      else playersPicksObj.player1[pokemonList[picks]] = {};
      // else playersPicksObj.player1[pokemonList[picks]] = getPokemonData(pokemonList[picks]);

    } else {
      if (playersPicksObj.player2['pokemonList[picks]']) i--;
      else playersPicksObj.player2[pokemonList[picks]] = {};
      // else playersPicksObj.player2[pokemonList[picks]] = getPokemonData(pokemonList[picks]);
    }
  }
  console.log(playersPicksObj);
  // battles();
}

// function do obtain ALL pokemon names from pokeapi (1)
function getPokemonNames() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  request.responseType = 'json';

  // load function: push ALL creatures to pokemonList
  request.addEventListener('load', function () {
    for (var i = 0; i < request.response.results.length; i++) {
      pokemonList.push(request.response.results[i].name);
    }
    console.log(pokemonList);
    playersPicks();

  });
  request.send();
}

getPokemonNames();







can you tell me what part is asynchronous ?

  [LFZ] Tim Horist  6: 34 PM
Usually you can spot things that might be asynchronous as things that either a) take a function as an argument, or b) return a promise that you have to call ‘.then’ or ‘.catch’ on.

Fernando Figueiredo  6: 35 PM
driving over pavers
6: 35
wrong message

[LFZ] Tim Horist  6: 36 PM
In your.put example above, ‘app.put(…)’, ‘db.query(…)’, and ‘res.json(…)’ are all asynchronous

Fernando Figueiredo  6: 39 PM
if app.put is asynchronous, then I can't call a function inside it, right?
6: 39
Or if i do, it won't wait for the return

[LFZ] Tim Horist  6: 40 PM
You can, as long as the contents of the function are synchronous, or it returns a promise

Fernando Figueiredo  6: 41 PM
I am going to try something here...
New

[LFZ] Tim Horist  6: 42 PM
For example:
function (a, b) {
  return a + b;
}
is always synchronous, no matter where it’s called from
