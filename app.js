var http = require('http'),
	fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {
  	'Content-Type': 'application/pdf',
  	'Content-Disposition': 'inline; filename="peters-mom.pdf"'
  });

  fs.readFile('./subject.pdf', function (err, data) {
  	if (err) {
  		res.end(err.toString());
  	}

  	res.end(data);
  });
}).listen(9111, '127.0.0.1');

console.log('app running...')