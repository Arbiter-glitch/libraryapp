
const express=require("express");
const booksRouter=express.Router();//new Route handler
function router(nav){

var books=[
    {
        title:'Tom & Jerry',
        author:'Joseph Barbara',
        genre:'Cartoon',
        img:"tom.jpg"
    },
    {
        title:'Harry Potter',
        author:'JK Rowling',
        genre:'Fantasy',
        img:"harry.jpg"   
    },
    {
        title:'Paathumayude Aadu',
        author:'Basheer',
        genre:'Drama',
        img:"pathu.jpg"   
    }
];



booksRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
    //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
    //for ejs
    res.render("books",{
        nav,
        title:'Library',
        books
    });//already specified path
    
   
});
booksRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    res.render("book",{
        nav,
        title:'Library',
        book:books[id]
    });//already specified path
    
   
});
return booksRouter;
}

 module.exports = router;// entire module function exported function called as well
 