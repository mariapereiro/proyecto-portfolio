const express =require("express")
const exphbs =require("express-handlebars")

const app = express()


app.engine("handlebars",exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req,res)=>{
    res.render("home")
})



const miporfolio = require("./routes/miporfolio");
app.use("/", miporfolio);



app.use(express.static("public"))

app.listen(3000)
