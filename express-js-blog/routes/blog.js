const express = require('express');
const router= express.Router();
const path = require('path')
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'));
    res.render('home')

})

router.get('/blog',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/blog_home.html'));
    res.render('blog_home',{blogs: blogs});
})


router.get('/blogpost/:id',(req,res)=>{
    myBlog=blogs.filter((e)=>{
        return e.id==req.params.id;
    });
    console.log(myBlog[0].id);
    // res.sendFile(path.join(__dirname,'../templates/blog_post.html'));
    res.render('blog_page',{
        id:myBlog[0].id,
        title:myBlog[0].title,
    }
        );

})
module.exports=router;
