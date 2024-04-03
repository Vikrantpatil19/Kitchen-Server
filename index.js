import  express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/order/food" , (req , res) =>{
    
    const {menu , price , quantity} = req.query;
    const {user , country} = req.headers;


  


    const totalPrice = parseInt(price) * parseInt(quantity);
   
    res.json({
        message:`You have ordered ${quantity} ${menu}`,
        bill: `your total bill is ${totalPrice}`,
        details:`you are ${user} from ${country}`
       
    })
})

app.get("/food/:type", (req , res) =>{
    const {type} = req.params;

    if(type=="veg"){
       return  res.json({
            message: "You have ordered veg food"
        })
    }

    else{
        return  res.json({
             message: "You have ordered non-veg food"
         })
    }
   
})

app.post('/user' , (req , res) =>{
    const {name , age} = req.body;

    res.json({
        message: `Hello ${name} , you are ${age} year old`
    })
})

app.listen(PORT ,() => {
    console.log(`server is running on the port ${PORT}`)
})