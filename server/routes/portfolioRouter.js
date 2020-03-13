const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) =>{
   //const sqlText = 'SELECT * FROM projects';
   const portfolioArr = [];
   const sqlText = `SELECT * FROM projects ORDER BY projects.id;`
   // `SELECT projects.*, tags.name as tag
   // FROM projects JOIN tags ON projects.tag_id=tags.id ORDER BY projects.id` 
   pool.query(sqlText)
      .then((result) => {
         res.send(result.rows);
         //loop thru results.rows
         // for(let project of result.rows) 
         // let first = result.rows[0]   
         // const sqlText = `SELECT pt.*, tags2.name
         //       FROM project_tags as pt JOIN tags2 ON pt.tag_id=tags2.id
         //       WHERE pt.project_id=$1;`
         //    pool.query(sqlText, [first.id])
         //       .then((tag_results) => {
         //          //console.log(`****`, tag_results.rows, `****`)
         //          first.tags = tag_results.rows;
         //          console.log(`****current project in loop =`, first)
         //          portfolioArr.push(first)
         //          console.log('yes', portfolioArr[0].tags);
         //          res.send(portfolioArr)
         //       })
         //       .catch((error) => {
         //          console.log('Error in inner sql query dealing with project_tags table: ', error)
         //          res.sendStatus(500);
         //       })
         //console.log('yes', portfolioArr);
         // res.send(portfolioArr)
      })
      .catch((error) => {
         console.log('Error with GET request: ', error)
         res.sendStatus(500);
      })
})

router.get('/tags/:id', (req, res) =>{
   //const sqlText = 'SELECT * FROM projects';
   let projectId = req.params.id;
   const sqlText = `SELECT pt.*, tags.name
   FROM project_tags as pt JOIN tags ON pt.tag_id=tags.id
   WHERE pt.project_id=$1 ORDER BY pt.tag_id;`
   pool.query(sqlText, [projectId])
      .then((result) => {
         res.send(result.rows);
      })
      .catch((error) => {
         res.sendStatus(500);
      })
})

router.post('/', (req, res) => {
   //const newProject = req.body;
   const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed")
                     VALUES ($1, $2, $3, $4, $5, $6)`;
   const queryValues = [
      req.body.name,
      req.body.description,
      req.body.thumbnail,
      req.body.website,
      req.body.github,
      req.body.date_completed,
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

 router.post('/tags', (req, res) => {
   //const newProject = req.body;
   let projectId = req.body.project_id;
   let tagsObj = req.body.tagInfo;
   let entries = Object.values(tagsObj);
   console.log(projectId)
   console.log(tagsObj)
   for(let value of entries){
      if(typeof value === 'string'){
         const valueAsNum = Number(value);
         const queryText = `INSERT INTO project_tags ("project_id", "tag_id")
                        VALUES (${projectId}, $1)`;
         pool.query(queryText, [valueAsNum])
         .then((result) => {
            console.log('Good!!!');
            //result.sendStatus(201);
         })
         .catch((err) => {
            console.log('Error POSTing to db:', err);
            res.sendStatus(500);
         });
      }
   }
 });

router.delete('/', (req, res) => {
//console.log(req.query);
const queryText = 'DELETE FROM project_tags WHERE project_id=$1;';
pool.query(queryText, [req.query.id])
   .then(() => {
      console.log('Project tags deleted!')
      const queryText = 'DELETE FROM projects WHERE id=$1';
      pool.query(queryText, [req.query.id])
         .then(()=>{
            console.log('Project deleted!');
            res.sendStatus(200);
         })
         .catch((err) => {
            console.log('Error completing DELETE from projects table', err);
            res.sendStatus(500);
         });
   })
   .catch((err) => {
      console.log('Error completing DELETE from project tags', err);
      res.sendStatus(500);
   });
});

module.exports = router