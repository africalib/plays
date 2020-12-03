let socket;

let app = new Vue({
    el: '#app',
    data: {
        user: {
            data: {
                wins: 0,
                losses: 0,
                firstGameDate: '(none)',
                lastGameDate: '(none)'
            },
            default: {}
        }
    },
    methods: {
        reset: function () {
            if (confirm('기록을 초기화하시겠습니까?')) {
                localStorage.removeItem('user');
                this.user.data = appLib.renew(this.user.default);
            }
        }
    },
    created: function () {
        let user = localStorage.getItem('user');
        this.user.default = appLib.renew(this.user.data);

        if (user)
            this.user.data = JSON.parse(user);
    }
});