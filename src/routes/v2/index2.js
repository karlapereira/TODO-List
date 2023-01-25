const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Hello world");
    res.send("Hello TODO API Version v2");
});

module.exports = router;