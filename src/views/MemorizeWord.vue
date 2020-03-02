<template>
    <my-page title="背单词">
        <div class="common-container container">
            <div class="word">{{ word }}</div>
            <pre class="desc" v-if="descVisible">{{ desc }}</pre>
            <div class="btns">
                <ui-raised-button class="btn" primary label="记得" @click="next" />
                <ui-raised-button class="btn" secondary :label="this.descVisible ? '下一个' : '忘了'" @click="skip" />
                <ui-raised-button class="btn" label="发音" @click="play" />
            </div>
        </div>
        <audio :src="audioSrc" ref="audio"></audio>
    </my-page>
</template>

<script>
    import wordList from '../data/vocabulary'
    let map = null
    // const {wordList} = require('../util/vocabulary.js')
    console.log(wordList)

    export default {
        data () {
            return {
                word: 'asd',
                desc: 'asd',
                descVisible: false,
                currentIndex: 0,
                audioSrc: ''
            }
        },
        mounted() {
            let data = this.$storage.get('map')
            if (data) {
                map = data
            } else {
                let obj = {}
                for (let word of wordList) {
                    obj[word] = 0
                }
                map = obj
                this.$storage.set('map', map)
            }
            this.show(wordList[this.currentIndex])
        },
        methods: {
            show(word) {
                this.word = word
                this.desc = ''
                let url = `https://cors-anywhere.herokuapp.com/http://www.iciba.com/index.php?a=getWordMean&c=search&word=` + word
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        if (!data.baesInfo) {
                            this.desc = '无释义'
                            return
                        }
                        let symbol = data.baesInfo.symbols[0]
                        console.log(symbol)
                        this.desc = `美 [${symbol.ph_am}] 英 [${symbol.ph_en}]` + '\n'
                        for (let part of symbol.parts) {
                            let mines = part.means.join(', ')
                            this.desc += part.part + mines + '\n'
                        }
                        // this._audioSrc = symbol.ph_en_mp3
                        this._audioSrc = symbol.ph_am_mp3
                        console.log(this._audioSrc)
                    },
                    response => {
                        console.log(response)
                    })
            },
            next() {
                this.descVisible = false
                this.currentIndex++
                this.show(wordList[this.currentIndex])
            },
            skip() {
                if (!this.descVisible) {
                    this.descVisible = true
                } else {
                    this.descVisible = false
                    this.next()
                }
            },
            play() {
                this.audioSrc = this._audioSrc + '?v=' + new Date().getTime()
                this.$nextTick(() => {
                    this.$refs.audio.play()
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.word {
    font-size: 32px;
    margin-bottom: 16px;
}
.desc {
    margin-bottom: 16px;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
}
.btns {
    .btn {
        margin-right: 8px;
    }
}
</style>
