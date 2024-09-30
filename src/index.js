const app =  require("./app/app")

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("el servidor se conecto en el puerto 3000")
})