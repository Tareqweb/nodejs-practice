const express=require('express');



const app = express();

// const rootCall=(req,res)=>res.send('Thank you very much');


app.get('/',(req,res)=>{
    res.send('Thank you for show the result');
});

app.listen(3000,()=>console.log('listening on port 3000'));