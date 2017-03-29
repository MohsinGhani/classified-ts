

class Advertise{
    name:string;
    model:string;
    color:string;
    price:number;
    description:string;
    constructor(name:string, model:string,color:string, price:number, description:string){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
        this.description = description;
    }
}

/**
 * Mobile
 */
class Mobile extends Advertise {
    constructor(name:string, model:string,color:string, price:number, description:string) {
        super(name,model,color,price,description);
        document.getElementById('all').innerHTML += "<div class='adv'><h2> Mobile Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='description'> Description of this product<br><span>" + description +  "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";

        document.getElementById('mobile').innerHTML += "<div class='adv'><h2> Mobile Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='description'> Description of this product<br><span>" + description +  "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";
    }
}

class Car extends Advertise{
    
    constructor(name:string, model:string,color:string, price:number, description:string){
    super(name,model,color,price,description);
    document.getElementById('all').innerHTML += "<div class='adv'><h2> Car Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='description'> Description of this product<br><span>" + description +  "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";

     document.getElementById('car').innerHTML += "<div class='adv'><h2> Car Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='description'> Description of this product<br><span>" + description +  "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";
    
    }
}

class Bike extends Advertise{
    
    constructor(name:string, model:string,color:string, price:number, description:string){
    super(name,model,color,price,description);
    document.getElementById('all').innerHTML += "<div class='adv'><h2> Bike Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='description'> Description of this product<br><span>" + description +  "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";

     document.getElementById('bike').innerHTML += "<div class='adv'><h2> Bike Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='description'> Description of this product<br><span>" + description +  "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";
    
    }
}

let addvertise =[
    new Mobile('Apple iPad','Pro 9.7','Black',19999,'Dual-core 2.16 GHz,2 GB RAM,LED-backlit IPS LCD,9.7 inches,Camera 12 MP'),
    new Car('HYUNDAI','2015','White',869888,'1.6L Dual VTVT 6-Speed Manual Base (Petrol)'),
    new Bike('SUZUKI','2015','Black',1550000,'The innovative body styling of Bandit will allow the bikers to enjoy the heavy biking at its fullest'),
    new Car('TOYOTA','2013','Black',136000,'Indicative Prices of cars SUVs and MUVs in India. All prices are in Rs lakhs, Ex-showroom Mumbai.'),
    new Mobile('SONY','Arc S','silver',10000,'Screen 4.2" 480x854 pixels, Camera: 8MP,512MB RAM,Sony Ericsson Xperia Arc S'),
    new Bike('HONDA','2016','Silver',660000,'The world famous Honda CBR series contains some super stylish and highly efficient bikes'),
    new Mobile('Huawei','Honor 8','Silver',17999,'Screen 5.2" 1080x1920 pixels, Camera: 12MP,4GB RAM, Released 2016, July'),
    new Car('Ferrari','2016','Green',2454000,'We also have used Ferrari reviews, photos, specs and pricing.'),
    new Mobile('CAT','S40','silver',7800,'Screen 4.7" 480x854 pixels, Camera: 8MP,1GB RAM, Released 2015, August'),
    new Bike('YAMAHA','2012','Red',105000,'The sporting activities are as old as the human generation itself on the planet earth'),
    new Car('BMW','2016','Black',2150500,'The  new BMW models for which we have information. Price may not be available for all years'),
    new Mobile('Nokia','2014','White',2500,'Below are tips on how to create a good classifieds car ad that sells.'),
    new Car('Volvo','2014','Green',1789999,'The new Volvo models for which we have information. Price may not be available for all years.')
];

