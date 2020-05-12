const http = require('http');
const httpProxy = require('http-proxy');

// create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({});

const { log } = console;

const target = 'http://127.0.0.1:8081';

proxy.on('error', (err, req, res) => {
  log('on error');
});

proxy.on('proxyReq', (proxyReq, req, res, options) => {
  log('on request');
});

proxy.on('proxyRes', (proxyRes, req, res) => {
  log('on response');
});

const server = http.createServer((req, res) => {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, { target });
});

log('listening on port 5050');
server.listen(5050);
