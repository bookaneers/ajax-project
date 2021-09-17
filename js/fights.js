function fights() {
  console.log('hello hello');

}

// function fights(fighterOne, weapon, fighterTwo) {
//   if (playersPicksObj.player1.fighterOne.weapon > playersPicksObj.player2.fighterTwo.weapon) return fighterOne;
//   else return fighterTwo;
// }

function fighting() {

  // setTimeout(function battles() {
  const $playerOneFighter = document.querySelectorAll('.playerOneFighter').forEach(item => {
    item.addEventListener('click', event => {
      var temp = document.querySelector(`#${event.target.id}C`).textContent;
      console.log(temp);
    });
  });

  document.querySelectorAll('.weapons').forEach(item => {
    item.addEventListener('click', event => {
      var temp = event.target.textContent;
      console.log(temp);
    });
  });

  document.querySelectorAll('.playerTwoFighter').forEach(item => {
    item.addEventListener('click', event => {
      var temp = document.querySelector(`#${event.target.id}C`).textContent;
      console.log(temp);
    });
  });
  // }, 200);

};
