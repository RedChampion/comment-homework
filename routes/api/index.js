const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
// imports path, express, router, books, and google as variables.
// Book routes
router.use("/books", bookRoutes);
// pulls from the API when /books route is hit
// Google Routes
router.use("/google", googleRoutes);
// pulls from the API when /google route is hit
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
//calls the index.html page to be used, letting the API information be appended to it.
module.exports = router;
// exports router