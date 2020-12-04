let socket;

let app = new Vue({
    el: '#app',
    data: {
        room: {
            loaded: false,
            list: []
        },
        touchCnt: 0
    },
    methods: {
        enter: function (name) {
            location.href = 'releases/newest/play.html' + (name ? '#/' + name : '');
        },
        set: function () {
            let t = this;
            t.room.loaded = false;

            $.getJSON(global.baseUrl + '/rooms', function (res) {
                t.room.loaded = true;
                t.room.list = res;
            });
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