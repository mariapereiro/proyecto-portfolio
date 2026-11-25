const express = require("express")
const router= express.Router()


router.get("/", (req, res)=>{
    res.render('martaPorfolio', { layout: 'miporfolio' });
})

module.exports=router