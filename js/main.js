// functions to get the pokemon's info and organize it in an array and in an object

// function do obtain pokemon's complete info from pokeapi based on list of names
function getPokemonData(name, index) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {

    if (index <= 10) playersPicksObj.player1[index] = xhr.response;
    else playersPicksObj.player2[index] = xhr.response;

  });
  xhr.send();
}

// function do obtain a list of pokemon names from pokeapi
function getPokemonNames() {

  var request = new XMLHttpRequest();
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  request.responseType = 'json';

  // load function: randomly assign 10 creaturs to each player
  request.addEventListener('load', () => {

    // routine to read ALL pokemon creatures and push them to pokemonList
    for (var i = 0; i < request.response.results.length; i++) {
      pokemonList.push(request.response.results[i].name)
    }

    // randomly pick 10 creatures from pokemonList and assign them to each player
    var picks;
    for (let i = 1; i <= 20; i++) {
      picks = Math.floor(Math.random() * (150 - 0 + 1) + 0);
      getPokemonData(pokemonList[picks], i);
    }
  });
  request.send();
}

getPokemonNames();
