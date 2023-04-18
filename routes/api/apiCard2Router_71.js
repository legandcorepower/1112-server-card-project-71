var express = require('express');
var router = express.Router();
const db = require('../../utils/database')


/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const results = await db.query(`select * from card_71`);
    //console.log('json data',JSON.stringify(results.rows));
    //res.render('card2_71/index', {data:results.rows,name:'鄭凱鴻' ,id: '207410571' });
    res.json(results.rows);
}catch(error){
  console.log(error);
}
});


module.exports = router;
