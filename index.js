var http = require('http');
var tanggal = require('./tanggal');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Saat ini tanggal ' + tanggal.myDateTime());
    res.end();
  })
  .listen(3030, () => {
    console.log('Server is listening on port 3000');
  });
