const express = require("express"); // like import lib

//nodemon use for auto restart server if have any changes and use for debug app on web dev tool
//morgan use for log (print in console) HTTP request to watch easily

//set up
const app = express();
const PORT = 3000;
app.use(express.json());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// get
app.get('/hello', (req, res) => {
    return res.send({ messback: "Hello World" });
})

// post
app.post("/capitalize", (req, res) => {
  var mess = req.body.text;
  res.send({ messback: mess.toUpperCase() });
});

// Serve static files from the "public" directory
app.use(express.static("./public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
