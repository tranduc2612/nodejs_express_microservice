const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

// Proxy cho Service 1 (port 3002)
app.use('/product', createProxyMiddleware({ 
  target: 'http://localhost:3002', 
  changeOrigin: true 
}));

// Proxy cho Service 2 (port 3001)
app.use('/user', createProxyMiddleware({ 
  target: 'http://localhost:3001', 
  changeOrigin: true 
}));

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
