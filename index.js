const os = require('os');
const express = require('express');

console.clear();
console.log(os.platform());
console.log(os.userInfo());
console.log(os.cpus());

const app = express();

app.get('/', (req, res) => res.send('foo bar'));
app.get('/about', (req, res) => res.send('v0.1'));
app.get('/contact', (req, res) => res.send('Inquiries: pereyra@example.com'));

// process.env.PORT required for Heroku deployment
app.listen(process.env.PORT || 3000);