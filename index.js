const express = require('express');
PORT= 4001;
const app= express();

app.get("/",(req,res)=>{
    res.send('Alright')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});