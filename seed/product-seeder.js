var Product = require("../models/product");
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopping", { useNewUrlParser: true }, function(e){
  console.log('You are now connected to mongodb...');
});

var products = [ 
    new Product( {
        imagePath : '/images/image1.jpg',
        title : 'Gothic Video Game',
        description : 'Awesome Game!!!',
        price : 1000
    }),
    new Product( {
        imagePath : '/images/image2.jpg',
        title : 'World of Warcraft Video Game',
        description : 'Also Awesome? But of course it was better in vanilla....',
        price : 2000
    }),
    new Product( {
        imagePath : '/images/image3.jpg',
        title : 'Call of Duty Video Game',
        description : 'Meh....nah,its okay! guess.',
        price : 3000
    }),
    new Product( {
        imagePath : '/images/image4.jpg',
        title : 'Minecraft Video Game',
        description : 'Now thatis super awesome!',
        price : 4000
    }),
    new Product( {
        imagePath : '/images/image5.jpg',
        title : 'Dark Souls 3 Video Game',
        description : 'i died!',
        price : 5000
    })
];
var done = 0;
for (var i = 0 ; i < products.length; i++) {
    products[i].save(function(err, res){ 
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}