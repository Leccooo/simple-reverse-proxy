// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("Thanks for buying osm in Jayzenn or Kevin");
});

// exporting the router
module.exports = router;
