let socket;

let app = new Vue({
    el: '#app',
    data: {
        units: [
            {
                name: 'king',
                title: '왕(King)',
                rotate: false,
                desc: '이 게임에서 가장 중요하고 중심이 되며 승패의 기준이 되는 유일한 유닛입니다.'
            },
            {
                name: 'farmer',
                title: '농부(Farmer)',
                rotate: false,
                desc: '기본적으로 제공되는 농작물 외에 추가적으로 농작물을 얻을 수 있게 해주는 유닛입니다.'
            },
            {
                name: 'sword',
                title: '검병(Sword)',
                rotate: false,
                desc: '저렴한 가격이지만 높은 공격력으로 단기적인 공격을 감행할 때 많이 사용되는 유닛입니다.'
            },
            {
                name: 'arrow',
                title: '궁병(Arrow)',
                rotate: false,
                desc: '원거리에 있는 상대편의 유닛을 공격할 수 있는 유닛입니다.'
            },
            {
                name: 'shield',
                title: '방패병(Shield)',
                rotate: true,
                desc: '체력과 방어력이 높고, 스루(through) 공격을 통해 상대편의 여러 유닛들을 한번에 잡을 수 있는 유닛입니다.'
            },
            {
                name: 'spy',
                title: '정탐꾼(Spy)',
                rotate: true,
                desc: '상대편의 진영을 정탐할 수 있는 유닛입니다. 나에게는 보이지만 상대편에게는 보이지 않아 정찰에 적합합니다.'
            },
            {
                name: 'horse',
                title: '기병(Horse)',
                rotate: true,
                desc: '높은 이동력과 공격력을 자랑하는 유닛입니다. 회복되는 파워도 높습니다. 상대가 준비한 진형의 빈틈을 파고 들어 상대편의 중심을 흔들 수 있습니다.'
            },
            {
                name: 'elephant',
                title: '코끼리병(Elephant)',
                rotate: true,
                desc: '액셀(accel) 공격이 가능한 유닛입니다. 액셀 공격은 먼 거리에서 달려와 상대편을 공격하면 공격 데미지를 증폭시킬 수 있는 능력입니다.'
            },
            {
                name: 'stone',
                title: '캐터펄트(stone)',
                rotate: true,
                desc: '아주 먼 거리에 있는 유닛도 원거리에서 공격할 수 있습니다. 상대방의 요새 공격 시 원래의 공격력의 3배만큼 데미지를 증폭시킬 수 있습니다.'
            }]
    }
});