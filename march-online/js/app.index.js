const baseUrl = 'http://127.0.0.1:8080';
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
        }
    },
    created: function () {
        var t = this;
        t.global = window.global;

        $.getJSON(baseUrl + '/rooms', function (res) {
            t.room.list = res;
        });
    }
});