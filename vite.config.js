import reactRefresh from '@vitejs/plugin-react-refresh'

import('vite').UserConfig

export default {
	plugins: [reactRefresh()],
	server: {
		port: 1,
		host: '0.0.0.0',
		hmr: {
			clientPort: 2,
		}
	}
}