import react from '@vitejs/plugin-react'
import dns from 'node:dns'
import { defineConfig } from 'vite'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
	server: {
		port: 3006,
	},
	plugins: [react()],
})
