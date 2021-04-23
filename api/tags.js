const express = require('express');
const tagsRouter = express.Router();
const {getAllTags} = require('../db');

tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();

    res.send({
        tags,
    });
});

module.exports = tagsRouter

// tagsRouter.get((req, res, next) => {
//   console.log("A request is being made to /tags");
//     res.send({
//         tags: [],
//     });
// });



