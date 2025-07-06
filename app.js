// for node app.js only - 

// const http = require('http');

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('My name is Twinkle Devwanshi \n');
// });

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
      

// for node app.js with html - 

const http = require('http');
const fs = require('fs'); // to read files
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Serve HTML only on root path
  if (req.url === '/' || req.url === '/app.html') {
    const filePath = path.join(__dirname, 'app.html');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading the HTML file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    // For any other path
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
