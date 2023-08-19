const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000; // Вы можете использовать любой доступный порт

app.get('/filter/:value', async (req, res) => {
  try {
    const value = req.params.value;
    
    // Выполнение GET-запроса на другой сервер
    const response = await fetch(`https://api.example.com/data?filter=${value}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
