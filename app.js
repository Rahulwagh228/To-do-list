
// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
var items = ["Eat", "sleep" , "trade" ];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.set("view engine", "ejs");
app.get("/", function (req, res) {

    // to check its weekend or not..... 
    // var today = new Date();
    // currentday = today.getDay();
    // var day = "";

    var today = new Date();
    var options = { 
        weekday: 'long',
         year: 'numeric',
          month: 'long',
         };

    var day = today.toLocaleDateString("en-US", options)


    // switch (currentday){
    //     case 0:
    //         day = "sunday";
    //         break;
    //     case 1:
    //         day = "monday";
    //         break;
    //     case 2:
    //         day = "tuesday";
    //         break;
    //     case 3:
    //         day = "wednesday";
    //         break;
    //     case 4:
    //         day = "thursday";
    //         break;
    //     case 5:
    //         day = "friday";
    //         break;
    //     case 6:
    //         day = "saturday";
    //         break;
    // }

    // if (currentday === 6 || currentday === 0) {
    // // if (currentday === 4) {
    //     day = "weeekend"
    //     // res.send("<h1>Wooo hooo!... its the sunday go for forex bro</h1>")
    // }
    // else {
    //     day = "weeekday"
    //     // res.send("<h1>It's off day go for options</h1>")
    //     // res.send("<h1>It's off day bro focus on the exports </h1>")
    //     // res.send()
    //     // res.sendFile(__dirname + "/index.html");
    // }
    res.render("list2", { KindOfDay: day, kindoflist:items });


app.post("/", function(req, res){
    var item1 = req.body.item1;
    items.push(item1);
    res.redirect ("/");
})

});

app.listen(3000, function () {
    console.log("Server started on the port 3000");
});



