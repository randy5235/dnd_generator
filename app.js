const express = require('express');

const app = express();
const port = 3000;


function getRandomItemFromList(list) {
  const numberOfListItems = list.length;
  const roll = Math.floor(Math.random() * numberOfListItems);
  return { roll, rumor: list[roll] };
}

const rumorList = [
  'Bodies missing from graves',
  'Bandits attacking caravans',
  'Orcs stealing supplies',
  'A grand treasure is secreted away in the unholy temple of Incabulos.',
  'The vampires are afraid of gnomes.',
  'There is a person of remarkable esteem trapped in the caves.',
  'The chieftain of the dragons wants to negotiate peace talks with the city. No one is brave enough to answer the call.',
];

const jobList = [];

app.use(express.static('html'));

app.get('/test', (req, res) => res.send('D&D Generator'));
app.get('/beholder', (req, res) => res.send('Beauty is in the eye of the...'));
app.get('/rumor', (req, res) => res.json(getRandomItemFromList(rumorList)));
app.get('/jobboard', (req, res) => res.json(getRandomItemFromList(jobList)));
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
