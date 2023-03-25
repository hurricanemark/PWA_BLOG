const express = require("express");
const path = require("path");
const sqlite3 = require('sqlite3');
const app = express();

const {blogs} = require('./init_data.js');
app.use(express.static(path.join(__dirname, "public")));

const db = new sqlite3.Database("db.sqlite", (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    } else {
      console.log("Connected to the SQLite database.");
    }
  });


  db.run(
    `CREATE TABLE blog (id INTEGER PRIMARY KEY AUTOINCREMENT, title text,avatar text,intro text)`,
    (err) => {
      if (err) {
        // console.log(err)
        // Table already created
      } else {
        // Table just created, creating some rows
        var insert = "INSERT INTO blogs (title, avatar, intro) VALUES (?,?,?)";
        blogs.map((blog) => {
          db.run(insert, [
            `${blog.title}`,
            `${blog.avatar}`,
            `${blog.intro}`,
          ]);
        });
      }
    }
  );

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


app.get("/blogs", (req, res) => {
    res.status(200).json({
      blogs,
    });
});

app.listen(8000, () => console.log("Server is running on Port 8000"));