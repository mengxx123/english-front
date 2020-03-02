<template>
    <my-page title="英语" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '基本',
                        apps: [
                            {
                                name: '英语卡片',
                                desc: '',
                                icon: '/static/img/english.svg',
                                to: '/card'
                            },
                            {
                                name: '音标',
                                desc: '',
                                icon: '/static/img/english.svg',
                                to: '/phonetic_alphabet'
                            },
                            {
                                name: '背单词',
                                desc: '',
                                icon: '/static/img/english.svg',
                                to: '/memorize_word'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=english',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=english',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>
