const path = require('path');

const express = require('express');
const app = express();

const mockData = require('./mock-data');

app.use(express.static(path.resolve(__dirname, 'build')));

// Mocked
app.get('/api/repos/task-1', (req, res) => {
  res.status(200);
  res.json(mockData);
});

app.listen(3000, () => {
  console.log('Server listetning: localhost@3000');
});
