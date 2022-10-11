import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import './app.less'

@Component({
    components: {
        HelloWorld,
    },
})
export default class App extends Vue {
    render() {
        return (
            <div id="app">
                <img alt="Vue logo" src={this.$getImageUrl('logo.png')} />
                <HelloWorld msg="Welcome to Your Vue.js App" />
            </div>
        )
    }
}
