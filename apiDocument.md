# Page 1

# List of city

#https://localhost:9700/location

#https://pharm-project.herokuapp.com/location

# List of pharmacy

#http://localhost:9700/pharmacy

#https://pharm-project.herokuapp.com/pharmacy

# List of pharmacy wrt to city

#http://localhost:9700/pharmacy/?stateId=1

#https://pharm-project.herokuapp.com/pharmacy/?stateId=1

# List of productTypes

#http://localhost:9700/producttype

#https://pharm-project.herokuapp.com/producttype

# Page 2

# List of pharmacy on basis of producttype

#http://localhost:9700/pharmacy/?producttype_id=2

#https://pharm-project.herokuapp.com/pharmacy/?producttype_id=2

# pharmacy on basis of product selected

#(POST) http://localhost:9700/product

        (Body) [6]
        [
            {
                "_id": "626688d2c7d11798ac3a956b",
                "pharmacy_id": 2,
                "pharmacy_name": "Almek Nimer Pharmacy",
                "location_id": 2,
                "state_id": 2,
                "product_id": 6,
                "address": "Amarat - Street No 15",
                "pharmacy_image": "https://i.ibb.co/wJ1tPz2/service-cust.jpg",
                "contact_number": "0912312312",
                "productTypes": [
                {
                "producttype_id": 2,
                "producttype_name": "Liquid"
                },
                {
                "producttype_id": 4,
                "producttype_name": "Capsule"
                }
                ],
                "image_gallery": [
                "https://i.ibb.co/7vJMw90/liquid-image.jpg",
                "https://i.ibb.co/bXQrT8Y/capsule2.jpg"
                ]
            }
        ]

# Filter on basis of producttype

#http://localhost:9700/filters/1?productId=1

#https://pharm-project.herokuapp.com/filters/1?productId=1

# Filter on basis of cost

#http://localhost:9700/filters/2?lcost=1000&hcost=4000

#https://pharm-project.herokuapp.com/filters/2?lcost=1000&hcost=4000

# Sort (Low & High)

#http://localhost:9700/filters/3?productId=1&sort=-1

#https://pharm-project.herokuapp.com/filters/3?productId=1&sort=-1

# page 3

# Details of Pharmacy

#http://localhost:9700/details/62933c2023f40402bd446241

#https://pharm-project.herokuapp.com/details/62933c2023f40402bd446241

# Products on basis of pharmacy

#http://localhost:9700/products/?pharmId=1

#https://pharm-project.herokuapp.com/products/?pharmId=1

# Page 4

# Products detail of item selected

#(POST) http://localhost:9700/productItem

#(Body) [1,2,3]

#(POST) https://pharm-project.herokuapp.com/productItem

#(Body) [1,3,6]

# Page 5

# Place Order

#(POST) http://localhost:9700/placeOrder

#<Body)

            {
                "name": "Nibras",
                "email":"nibras@gmail.com",
                "address": "Khartoum ",
                "phone": "0123123856",
                "cost": 6000,
                "productItem":[1,5],
                "status":"pending"
            }

#(POST) https://pharm-project.herokuapp.com/placeOrder

#(Body)

        {
            "name": "Nibras",
            "email":"nibras@gmail.com",
            "address": "Khartoum ",
            "phone": "0123123856",
            "cost": 6000,
            "productItem":[1,5],
            "status":"pending"
        }

# See all place order

#http://localhost:9700/viewOrder

#https://pharm-project.herokuapp.com/viewOrder

# Get order on basis of emailId

#http://localhost:9700/viewOrder?email=eman@gmail.com

#https://pharm-project.herokuapp.com/viewOrder/?email=eman@gmail.com

# Update order

#(PUT) http://localhost:9700/updateOrder/62575a0400178fa239ef724c

#(Body)

        {
            "status":"In Transit",
            "bank_name":"Axis bank"
        }

#(PUT) https://pharm-project.herokuapp.com/updateOrder/62575a0400178fa239ef724c

#(Body)

        {
            "status":"In Transit",
            "bank_name":"BlueVine"
        }

# login Api

# GetAllUser

#(GET) http://localhost:5000/api/auth/users

#(GET) https://Pharm-loginapp.herokuapp.com/api/auth/users

# Register

#(POST) http://localhost:5000/api/auth/register

#(Body)

            {
                name":"Ahmed Ali",
                "email":"ahmed@hotmail.com",
                "password":"ahmedali",
                "phone":"0914542545",
                "role":"user"
            }

#(post) https://Pharm-loginapp.herokuapp.com/api/auth/register

#(Body)

            {
                name":"Ahmed Ali",
                "email":"ahmed@hotmail.com",
                "password":"ahmedali",
                "phone":"0914542545",
                "role":"user"
            }

# Login

#(POST) http://localhost:5000/api/auth/login

#(body)

            {
                "email":"ahmed@hotmail.com",
                "password":"ahmedali"
            }

#(Response)=> {auth:true,token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'}

#(POST) https://Pharm-loginapp.herokuapp.com/api/auth/login

#(Body)

            {
                "email":"ahmed@hotmail.com",
                "password":"ahmedali"
            }

#(Response) => {"auth": true, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}

# UserInfo

#(GET) http://localhost:5000/api/auth/userinfo

#(Header) {'x-access-token':'token value from login'}

#(GET) https://Pharm-loginapp.herokuapp.com/api/auth/userinfo

#(Header) {'x-access-token':'token value from login'}
