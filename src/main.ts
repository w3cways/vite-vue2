import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$getImageUrl = (fileName: string) => {
    //引用assets中的图片地址，如logo.png
    const url = new URL(`./assets/${fileName}`, import.meta.url).href
    return url
}

new Vue({
    render: (h) => h(App),
}).$mount('#app')
