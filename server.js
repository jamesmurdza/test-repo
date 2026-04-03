const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Welcome</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
            h1 { color: #333; }
            ul { line-height: 1.8; }
          </style>
        </head>
        <body>
          <h1>Welcome to the Web Server!</h1>
          <p>This is a simple Node.js web server.</p>
          <h2>Available files:</h2>
          <ul>
            <li><a href="/hello.txt">hello.txt</a></li>
            <li><a href="/hi.txt">hi.txt</a></li>
            <li><a href="/bye.txt">bye.txt</a></li>
            <li><a href="/README.md">README.md</a></li>
          </ul>
        </body>
      </html>
    `);
  } else {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
