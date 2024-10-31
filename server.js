const http = require('http');
const url = require('url');
const mysql = require('mysql');

const sailors = require('./lib/sailors');
const boats = require('./lib/boats');
const reserves = require('./lib/reserves');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword', 
  database: 'sailing_adventure'
});

// Connecting to DB
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

// Create Server/ Request Handling
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
  const method = req.method.toUpperCase();

  if (method === 'POST' && path) {
    let body = [];
    req.on('data', chunk => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      const data = JSON.parse(body);

      switch (path) {
        case 'add_sailor':
          sailors.add(db, data, response(res));
          break;
        case 'add_boat':
          boats.add(db, data, response(res));
          break;
        case 'add_reserve':
          reserves.add(db, data, response(res));
          break;
        case 'display_sailors':
          sailors.display(db, response(res));
          break;
        case 'display_boats':
          boats.display(db, response(res));
          break;
        case 'display_reserves':
          reserves.display(db, response(res));
          break;
        case 'delete_sailor':
          sailors.delete(db, data, response(res));
          break;
        case 'delete_boat':
          boats.delete(db, data, response(res));
          break;
        case 'delete_reserve':
          reserves.delete(db, data, response(res));
          break;
        case 'update_sailor':
          sailors.update(db, data, response(res));
          break;
        case 'update_boat':
          boats.update(db, data, response(res));
          break;
        default:
          res.end(JSON.stringify({ error: "Not Found" }));
      }
    });
  } else {
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});

function response(res) {
  return (result, err) => {
    if (err) {
      res.end(JSON.stringify({ error: err }));
    } else {
      res.end(JSON.stringify(result));
    }
  };
}

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
