const express = require('express');


// create the port
const app = express();
const PORT = process.env.PORT || 3001;

// create middleware and static folders/parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));