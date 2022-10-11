import Vue from 'vue'
import VueRouter from 'vue-router'
import { Route } from 'vue-router'
import { Store } from 'vuex'
import axios from 'axios'
import t from '@/i18n'
// 扩充
declare module 'vue/types/vue' {
    interface Vue {
        $getImageUrl: Function
        _attrs: any
    }
}

declare module 'axios' {
    interface IAxios<D = null> {
        code: number
        msg: string
        data: any
        total?: number
        pageNum: number
        rows: any
    }
    export interface AxiosResponse<T = any> extends IAxios<D> {}
}
