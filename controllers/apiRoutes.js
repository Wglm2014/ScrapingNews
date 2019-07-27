const express = require("express");
const router = express.Router();
const db = require("../models");
const scraper = require("./scraper");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
    scraper(res);

});

router.post("/api/article", (req, res) => {
    //    console.log(req.body);
    db.Article.create({ title: req.body.title, link: req.body.link, text: req.body.text, imgSrc: req.body.imgSrc }).then(articleResponse => {
        //        console.log(articleResponse);
        res.json(articleResponse);
    });

});
router.get("/api/save-articles", (req, res) => {
    db.Article.find().then((results) => {
        console.log(results.length);

        if (results.length === 0) {
            console.log("still here");

            res.render("noArticles", { result: "no data" });

        } else {
            console.log("render no art");
            res.render("savedArticles", { articles: results });
        }
    });
});
router.delete("/api/delete-articles", async (req, res) => {
    result = await db.Article.deleteMany();
    res.render("allGone", result);
});
router.delete("/api/delete-article/:id", (req, res) => {
    //console.log(req.body.id);
    //console.log(req.params.id);
    db.Article.deleteOne({ "_id": mongoose.Types.ObjectId(req.params.id) }).then(result => {
        res.json(result);
    });
});
module.exports = router;
