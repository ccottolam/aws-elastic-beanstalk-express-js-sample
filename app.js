const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Fuck you PwC Rubbish Horrible teammates, princess'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
