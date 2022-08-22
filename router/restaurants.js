        const { response } = require('express');
        const express = require('express');
        const Restaurant = require('../model/restaurant');
        const router = express.Router();

        
        router.get('/:city', async (req, res) => {
            try{
                const cityName = req.params.city.toLowerCase();
                const response = await Restaurant.find({location: cityName});
                res.status(200).json(response);
                // console.log('app restaurant param running..');
                // res.send('restaurant  param  city is working');
            }
            catch(err){
                res.status(400).json(response);
            }

        })

            router.get('/search/:id', async (req, res) => {
                try{
                    const tempId = req.params.id;
                    const response = await Restaurant.findOne({rest_id: tempId});
                    res.status(200).json(response);
                }

                catch(err){
                    res.status(400).json(err);

                }

            })

        router.get('/', async (req, res) => {
            try{
                const response = await Restaurant.find();
                res.status(200).json(response);
                // const city = req.query.city;
                // const foodtype = req.query.foodtype;
                // console.log('query app restaurant running..');
                // res.send('restaurant query is working');
            }
            catch(err){
                res.status(400).json(response);

            }

        })
        router.post ('/', async(req, res)=>{
            try{
                const tempRestaurant = new Restaurant ({
                    rest_id: req.body.rest_id,
                    rest_name: req.body.rest_name,
                    location: req.body. location.toLowerCase(),
                    category: req.body.category,
                    image: req.body.image,
                    image2: req.body.image2,
                    image3: req.body.image3,
                    image4: req.body.image4,
                    image5: req.body.image5

                })
                // database
                const response = await tempRestaurant.save();
                res.status(201).json(response);
            }
            catch(err){
                res.status(400).json(err);
            }

        })

        //http://localhost:4000/restaurants/update
router.put('/update', async (req, res) => {
    try{
        const tempRestaurant = {
            rest_id: req.body.rest_id,
            rest_name: req.body.rest_name,
            location: req.body.location.toLowerCase(),
            category: req.body.category,
            image: req.body.image,
            image2: req.body.image2,
            image3: req.body.image3,
            image4: req.body.image4,
            image5: req.body.image5
        }
        const response = await Restaurant.findOneAndUpdate({'rest_id': tempRestaurant.rest_id}, tempRestaurant, {new: true});
        res.status(200).json(response);
    }
    catch(err){
        res.status(400).json(err)
    }
})
router.delete('/delete/:id', async(req, res)=>{
    try{
        const tempid = req.body.tempid;
        const response = await Restaurant.deleteOne({rest_id: tempid});
        res.status(201).json(response);

    }
    catch(err){
        res.status(401).json({message: err.message});
    }
})

        module.exports = router;