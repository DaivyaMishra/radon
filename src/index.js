const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://DaivyaMishra:YomJ4NmVOzwwYYD6@cluster0.k25widm.mongodb.net/DaivyaMishra-db", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
// app.use (
//     function (req, res, next) {
//         console.log ("Request ip:",req.ip);
//         console.log("" +Date.now());
//         console.log('basicCode')
       
//         next();
//   }
//   );

           //Assignment-Middleware//
          const AssignmentMW= function (req,res,next) {

            var currentdate= new Date();
            var datetime = currentdate.getDate() + ""
                           +(currentdate.getMonth()+1) + ""
                            +currentdate.getFullYear() + " "
                        
             let ip= req.ip
             let url= req.originalUrl

             console.log(`${datetime} ${ip} ${url}`)
          }
        app.use(AssignmentMW)
          //app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
