<template>
    <my-page title="字母卡片">
        <div class="common-container container">
            <div class="card" @click="playAudio">
                {{ letter }}<span class="lowercase">{{ lowerCase }}</span>
            </div>
            <ul class="letter-list">
                <li class="item"
                    @click="setLetter(letter)"
                    v-for="letter in letters">{{ letter }}</li>
            </ul>
        </div>
        <audio :src="audioSrc" ref="audio"></audio>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                letter: 'A',
                letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                audioSrc: ''
            }
        },
        computed: {
            lowerCase() {
                return this.letter.toLowerCase()
            }
        },
        mounted() {
            let data = this.$route.query.data
            if (data) {
                this.letter = data.charAt(0).toUpperCase()
            }
        },
        methods: {
            setLetter(letter) {
                this.letter = letter
            },
            playAudio() {
                this.audioSrc = `https://img1.yunser.com/letter/${this.letter.toLowerCase()}.mp3`
                this.$nextTick(() => {
                    this.$refs.audio.play()
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .card {
        position: relative;
        width: 180px;
        height: 240px;
        margin: 16px auto;
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #fff;
        cursor: pointer;
        //
        font-size: 100px;
        text-align: center;
        line-height: 200px;
        color: #00b6f7;
        .lowercase {
            font-size: 80px;
        }
    }
    .letter-list {
        max-width: 340px;
        margin: 0 auto;
        @include clearfix;
        .item {
            float: left;
            width: 40px;
            height: 40px;
            margin-right: 8px;
            margin-bottom: 8px;
            text-align: center;
            line-height: 40px;
            background-color: #fff;
            border: 1px solid #eee;
            cursor: pointer;
        }
    }
</style>
