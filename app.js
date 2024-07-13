import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', async (req, res) => {
    res.render('index.ejs');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
