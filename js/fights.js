function fights() {
  console.log('fights()')

  let fight = 0;
  let fighter1 = '';
  let fighter2 = '';
  let weapon = '';

  function startFight() {
    console.log('startFight()')
    fight++;

    if (fight % 2 === 1) pickOne();
    else pickTwo();
  };

  function fightResult() {

    let winner = '';

    if (fightsResults.weapon === 'weight' || fightsResults.weapon ==='height') {
      if (playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon] >
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon]) {
        winner = fightsResults.playerOne;
        fightsResults.victoriesPlayerOne++;
      };
      if (playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon] <
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon]) {
        winner = fightsResults.playerTwo;
        fightsResults.victoriesPlayerTwo++;
      };
      if (playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon] ===
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon]) {
        winner = "TIE GAME";
      };

      alert('Weapon choose: ' + fightsResults.weapon +
        '\n' + fightsResults.playerOne + '\'s ' + fightsResults.weapon + ' = ' +
        playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon] +
        '\n' + fightsResults.playerTwo + '\'s ' + fightsResults.weapon + ' = ' +
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon] +
        '\n' + 'WINNER : ' + winner);
    }

    if (fightsResults.weapon === 'moves' || fightsResults.weapon === 'abilities') {
      if (playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon].length >
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon].length) {
        winner = fightsResults.playerOne;
        fightsResults.victoriesPlayerOne++;
      };
      if (playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon].length <
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon].length) {
        winner = fightsResults.playerTwo;
        fightsResults.victoriesPlayerTwo++;
      };
      if (playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon].length ===
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon].length) {
        winner = "TIE GAME";
      };

      alert('Weapon choose: ' + fightsResults.weapon +
        '\n' + fightsResults.playerOne + '\'s ' + fightsResults.weapon + ' = ' +
        playersPicksObj.player1[fightsResults.playerOneIndex][fightsResults.weapon].length +
        '\n' + fightsResults.playerTwo + '\'s ' + fightsResults.weapon + ' = ' +
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10][fightsResults.weapon].length +
        '\n' + 'WINNER : ' + winner);
    }


    if (fightsResults.weapon === 'base exp') {
      if (playersPicksObj.player1[fightsResults.playerOneIndex]['base_experience'] >
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10]['base_experience']) {
        winner = fightsResults.playerOne;
        fightsResults.victoriesPlayerOne++;
      };
      if (playersPicksObj.player1[fightsResults.playerOneIndex]['base_experience'] <
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10]['base_experience']) {
        winner = fightsResults.playerTwo;
        fightsResults.victoriesPlayerTwo++;
      };
      if (playersPicksObj.player1[fightsResults.playerOneIndex]['base_experience'] ===
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10]['base_experience']) {
        winner = "TIE GAME";
      };

      alert('Weapon choose: ' + fightsResults.weapon +
        '\n' + fightsResults.playerOne + '\'s ' + fightsResults.weapon + ' = ' +
        playersPicksObj.player1[fightsResults.playerOneIndex]['base_experience'] +
        '\n' + fightsResults.playerTwo + '\'s ' + fightsResults.weapon + ' = ' +
        playersPicksObj.player2[fightsResults.playerTwoIndex + 10]['base_experience']+
        '\n' + 'WINNER : ' + winner);
    }


    if (fight === 5) {
      if (fightsResults.victoriesPlayerOne > fightsResults.victoriesPlayerTwo) {
        alert('PLAYER ONE IS THE WINNER');
      }
      if (fightsResults.victoriesPlayerOne < fightsResults.victoriesPlayerTwo) {
        alert('PLAYER TWO IS THE WINNER');
      }
      if (fightsResults.victoriesPlayerOne === fightsResults.victoriesPlayerTwo) {
        alert('TIE GAME');
      }
      var $message = document.querySelector('#message');
      $message.textContent = 'GAME OVER';
    } else {
      startFight();
    }
  }

  function handlePlayerOne(event) {
    var fighter1 = document.querySelector(`#${event.target.id}C`).textContent;
    document.querySelectorAll(`.${event.target.className}`).forEach(item => {
      // item.classList.remove('hoverOn');
      item.removeEventListener('click', handlePlayerOne);
    });
    fightsResults.playerOne = fighter1;
    fightsResults.playerOneGridPosition = event.path[0].id;
    fightsResults.playerOneIndex = Number(event.path[0].id.slice(3));
    document.querySelector(`#${fightsResults.playerOneGridPosition}`).src = 'images/placeholder-image-square.jpg';
    if (fight % 2 === 1) pickWeapon();
    else fightResult();
  }

  function handlePlayerWeapon(event) {
    var weapon = event.target.textContent;
    document.querySelectorAll(`.${event.target.className}`).forEach(item => {
      // item.classList.remove('hoverOn');
      item.removeEventListener('click', handlePlayerWeapon);
    });
    fightsResults.weapon = weapon;
    if (fight % 2 === 1) pickTwo();
    else pickOne();
  }

  function handlePlayerTwo(event) {
    var fighter2 = document.querySelector(`#${event.target.id}C`).textContent;
    document.querySelectorAll(`.${event.target.className}`).forEach(item => {
      // item.classList.remove('hoverOn');
      item.removeEventListener('click', handlePlayerTwo);
    });
    fightsResults.playerTwo = fighter2;
    fightsResults.playerTwoGridPosition = event.path[0].id;
    fightsResults.playerTwoIndex = Number(event.path[0].id.slice(3));
    document.querySelector(`#${fightsResults.playerTwoGridPosition}`).src = 'images/placeholder-image-square.jpg';
    if (fight % 2 === 1) fightResult();
    else pickWeapon();
  }

  function pickOne() {
    var $message = document.querySelector('#message');
    $message.textContent = 'Player One! Pick your Pokemon fighter...';
    const $playerOneFighter = document.querySelectorAll('.playerOneFighter').forEach(item => {
      // item.classList.add('hoverOn');
      item.addEventListener('click', handlePlayerOne);
    });
  }

  function pickWeapon() {
    var $message = document.querySelector('#message');
    $message.textContent = 'Player! Pick your weapon...';
    if (fight % 2 === 1) $message.textContent = 'Player One! Pick your weapon...';
    else $message.textContent = 'Player Two! Pick your weapon...';
    const $weapons = document.querySelectorAll('.weapons').forEach(item => {
      // item.classList.add('hoverOn');
      item.addEventListener('click', handlePlayerWeapon);
    });
  }

  function pickTwo() {
    var $message = document.querySelector('#message');
    $message.textContent = 'Player Two! Pick your Pokemon fighter...';
    const $playerTwoFighter = document.querySelectorAll('.playerTwoFighter').forEach(item => {
      // item.classList.add('hoverOn');
      item.addEventListener('click', handlePlayerTwo);
    });
  }

  startFight();
}
