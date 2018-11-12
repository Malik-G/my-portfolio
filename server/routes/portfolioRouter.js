const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) =>{
   const sqlText = 'SELECT * FROM projects';
   pool.query(sqlText)
      .then((result) => {
         res.send(result.rows);
      })
      .catch((error) => {
         res.sendStatus(500);
      })
})

router.post('/', (req, res) => {
   //const newProject = req.body;
   const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`;
   const queryValues = [
      req.body.name,
      req.body.description,
      req.body.thumbnail,
      req.body.website,
      req.body.github,
      req.body.date_completed,
      req.body.tag_id,
   ];
   pool.query(queryText, queryValues)
     .then((result) => {
         res.sendStatus(201);
      })
     .catch((err) => {
       console.log('Error POSTing to db:', err);
       res.sendStatus(500);
     });
 });

module.exports = router