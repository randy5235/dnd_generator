const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('html'));

app.get('/test', (req, res) => res.send('D&D Generator'));
app.get('/beholder', (req, res) => res.send('Beauty is in the eye of the...'));
app.get('/rumor', (req, res) => res.json({"name": "MisBod" , "description": "Bodies missing from graves"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
