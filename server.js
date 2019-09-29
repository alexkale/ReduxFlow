const path = require('path');
const express = require('express');
const app = express();

const mockData = require('./mock-data');

app.use(express.static(path.resolve(__dirname, 'dist')));

// Mocked
app.get('/api/repos/arcadia', (req, res) => {
  try {
    res.status(200);
    const data = { ...mockData };
    if (req.query.search) {
      data.files = mockData.files.filter((file) => {
        return file.name.toLowerCase().startsWith(req.query.search.toLowerCase());
      });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log('Server listetning: localhost@3000');
});
