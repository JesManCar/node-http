const http = require('node:http');
const { importantData } = require('./data.js');

const server = http.createServer((req, res) => {
  console.log('request recived');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${importantData.title}</title>
    </head>
    <body>
    <h1>${importantData.title}</h1>
    <h3>${importantData.subtitle}</h3>
    <p>${importantData.description}</p>
    </body>
    </html>
`);
});

server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});
