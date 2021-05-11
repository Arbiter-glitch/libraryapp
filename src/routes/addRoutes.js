const express=require("express");
const addRouter=express.Router();//new Route handler
function router(nav){

    var genre=["Romance","Comedy","Family","Horror","Drama","Cartoon","Fantasy","Crime","History","Poems","Novel","Sci-Fi","Light Novel"];
    
    
    addRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
        res.render("add",{
            nav,
            genre,
            title:'Add',
            title1:'Add New Books'
            
        });//already specified path
        
       
    });
    
       
    return addRouter;
    }
    
     module.exports = router;// entire module function exported function called as well