const { app, BrowserWindow } = require("electron");
const path = require("node:path");

require("electron-reload")(__dirname, {
	electron: require(`../node_modules/electron`),
});

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "./preload.js"),
		},
	});

	win.loadFile("source/index.html");
};

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});