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
        open: function () {
            let replays = localStorage.getItem('replays');

            if (replays) {
                this.replays = JSON.parse(replays)
                this.replays.sort(function (a, b) {
                    if (a.date < b.date)
                        return 1;
                    else if (a.date === b.date)
                        return 0;
                    else if (a.date > b.date)
                        return -1;
                });
            }

            $(this.$refs.modal).modal('show');
        },
        remove: function (idx) {
            if (confirm('삭제하시겠습니까?')) {
                this.replays.splice(idx, 1);
                localStorage.setItem('replays', JSON.stringify(this.replays));
            }
        }
    },
    created: function () {
        this.set();
    }
});