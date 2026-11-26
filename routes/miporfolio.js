const express = require("express")
const router= express.Router()

router.get("/maria", (req, res)=>{
    res.render('mariaPorfolio', { layout: 'miporfolio' });
})

router.get("/marta", (req, res)=>{
    res.render('martaPorfolio', { layout: 'miporfolio' });
})

router.get("/myriam", (req, res)=>{
    res.render('myriamPorfolio', { layout: 'miporfolio' });
})

module.exports=router