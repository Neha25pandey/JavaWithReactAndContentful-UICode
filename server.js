const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'createuser'
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
// const httpsOptions = {
// 	key: fs.readFileSync('cert/local/petsmartheadless.com+1-key.pem'),
// 	cert: fs.readFileSync('cert/local/petsmartheadless.com+1.pem'),
// }
app.prepare().then(() => {
	createServer( (req, res) => {
		const parsedUrl = parse(req.url, true)
		handle(req, res, parsedUrl)
	}).listen(port, (err) => {
		if (err) throw err
		console.log(
			`> Server started on http://${hostname}.com:${port} and http://${hostname}.hi:${port}`,
		)
	})
})
