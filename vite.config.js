import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, writeFileSync } from 'node:fs'

const sitesWorker = () => ({
  name: 'sites-worker-entry',
  apply: 'build',
  closeBundle() {
    mkdirSync('dist/server', { recursive: true })
    writeFileSync(
      'dist/server/index.js',
      `export default { async fetch(request, env) { return env.ASSETS.fetch(request) } }\n`,
    )
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitesWorker()],
})
