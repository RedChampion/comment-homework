const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// lets the mongoose database be used.
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});
//creates a table to the mongoose database, as well as setting rows within the table.  

const Book = mongoose.model("Book", bookSchema);
// stores the table as a variable and exports the table.
module.exports = Book;
