const express = require('express');
const app = express();
const  cors = require('cors');
const router = express.Router();
const restaurantRoute = require('./router/restaurants');
const menuRoute = require('./router/menu');
const userRoute = require('./router/user');
const ordersRoute = require('./router/orders');
const { default: mongoose } = require('mongoose');
// console.log(restaurantRoute);

app.use(express.json())
app.use(cors()) 


app.get('/', (req, res) => {
    try{
        console.log('app running..');
        res.send('it is working');
     }
    catch{

    }

})
app.use('/restaurants', restaurantRoute);
app.use('/menu', menuRoute);
app.use('/user', userRoute);
app.use('/orders', ordersRoute);



// app.get('/restaurants', (req,res) => {
//     try{
//         console.log('app restaurant running..');
//         res.send('restaurant is working');
//      }
//     catch{

//     }

// })
// app.get('/restaurants/:city', (req,res) => {
//     try{
//         const cityName = req.params.city;
//         console.log('app restaurant param running..');
//         res.send('restaurant  param  city is working');
//      }
//     catch{

//     }

// })

// app.get('/restaurants', (req,res) => {
//     try{
//         const city = req.query.city;
//         const foodtype = req.query.foodtype;
//         console.log('query app restaurant running..');
//         res.send('restaurant query is working');
//      }
//     catch{

//     }

// })
mongoose.connect('mongodb+srv://dbuser:jPXSgsLGOu4AKVSd@cluster0.dusfwes.mongodb.net/restdata?retryWrites=true&w=majority')
app.listen(process.env.PORT || 4000);