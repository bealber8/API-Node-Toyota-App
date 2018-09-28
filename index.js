'use strict'

var express = require('express');

var app =  express();

var api = express.Router();

//models
// var contact = {
//     name: 'Toyota Las Palmas',
//     street: 'C/Diego Vega Sarmiento, 5',
//     telephone: '928 44 76 00'    
// };

var modelsAuris = [
    {
        name: "Toyota Auris",
        power: '90-116 CV',
        fuel: 'Diesel, gasoline',
        price: '20.920€'
    },{
        name: 'Toyota Auris Hybrid',
        power: '136 CV',
        fuel: 'Diesel, gasoline',
        price: '22.810€'
    },{
        name: 'Toyota Auris Touring Sports',
        power: '90-116 CV',
        fuel: 'Diesel, gasoline',
        price: '21.870€'
    },{
        name: 'Toyota Auris Touring Sports Hybrid',
        power: '136 CV',
        fuel: 'Diesel, gasoline',
        price: '23.810€'
    }
];

var modelGt86 = {
    name: 'Toyota GT86',
    power: '200 CV',
    fuel: 'Gasoline',
    price: '34.490€'
};

var modelsYaris = [
    {
        name: 'Toyota Yaris 3P',
        power: '69-111 CV',
        fuel: 'Gasoline',
        price: '14.850€'
    },{
        name: 'Toyota Yaris 5P',
        power: '69-111 CV',
        fuel: 'Gasoline',
        price: '15.350€'
    },{
        name: 'Toyota Yaris GRMN',
        power: '212 CV',
        fuel: 'Gasoline',
        price: '29.900€'
    },{
        name: 'Toyota Yaris Hybrid',
        power: '75 CV',
        fuel: 'Gasoline',
        price: '21.000€'
    }
];

var modelsAvensis = [
    {
        name: "Toyota Avensis Sedan",
        power: "112-147 CV",
        fuel: "Diesel, Gasoline",
        price: "27.800€"
    },{
        name: "Toyota Avensis Touring Sports",
        power: "112-147 CV",
        fuel: "Diesel, Gasoline",
        price: "28.500€"
    }
];

var modelAygo = {
    name: 'Toyota Aygo',
    power: '72 CV',
    fuel: 'Gasoline',
    price: '13.190€'
};

var modelsRav4 = [
    {
        name: 'Toyota RAV4',
        power: '150-151 CV',
        fuel: 'Diesel, Gasoline',
        price: '30.550€'
    },{
        name: 'Toyota RAV4 Hybrid',
        power: '197 CV',
        fuel: 'Gasoline',
        price: '32.000€'
    }
];

var modelsLandCruiser = [
    {
        name: 'Toyota Land Cruiser 3P',
        power: '177 CV',
        fuel: 'Diesel',
        price: '38.850€'
    },{
        name: 'Toyota Land Cruiser 5P',
        power: '177 CV',
        fuel: 'Diesel',
        price: '41.900€'
    }
];

var modelChr = {
    name: 'Toyota C-HR',
    power: '98 CV',
    fuel: 'Gasoline',
    price: '27.000€'
};

var user = [
    {
        id: '0',
        name: 'Unidentified user',
        email: ''
    },{
        id: '1',
        name: 'Beatriz',
        email: 'beacalle1997@gmail.com'
    },{
        id: '2',
        name: 'Alberto',
        email: 'alberto1997@gmail.com'
    }
];

//controller
const showanswer = (req, res) => {
    const position = req.params.position;
    if(position >= user.length){
        res.status(404).send({message: 'Error 404 page not found'});
    } else {
        res.status(200).send(user[position]);
    }
}

const showAvensis = (req, res) => {
    res.status(200).send(modelsAvensis);
} 

const showAuris = (req, res) => {
    res.status(200).send(modelsAuris);
}

const showAygo = (req, res) => {
    res.status(200).send(modelAygo);
}

const showYaris = (req, res) => {
    res.status(200).send(modelsYaris);
}

const showGt86 = (req, res) => {
    res.status(200).send(modelGt86);
}

const showLandCruiser = (req, res) => {
    res.status(200).send(modelsLandCruiser);
}

const showRav4 = (req, res) => {
    res.status(200).send(modelsRav4);
}

const showChr = (req, res) => {
    res.status(200).send(modelChr);
}

const showContact = (req, res) => {
    res.status(200).send(contact);
}

//routes
api.get("/avensis", showAvensis);
api.get("/auris", showAuris);
api.get("/aygo", showAygo);
api.get("/yaris", showYaris);
api.get("/gt86", showGt86);
api.get("/land-cruiser", showLandCruiser);
api.get("/rav4", showRav4);
api.get("/chr", showChr);
api.get("/contact", showContact);
api.get("/answer/:position", showanswer);

//base route
app.use("/api", api);

const port = 40000;

app.listen(port, () => {
    console.log('listening on http://localhost:' + port);
})