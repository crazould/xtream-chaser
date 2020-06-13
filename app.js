const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 8080
app.use(express.static(__dirname))

router.get('/',(req,res) => res.sendFile(`${__dirname}/pages/home.html`))
router.get('/galleries',(req,res) => res.sendFile(`${__dirname}/pages/galleries.html`))
router.get('/characters',(req,res) => res.sendFile(`${__dirname}/pages/characters.html`))
router.get('/lore',(req,res) => res.sendFile(`${__dirname}/pages/lore.html`))
router.get('/pre-register',(req,res) => res.sendFile(`${__dirname}/pages/pre-register.html`))

app.use( '/' ,router);
app.listen(port, () => console.log(`app running on port: ${port}`))
