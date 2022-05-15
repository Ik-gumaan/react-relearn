const express = require('express');
const app = express()
const router= express.Router();
const items=require('../data/itemsData')
const validateItem=require('../functions/validateItem');


// GET
router.get('/items', (req, res) => {
    res.send(items)
})

router.get('/items/:id', (req, res) => {
    const item = items.find((a) => {
        return a.id === parseInt(req.params.id);
    });

    if (!item) return res.status(404).send("Id not found");
    res.send(item);
})


// POST
router.post('/items', (req, res) => {

    console.log("=================>",req.body);
    const result=validateItem({"title":req.body.title});
    if(result.error) return res.status(400).send(result.error.details[0].message);

    const item={id:items.length+1 ,"title":req.body.title}
    items.push(item);
    res.send(item);

})

// PUT
router.put('/items/:id', (req, res) => {

    const item = items.find((a) => {
        return a.id === parseInt(req.params.id);
    });
    if (!item) return res.status(404).send("Id not found");

    const result=validateItem(req.body);
    if(result.error) return res.status(400).send(result.error.details[0].message);

    item.title=req.body.title;
    res.send(item);
})

// DELETE
router.delete('/items/:id', (req, res) => {

    const item = items.find((a) => {
        return a.id === parseInt(req.params.id);
    });
    if (!item) return res.status(404).send("Id not found");

    const index=items.indexOf(item);
    items.splice(index,1);
    res.send(item);

})

module.exports=router;