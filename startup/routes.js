const courses = require(`../routes/courses`);
const home = require(`../routes/home`);
const error = require(`../middleware/error`);
const express = require(`express`);
var cors = require("cors");

module.exports = function (app) {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use("/api/courses", courses);
  app.use("/", home);
  app.use(error);
};
