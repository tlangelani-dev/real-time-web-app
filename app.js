const express = require('express');
const app = express();
const PORT = 3009;

app.get('/', (req, res) => {
    res.send('Listing Categories!');
});

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
