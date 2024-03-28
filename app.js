const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth:100
        }
    },
    methods: {
        attackMonster() {
            this.monsterHealth -= Math.floor(Math.random() * (12 - 5)) + 5; // random dmg between 5-12.
        },
    }
})

app.mount('#game');