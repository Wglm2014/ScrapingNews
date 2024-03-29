const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({title: String, link: String, text: String});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Book model
module.exports = Article;
