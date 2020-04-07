// const http = require('http')
// const fs = require('fs')

// const test = fs.readFileSync('test.html', 'utf8')

// var server =  http.createServer((req, res) => {
//     console.log('Request : ' + req.url)
//     res.writeHead(200, {'Content-Type' :'application/json'})
//     var obj = {
//         nama: 'harun',
//         kelamin: 'pria',
//         email: 'harun@mail.com'
//     }
//     res.end(JSON.stringify(obj))
// })

// server.listen(8080)

// console.log('server run port 8080')

// * importan information
//  !Deprecated method
// TODO hwdkwdw
//  @paramjbj
//// ino
//  ? Harus sesuai urutan di express

const express = require ("express")
const app = express()
const fs = require("fs")
const bodyParser = require("body-parser")
const PORT = 5000

app.use(bodyParser.json())  //! BUAT USER KIRIM DATA KE SERVER
app.use(bodyParser.urlencoded({ extended: false}))  //! BUAT USER KIRIM DATA KE SERVER
var users = [
    {
        id: 1,
        username: "dino",
        password: "dino"
    },
    {
        id: 2,
        username: "user_1",
        password: "user_1"
    },
    {
        id: 3,
        username: "user_2",
        password: "user_2"
    },
    {
        id: 4,
        username: "user_3",
        password: "user_3"
    },
    {
        id: 5,
        username: "user_4",
        password: "user_4"
    }
]

var arrProd = [
    {
        id: 1,
        nama: "ultra man",
        harga: 9000,
        deskripsi: "mainan anak terbuat dari karet"
    },
    {
        id: 2,
        nama: "iron man",
        harga: 11000,
        deskripsi: "mainan anak terbuat dari karet_1"
    },
    {
        id: 3,
        nama: "spider man",
        harga: 12000,
        deskripsi: "mainan anak terbuat dari karet_2"
    },
    {
        id: 4,
        nama: "power ranger",
        harga: 13000,
        deskripsi: "mainan anak terbuat dari karet_3"
    },
]

// app.get("/", (req, res) => {
//     res.send ({ 
//         nama: "John"
//     })
// })
// app.get("/admin/:bebas", (req, res) => {
//     console.log(req.params.bebas)
//     res.send (`<h2>Welcome Admin ${req.param.bebas}</h2>`) 
// })
// app.get("/users", (req, res) => {
//     res.send (users)
// })
app.get("/products", (req, res) => {
    console.log(req.query)
    if (req.query.nama) {
        var newArr = arrProd.filter((val) => {
            return val.nama.toLowerCase().includes(req.query.nama.toLowerCase()) // *SEARCH PRODUCTS
        })
        return res.status(200).send(newArr)  // ! http://localhost:5000/products?nama=spider
    } else {
        var { hargaMin, hargaMax }  = req.query  //* SEARCH HARGA MIN
        if ( !hargaMin && !hargaMax) {
            return res.status(200).send(arrProd)
        }
        if (!hargaMin) {
            var newArr = arrProd.filter((val) => val.harga <= hargaMax)  // ! http://localhost:5000/products?hargaMinimal=13000
            return res.status(200).send(newArr)
        }
        if (!hargaMax) {
            var newArr = arrProd.filter((val) => val.harga >= hargaMin)  // ! http://localhost:5000/products?hargaMinimal=13000
            return res.status(200).send(newArr)
        }
        var newArr = arrProd.filter((val) => val.harga >= hargaMin && val.harga <= hargaMax)  //! http://localhost:5000/products?hargaMin=10000&hargaMax=12000
        return res.status(200).send(newArr)  
    }
})
//// app.get("/users", (req, res) => {
////     console.log(req.query)
////     res.send (`<h2>data username adalah ${req.query.password}</h2>`)
//// })
// app.post("/users", (req, res) => {
//     console.log(req.body)
//     users.push(...req.body, id,users.length + 1) // ! SPREAD OPERATOR BERFUNGSI UNTUK ADD OR REMOVE
//     res.send(users)
// })
// app.put("/users/:id", (req, res) => {
//     users[req.params.id - 1] = {...users[req.params.id - 1], ...req.body}  //! berfungsi untuk update data atau menghapus data user
//     res.send(users)
// })
// app.get("/deleteusers/:id", (req, res) => {
//     users[req.params.id - 1] = { ...users[req.params.id - 1], ...req.body}
//     res.send(users)
// })
// app.get("/test", (req, res) => {
//     fs.readFile("test.html", (err,data) => {
//         res.send (data.toString())
//     })
// })

app.listen(PORT, () => console.log("server jalan di " + PORT))



