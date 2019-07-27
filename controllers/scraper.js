const cheerio = require("cheerio");
const axios = require("axios");
const url = "https://www.nytimes.com"
const db = require("../models");
// Make a request via axios to grab the HTML body from the site of your choice
module.exports = function (res) {
    // An empty array to save the data that we'll scrape
    let results = new Map();

    axios.get(url).then(function (response) {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        const $ = cheerio.load(response.data);


        // Select each element in the HTML body from which you want information.
        // NOTE: Cheerio selectors function similarly to jQuery's selectors,
        // but be sure to visit the package's npm page to see how it works
        $("article").each(function (i, element) {
            const title = $(element).find("h2").text();
            const link = url + $(element).find("a").attr("href");
            const linkText = $(element).find("a").text();
            const imgUrl = $(element).find("img").attr("src");
            console.log(imgUrl);
            // Save these results in an object that we'll push into the results array we defined earlier
            results.set(title, { title: title, link: link, text: linkText, imgSrc: imgUrl });
        });

        db.Article.find().then((article) => {
            if (article.length !== 0) {
                article.forEach(articleTitle => {
                    const articleDeleted = results.delete(articleTitle.title);
                    console.log(articleDeleted);
                });
            }
            results = Array.from(results.values());
            res.render("allArticles", { articles: results });
        });
    });

}

// Log the results once you've looped through each of the elements found with cheerio