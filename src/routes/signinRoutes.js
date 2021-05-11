const express=require("express");
const signinRouter=express.Router();//new Route handler
function router(nav){

    
    
    
    signinRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
        res.render("signin",{
            nav,
            title:'Login'
            
        });//already specified path
        
       
    });
    
       
    return signinRouter;
    }
    
     module.exports = router;// entire module function exported function called as well