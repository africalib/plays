let app = new Vue({
    el: '#app',
    data: {
        replay: {
            list: [],
            loaded: false
        }
    },
    methods: {
        view: function (replay) {
            location.href = 'releases/' + replay.version + '/play.html#/' + replay.name;
        },
        remove: function (idx) {
            if (confirm('선택하신 리플레이를 삭제하시겠습니까?')) {
                this.replay.list.splice(idx, 1);
                localStorage.setItem('replays', JSON.stringify(this.replay.list));
                this.set();
            }
        },
        reset: function () {
            if (confirm('리플레이를 모두 삭제하시겠습니까?')) {
                localStorage.removeItem('replays');
                this.replay.list = [];
                this.set();
            }
        },
        set: function () {
            let t = this;
            let replays = localStorage.getItem('replays');
            t.replay.loaded = false;

            if (replays) {
                t.replay.list = JSON.parse(replays);
            }

            for (let i in t.replay.list) {
                if (t.replay.list[i].name === 'preview') {
                    t.replay.list.splice(i, 1);
                    break;
                }
            }

            $.get('./data/replay.json').then(function (res) {
                t.replay.loaded = true;
                t.replay.list.unshift(res);
                localStorage.setItem('replays', JSON.stringify(t.replay.list));
                t.replay.list.reverse();
            });
        }
    },
    created: function () {
        this.set();
    }
});