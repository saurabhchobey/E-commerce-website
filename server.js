// if (process.env.NODE_ENV != 'production') {
//   require('dotenv').load()
// }

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY
// const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require('express')
const app = express()
const fs = require('fs')
// const stripe = require('stripe')(stripeSecretKey)

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

app.get('/store', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('store.ejs', {
        // stripePublicKey: stripePublicKey,
        items: JSON.parse(data)
      })
    }
  })
})
app.post("/login",function(req,res){
  if(req.url==='/login'){
    res.writeHead(200,{"content-type":"text/html"})
    fs.readFile('./login.html',"UTF-8").pipe(res);
    console.log("hell")
  }
    if (req.method==="POST"){
      var data="";
      req.on("data",function(chunk){
        data+=chunk;
      });
      req.on("end",function(chunk){
        
        var q=querystring.parse(data);
        MongoClient.connect(url,function(err,result){
          if(err) throw err;
        
          Db.collection('student').insertOne(q,function(err,res){
            if (err) throw err;
            console.log("data insertded")
            Db.close();

          }) 
  

// app.post('/purchase', function(req, res) {
//   fs.readFile('items.json', function(error, data) {
//     if (error) {
//       res.status(500).end()
//     } else {
//       const itemsJson = JSON.parse(data)
//       const itemsArray = itemsJson.music.concat(itemsJson.merch)
//       let total = 0
//       req.body.items.forEach(function(item) {
//         const itemJson = itemsArray.find(function(i) {
//           return i.id == item.id
//         })
//         total = total + itemJson.price * item.quantity
//       })

//       stripe.charges.create({
//         amount: total,
//         source: req.body.stripeTokenId,
//         currency: 'usd'
//       }).then(function() {
//         console.log('Charge Successful')
//         res.json({ message: 'Successfully purchased items' })
//       }).catch(function() {
//         console.log('Charge Fail')
//         res.status(500).end()
//       })
//     }
//   })
// })

app.listen(3000)
console.log("3000")
