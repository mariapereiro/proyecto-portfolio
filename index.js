const express =require("express")
const exphbs =require("express-handlebars")

const app = express()


app.engine("handlebars",exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req,res)=>{
    res.render("home")
})

/*app.get("/marta", (req,res)=>{
    res.render("marta")
})

app.get("/myriam", (req,res)=>{
    res.render("myriam")
})

app.get("/maria", (req,res)=>{
    res.render("maria")
})*/

const marta=require("./routes/miporfolio")
app.use("/miporfolio",marta)

app.use(express.static("public"))

app.listen(3000)
