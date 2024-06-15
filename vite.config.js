import { defineConfig } from 'vite'
import 'vite/modulepreload-polyfill'

export default defineConfig({
    build:{
        cssMinify:lightningcss

    },
    // 配置开发服务器
    server: {
        port: 8000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
            
        }
    }

})