let socket;

let app = new Vue({
    el: '#app',
    data: {
        user: {
            wins: 0,
            losses: 0,
            firstGameDate: '(none)',
            lastGameDate: '(none)'
        }
    },
    created: function () {
        let user = localStorage.getItem('user');

        if (user)
            this.user = JSON.parse(user);
    }
});