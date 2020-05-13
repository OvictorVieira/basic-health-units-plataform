const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public/dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});