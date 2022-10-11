import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import { resolve } from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'

function resolvePath(dir) {
    return resolve(__dirname, dir)
}

const lessAdditionalData = `@import "${resolvePath(
    './src/assets/styles/reset.less',
)}";` //全局引入的less文件

export default defineConfig(({ mode }: ConfigEnv) => {
    console.log(`当前环境:\x1B[44m${mode}\x1B[49m`)
    return {
        server: {
            host: '0.0.0.0', //target host
            port: 8080,
            open: true,
            proxy: {
                '/api': {
                    target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_TARGET,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, '/'),
                },
            },
        },
        resolve: {
            alias: {
                '@': resolvePath('./src'),
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    additionalData: lessAdditionalData,
                },
            },
        },
        plugins: [
            createVuePlugin({
                jsx: true,
            }),
            createHtmlPlugin({
                entry: './src/main.ts', //这里配置entry后，index.html中则不再需要写<script type="module" src="/src/main.ts"></script>
                inject: {
                    data: {
                        favicon: '/favicon.ico',
                        title: 'vite vue2 demo',
                    },
                },
            }),
        ],
    }
})
