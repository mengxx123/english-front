<template>
    <my-page title="音标">
        <div class="common-container container">
            <ui-article>
                <table class="ybtable">
                        <tr>
                            <th width="50" rowspan="5">元音</th>
                            <th width="80" rowspan="3">单元音</th>
                            <th width="100">前元音</th>
                            <td @click="play('i-sound2.mp3')" mapid="1" class="phonetic"><span>/iː/</span></td>
                            <td @click="play('i-sound.mp3')" mapid="2" class="phonetic"><span>/ɪ/</span></td>
                            <td @click="play('e-sound.mp3')" mapid="4" class="phonetic"><span>/e/</span></td>
                            <td @click="play('an-sound.mp3')" mapid="5" class="phonetic"><span>/æ/</span></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>中元音</th>
                            <td>&nbsp;</td>
                            <td @click="play('er-sound.mp3')" mapid="8" class="phonetic"><span>/ɜː/</span></td>
                            <td @click="play('e^-sound.mp3')" mapid="9" class="phonetic"><span>/ə/</span></td>
                            <td @click="play('^-sound.mp3')" mapid="18" class="phonetic"><span>/ʌ/</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>后元音</th>
                            <td @click="play('u-sound2.mp3')" mapid="10" class="phonetic"><span>/uː/</span></td>
                            <td @click="play('u-sound.mp3')" mapid="11" class="phonetic"><span>/ʊ/</span></td>
                            <td @click="play('o-sound2.mp3')" mapid="13" class="phonetic"><span>/ɔː/</span></td>
                            <td @click="play('o-sound.mp3')" mapid="14" class="phonetic"><span>/ɒ/</span></td>
                            <td @click="play('a-sound2.mp3')" mapid="17" class="phonetic"><span>/ɑː/</span></td>
                        </tr>
                        <tr>
                            <th rowspan="2">双元音</th>
                            <th>开合双元音</th>
                            <td @click="play('ei.mp3')" mapid="22" class="phonetic"><span>/eɪ/</span></td>
                            <td @click="play('ai.mp3')" mapid="25" class="phonetic"><span>/aɪ/</span></td>
                            <td @click="play('oi.mp3')" mapid="28" class="phonetic"><span>/ɔɪ/</span></td>
                            <td @click="play('ao.mp3')" mapid="31" class="phonetic"><span>/aʊ/</span></td>
                            <td @click="play('eu.mp3')" mapid="35" class="phonetic"><span>/əʊ/</span></td>
                        </tr>
                        <tr>
                            <th>集中双元音</th>
                            <td @click="play('ir.mp3')" mapid="37" class="phonetic"><span>/ɪə/</span></td>
                            <td @click="play('er.mp3')" mapid="38" class="phonetic"><span>/eə/</span></td>
                            <td @click="play('uer.mp3')" mapid="40" class="phonetic"><span>/ʊə/</span></td>
                            <td>&nbsp;</td><td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th rowspan="9">辅音</th>
                            <th rowspan="2">爆破音</th>
                            <th>清辅音</th>
                            <td @click="play('p.mp3')" mapid="41" class="phonetic"><span>/p/</span></td>
                            <td @click="play('t.mp3')" mapid="44" class="phonetic"><span>/t/</span></td>
                            <td @click="play('k.mp3')" mapid="47" class="phonetic"><span>/k/</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>浊辅音</th>
                            <td @click="play('b.mp3')" mapid="42" class="phonetic"><span>/b/</span></td>
                            <td @click="play('d.mp3')" mapid="45" class="phonetic"><span>/d/</span></td>
                            <td @click="play('g.mp3')" mapid="48" class="phonetic"><span>/ɡ/</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th rowspan="2">摩擦音</th>
                            <th>清辅音</th>
                            <td @click="play('f.mp3')" mapid="56" class="phonetic"><span>/f/</span></td>
                            <td @click="play('s.mp3')" mapid="50" class="phonetic"><span>/s/</span></td>
                            <td @click="play('ss.mp3')" mapid="53" class="phonetic"><span>/ʃ/</span></td>
                            <td @click="play('si.mp3')" mapid="59" class="phonetic"><span>/θ/</span></td>
                            <td @click="play('h.mp3')" mapid="63" class="phonetic"><span>/h/</span></td>
                        </tr>
                        <tr>
                            <th>浊辅音</th>
                            <td @click="play('v.mp3')" mapid="57" class="phonetic"><span>/v/</span></td>
                            <td @click="play('z.mp3')" mapid="51" class="phonetic"><span>/z/</span></td>
                            <td @click="play('n3.mp3')" mapid="55" class="phonetic"><span>/ʒ/</span></td>
                            <td @click="play('qq.mp3')" mapid="61" class="phonetic"><span>/ð/</span></td>
                            <td @click="play('r.mp3')" mapid="64" class="phonetic"><span>/r/</span></td>
                        </tr>
                        <tr>
                            <th rowspan="2">破擦音</th>
                            <th>清辅音</th>
                            <td @click="play('tss.mp3')" mapid="65" class="phonetic"><span>/tʃ/</span></td>
                            <td @click="play('tr.mp3')" mapid="69" class="phonetic"><span>/tr/</span></td>
                            <td @click="play('ts.mp3')" mapid="72" class="phonetic"><span>/ts/</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>浊辅音</th>
                            <td @click="play('d3.mp3')" mapid="67" class="phonetic"><span>/dʒ/</span></td>
                            <td @click="play('dr.mp3')" mapid="71" class="phonetic"><span>/dr/</span></td>
                            <td @click="play('dz.mp3')" mapid="73" class="phonetic"><span>/dz/</span></td>
                            <td>&nbsp;</td><td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>鼻音</th>
                            <th>（浊辅音）</th>
                            <td @click="play('m.mp3')" mapid="74" class="phonetic"><span>/m/</span></td>
                            <td @click="play('n.mp3')" mapid="75" class="phonetic"><span>/n/</span></td>
                            <td @click="play('ng.mp3')" mapid="77" class="phonetic"><span>/ŋ/</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>舌则音</th>
                            <th>（浊辅音）</th>
                            <td @click="play('l.mp3')" mapid="80" class="phonetic"><span>/l/</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>半元音</th>
                            <th>（浊辅音）</th>
                            <td @click="play('j.mp3')" mapid="86" class="phonetic"><span>/j/</span></td>
                            <td @click="play('w.mp3')" mapid="83" class="phonetic"><span>/w/</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="8" align="left" style="color:#666;font-size:12px;text-align:left;">注：不同词典有不同的音标符号系统，本表为最新DJ英语国际音标表符号,红色为新版音标符号与老版不同。</td>
                        </tr>
                </table>
            </ui-article>
        </div>
        <audio :src="audioSrc" ref="audio"></audio>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                audioSrc: ''
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            play(fileName) {
                this.audioSrc = `https://img1.yunser.com/yinbiao/${fileName}`
                this.$nextTick(() => {
                    this.$refs.audio.play()
                })
            },
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>

<style lang="scss" scoped>
.phonetic {
    cursor: pointer;
}
</style>
