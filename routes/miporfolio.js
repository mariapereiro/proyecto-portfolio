const express = require("express")
const router= express.Router()


router.get("/", (req, res)=>{
    res.render("martaPorfolio", {layout:"martaPorfolio"})
})

module.exports=router