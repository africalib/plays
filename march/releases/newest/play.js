window.socket;

let app = new Vue({
    el: '#app',
    data: {
        version: '1.0.0',
        base: {
            time: {
                turn: 120,
                message: 2500,
                animate: 250,
            },
            fieldCount: 100,
            columnNum: 9,
            rowNum: 16,
            status: {
                player: {
                    crop: 0,
                    incomeCrop: 10,
                    maxCrop: 50,
                    units: 0,
                    maxUnit: 500
                }
            },
            nature: {
                start: 45,
                end: 98
            },
            area: {
                status: '',
                unit: {},
                shelter: {},
                weapon: {},
                watchers: '',
                vidx: 0,
                hidx: 0,
                vnum: 0,
                hnum: 0,
                player: '',
                owner: '',
                ownOnly: false,
                hidden: false
            },
            shelters: {
                fortress: {
                    name: 'fortress',
                    hp: 100,
                    maxHp: 100,
                    subHp: 0
                }
            },
            units: {
                farmer: {
                    name: 'farmer',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 2,
                    move: 1,
                    maxMove: 1,
                    attack: 1,
                    accel: false,
                    defense: 0,
                    distance: 1,
                    maxDistance: 1,
                    through: false,
                    hp: 1,
                    maxHp: 1,
                    subHp: 0,
                    crop: 2,
                    power: 1,
                    restorePower: 1,
                    maxPower: 1,
                    farm: 0.25,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: null,
                    destory: 0,
                    rotate: 0,
                    hidden: false,
                    style: {}
                },
                sword: {
                    name: 'sword',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 3,
                    move: 3,
                    maxMove: 6,
                    attack: 5,
                    accel: false,
                    defense: 0,
                    distance: 1,
                    maxDistance: 1,
                    through: false,
                    hp: 5,
                    maxHp: 5,
                    subHp: 0,
                    crop: 3,
                    power: 1,
                    restorePower: 1,
                    maxPower: 5,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: null,
                    destory: 0,
                    rotate: 0,
                    hidden: false,
                    style: {}
                },
                arrow: {
                    name: 'arrow',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 4,
                    move: 2,
                    maxMove: 4,
                    attack: 5,
                    accel: false,
                    defense: 0,
                    distance: 5,
                    maxDistance: 10,
                    through: false,
                    hp: 5,
                    maxHp: 5,
                    subHp: 0,
                    crop: 4,
                    power: 1,
                    restorePower: 1,
                    maxPower: 5,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: 'arrow',
                    destory: 0,
                    rotate: 0,
                    hidden: false,
                    style: {}
                },
                shield: {
                    name: 'shield',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 5,
                    move: 1,
                    maxMove: 1,
                    attack: 4,
                    accel: false,
                    defense: 2,
                    distance: 2,
                    maxDistance: 4,
                    through: true,
                    hp: 15,
                    maxHp: 15,
                    subHp: 0,
                    crop: 5,
                    power: 1,
                    restorePower: 1,
                    maxPower: 5,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: 'spear',
                    destory: 0,
                    rotate: 90,
                    hidden: false,
                    style: {}
                },
                spy: {
                    name: 'spy',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 7,
                    move: 3,
                    maxMove: 6,
                    attack: 1,
                    accel: false,
                    defense: 0,
                    distance: 1,
                    maxDistance: 1,
                    through: false,
                    hp: 4,
                    maxHp: 4,
                    subHp: 0,
                    crop: 7,
                    power: 2,
                    restorePower: 2,
                    maxPower: 4,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: null,
                    destory: 0,
                    rotate: 90,
                    hidden: true,
                    style: {}
                },
                horse: {
                    name: 'horse',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 10,
                    move: 5,
                    maxMove: 10,
                    attack: 5,
                    accel: false,
                    defense: 0,
                    distance: 1,
                    maxDistance: 1,
                    through: false,
                    hp: 10,
                    maxHp: 10,
                    subHp: 0,
                    crop: 10,
                    power: 2,
                    restorePower: 2,
                    maxPower: 5,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: null,
                    destory: 0,
                    rotate: 90,
                    hidden: false,
                    style: {}
                },
                elephant: {
                    name: 'elephant',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 11,
                    move: 4,
                    maxMove: 8,
                    attack: 7,
                    accel: true,
                    defense: 0,
                    distance: 1,
                    maxDistance: 1,
                    through: false,
                    hp: 20,
                    maxHp: 20,
                    subHp: 0,
                    crop: 11,
                    power: 1.5,
                    restorePower: 1.5,
                    maxPower: 6,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: null,
                    destory: 0,
                    rotate: 90,
                    hidden: false,
                    style: {}
                },
                cannon: {
                    name: 'cannon',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 12,
                    move: 1,
                    maxMove: 1,
                    attack: 10,
                    accel: false,
                    defense: 0,
                    distance: 10,
                    maxDistance: 20,
                    through: false,
                    hp: 5,
                    maxHp: 5,
                    subHp: 0,
                    crop: 12,
                    power: 0.5,
                    restorePower: 0.5,
                    maxPower: 5,
                    farm: 0,
                    restoreHp: 1,
                    buff: false,
                    buffed: {},
                    status: null,
                    weapon: 'ball',
                    destory: 0,
                    rotate: 90,
                    hidden: false,
                    style: {}
                },
                king: {
                    name: 'king',
                    level: 1,
                    maxLevel: 9,
                    exp: 0,
                    maxExp: 20,
                    move: 5,
                    maxMove: 10,
                    attack: 5,
                    accel: false,
                    defense: 1,
                    distance: 1,
                    maxDistance: 1,
                    through: false,
                    hp: 100,
                    maxHp: 100,
                    subHp: 0,
                    crop: null,
                    power: 1,
                    restorePower: 1,
                    maxPower: 10,
                    farm: 0,
                    restoreHp: 0,
                    buff: true,
                    buffed: {},
                    status: null,
                    weapon: null,
                    destory: 0,
                    rotate: 0,
                    hidden: false,
                    style: {}
                }
            },
            buffed: {
                farm: 0,
                move: 0,
                distance: 0,
                attack: 0,
                hp: 0,
                maxHp: 0,
                power: 0,
                maxPower: 0,
                defense: 0,
                restoreHp: 0
            }
        },
        label: {
            player: null,
            message: null
        },
        grabbed: {
            name: null
        },
        active: {
            idx: null,
            tempIdx: null,
            unit: null
        },
        status: {
            turn: null,
            started: false,
            finished: false,
            touchable: true,
            replay: false,
            time: 0,
            white: {
                crop: 0,
                incomeCrop: 10,
                maxCrop: 0,
                units: 0,
                maxUnit: 0
            },
            black: {
                crop: 0,
                incomeCrop: 10,
                maxCrop: 0,
                units: 0,
                maxUnit: 0
            }
        },
        areas: {
            prev: [],
            live: []
        },
        my: {
            player: null,
            room: {
                name: null,
                url: null,
                host: false,
                loaded: false
            }
        },
        modal: {
            idx: null,
            info: {},
            type: null
        },
        dots: '.',
        timer: {},
        interval: {},
        autoRotateArr: [],
        flows: [],
        replay: {
            idx: 0,
            status: null,
            touchable: false,
            speed: 2
        }
    },
    methods: {
        init: function () {
            let players = ['black', 'white'];

            this.status.started = true;
            clearInterval(this.interval['dot']);

            this.areas.live = [];

            for (let i in players) {
                let player = players[i];
                this.status[player].units = this.base.status.player.units;
                this.status[player].maxUnit = this.base.status.player.maxUnit;
                this.status[player].crop = this.base.status.player.crop;
                this.status[player].incomeCrop = this.base.status.player.incomeCrop;
                this.status[player].maxCrop = this.base.status.player.maxCrop;
            }

            this.status['white']['crop'] += 5;

            for (let i in this.base.units)
                this.base.units[i].buffed = appLib.renew(this.base.buffed);

            for (let i = 0; i < 150; i += 1) {
                let each = appLib.renew(this.base.area);
                let remain = i % this.base.columnNum;
                let hnum = this.getVerticalNum(i);

                each.idx = i;
                each.hidx = i;
                each.vidx = hnum + (remain * this.base.rowNum);
                each.vnum = this.getVerticalNum(each.vidx, true);
                each.hnum = hnum;

                if (i < this.base.nature.start) {
                    each.owner = 'white';
                    each.ownOnly = true;
                }
                else if (i > this.base.nature.end) {
                    each.owner = 'black';
                    each.ownOnly = true;
                }

                this.areas.live.push(each);


                if (i >= 120 && i <= 122)
                    this.setUnit('black', 'shield', i, true);
                else if (i === 129 || i === 131)
                    this.setUnit('black', 'horse', i, true);
                else if (i === 130)
                    this.setUnit('black', 'king', i, true);
                if (i >= 138 && i <= 140)
                    this.setUnit('black', 'farmer', i, true);
                else if (i >= 21 && i <= 23)
                    this.setUnit('white', 'shield', i, true);
                else if (i === 13)
                    this.setUnit('white', 'king', i, true);
                else if (i === 12 || i === 14)
                    this.setUnit('white', 'horse', i, true);
                else if (i >= 3 && i <= 5)
                    this.setUnit('white', 'farmer', i, true);
            }

            this.areas.prev = appLib.renew(this.areas.live);
            this.checkVisible();
        },
        start: function () {
            let t = this;
            let mc = new Hammer(document.querySelector('body'));
            t.init();

            mc.on('press', function (e) {
                let eachArea = $(e.target).closest('.each-area');
                let eachUnit = $(e.target).closest('.each-unit');

                if (eachArea.length && eachArea.data('idx')) {
                    let idx = eachArea.data('idx');

                    if (t.status.replay || t.isMyWatcher(idx)) {
                        let unit = t.areas.live[idx].unit;
                        t.modal.idx = idx;

                        if (t.areas.live[idx] && t.isShelterInArea(idx)) {
                            if (unit && unit.name && (t.status.replay || unit.player === t.my.player)) {
                                t.modal.info = unit;
                                t.modal.type = 'unit';
                            }
                            else {
                                t.modal.info = t.areas.live[idx].shelter;
                                t.modal.type = 'shelter';
                            }
                        }
                        else if (t.areas.live[idx] && unit) {
                            if (t.my.player !== unit.player && !t.status.replay && unit.hidden)
                                return;

                            t.modal.info = unit;
                            t.modal.type = 'unit';
                        }
                        else {
                            return;
                        }
                    }
                    else {
                        return;
                    }
                }
                else if (eachUnit.length) {
                    t.modal.type = 'unit';
                    t.modal.info = t.base.units[eachUnit.data('name')];
                    t.modal.info.player = t.my.player;
                }

                if (t.modal.info.hp !== undefined) {
                    let hp = t.modal.info.hp;
                    t.modal.info.hp = 0;
                    setTimeout(function () {
                        t.modal.info.hp = hp;
                    });
                }

                if (t.modal.info.exp !== undefined) {
                    let exp = t.modal.info.exp;
                    t.modal.info.exp = 0;
                    setTimeout(function () {
                        t.modal.info.exp = exp;
                    });
                }
            });

            t.setLabel("You are the " + t.my.player + " player", 2500);

            setTimeout(function () {
                t.setLabel("Let's march", 2000);
            }, 2500);
        },
        enter: function () {
            let t = this;
            t.status.time = t.base.time.turn;

            socket = io.connect(global.baseUrl, {
                rememberUpgrade: true,
                transports: ['websocket'],
                secure: true,
                rejectUnauthorized: false
            });

            socket.on('connect', function () {
                socket.emit('enter', t.my.room.name ? t.my.room.name : '');
            });

            socket.on('update', function (res) {
                if (res && Object.keys(res).length) {
                    switch (res.name) {
                        case 'connect':
                            if (!t.my.player) {
                                t.my.player = res.player;
                                t.my.room.name = res.room;
                                t.my.room.url = window.location.href + '#/' + res.room;
                                //t.label.player = res.turn;
                            }
                            break;

                        case 'start':
                            t.start();

                            if (t.my.player === 'black') {
                                setTimeout(function () {
                                    t.setRandomShelter();
                                    t.request('pass', 'black');
                                }, 3500);
                            }

                            window.onbeforeunload = function () {
                                return true;
                            };
                            break;

                        case 'disconnect':
                            if (t.status.started && !t.status.finished) {
                                socket.disconnect();
                                t.status.finished = true;
                                alert('상대방이 경기에서 나갔습니다.\n처음 화면으로 가시려면 우측 하단의 home 버튼을 눌러주세요.');
                                window.onbeforeunload = null;
                                //window.location.href = 'index.html';
                            }
                            break;

                        default:
                            if (typeof t[res.value.name] === 'function') {
                                if (res.value.name === 'touch' || res.value.name === 'grab')
                                    t.status.touchable = true;

                                t.runFunc(res.value);
                                t.flows.push(res.value);
                            }
                            break;
                    }
                }
                else {
                    alert('error');
                }
            });
        },
        refresh: function () {
            window.location.reload();
        },
        save: function () {
            let replays;

            if (this.flows.length < 25)
                return;

            replays = localStorage.getItem('replays');

            if (replays)
                replays = JSON.parse(replays);
            else
                replays = [];

            for (let i in replays) {
                if (replays[i].name === this.my.room.name)
                    return;
            }

            replays.push({
                name: this.my.room.name,
                version: this.version,
                player: this.my.player,
                flows: this.flows,
                date: appLib.now('yyyy-MM-dd HH:mm:ss')
            });

            localStorage.setItem('replays', JSON.stringify(replays));
        },
        runFunc: function (value) {
            if (!isNaN(Number(value.val1)))
                value.val1 = Number(value.val1);

            if (!isNaN(Number(value.val2)))
                value.val2 = Number(value.val2);

            if (value.val2)
                this[value.name](value.val1, value.val2);
            else
                this[value.name](value.val1);
        },
        play: function () {
            let t = this;

            if (t.replay.status === 'stop') {
                this.refresh();
                return;
            }

            t.replay.status = 'play';
            t.interval['replay'] = setInterval(function () {
                let f = t.flows[t.replay.idx];
                t.runFunc(f);

                if (t.replay.idx >= t.flows.length - 1) {
                    clearInterval(t.interval['replay']);
                    t.replay.status = 'stop';
                }
                else {
                    t.replay.idx += 1;
                }
            }, 1000 / t.replay.speed);
        },
        pause: function () {
            this.replay.status = 'pause';
            clearInterval(this.interval['replay']);
        },
        speed: function () {
            if (this.replay.speed >= 9)
                this.replay.speed = 0;

            this.replay.speed += 1;

            if (this.replay.status === 'play') {
                this.pause();
                this.play();
            }
        },
        goHome: function () {
            if (!this.status.replay)
                this.save();

            location.href = '../../index.html';
        },
        request: function (name, val1, val2) {
            if (name === 'touch' || name === 'grab') {
                this.status.touchable = false;
            }
            else if (name === 'pass') {
                let areas = [];

                for (let i in this.areas.prev) {
                    let prev = this.areas.prev[i];
                    let live = this.areas.live[i];
                    let obj = {};

                    if (live.status === undefined)
                        live.status = '';

                    for (let j in prev) {
                        if (prev[j] && live[j] && typeof prev[j] === 'object' && typeof live[j] === 'object') {
                            if (JSON.stringify(prev[j]) !== JSON.stringify(live[j])) {
                                obj[j] = {};

                                if (Object.keys(prev[j]).length && Object.keys(live[j]).length) {
                                    for (let k in prev[j]) {
                                        if (typeof prev[j][k] === 'object') {
                                            if (JSON.stringify(prev[j][k]) !== JSON.stringify(live[j][k]))
                                                obj[j][k] = live[j][k];
                                        }
                                        else if (prev[j][k] !== live[j][k]) {
                                            obj[j][k] = live[j][k];
                                        }
                                    }
                                }
                                else {
                                    obj[j] = live[j];
                                }
                            }
                        }
                        else if (prev[j] !== live[j]) {
                            obj[j] = live[j];
                        }
                    }

                    if (Object.keys(obj).length) {
                        areas.push({
                            idx: Number(i),
                            val: obj
                        });
                    }
                }

                this.request('deploy', JSON.stringify(areas));
            }

            socket.emit('request', { type: 'send', name: name, player: this.my.player, val1: val1, val2: val2 });
        },
        pass: function (player) {
            this.setMessage('hide');
            this.changeTurn(player);
        },
        touchable: function (idx) {
            if (this.status.touchable && this.status.started && !this.status.finished && this.status.turn === this.my.player && !this.status.replay) {
                if (idx !== undefined) {
                    let area = this.areas.live[idx];

                    if (area && area.unit && Object.keys(area.unit).length && area.status !== 'attack')
                        return area.unit.hidden || area.unit.player === this.my.player;
                }

                return true;
            }

            return false;
        },
        getLang: function (lang, keyword) {
            switch (lang) {
                case 'ko':
                    switch (keyword.toString()) {
                        case 'white': return '화이트';
                        case 'black': return '블랙';
                        case 'name': return '이름';
                        case 'type': return '타입';
                        case 'move': return '이동 거리';
                        case 'attack': return '공격력';
                        case 'defense': return '방어력';
                        case 'distance': return '공격 거리';
                        case 'hp': return '체력';
                        case 'maxHp': return '최대 체력';
                        case 'power': return '파워';
                        case 'restorePower': return '회복 파워';
                        case 'maxPower': return '최대 파워';
                        case 'crop': return '비용';
                        case 'restoreHp': return '회복 체력';
                        case 'level': return '레벨';
                        case 'exp': return '경험';
                        case 'farm': return '수확 가능';
                        case 'direction': return '방향';
                        case 'destory': return '파괴 숫자';
                        case 'accel': return '가속 공격';
                        case 'through': return '스루 공격';
                        case 'true': return '예';
                        case 'false': return '아니요';
                    }
                    break;
            }
            return keyword;
        },
        getModalProp: function (prop) {
            if (prop === 'direction') {
                if (this.my.player === 'white') {
                    switch (this.modal.info.direction) {
                        case 6:
                            return 12;

                        case 12:
                            return 6;

                        case 3:
                            return 9;

                        case 9:
                            return 3;
                    }
                }

                return this.modal.info.direction;
            }
            else if (this.modal.info.buffed && this.modal.info.buffed[prop] !== undefined) {
                if (this.modal.info.name) {

                    let buff = this.modal.info.buffed[prop];
                    let unitProp = this.modal.info[prop] + buff;
                    return unitProp + (buff ? ' (+' + buff + ' buff)' : '');
                }
            }

            return '';
        },
        copyRoomUrl: function () {
            if (this.$refs.roomUrl) {
                this.$refs.roomUrl.select();
                this.$refs.roomUrl.setSelectionRange(0, 99999);
                document.execCommand("copy");
            }
        },
        deploy: function (val) {
            let areas = JSON.parse(val);

            for (let i in areas) {
                let idx = areas[i].idx;
                let val = areas[i].val;

                for (let j in val) {
                    if (val[j] && typeof val[j] === 'object' && Object.keys(val[j]).length) {
                        for (let k in val[j])
                            this.areas.live[idx][j][k] = val[j][k];
                    }
                    else {
                        this.areas.live[idx][j] = val[j];
                    }
                }
            }
        },
        touch: function (idx) {
            let t = this;
            let targetArea = t.areas.live[idx];
            let activeArea = t.areas.live[t.active.idx];

            if (t.isUnitInArea(idx) && targetArea.unit.player === t.status.turn) {
                if (t.active.idx === idx || !targetArea.unit.power) {
                    targetArea.unit.direction = Number(targetArea.unit.direction) + 3;

                    if (targetArea.unit.direction > 12)
                        targetArea.unit.direction = 3;
                }

                t.initAreas();
                t.initActive();
                t.initGrab();

                t.active.idx = idx;
                t.active.unit = targetArea.unit;
                activeArea = t.areas.live[t.active.idx];

                if (targetArea.unit.power > 0) {
                    let attackable = targetArea.unit.power >= 1 ? true : false;
                    let movePoint = targetArea.unit.power >= 1 ? targetArea.unit.move + targetArea.unit.buffed['move'] : 1;

                    let accessable = {
                        up: true,
                        down: true,
                        left: true,
                        right: true
                    }

                    let cond = function (direction, i) {
                        return accessable[direction] && t.areas.live[i];
                    }

                    for (let i = 0; i < movePoint; i += 1) {
                        let num = {
                            up: (i + 1) * - t.base.columnNum + idx,
                            down: (i + 1) * t.base.columnNum + idx,
                            left: idx - i - 1,
                            right: idx + i + 1
                        };

                        for (let j = 0; j < 4; j += 1) {
                            let each = {}

                            switch (j) {
                                case 0:
                                    each.direction = 'up';
                                    each.idx = (i + 1) * -(t.base.columnNum) + idx;
                                    each.cond = cond(each.direction, each.idx);
                                    break;

                                case 1:
                                    each.direction = 'down';
                                    each.idx = (i + 1) * t.base.columnNum + idx;
                                    each.cond = cond(each.direction, each.idx);
                                    break;

                                case 2:
                                    each.direction = 'right';
                                    each.idx = idx + i + 1;
                                    each.cond = cond(each.direction, each.idx) && targetArea.hnum === t.getVerticalNum(each.idx);
                                    break;

                                case 3:
                                    each.direction = 'left';
                                    each.idx = idx - i - 1;
                                    each.cond = cond(each.direction, each.idx) && targetArea.hnum === t.getVerticalNum(each.idx);
                                    break;

                                default:
                                    return;
                            }

                            let eachArea = t.areas.live[each.idx];

                            if (each.cond && eachArea) {
                                t.areas.live[num[each.direction]].player = t.status.turn;
                                t.areas.live[num[each.direction]].hidden = false;

                                if (attackable && ((t.isShelterInArea(each.idx) && !t.hasShelter(each.idx) && !t.hasGrayShelter(each.idx)) || (t.isUnitInArea(each.idx) && !t.isTurnUnit(each.idx))) && targetArea.unit.distance === 1) {
                                    t.areas.live[num[each.direction]].status = 'attack';

                                    if (t.isHiddenUnitInArea(each.idx))
                                        t.areas.live[num[each.direction]].hidden = true;
                                    continue;
                                }

                                if (!t.isShelterInArea(each.idx) || t.hasGrayShelter(each.idx)) {
                                    if (!t.isUnitInArea(each.idx)) {
                                        t.areas.live[num[each.direction]].status = 'move';
                                    }
                                    else if (t.isHiddenUnitInArea(each.idx)) {
                                        t.areas.live[num[each.direction]].status = 'move';
                                        t.areas.live[num[each.direction]].hidden = true;
                                    }
                                    continue;
                                }
                            }
                            else {
                                accessable[each.direction] = false;
                            }
                        }
                    }

                    if (targetArea.unit.distance > 1 && attackable) {
                        for (let i = 0; i < targetArea.unit.distance + targetArea.unit.buffed['distance']; i += 1) {
                            let num = {
                                up: (i + 1) * -(t.base.columnNum) + idx,
                                down: (i + 1) * t.base.columnNum + idx,
                                right: idx + i + 1,
                                left: idx - i - 1
                            };

                            if (t.areas.live[num.up] && t.areas.live[num.up].vnum === activeArea.vnum) {
                                if (t.isWatcher(num.up)) {
                                    if (t.isShelterInArea(num.up) && !t.hasShelter(num.up) && !t.hasGrayShelter(num.up))
                                        t.areas.live[num.up].status = 'attack';
                                    if (t.isUnitInArea(num.up) && !t.isHiddenUnitInArea(num.up) && !t.isTurnUnit(num.up))
                                        t.areas.live[num.up].status = 'attack';
                                }
                            }

                            if (t.areas.live[num.down] && t.areas.live[num.down].vnum === activeArea.vnum) {
                                if (t.isWatcher(num.down)) {
                                    if (t.isShelterInArea(num.down) && !t.hasShelter(num.down) && !t.hasGrayShelter(num.down))
                                        t.areas.live[num.down].status = 'attack';
                                    if (t.isUnitInArea(num.down) && !t.isHiddenUnitInArea(num.down) && !t.isTurnUnit(num.down))
                                        t.areas.live[num.down].status = 'attack';
                                }
                            }

                            if (t.areas.live[num.left] && t.areas.live[num.left].hnum === activeArea.hnum) {
                                if (t.isWatcher(num.left)) {
                                    if (t.isShelterInArea(num.left) && !t.hasShelter(num.left) && !t.hasGrayShelter(num.left))
                                        t.areas.live[num.left].status = 'attack';
                                    if (t.isUnitInArea(num.left) && !t.isHiddenUnitInArea(num.left) && !t.isTurnUnit(num.left))
                                        t.areas.live[num.left].status = 'attack';
                                }
                            }

                            if (t.areas.live[num.right] && t.areas.live[num.right].hnum === activeArea.hnum) {
                                if (t.isWatcher(num.right)) {
                                    if (t.isShelterInArea(num.right) && !t.hasShelter(num.right) && !t.hasGrayShelter(num.right))
                                        t.areas.live[num.right].status = 'attack';
                                    if (t.isUnitInArea(num.right) && !t.isHiddenUnitInArea(num.right) && !t.isTurnUnit(num.right))
                                        t.areas.live[num.right].status = 'attack';
                                }
                            }
                        }
                    }
                }
            }
            else if (targetArea.status === 'attack' || targetArea.status === 'move') {
                let obj = {
                    loopArr: [],
                    compare: null,
                    addedNum: 0,
                    destIdx: 0,
                    powerUse: 1,
                    startIdx: t.active.idx,
                    endIdx: 0,
                    aniType: null,
                    gap: null
                };

                if (!activeArea)
                    return;

                if (activeArea.hnum === targetArea.hnum) {
                    obj.gap = targetArea.idx - t.active.idx;

                    if (obj.gap > 0) {
                        for (let i = t.active.idx; i <= obj.gap + t.active.idx; i += 1)
                            obj.loopArr.push(i);
                    }
                    else {
                        for (let i = t.active.idx; i >= obj.gap + t.active.idx; i -= 1)
                            obj.loopArr.push(i);
                    }
                }
                else if (activeArea.vnum === targetArea.vnum) {
                    obj.gap = targetArea.idx - t.active.idx;

                    if (obj.gap > 0) {
                        for (let i = t.active.idx; i <= obj.gap + t.active.idx; i += t.base.columnNum)
                            obj.loopArr.push(i);
                    }
                    else {
                        for (let i = t.active.idx; i >= obj.gap + t.active.idx; i -= t.base.columnNum)
                            obj.loopArr.push(i);
                    }
                }

                if (t.areas.live[t.active.idx].unit.distance === 1 || (t.areas.live[t.active.idx].unit.distance > 1 && targetArea.status === 'move')) {
                    let teamUnits = [];

                    for (let i in obj.loopArr) {
                        let loopIdx = obj.loopArr[i];
                        let loopArea = t.areas.live[loopIdx];
                        activeArea = t.areas.live[t.active.idx];
                        activeArea.unit.direction = t.getDirection(idx, t.active.idx);

                        if (loopIdx !== t.active.idx) {
                            if ((t.isShelterInArea(loopIdx) && !t.hasShelter(loopIdx) && !t.hasGrayShelter(loopIdx)) || t.isUnitInArea(loopIdx)) {
                                if (loopArea.unit.player === activeArea.unit.player) {
                                    teamUnits.push({
                                        idx: loopIdx,
                                        unit: appLib.renew(loopArea.unit)
                                    });

                                    loopArea.unit = activeArea.unit;
                                    t.areas.live[t.active.idx].unit = {};
                                    t.active.idx = loopIdx;
                                }
                                else if (t.attack(loopIdx, false, i > 1, i)) {
                                    let removeIdx = obj.loopArr.indexOf(loopIdx);
                                    obj.loopArr.splice(removeIdx, obj.loopArr.length - removeIdx);
                                    break;
                                }
                            }
                            else {
                                loopArea.unit = activeArea.unit;
                                activeArea.unit = {};
                                t.active.idx = loopIdx;

                                if (obj.loopArr.length === 2)
                                    obj.powerUse = 0.5;
                            }
                        }
                    }

                    teamUnits.reverse();

                    for (let i in teamUnits) {
                        if (t.isUnitInArea(teamUnits[i].idx)) {
                            let objArr = appLib.renew(obj.loopArr);
                            objArr.reverse();

                            for (let j in objArr) {
                                if (!t.isUnitInArea(objArr[j])) {
                                    t.areas.live[objArr[j]].unit = teamUnits[i].unit;
                                    break;
                                }
                            }
                        }
                        else {
                            t.areas.live[teamUnits[i].idx].unit = teamUnits[i].unit;
                        }
                    }

                    obj.endIdx = t.active.idx;
                }
                else if (t.areas.live[t.active.idx].unit.distance > 1) {
                    obj.endIdx = idx;
                    obj.aniType = 'weapon';

                    t.$set(t.areas.live[obj.endIdx], 'weapon', {
                        name: activeArea.unit.weapon,
                        direction: t.getDirection(idx, t.active.idx),
                        status: null,
                        style: {}
                    });

                    if (activeArea.unit.through) {
                        for (let i in obj.loopArr) {
                            if (i > 0 && !t.isMine(obj.loopArr[i])) {
                                let tardirection = t.getDirection(t.active.idx, obj.loopArr[i]);
                                t.attack(obj.loopArr[i], true, true);
                                t.autoRotateArr.push({ idx: obj.loopArr[i], direction: tardirection })
                            }
                        }
                    }
                    else {
                        let tardirection = t.getDirection(t.active.idx, idx);
                        t.attack(idx, true, true);
                        t.autoRotateArr.push({ idx: idx, direction: tardirection })
                    }
                }

                t.areas.live[t.active.idx].unit.power -= obj.powerUse;
                t.initAreas();

                t.animate(obj.startIdx, obj.endIdx, obj.aniType, function () {
                    let delay = obj.gap !== null && Math.abs(obj.gap) > t.base.columnNum;

                    t.checkOwn(t.active.idx);
                    t.checkBuff();
                    t.checkVisible();
                    t.counterAttack(delay);
                    t.checkLevel();
                    t.rotateAuto();
                    t.initActive();
                    t.initGrab();

                    setTimeout(function () {
                        t.checkVisible();
                    }, 2500);
                });
            }
            else if (targetArea.status === 'enter') {
                if (this.isUnitSettable(t.grabbed.name)) {
                    this.active.idx = idx;
                    this.setUnit(t.status.turn, t.grabbed.name, idx);
                    this.checkBuff();
                    this.rotateAuto();
                    this.initActive();
                }
                else {
                    this.initAreas();
                    this.initGrab();
                }
            }
            else if (t.grabbed.name) {
                if (t.status.turn === t.my.player)
                    t.setMessage(t.my.player, '해당 위치에 배치할 수 없습니다.', t.base.time.message);
                return;
            }
            else {
                t.initAreas();
                t.initActive();
                t.initGrab();
            }
        },
        grab: function (name) {
            this.initAreas();
            this.initActive();

            if (this.grabbed.name === name) {
                this.initGrab();
            }
            else if (this.isUnitSettable(name)) {
                this.grabbed.name = name;

                for (let i in this.areas.live) {
                    let area = this.areas.live[i];
                    area.hidden = false;

                    if (this.status.turn === area.owner && (!this.isShelterInArea(i) || this.hasGrayShelter(i))) {
                        if (!this.isUnitInArea(i))
                            area.status = 'enter';
                        else if (this.isHiddenUnitInArea(i))
                            area.hidden = true;
                    }
                }
            }
            else {
                this.initGrab();
            }
        },
        isUnitSettable: function (name) {
            let player = this.status.turn;
            let unit = this.base.units[name];
            let fieldCount = 0;

            for (let i in this.areas.live) {
                if (this.areas.live[i].unit.player === player) {
                    if (this.areas.live[i].unit.name === name)
                        fieldCount += 1;
                }
            }

            if (fieldCount >= this.base.fieldCount) {
                if (t.status.turn === t.my.player)
                    this.setMessage(this.my.player, '유닛당 ' + this.base.fieldCount + '기까지 배치할 수 있습니다.', this.base.time.message);
                return;
            }
            else if (this.status[player].crop < unit.crop) {
                if (this.status.turn === this.my.player)
                    this.setMessage(this.my.player, '농작물이 부족합니다.', this.base.time.message);
                return false;
            }
            else if (this.status[player].units + unit.crop > this.status[player].maxUnit) {
                if (this.status.turn === this.my.player)
                    this.setMessage(this.my.player, '유닛을 더 이상 배치할 수 없습니다.', this.base.time.message);
                return false;
            }

            return true;
        },
        isInCross: function (i, j) {
            return this.areas.live[i] && this.areas.live[j] && (this.areas.live[i].vnum === this.areas.live[j].vnum || this.areas.live[i].hnum === this.areas.live[j].hnum);
        },
        isMine: function (i) {
            return this.isTurnUnit(i) || this.hasShelter(i);
        },
        isInShelterOrArea: function (i) {
            if (this.isUnitInArea(i)) {
                let eachArea = this.areas.live[i];
                let eachUnit = eachArea.unit;
                return eachArea.owner === eachUnit.player || (this.isShelterInArea(i) && eachArea.shelter.player === eachUnit.player);
            }

            return false;
        },
        isShelterInArea: function (idx) {
            return this.areas.live[idx] && this.areas.live[idx].shelter && this.areas.live[idx].shelter.name;
        },
        hasShelter: function (idx) {
            return this.isShelterInArea(idx) && this.areas.live[idx].shelter.player === this.status.turn;
        },
        hasGrayShelter: function (idx) {
            return this.isShelterInArea(idx) && this.areas.live[idx].shelter.player === 'gray';
        },
        isUnitInArea: function (idx) {
            return this.areas.live[idx] && this.areas.live[idx].unit && this.areas.live[idx].unit.name && this.areas.live[idx].unit.hp > 0;
        },
        isHiddenUnitInArea: function (idx) {
            return this.isUnitInArea(idx) && this.areas.live[idx].unit.hidden;
        },
        isWatcher: function (idx) {
            return this.areas.live[idx].watchers && this.areas.live[idx].watchers.indexOf(this.status.turn) >= 0;
        },
        isMyWatcher: function (idx) {
            return this.areas.live[idx].watchers && this.areas.live[idx].watchers.indexOf(this.my.player) >= 0;
        },
        isTurnUnit: function (idx) {
            return this.isUnitInArea(idx) && this.areas.live[idx].unit.player === this.status.turn;
        },
        isMyUnit: function (idx) {
            return this.isUnitInArea(idx) && this.areas.live[idx].unit.player === this.my.player;
        },
        getDirection: function (targetIdx, presentIdx) {
            let target = this.areas.live[targetIdx];
            let present = this.areas.live[presentIdx];
            let returnValue = present.direction;

            if (target.hnum === present.hnum) {
                if (target.hidx > present.hidx)
                    returnValue = 3;
                else
                    returnValue = 9;
            }
            else if (target.vnum === present.vnum) {
                if (target.vidx > present.vidx)
                    returnValue = 6;
                else
                    returnValue = 12;
            }
            else {
                let hGap = Math.abs(present.hnum - target.hnum);
                let vGap = Math.abs(present.vnum - target.vnum);

                if (hGap >= vGap) {
                    if (present.hnum < target.hnum)
                        returnValue = 6;
                    else if (present.hnum > target.hnum)
                        returnValue = 12;
                }
                else {
                    if (present.vnum > target.vnum)
                        returnValue = 9;
                    else if (present.hnum < target.hnum)
                        returnValue = 3;
                }
            }

            return returnValue;
        },
        getVerticalNum: function (val, isRowNum) {
            return Math.floor(val / (isRowNum ? this.base.rowNum : this.base.columnNum));
        },
        getBuffArr: function () {
            let buffArr = [];

            for (let i in this.areas.live) {
                let area = this.areas.live[i];
                let unit = area.unit;

                if (unit.buff) {
                    i = Number(i);

                    if (this.areas.live[i - this.base.columnNum - 1] && this.areas.live[i - this.base.columnNum - 1].vnum + 1 === area.vnum)
                        buffArr.push({ player: unit.player, idx: i - this.base.columnNum - 1 });

                    if (this.areas.live[i - this.base.columnNum] && this.areas.live[i - this.base.columnNum].vnum === area.vnum)
                        buffArr.push({ player: unit.player, idx: i - this.base.columnNum });

                    if (this.areas.live[i - this.base.columnNum + 1] && this.areas.live[i - this.base.columnNum + 1].vnum - 1 === area.vnum)
                        buffArr.push({ player: unit.player, idx: i - this.base.columnNum + 1 });

                    if (this.areas.live[i - 1] && this.areas.live[i - 1].hnum === area.hnum)
                        buffArr.push({ player: unit.player, idx: i - 1 });

                    if (this.areas.live[i + 1] && this.areas.live[i + 1].hnum === area.hnum)
                        buffArr.push({ player: unit.player, idx: i + 1 });

                    if (this.areas.live[i + this.base.columnNum - 1] && this.areas.live[i + this.base.columnNum - 1].vnum + 1 === area.vnum)
                        buffArr.push({ player: unit.player, idx: i + this.base.columnNum - 1 });

                    if (this.areas.live[i + this.base.columnNum] && this.areas.live[i + this.base.columnNum].vnum === area.vnum)
                        buffArr.push({ player: unit.player, idx: i + this.base.columnNum });

                    if (this.areas.live[i + this.base.columnNum + 1] && this.areas.live[i + this.base.columnNum + 1].vnum - 1 === area.vnum)
                        buffArr.push({ player: unit.player, idx: i + this.base.columnNum + 1 });
                }
            }

            return buffArr;
        },
        setShelter: function (player, name, idx) {
            let shelter = appLib.renew(this.base.shelters[name]);
            shelter.player = player;
            this.areas.live[idx].shelter = shelter;
        },
        setRandomShelter: function () {
            let t = this;
            let shelterCount = 1;

            for (n = 0; n < 2; n += 1) {
                let shelterEmptyArr = [];
                let shelterRandomArr = [];

                for (let i in t.areas.live) {
                    if (!t.isShelterInArea(i) && !t.isUnitInArea(i) && n ? i >= 81 && i <= 116 : i >= 27 && i <= 62)
                        shelterEmptyArr.push(i);
                }

                if (shelterEmptyArr.length >= shelterCount) {
                    for (let i = 0; i < shelterCount; i += 1) {
                        let randomIdx = appLib.getRandom(0, shelterEmptyArr.length - 1)
                        shelterRandomArr.push(shelterEmptyArr[randomIdx]);
                        shelterEmptyArr.splice(randomIdx, 1);
                    }

                    for (let i = 0; i < shelterRandomArr.length; i += 1)
                        t.setShelter('gray', 'fortress', Number(shelterRandomArr[i]));
                }
            }
        },
        setLevel: function (i) {
            let eachUnit = this.areas.live[i].unit;

            if (eachUnit.name && eachUnit.level && eachUnit.exp >= eachUnit.maxExp && eachUnit.level < eachUnit.maxLevel) {
                let upLevel = 0;

                while (eachUnit.exp >= eachUnit.maxExp) {
                    if (eachUnit.level >= eachUnit.maxLevel)
                        break;

                    eachUnit.exp -= eachUnit.maxExp;
                    eachUnit.level += 1;
                    eachUnit.maxExp += 1;

                    if (eachUnit.farm)
                        eachUnit.farm += 0.25;

                    if (eachUnit.move > 1) {
                        eachUnit.move += 1;

                        if (eachUnit.move > eachUnit.maxMove)
                            eachUnit.move = eachUnit.maxMove;
                    }

                    if (eachUnit.distance > 1 && !eachUnit.ridable) {
                        eachUnit.distance += 1;

                        if (eachUnit.distance > eachUnit.maxDistance)
                            eachUnit.distance = eachUnit.maxDistance;
                    }

                    if (!eachUnit.ridable)
                        eachUnit.attack += 1;

                    eachUnit.hp += 1;
                    eachUnit.maxHp += 1;
                    eachUnit.power += 1;
                    eachUnit.maxPower += 1;
                    eachUnit.defense += 1;
                    eachUnit.restoreHp += 1;

                    if (eachUnit.name === 'king') {
                        this.status[eachUnit.player].incomeCrop += 10;
                        this.status[eachUnit.player].maxCrop += 50;
                        this.status[eachUnit.player].maxUnit += 100;
                    }

                    upLevel += 1;
                }

                this.showUp('levelUp', i, upLevel);
            }
        },
        animate: function (startIdx, endIdx, type, func) {
            let t = this;

            if (startIdx !== endIdx) {
                let startArea = t.areas.live[startIdx];
                let endArea = t.areas.live[endIdx];
                let unit = null;
                let $startArea = $('#app .each-area[data-idx=' + startIdx + ']');

                switch (type) {
                    case 'weapon':
                        unit = t.areas.live[endIdx].weapon;
                        break;

                    default:
                        unit = t.areas.live[endIdx].unit;
                        break;
                }

                //t.status.touchable = false;
                unit.status = 'move';
                t.$set(unit, 'style', { top: 0, left: 0 });

                if (startArea.vnum === endArea.vnum)
                    unit.style.top = (startArea.vidx - endArea.vidx) * $startArea.height() + 'px';
                else if (startArea.hnum === endArea.hnum)
                    unit.style.left = (startIdx - endIdx) * $startArea.width() + 'px';

                setTimeout(function () {
                    unit.style.top = 0;
                    unit.style.left = 0;

                    setTimeout(function () {
                        unit.status = null;
                        unit.style = {};
                        //t.status.touchable = true;

                        if (type === 'weapon')
                            delete t.areas.live[endIdx]['weapon'];
                    }, t.base.time.animate - 100);
                }, 100);

                if (typeof func === 'function')
                    func();
            }
            else if (typeof func === 'function') {
                func();
            }
        },
        counterAttack: function (delay) {
            let t = this;
            let isBlackTurn = t.status.turn === 'black';
            let i = isBlackTurn ? t.areas.live.length : 0;

            while (isBlackTurn ? i > 0 : i < t.areas.live.length) {
                let idx = Number(i);
                let eachArea = t.areas.live[idx];

                if (t.isUnitInArea(idx) && eachArea.unit.player !== t.status.turn && eachArea.unit.distance && eachArea.unit.power) {
                    let eachUnit = eachArea.unit;

                    for (let j = 0; j < eachUnit.distance + eachUnit.buffed['distance']; j += 1) {
                        let targetIdx = null;
                        let lineCond = false;

                        switch (eachUnit.direction) {
                            case 12:
                                targetIdx = idx - (t.base.columnNum * (j + 1));
                                lineCond = t.areas.live[targetIdx] && eachArea.vnum === t.areas.live[targetIdx].vnum;
                                break;

                            case 6:
                                targetIdx = idx + (t.base.columnNum * (j + 1));
                                lineCond = t.areas.live[targetIdx] && eachArea.vnum === t.areas.live[targetIdx].vnum;
                                break;

                            case 3:
                                targetIdx = idx + j + 1;
                                lineCond = t.areas.live[targetIdx] && eachArea.hnum === t.areas.live[targetIdx].hnum;
                                break;

                            case 9:
                                targetIdx = idx - (j + 1);
                                lineCond = t.areas.live[targetIdx] && eachArea.hnum === t.areas.live[targetIdx].hnum;
                                break;
                        }

                        lineCond = lineCond && t.isInCross(idx, targetIdx);

                        if (targetIdx && lineCond && !t.isShelterInArea(targetIdx) && targetIdx === t.active.idx && targetIdx >= 0 && t.isUnitInArea(targetIdx) && eachUnit.player !== t.areas.live[targetIdx].unit.player) {
                            if (t.areas.live[targetIdx].unit.hidden)
                                return;
                            else if (eachArea.unit.hidden)
                                return;
                            else if (t.areas.live[targetIdx].watchers.indexOf(eachUnit.player) < 0)
                                return;

                            t.active.tempIdx = t.active.idx;
                            t.active.idx = idx;

                            if (eachUnit.hp < 0)
                                return;

                            if (eachUnit.distance > 1) {
                                t.$set(t.areas.live[targetIdx], 'weapon', {
                                    name: eachUnit.weapon,
                                    direction: eachUnit.direction,
                                    status: null,
                                    style: {}
                                });

                                t.animate(idx, targetIdx, 'weapon');

                                if (eachUnit.through) {
                                    let attackArr = [];

                                    for (let x = 0; x < eachUnit.distance + eachUnit.buffed['distance']; x += 1) {
                                        switch (eachUnit.direction) {
                                            case 12:
                                                attackArr.push(idx - (t.base.columnNum * (x + 1)));
                                                break;

                                            case 6:
                                                attackArr.push(idx + (t.base.columnNum * (x + 1)));
                                                break;

                                            case 3:
                                                attackArr.push(idx + x + 1);
                                                break;

                                            case 9:
                                                attackArr.push(idx - (x + 1));
                                                break;
                                        }
                                    }

                                    for (let y in attackArr)
                                        t.attack(attackArr[y], true, true);
                                }
                                else {
                                    t.attack(targetIdx, true, true);
                                }

                                eachUnit.power -= 0.5;
                            }
                            else {
                                t.attack(targetIdx, true, delay);
                                eachUnit.power -= 0.5;
                            }

                            t.active.idx = t.active.tempIdx;
                        }
                    }
                }

                i = i + (isBlackTurn ? -1 : 1);
            }
        },
        attack: function (targetIdx, stay, delay, runDistance) {
            let t = this;
            let targetArea = t.areas.live[targetIdx];
            let activeArea = t.areas.live[t.active.idx];
            let isAlive = true;

            if (t.isUnitInArea(t.active.idx)) {
                if (!t.hasGrayShelter(targetIdx) && (t.isShelterInArea(targetIdx) && targetArea.shelter.player !== activeArea.unit.player) || (t.isUnitInArea(targetIdx) && targetArea.unit.player !== activeArea.unit.player)) {
                    let demage = activeArea.unit.attack + activeArea.unit.buffed['attack'];
                    let accelDemage = 0;
                    let activeDirection = t.getDirection(targetIdx, t.active.idx);
                    let renewedTargetUnit = appLib.renew(targetArea.unit);

                    activeArea.unit.direction = activeDirection;

                    if (activeArea.unit.accel && Number(runDistance))
                        accelDemage = Number(runDistance);

                    if (t.isShelterInArea(targetIdx)) {
                        demage += accelDemage;
                        targetArea.shelter.subHp += demage;
                        isAlive = targetArea.shelter.hp - targetArea.shelter.subHp > 0 || t.isUnitInArea(targetIdx);

                        setTimeout(function () {
                            t.showUp('attack', targetIdx, demage, true);
                        }, delay ? t.base.time.animate : 0);

                        if (targetArea.shelter.hp - targetArea.shelter.subHp <= 0)
                            activeArea.unit.destory += 1;

                        if (targetArea.shelter.hp - targetArea.shelter.subHp <= 0 && activeArea.unit.distance < 2 && !t.isUnitInArea(targetIdx)) {
                            targetArea.unit = appLib.renew(activeArea.unit);
                            activeArea.unit = {};
                            t.active.idx = targetIdx;
                        }
                    }
                    else {
                        let critical = 1;
                        let multi = activeDirection * targetArea.unit.direction;
                        let defense = 0;

                        if (targetArea.unit.direction === activeDirection)
                            critical = 3;
                        else if (multi !== 27 && multi !== 72)
                            critical = 1.5;
                        else
                            defense = targetArea.unit.defense + targetArea.unit.buffed['defense'];

                        demage = demage * critical + accelDemage - defense;

                        if (demage < 0)
                            demage = 0;

                        targetArea.unit.subHp += demage;
                        isAlive = targetArea.unit.hp - targetArea.unit.subHp > 0;

                        if (activeArea.unit.hp - activeArea.unit.subHp <= 0) {
                            activeArea.unit.hp = -100;
                            targetArea.unit.exp += activeArea.unit.crop + activeArea.unit.level;
                        }

                        if (targetArea.unit.hp - targetArea.unit.subHp <= 0) {
                            targetArea.unit.hp = -100;
                            activeArea.unit.exp += targetArea.unit.crop + targetArea.unit.level;
                            activeArea.unit.destory += 1;

                            if (!stay) {
                                if (targetArea.unit.hidden ? true : activeArea.unit.distance < 2) {
                                    targetArea.unit = appLib.renew(activeArea.unit);
                                    activeArea.unit = {};
                                    t.active.idx = targetIdx;
                                }
                            }
                        }

                        if (activeArea.unit.distance > 1)
                            t.showUnitForSeconds(t.active.idx, activeArea.unit);

                        setTimeout(function () {
                            t.showUp('attack', targetIdx, demage, true);
                        }, delay ? t.base.time.animate : 0);
                    }

                    setTimeout(function () {
                        for (let i in t.areas.live) {
                            if (t.areas.live[i].unit && t.areas.live[i].unit.name) {
                                t.areas.live[i].unit.hp -= t.areas.live[i].unit.subHp;
                                t.areas.live[i].unit.subHp = 0;

                                if (t.areas.live[i].unit.hp <= 0)
                                    t.areas.live[i].unit = {};
                            }

                            if (t.areas.live[i].shelter && t.areas.live[i].shelter.name) {
                                t.areas.live[i].shelter.hp -= t.areas.live[i].shelter.subHp;
                                t.areas.live[i].shelter.subHp = 0;

                                if (t.areas.live[i].shelter.hp <= 0)
                                    t.areas.live[i].shelter = {};
                            }
                        }

                        t.checkFinished();
                    }, delay ? t.base.time.animate : 0);

                    if (!isAlive)
                        t.showUnitForSeconds(targetIdx, renewedTargetUnit);
                }
            }

            return isAlive;
        },
        showUnitForSeconds: function (idx, unit) {
            let $area = $(this.$el).find('.each-area[data-idx=' + idx + ']');
            let $clone = $('<div data-player="' + unit.player + '" data-name="' + unit.name + '" data-direction="' + unit.direction + '" data-rotate="' + unit.rotate + '" class="unit z-0 d-iblock"><img src="../../img/' + unit.player + '/' + unit.name + '.png"></div>');
            let delay = unit.status === 'move';

            if (delay) {
                setTimeout(function () {
                    $area.append($clone);
                }, this.base.time.animate);
            }
            else {
                $area.append($clone);
            }

            setTimeout(function () {
                $clone.fadeOut(function () {
                    $clone.remove();
                });
            }, this.base.time.animate);
        },
        showUp: function (act, idx, val, isImportant) {
            let visible = val || isImportant;

            if (act === 'attack') {
                let $area = $(this.$el).find('.each-area[data-idx=' + idx + ']');
                let offset = $area.offset();

                new mojs.Burst({
                    count: 12,
                    children: {
                        shape: 'polygon',
                        fill: '#ff4141'
                    },
                    onComplete: function () {
                        this.el.parentNode.removeChild(this.el);
                    }
                }).tune({ top: offset.top + $area.height() / 2, left: offset.left + $area.width() / 2 }).setSpeed(3).replay();
            }
            else if (this.areas.live[idx] && this.areas.live[idx].unit && this.areas.live[idx].unit.name) {
                visible = visible && this.my.player === this.areas.live[idx].unit.player;
            }

            if (visible) {
                let $area = $('#app .each-area[data-hidx=' + idx + ']');
                let $showUp = null;
                let obj = { opacity: 0.5 };
                $area.find('.show-up').remove();
                $area.append('<div class="show-up" data-act="' + act + '" data-player="' + this.my.player + '">' + val + '</div>');
                $showUp = $area.find('.show-up');

                if (this.my.player === 'white')
                    obj.bottom = -21;
                else
                    obj.top = -21;

                $showUp.stop().animate(obj, 1000, function () {
                    $showUp.remove();
                });
            }
        },
        initAreas: function () {
            for (let i in this.areas.live) {
                this.areas.live[i].status = '';
                this.areas.live[i].hidden = false;
            }
        },
        initGrab: function () {
            this.grabbed = {
                name: null
            };
        },
        initActive: function () {
            this.active = {
                idx: null,
                tempIdx: null,
                unit: null
            };
        },
        setUnit: function (player, name, idx, init) {
            if (this.base.units[name]) {
                let unit = appLib.renew(this.base.units[name]);
                let area = this.areas.live[idx];

                if (init) {
                    unit.power = 0;
                }
                else {
                    this.status[player].crop = (parseFloat(this.status[player].crop) - parseFloat(unit.crop)).toFixed(2);
                    this.status[player].crop = Number(this.status[player].crop.toString());
                }

                if (unit.crop)
                    this.status[player].units += unit.crop;

                unit.player = player;
                unit.direction = player === 'white' ? 6 : 12;
                area.unit = unit;
            }
            else {
                this.setMessage(this.my.player, '오류가 있습니다.', this.base.time.message);
            }
        },
        setLabel: function (txt, time) {
            let t = this;

            if (t.status.replay)
                return;

            clearTimeout(t.timer['label']);
            $('#labelArea').stop().fadeIn(0);

            t.label.player = t.my.player;
            t.label.message = txt;

            if (time === 0) {
                t.label.message = txt;
            }
            else {
                t.timer['label'] = setTimeout(function () {
                    $('#labelArea').stop().fadeOut(500, function () {
                        t.label.message = null;
                    });
                }, time ? time : 2500);
            }
        },
        hideLabel: function () {
            if (this.status.started)
                this.label.message = null;
        },
        changeTurn: function (player) {
            let crop = 0;
            let buffArr = this.getBuffArr();

            this.status.turn = player;

            if (player === this.my.player) {
                this.areas.prev = appLib.renew(this.areas.live);
                this.setLabel("It's your turn!");
            }
            else {
                this.setLabel("It's " + player + " player's turn");
            }

            for (let i in this.areas.live) {
                let eachUnit = this.areas.live[i].unit;

                if (eachUnit.name) {
                    if (eachUnit.player === player) {
                        let inInBuffArr = false;
                        let restoreHp = 0;
                        let isInShelterOrArea = this.isInShelterOrArea(i);

                        for (let j in buffArr) {
                            if (Number(i) === Number(buffArr[j].idx) && eachUnit.player === buffArr[j].player) {
                                inInBuffArr = true;
                                break;
                            }
                        }

                        // 파워
                        if (eachUnit.restorePower && eachUnit.power < eachUnit.maxPower) {
                            eachUnit.power += eachUnit.restorePower;

                            if (eachUnit.power > eachUnit.maxPower)
                                eachUnit.power = eachUnit.maxPower;
                        }

                        // 경험
                        if (eachUnit.level) {
                            if (inInBuffArr)
                                eachUnit.exp += 1;

                            if (isInShelterOrArea)
                                eachUnit.exp += 1;
                        }

                        // 추가 농작물
                        if (eachUnit.farm)
                            crop += eachUnit.farm + eachUnit.buffed['farm'];

                        // 추가 체력
                        if (eachUnit.restoreHp && eachUnit.hp < eachUnit.maxHp) {
                            if (isInShelterOrArea || inInBuffArr)
                                restoreHp = eachUnit.restoreHp + (eachUnit.buffed['restoreHp']);

                            eachUnit.hp += restoreHp;
                            this.showUp('restoreHp', i, restoreHp);

                            if (eachUnit.hp > eachUnit.maxHp)
                                eachUnit.hp = eachUnit.maxHp;
                        }
                    }
                }
            }

            crop = parseFloat(crop).toFixed(2);
            this.status[player].crop = (parseFloat(this.status[player].crop) + parseFloat(this.status[player].incomeCrop) + parseFloat(crop)).toFixed(2);
            this.status[player].crop = Number(this.status[player].crop.toString());
            this.status.time = this.base.time.turn;

            if (this.status[player].crop > this.status[player].maxCrop)
                this.status[player].crop = this.status[player].maxCrop;

            this.checkBuff();
            this.checkLevel();
            this.initAreas();
            this.initActive();
            this.initGrab();

            if (!this.status.replay)
                this.setTimer();
        },
        rotateAuto: function () {
            if (this.active.idx === undefined || this.active.idx === null)
                return;

            let autoRotates = [{
                area: this.areas.live[this.active.idx - this.base.columnNum],
                direction: this.areas.live[this.active.idx].unit === 'black' ? 12 : 6
            }, {
                area: this.areas.live[this.active.idx + 1],
                direction: 9
            }, {
                area: this.areas.live[this.active.idx + this.base.columnNum],
                direction: this.areas.live[this.active.idx].unit === 'black' ? 6 : 12
            }, {
                area: this.areas.live[this.active.idx - 1],
                direction: 3
            }];

            for (let i in autoRotates) {
                let area = autoRotates[i].area;

                if (area && area.unit && area.unit.name && this.isUnitInArea(this.active.idx) && area.unit.player !== this.areas.live[this.active.idx].unit.player && !this.areas.live[this.active.idx].unit.hidden && this.isInCross(this.active.idx, area.idx))
                    area.unit.direction = autoRotates[i].direction;
            }

            if (this.autoRotateArr.length) {
                for (let i in this.autoRotateArr) {
                    if (this.isUnitInArea(this.autoRotateArr[i].idx))
                        this.areas.live[this.autoRotateArr[i].idx].unit.direction = this.autoRotateArr[i].direction;
                }

                this.autoRotateArr = [];
            }
        },
        setMessage: function (val1, val2, val3) {
            if (!this.status.replay)
                appLib.bandMessage(val1, val2, val3);
        },
        setTimer: function () {
            let t = this;
            clearInterval(t.interval['timer']);

            t.interval['timer'] = setInterval(function () {
                if (t.status.time > 0) {
                    t.status.time -= 1;

                    if (t.status.time === 30 && t.status.turn === t.my.player) {
                        t.setLabel('Hurry up, time is running out');
                        t.setMessage(t.my.player, '유효 시간이 30초 남았습니다.', t.base.time.message);
                    }
                }
                else {
                    t.closeModal();

                    if (t.status.turn === t.my.player) {
                        t.setMessage(t.my.player, '유효 시간이 지났습니다.', t.base.time.message);
                        t.request('pass', t.status.turn === 'white' ? 'black' : 'white');
                    }
                }
            }, 1000);
        },
        checkOwn: function (idx, isRunned) {
            if (this.isUnitInArea(idx) && this.areas.live[idx].unit.name === 'king') {
                let kingUnit = this.areas.live[idx].unit;
                let startIdx = (Math.floor(idx / this.base.columnNum) * this.base.columnNum) + (this.base.columnNum * (kingUnit.player === 'black' ? -1 : 1));
                let endIdx = startIdx + this.base.columnNum - 1;
                let anotherKingIdx = null;

                for (let i in this.areas.live) {
                    let eachArea = this.areas.live[i];
                    let idx = Number(i);
                    let eachCond = kingUnit.player === 'black' ? idx >= startIdx : idx <= endIdx;

                    if (eachCond) {
                        if (!eachArea.owner && !eachArea.ownOnly)
                            eachArea.owner = kingUnit.player;
                    }
                    else if (eachArea.owner === kingUnit.player && !eachArea.ownOnly) {
                        eachArea.owner = null;
                    }

                    if (this.isUnitInArea(idx) && eachArea.unit.name === 'king' && eachArea.unit.player !== kingUnit.player)
                        anotherKingIdx = idx;
                }

                if (!isRunned && anotherKingIdx != null)
                    this.checkOwn(anotherKingIdx, true);
            }

            for (let i in this.areas.live) {
                let eachArea = this.areas.live[i];

                if (eachArea.shelter && eachArea.shelter.name) {
                    eachArea.shelter.player = 'gray';

                    if (eachArea.unit && eachArea.unit.name)
                        eachArea.shelter.player = eachArea.unit.player;
                }
            }
        },
        checkBuff: function () {
            let buffArr = this.getBuffArr();

            for (let i in this.areas.live) {
                if (this.isUnitInArea(i)) {
                    let eachArea = this.areas.live[i];
                    let eachUnit = eachArea.unit;
                    let inInBuffArr = false;

                    for (let j in buffArr) {
                        if (Number(i) === Number(buffArr[j].idx) && eachUnit.player === buffArr[j].player) {
                            inInBuffArr = true;
                            break;
                        }
                    }

                    if (inInBuffArr) {
                        eachUnit.buffed['attack'] = 1;
                        eachUnit.buffed['defense'] = 1;

                        if (eachUnit.farm > 0)
                            eachUnit.buffed['farm'] = 0.25;

                        if (eachUnit.move > 1)
                            eachUnit.buffed['move'] = 1;

                        if (eachUnit.distance > 1)
                            eachUnit.buffed['distance'] = 1;

                        if (eachUnit.maxDistance > 1)
                            eachUnit.buffed['maxDistance'] = 1;

                        if (eachUnit.restoreHp > 0)
                            eachUnit.buffed['restoreHp'] = 1;

                        this.setLevel(i);
                    }
                    else {
                        eachUnit.buffed = appLib.renew(this.base.buffed);
                    }
                }
            }
        },
        checkVisible: function () {
            let hnum = null;

            for (let i in this.areas.live)
                this.areas.live[i].watchers = '';

            for (let i = 0; i < 2; i += 1) {
                let player = i === 0 ? 'black' : 'white';
                let black = player === 'black';

                for (let i in this.areas.live) {
                    if ((this.isUnitInArea(i) && this.areas.live[i].unit.player === player) || this.areas.live[i].owner === player) {
                        hnum = this.areas.live[i].hnum;

                        if (black)
                            break;
                    }
                }

                for (let i in this.areas.live) {
                    let visible = this.areas.live[i].owner === player || (black ? this.areas.live[i].hnum >= hnum - 3 : this.areas.live[i].hnum <= hnum + 3);
                    let gap = (this.areas.live[i].hnum - hnum) * (black ? -1 : 1);

                    if (visible) {
                        let opacity = '0.0'

                        if (gap > 2)
                            opacity = '0.3';
                        else if (gap > 1)
                            opacity = '0.2';
                        else if (gap > 0)
                            opacity = '0.1';

                        this.areas.live[i].watchers += player + ':' + opacity + '/';
                    }
                }
            }
        },
        checkLevel: function () {
            for (let i in this.areas.live) {
                if (this.isUnitInArea(i) && this.areas.live[i].unit.name === 'king')
                    this.setLevel(i);
                else if (this.isInShelterOrArea(i))
                    this.setLevel(i);
            }
        },
        checkFinished: function () {
            let t = this;

            if (!t.status.finished) {
                let king = {
                    white: 0,
                    black: 0
                };

                for (let i in t.areas.live) {
                    let unit = t.areas.live[i].unit;

                    if (unit.name) {
                        if (unit.name === 'king') {
                            king[unit.player] += 1;

                            if (king.white && king.black)
                                break;
                        }
                    }
                }

                if (!king.white || !king.black) {
                    let winner = !king.white ? 'Black' : 'White';
                    t.setLabel(winner + ' player won', 0);
                    t.setMessage(t.my.player, t.getLang('ko', winner) + ' 플레이어가 승리하였습니다. 홈(home) 버튼을 터치해주세요.', 0);
                    t.initGrab();
                    t.initActive();
                    t.initAreas();
                    clearInterval(t.interval['timer']);

                    for (let i in t.areas.live)
                        t.areas.live[i].owner = winner;

                    t.status.finished = true;
                    window.onbeforeunload = null;

                    if (!t.status.replay) {
                        setTimeout(function () {
                            socket.disconnect();
                        }, 30000);
                    }
                }
            }
        },
        closeModal: function () {
            this.modal = {
                idx: null,
                info: {},
                type: null
            };
        }
    },
    created: function () {
        let t = this;
        let name = location.hash ? location.hash.replace('#/', '') : '';
        let replays = localStorage.getItem('replays');

        if (navigator.platform !== 'Win32') {
            $(document).on('contextmenu', function (e) {
                e.preventDefault();
            });
        }

        if (replays)
            replays = JSON.parse(replays);
        else
            replays = [];

        for (let i in replays) {
            if (replays[i].name === name) {
                t.status.replay = true;
                t.my.player = replays[i].player;
                t.flows = replays[i].flows;
                t.start();

                t.timer['replay'] = setTimeout(function () {
                    t.replay.touchable = true;
                    t.play();
                }, 1000);
                return;
            }
        }

        t.interval['dot'] = setInterval(function () {
            if (t.dots.length > 20)
                t.dots = '';

            t.dots += '.';
        }, 250);

        if (name) {
            $.get(global.baseUrl + '/valid?name=' + name, function (res) {
                if (res === 'valid') {
                    t.my.room.name = name;
                    t.my.room.loaded = true;
                }
                else {
                    alert('유효한 접속이 아닙니다. 다시 시도해주세요.');
                    location.href = '../../index.html';
                }
            });
        }
        else {
            t.my.room.name = name;
            t.my.room.host = true;
            t.my.room.loaded = true;
            t.enter();
        }
    },
    mounted: function () {
        $(this.$el).attr('data-device', appLib.isMobileDevice() ? 'mobile' : 'desktop');
    }
});