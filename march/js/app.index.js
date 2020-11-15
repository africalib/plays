let socket;

let app = new Vue({
    el: '#app',
    data: {
        room: {
            loaded: false,
            list: []
        },
        replays: []
    },
    methods: {
        enter: function (name) {
            if (name) {
                location.href = 'play.html#/' + name;
            }
            else {
                location.href = 'play.html';
            }
        },
        set: function () {
            var t = this;
            t.room.loaded = false;

            $.getJSON(global.baseUrl + '/rooms', function (res) {
                t.room.loaded = true;
                t.room.list = res;
            });
        },
        refresh: function () {
            window.location.reload();
        },
        remove: function () {
            if (confirm('리플레이를 모두 삭제하시겠습니까?')) {
                localStorage.removeItem('replays');
                this.replays = [];
            }
        },
        openReplays: function () {
            let replays = localStorage.getItem('replays');

            if (replays) {
                this.replays = JSON.parse(replays)
                this.replays.reverse();
            }

            $(this.$refs.modal).modal('show');
        }
    },
    created: function () {
        this.set();
    }
});