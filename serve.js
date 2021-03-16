require('http').createServer((req, res) => {
        res.setHeader("Content-Type", "text/html");
        if (req.url == '/') {
                res.end(require('fs').readFileSync('index.html'))
        }
        if (req.url == '/data.js') {
                res.end(require('fs').readFileSync('data.js'))
        }
        if (req.url.includes('/img')) {
                res.end(require('fs').readFileSync(req.url))
        }
}).listen(80, () => console.log('服务已启动'))