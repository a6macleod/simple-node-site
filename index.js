const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);

  // set header content type
  res.setHeader('Content-type', 'text/html');

  // route to different pages
  let path = ''
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send the html files
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  })
});

server.listen(8080, 'localhost', () => {
  console.log(`Server started`);
});