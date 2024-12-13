const express = require('express')
const path = require("path");
const DOSSIER_FICHIER = path.join(__dirname, "img/CV")
const app = express()

const cors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, token")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
    next()
}

app.use(cors)

app.get('/:fichier(*)',(req,res) => {
    res.download(req.params.fichier, { root : DOSSIER_FICHIER }, (err) => {
        if(err){
            res.status(500).json({message: "erreur de serveur"})
        }
    })
})

app.listen( 5000, () => console.log('serveur run'))