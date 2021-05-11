const express=require("express");
const signupRouter=express.Router();//new Route handler

function router(nav){

    

    signupRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
        res.render("signup",{
            nav,
            title:'Register',
            
        });//already specified path
        
       
    });
    
       
    return signupRouter;
    }
    
     module.exports = router;// entire module function exported function called as well