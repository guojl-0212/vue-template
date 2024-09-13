import path from 'node:path'
import vue from '@vitejs/plugin-vue'

export default () => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [vue()],
  }
}
