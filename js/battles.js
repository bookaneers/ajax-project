
setTimeout(function preparingForBattles() {
  for (var i = 1; i <= 10; i++) {
    document.querySelector(`#p1c${i}`).src = playersPicksObj.player1[i].sprites.front_default;
    document.querySelector(`#p1c${i}C`).textContent = playersPicksObj.player1[i].name;
    document.querySelector(`#p2c${i}`).src = playersPicksObj.player2[i + 10].sprites.front_default;
    document.querySelector(`#p2c${i}C`).textContent = playersPicksObj.player2[i + 10].name;
  }
}, 100);

setTimeout(function battles() {

  const $playerOneFighter = document.querySelectorAll('.playerOneFighter').forEach(item => {
    item.addEventListener('click', event => {
      var temp = document.querySelector(`#${event.target.id}C`).textContent;
      console.log(temp);
    });
  });


  document.querySelectorAll('.weapons').forEach(item => {
    item.addEventListener('click', event => {
      var temp = event.target.textContent;
      le.log(temp);
    });
  });

  document.querySelectorAll('.playerTwoFighter').forEach(item => {
    item.addEventListener('click', event => {
      var temp = document.querySelector(`#${event.target.id}C`).textContent;
      console.log(temp);
    });
  });

}, 200);
