import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockApp from './mock'
import * as path from 'path'
const mock = (): Plugin => ({
    name: 'mock',
    configureServer: async server => {
        server.middlewares.use('/api', mockApp)
    }
})

export default defineConfig({
    plugins: [vue(), mock()],
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
        extensions: ['.mjs', '.ts', '.tsx', '.vue', '.js', '.jsx', '.json']
    },

    server: {
        hmr: true
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'naive-ui': ['naive-ui']
                }
            }
        }
    }
})
