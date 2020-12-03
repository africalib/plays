Vue.component('component-top', {
    template: `<div class="component-top">
    <a class="youtube" href="https://www.youtube.com/channel/UC_AUsiMJrlX25gH8PUvyKGg/playlists"
        target="_blank">
        <i class="fa fa-youtube-play"></i>
    </a>
    <a href="./mypage.html">
        <img src="img/common/index.user.svg" />
    </a>
    <a class="pointer" v-on:click="open()">
        <img src="img/common/index.replay.svg" />
    </a>
    <a href="./help.html">
        <img src="img/common/index.help.svg" />
    </a>
</div>`
});