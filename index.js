const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

const port = process.env.PORT || 8000;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});