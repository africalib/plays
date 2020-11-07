const baseUrl = 'https://africalib.gabia.io';
let socket;

let app = new Vue({
    el: '#app',
    data: {
        room: {
            list: []
        }
    },
    methods: {
        enter: function (name) {
            location.href = 'play.html' + (name ? '#/' + name : '');
        },
        refresh: function () {
            var t = this;
            $.getJSON(baseUrl + '/rooms', function (res) {
                t.room.list = res;
            });
        }
    },
    created: function () {
        var t = this;
        t.refresh();

        setInterval(function () {
            t.refresh();
        }, 2500);
    }
});