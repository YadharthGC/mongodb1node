const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001
const mongodb = require('mongodb')
const mongoclient = mongodb.MongoClient;
const url = 'mongodb+srv://ganesh:<password>@cluster0.lqhki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.use(cors({
    origin: "*"
}))
app.use(express.json())

//////////////////////////////////////////////////////////////////////////////
var products = [{
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price": 26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price": 36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price": 88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price": 47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price": 20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
]

async function main() {
    let client = await mongoclient.connect(url)
    let db = client.db("products")
    let deletedata = await db.collection("datas").deleteMany({});
    let postdata = await db.collection("datas").insertMany(products);
    await client.close()
}
main();

app.get("/", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getdata = await db.collection("datas").find({}).toArray();
        res.json(getdata)
        await client.close()
    } catch (error) {}
})


app.get("/price1", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getpricea = await db.collection("datas").find({
            product_price: {
                $gt: 400,
                $lt: 800
            }
        }).toArray();
        res.json(getpricea)
        await client.close()
    } catch (error) {}
})

app.get("/priceb", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getprice = await db.collection("datas").find({
            product_price: {
                $gt: 800
            }
        }).toArray();
        let getpriceb = await db.collection("datas").find({
            product_price: {
                $lt: 400
            }
        }).toArray();
        let total = getprice.concat(getpriceb)
        res.json(total)
        await client.close()
    } catch (error) {}
})

app.get("/five", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getprice = await db.collection("datas").find({
            product_price: {
                $gt: 500
            }
        }).toArray();
        res.json(getprice)
        await client.close()
    } catch (error) {}
})


app.get("/ten", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getprice = await db.collection("datas").find({
            id: '10'
        }).toArray();
        res.json(getprice)
        await client.close()
    } catch (error) {}
})

app.get("/soft", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getprice = await db.collection("datas").find({
            product_material: 'Soft'
        }).toArray();
        res.json(getprice)
        await client.close()
    } catch (error) {}
})


app.get("/ind", async function(req, res) {
    try {
        let client = await mongoclient.connect(url)
        let db = client.db("products")
        let getprice = await db.collection("datas").find({
            product_color: 'indigo',
        }).toArray();
        let getpriceb = await db.collection("datas").find({
            product_price: 492.00,
        }).toArray();
        let total = getprice.concat(getpriceb)
        res.json(total)
        await client.close()
    } catch (error) {}
})



app.get("/delete", async function(req, res) {
        try {
            let client = await mongoclient.connect(url)
            let db = client.db("products")
            let getdata = await db.collection("datas").find({}).toArray();
            var deleted = []
            var p = -1;
            for (let i = 0; i < getdata.length; i++) {
                for (let j = i + 1; j < getdata.length; j++) {
                    if (getdata[i].product_price == getdata[j].product_price) {
                        getdata[j].product_price = 0
                    }
                }
            }
            for (let k = 0; k < getdata.length; k++) {
                if (getdata[k].product_price != 0) {
                    p++;
                    deleted[p] = getdata[k];
                }
            }
            res.json(deleted)
            await client.close()
        } catch (error) {}
    })
    ////////////////////////////////////////////////
app.listen(port, function() {
    console.log(`App is Running in ${port}`);
})