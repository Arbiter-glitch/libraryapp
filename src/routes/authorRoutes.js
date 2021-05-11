
const express=require("express");
const authorRouter=express.Router();//new Route handler
function router(nav){

var authors=[
    {
        book:'Tom & Jerry',
        name:'Joseph Barbara',
        genre:'Cartoon',
        img:"joseph.jpg"
    },
    {
        book:'Harry Potter',
        name:'JK Rowling',
        genre:'Fantasy',
        img:"jk.jpg"   
    },
    {
        book:'Paathumayude Aadu',
        name:'Basheer',
        genre:'Drama',
        img:"basheer.jpg"   
    }
];



authorRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
    //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
    //for ejs
    res.render("authors",{
        nav,
        title:'Library',
        authors
    });//already specified path
    
   
});
authorRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    res.render("author",{
        nav,
        title:'Library',
        author:authors[id]
    });//already specified path
    
   
});
return authorRouter;
}

 module.exports = router;// entire module function exported function called as well
 