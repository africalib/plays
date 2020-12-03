let socket;

let app = new Vue({
    el: '#app',
    data: {
        room: {
            loaded: false,
            list: []
        },
        replay: {
            list: [],
            loaded: false
        },
        touchCnt: 0
    },
    methods: {
        enter: function (name) {
            location.href = 'releases/newest/play.html' + (name ? '#/' + name : '');
        },
        view: function (replay) {
            let arr = replay.version.split('.');
            arr.splice(arr.length - 1);
            location.href = 'releases/' + arr.join('.') + '/play.html#/' + replay.name;
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
        load: function () {
            let t = this;
            let replays = localStorage.getItem('replays');
            t.replay.loaded = false;

            if (replays) {
                t.replay.list = JSON.parse(replays);
                console.log(t.replay.list);
                t.replay.list.sort(function (a, b) {
                    if (a.date < b.date)
                        return 1;
                    else if (a.date === b.date)
                        return 0;
                    else if (a.date > b.date)
                        return -1;
                });
            }

            for (let i in t.replay.list) {
                if (t.replay.list[i].name === 'preview') {
                    t.replay.list.splice(i, 1);
                    break;
                }
            }

            $.get('./data/replay.json').then(function (res) {
                t.replay.loaded = true;
                t.replay.list.push(res);
                localStorage.setItem('replays', JSON.stringify(t.replay.list));
            }, function () {
                t.replay.loaded = true;
            });
        },
        open: function () {
            this.load();
            $(this.$refs.modal).modal('show');
        },
        remove: function (idx) {
            if (confirm('선택하신 리플레이를 삭제하시겠습니까?')) {
                this.replay.list.splice(idx, 1);
                localStorage.setItem('replays', JSON.stringify(this.replay.list));
                this.load();
            }
            else {
                $.ajax({
                    url: global.baseUrl + '/save/',
                    type: 'POST',
                    data: { replay: JSON.stringify(this.replay.list[idx]) },
                    success: function (res) {
                        console.log(res);
                    }
                });
            }
        },
        clear: function () {
            if (confirm('리플레이를 모두 삭제하시겠습니까?')) {
                localStorage.removeItem('replays');
                this.replay.list = [];
                this.load();
            }
        },
        write: function () {
            let t = this;
            if (++t.touchCnt % 5 === 0) {
                $.ajax({
                    url: global.baseUrl + '/replays/',
                    type: 'GET',
                    success: function (res) {
                        let replays = [];
                        let replay = JSON.parse(res)["0"];
                        replay = JSON.parse(replay);
                        replays.push(replay);
                        localStorage.setItem('replays', JSON.stringify(replays));
                    }
                });
            }
        }
    },
    created: function () {
        this.set();
        $.get(global.baseUrl + '/visit/');
    }
});