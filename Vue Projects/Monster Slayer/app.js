new Vue({
  el: '#app',
  data: {
    gameIsRunning: false,
    playerHealth: 100,
    monsterHealth: 100,
    logs: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
    attack() {
      let damage = this.calculateDmg(3,10);
      this.monsterHealth -= damage;
      this.logs.unshift({isPlayer: true, text: `PLAYER HITS MONSTER FOR ${damage}`});
      this.monsterAttack();
      this.checkWin();
    },
    sAttack() {
      let damage = this.calculateDmg(10,20);
      this.monsterHealth -= damage;
      this.logs.unshift({isPlayer: true, text: `PLAYER HITS MONSTER CRITICALLY FOR ${damage}`});
      this.monsterAttack();
      this.checkWin();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.logs.unshift({isPlayer: true, text: `PLAYER HEALS FOR ${10}`});
      this.monsterAttack();
      this.checkWin();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    calculateDmg(min, max) {
      return Math.max(Math.floor(Math.random() * max + 1), min);
    },
    checkWin() {
      if (this.playerHealth <= 0) {
        alert('You lost!');
        this.gameIsRunning = false;
        return;
      }
      if (this.monsterHealth <= 0) {
        alert('You won!')
        this.gameIsRunning = false;
        return;
      }
    },
    monsterAttack() {
      let damage = this.calculateDmg(5,12);
      this.playerHealth -= damage;
      this.logs.unshift({isPlayer: false, text: `MONSTER HITS PLAYER FOR ${damage}`});
    }
  }
})

//