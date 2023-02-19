module.exports = {
	devServer: (configFunction) => (proxy, allowedHost) => {
		const config = configFunction(proxy, allowedHost);
		config.historyApiFallback = true;
		config.proxy = {
			'/api': {
				target: 'http://localhost:5000',
				changeOrigin: true,
			},
			'/socket.io': {
				target: 'http://localhost:5000',
				changeOrigin: true,
			}
		}
		return config;
	},
}
