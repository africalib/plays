let socket;

let app = new Vue({
    el: '#app',
    data: {
        room: {
            loaded: false,
            list: []
        },
        replays: [],
        touchCnt: 0
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
            let t = this;
            t.room.loaded = false;

            $.getJSON(global.baseUrl + '/rooms', function (res) {
                t.room.loaded = true;
                t.room.list = res;
            });
        },
        refresh: function () {
            window.location.reload();
        },
        clear: function () {
            if (confirm('리플레이를 모두 삭제하시겠습니까?')) {
                localStorage.removeItem('replays');
                this.replays = [];
            }
        },
        open: function () {
            let t = this;
            let replays = localStorage.getItem('replays');

            if (replays) {
                t.replays = JSON.parse(replays)
                t.replays.sort(function (a, b) {
                    if (a.date < b.date)
                        return 1;
                    else if (a.date === b.date)
                        return 0;
                    else if (a.date > b.date)
                        return -1;
                });
            }

            if (!Array.isArray(t.replays) || !t.replays.length) {
                $.get('./data/replays.json', function (res) {
                    t.replays = res;
                    localStorage.setItem('replays', JSON.stringify(t.replays));
                });
            }

            $(t.$refs.modal).modal('show');
        },
        remove: function (idx) {
            if (confirm('삭제하시겠습니까?')) {
                this.replays.splice(idx, 1);
                localStorage.setItem('replays', JSON.stringify(this.replays));
            }
        },
        write: function () {
            this.touchCnt += 1;

            if (this.touchCnt % 10 === 0) {
                $(document.body).append('<hr />')
                $(document.body).append('<textarea class="form-control">' + localStorage.getItem('replays') + '</textarea>');
            }
        }
    },
    created: function () {
        this.set();
    }
});