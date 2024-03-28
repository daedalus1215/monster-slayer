const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

let currentRound = 0;

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        },
        isDisabled() {
            return this.currentRound % 3;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            this.monsterHealth = this.monsterHealth - getRandomValue(5, 12);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }
})

app.mount('#game');
