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
                location.href = 'play.html#/' + name;
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