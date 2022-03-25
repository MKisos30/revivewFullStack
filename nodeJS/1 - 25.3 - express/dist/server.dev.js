"use strict";

var express = require('express');

var app = express();

var color = require('colors');

var port = process.env.PORT || 4040;
var tasks = [{
  id: "1",
  title: "one"
}, {
  id: "2",
  title: "two"
}, {
  id: "3",
  title: "three"
}, {
  id: "4",
  title: "four"
}];
app.listen(port, function () {
  console.log(color.bgBlue.white("server listen on http://localhost:".concat(port)));
});