// Custom Node.js server for cPanel "Setup Node.js App".
// cPanel will set PORT (and sometimes HOST) env vars automatically.
// Build first with `npm run build`, then set this file as the "Application startup file".

const next = require('next');
const http = require('http');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://${hostname}:${port} (${dev ? 'dev' : 'production'})`);
    });
});
