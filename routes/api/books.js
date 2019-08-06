const router = require("express").Router();
const bookController = require("../../controllers/bookController");
//sets router and bookcontroller as variables
// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);
//hits the api when the route / is used
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);
//pulls, updates, or deletes a specific ID from the API
module.exports = router;
//exports router