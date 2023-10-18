const express = require('express');
const app = express();
app.use(express.static('Assignment')),
// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(5500, () => {
  console.log('Server is running on http://localhost:5500');
});