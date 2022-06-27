let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8230;
// const mongoUrl = process.env.mongoUrl;
// const mongoUrl = "mongodb://localhost:27017";
const mongoUrl = "mongodb+srv://eman:zBpbhFss67XFjl83@cluster0.bvz0d.mongodb.net/emaapharmacy?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";



    // middleware
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json())
    app.use(cors())

    
    app.get('/',(req,res) => {

        res.send("Welcome to Express")
    })


    //location 
        app.get('/location',(req,res) => {
            //if(req.query.token === token) {
            db.collection('location').find().toArray((err,result) => {
                if (err) throw err ;
                res.send(result)
            })
           
        })

    //Pharmacy 
    
        app.get('/pharmacy/',(req,res) => {
        // let id = req.params.id;
        // let id  = req.query.id
        // console.log(">>>id",id)
        let query = {};
        let stateId = Number(req.query.stateId)
        let productId = Number(req.query.producttype_id)
        
        if(stateId){
            query = {state_id:stateId}
        }
        else if(productId){
            query = {'productTypes.producttype_id':productId}
        }

        db.collection('pharmacy').find(query).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    })
    

    app.get('/filters/:productId',(req,res) => {
        let sort = {cost:1}
        let productId = Number(req.params.productId)
        let lcost = Number(req.query.lcost)
        let hcost = Number(req.query.hcost)
    
        let query = {}
        if(req.query.sort){
            sort={cost:Number(req.query.sort)}

        }else if(lcost && hcost){
            query = {
                "productTypes.producttype_id":productId,
                $and:[{cost:{$gt:lcost,$lt:hcost}}]
            }
        }
        else{
            query = {
                "productTypes.producttype_id":productId
            }
        }
    
        db.collection('pharmacy').find(query).sort(sort).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    })

    //productTypes 
    app.get('/producttype',(req,res) => {
        //if(req.query.token === token) {
        db.collection('productTypes').find().toArray((err,result) => {
            if (err) throw err ;
            res.send(result)
        })
    })


     //PharmacyDetails
        app.get('/details/:id',(req,res) => {
            //let pharmId = Number(req.params.id);
            let pharmId = mongo.ObjectId(req.params.id)
            db.collection('pharmacy').find({_id:pharmId}).toArray((err,result) => {
                if(err) throw err;
                res.send(result)
            })
        })

     //products
        app.get('/products',(req,res) => {
            let query = {}
            let pharmId = Number(req.query.pharmId)
            // let producttypeId = Number(req.query.producttype_id)
            if(pharmId){
                query = {pharmacy_id:pharmId}
            }
            // else if(producttypeId){
            //     query = {producttype_id:producttypeId}
            // }
            db.collection('products').find(query).toArray((err,result) => {
                if(err) throw err;
                res.send(result)
        })
    })
        

    //pharmacy on basis of product selected
        app.post('/product',(req,res) => {
            console.log(req.body);
            if(Array.isArray(req.body)){
                db.collection('pharmdetails').find({product_id:{$in:req.body}}).toArray((err,result) => {
                    if(err) throw err;
                    res.send(result)
                })
            }else{
                res.send('Invalid Input')
            }
        })
        
    // product on basis of item selected
        app.post('/productItem',(req,res) => {
            console.log(req.body);
            if(Array.isArray(req.body)){
                db.collection('products').find({product_id:{$in:req.body}}).toArray((err,result) => {
                    if(err) throw err;
                    res.send(result)
                })
            }else{
                res.send('Invalid Input')
            }
        })

    // place Order
        app.post('/placeOrder',(req,res) => {
            db.collection('orders').insert(req.body,(err,result) => {
                if(err) throw err;
                res.send('Order Placed')
            })
        })


    // View Order
        app.get('/viewOrder',(req,res) => {
            let email = req.query.email;
            let query = {};
            if(email){
                query = {"email":email}
            }
            db.collection('orders').find(query).toArray((err,result) => {
                if(err) throw err;
                res.send(result)
            })
        })

    // delete order
        app.delete('/deleteOrders',(req,res)=>{
            db.collection('orders').remove({},(err,result) => {
                res.send('order deleted')
            })
        })


    //update orders
        app.put('/updateOrder/:id',(req,res) => {
            console.log(">>>id",req.params.id)
            console.log(">>>id",req.body)
            let oId = Number(req.params.id)
            // let oId = mongo.ObjectId(req.params.id);
            db.collection('orders').updateOne(
                // {_id:oId},
                {id:oId},
                {$set:{
                    "status":req.body.status,
                    "bank_name":req.body.bank_name,
                    "date":req.body.date
                    
                }},(err,result) => {
                    if(err) throw err
                    res.send(`Status Updated to ${req.body.status}`)
                }
            )
        })
          

        
    // connect to database
    MongoClient.connect(mongoUrl, (err,client) => {

        if (err) console.log('Error while connecting');
        db = client.db('emaapharmacy');

        app.listen(port, () => {

        console.log(`Sever is running on port  ${port}`)

        })
    })


   