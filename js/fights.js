function fights() {
  console.log('fights');

  fighting();

}

// function fights(fighterOne, weapon, fighterTwo) {
//   if (playersPicksObj.player1.fighterOne.weapon > playersPicksObj.player2.fighterTwo.weapon) return fighterOne;
//   else return fighterTwo;
// }

function fighting() {

  function handlePlayerClick(event) {
    var temp = document.querySelector(`#${event.target.id}C`).textContent;
    console.log(event.target.className);
    document.querySelectorAll(`.${event.target.className}`).forEach(item => {
      item.removeEventListener('click', handlePlayerClick);
    });
  }

  function handlePlayerWeapon(event) {
    var temp = document.querySelector(event.target.textContent);
    console.log(event.target.textContent);
    document.querySelectorAll(`.${event.target.className}`).forEach(item => {
      item.removeEventListener('click', handlePlayerWeapon);
    });
  }

  const $playerOneFighter = document.querySelectorAll('.playerOneFighter').forEach(item => {
    item.addEventListener('click', handlePlayerClick);
  });

  const $weapons = document.querySelectorAll('.weapons').forEach(item => {
    item.addEventListener('click', handlePlayerWeapon);
  });

  const $playerTwoFighter = document.querySelectorAll('.playerTwoFighter').forEach(item => {
    item.addEventListener('click', handlePlayerClick);
  });



      // console.log(`.${item.id}C`);
    // console.log(document.querySelector(`.${item.id}C`));
    // .classList.add('hoverOn');

};

// fights();
