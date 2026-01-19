// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MyTerminal from '../../components/MyTerminal.vue' // 引入你的组件--注册组件
export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots

        })
    },
    enhanceApp({app, router, siteData}) {
        // 全局注册组件，这样你在任何 .md 文件里都能直接用 <MyTerminal />
        app.component('MyTerminal', MyTerminal)
    }
} satisfies Theme
