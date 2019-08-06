const router = require("express").Router();
const googleController = require("../../controllers/googleController");
// sets router and googlecontroller as variables
// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);
//grabs information from API when the / route is hit.
module.exports = router;
//exports router