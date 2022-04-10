const express = require("express")
const app = express()

const port = 3000

json_data=[
avatar_1={
    "first_name":"taha",
    "last_name":"khan",
    "course":"blockchain"
},
avatar_2={
    "first_last":"khubvaib",
    "last_name":"hanif",
    "course":"blockchian"
},
avatar_3={
    "first_last":"hanan",
    "last_name":"ahmed",
    "course":"blockchian"
}
]

app.get("/", (req,res) => {
    //route ki logic
    res.send("welcome avatar yari boyka!!!")
})


app.get("/json", (req,res) => {
    //route ki logic
    // res.send(avatar_1 + avatar_2 + avatar_3)
    res.send(json_data)
})

app.get("/avatar_1", (req,res) => {
    //route ki logic
    res.send(avatar_1)
})

app.get("/avatar_2", (req,res) => {
    //route ki logic
    res.send(avatar_2)
})

app.get("/avatar_3", (req,res) => {
    //route ki logic
    res.send(avatar_3)
})

app.get("/profile", (req,res) => {
    //route ki logic
    res.send("Here You will get your madness of metavers.")
})

app.listen(port, () => {
    console.log("server is running");
})