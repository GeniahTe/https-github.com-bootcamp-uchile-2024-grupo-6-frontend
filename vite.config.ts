
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/categories-back": {
        target: "http://127.0.0.1:3000/categories",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/categories-back', ""),
      },
      "/products-back": {
        target: "http://127.0.0.1:3000/products/catalog",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/products-back', ""),
      
      },
    },
  },
  plugins: [react()],
})