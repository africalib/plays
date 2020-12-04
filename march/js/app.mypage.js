let app = new Vue({
    el: '#app',
    data: {
        user: {}
    },
    methods: {
        reset: function () {
            if (confirm('기록을 초기화하시겠습니까?')) {
                localStorage.removeItem('user');
                this.user = appLib.getUser();
            }
        }
    },
    created: function () {
        this.user = appLib.getUser();
    }
});