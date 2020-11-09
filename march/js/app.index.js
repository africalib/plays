const baseUrl = 'https://africalib.gabia.io';
let socket;

let app = new Vue({
    el: '#app',
    data: {
        room: {
            loaded: false,
            list: []
        }
    },
    methods: {
        enter: function (name) {
            if (name) {
                var t = this;

                $.get(baseUrl + '/valid?name=' + name, function (res) {
                    if (res === 'valid') {
                        location.href = 'play.html#/' + name;
                    }
                    else {
                        if (res === 'playing')
                            alert('이미 게임이 시작되었습니다.');
                        else
                            alert('방이 존재하지 않습니다.');

                        t.refresh();
                    }
                });
            }
            else {
                location.href = 'play.html';
            }
        },
        set: function () {
            var t = this;
            t.room.loaded = false;

            $.getJSON(baseUrl + '/rooms', function (res) {
                t.room.loaded = true;
                t.room.list = res;
            });
        },
        refresh: function () {
            window.location.reload();
        }
    },
    created: function () {
        this.set();
    }
});