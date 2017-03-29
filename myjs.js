// JavaScript Document

var ls = JSON.parse(localStorage.getItem("items")) || [];
	function addMob(){ 
        var arr = ls; 
    	var brand = document.getElementById('brand').value;  
		var model = document.getElementById('model').value;
		var color = document.getElementById('color').value;
		var condition = document.getElementById('condition').value;
		var warranty = document.getElementById('warranty').value;
		var email = document.getElementById('email').value; 
		var contact = document.getElementById('contact').value;
		var city = document.getElementById('city').value;
		var country = document.getElementById('country').value;
		var price = document.getElementById('price').value;
		if(brand == '' || model == '' || color == '' || condition == '' || warranty == '' || email == '' || contact == '' || city == '' || country == '' || price == ''){
			alert('All Fields are Required!');
		}
		else{ 
        arr.unshift([brand,model,color,condition,warranty,email,contact,city,country,price]); 
		localStorage.setItem("items",JSON.stringify(arr)); 
  		window.open('ads.html')
		window.close('form.html');
		updateAll();
        updateMob();
		}
	}

function updateAll(){ 
   document.getElementById("all-mob").innerHTML = "";
   	for(var i =0; i < ls.length; i++){
   	document.getElementById("all-mob").innerHTML +=
	"<div class='row'><div class='col-sm-12 brand btn-warning'>" + ls[i][0] + "</div></div>" +
	"<div class='row detail'><div class='col-sm-2'><center><img id='img' src='' height='150' width='150' alt='Image loading...'>" +
	"</center></div><div class='col-sm-4'><h4 align='center'>Product Detail</h4><hr style='margin-top:-5px; margin-bottom:8px;'>" +
	"<ul><li>Model: <span>" + ls[i][1] + '</span></li><li>Color: <span>' + ls[i][2] + "</span></li><li>Condition: <span>" + ls[i][3] +
	"</span></li><li>Warranty: <span>" + ls[i][4] +"</span></li></ul></div><div class='col-sm-4'><h4 align='center'>Saler Detail" +
	"</h4><hr style='margin-top:-5px; margin-bottom:8px;'><ul><li>Email: <span>" + ls[i][5] + "</span></li><li>Contact: <span>" +
	ls[i][6] + "</span></li><li>City: <span>" + ls[i][7] + "</span></li><li>Country: <span>" + ls[i][8] + "</span></li></ul></div>" +
	"<div class='col-sm-2'><div class='price-wrap'><span class='tag-head'>&nbsp;</span><p class='post-price' alt='price in pak'>Rs." +
	ls[i][9] + "</p></div></div></div>";
   	}
  }
 updateAll();

function updateMob(){ 
   document.getElementById("mob-adds").innerHTML = "";
   	for(var i =0; i < ls.length; i++){
   	document.getElementById("mob-adds").innerHTML +=
	"<div class='row'><div class='col-sm-12 brand btn-warning'>" + ls[i][0] + "</div></div>" +
	"<div class='row detail'><div class='col-sm-2'><center><img id='img' src='' height='150' width='150' alt='Image loading...'>" +
	"</center></div><div class='col-sm-4'><h4 align='center'>Product Detail</h4><hr style='margin-top:-5px; margin-bottom:8px;'>" +
	"<ul><li>Model: <span>" + ls[i][1] + '</span></li><li>Color: <span>' + ls[i][2] + "</span></li><li>Condition: <span>" + ls[i][3] +
	"</span></li><li>Warranty: <span>" + ls[i][4] +"</span></li></ul></div><div class='col-sm-4'><h4 align='center'>Saler Detail" +
	"</h4><hr style='margin-top:-5px; margin-bottom:8px;'><ul><li>Email: <span>" + ls[i][5] + "</span></li><li>Contact: <span>" +
	ls[i][6] + "</span></li><li>City: <span>" + ls[i][7] + "</span></li><li>Country: <span>" + ls[i][8] + "</span></li></ul></div>" +
	"<div class='col-sm-2'><div class='price-wrap'><span class='tag-head'>&nbsp;</span><p class='post-price' alt='price in pak'>Rs." +
	ls[i][9] + "</p></div></div></div>";
   	}
  }
 updateMob();

/////////////////////////////////////////////////CAR Coding Start///////////////////////////////////////////////////////////////

var car = JSON.parse(localStorage.getItem("cars")) || [];
	function addCar(){ 
        var arr = car; 
    	var car_brand = document.getElementById('car_brand').value;  
		var car_model = document.getElementById('car_model').value;
		var car_color = document.getElementById('car_color').value;
		var car_condition = document.getElementById('car_condition').value;
		var car_warranty = document.getElementById('car_warranty').value;
		var car_email = document.getElementById('car_email').value; 
		var car_contact = document.getElementById('car_contact').value;
		var car_city = document.getElementById('car_city').value;
		var car_country = document.getElementById('car_country').value;
		var car_price = document.getElementById('car_price').value;
		if(car_brand == '' || car_model == '' || car_color == '' || car_condition == '' || car_warranty == '' || car_email == '' || car_contact == '' || car_city == '' || car_country == '' || car_price == ''){
			alert('All Fields are Required!');
		}
		else{ 
        arr.unshift([car_brand,car_model,car_color,car_condition,car_warranty,car_email,car_contact,car_city,car_country,car_price]); 
		localStorage.setItem("cars",JSON.stringify(arr)); 
  		window.open('ads.html')
		window.close('form.html');
		updateAllCar();
        updateCar();
		}
	}

function updateAllCar(){ 
   document.getElementById("all-cars").innerHTML = "";
   	for(var i =0; i < car.length; i++){
   	document.getElementById("all-cars").innerHTML +=
	"<div class='row'><div class='col-sm-12 brand btn-warning'>" + car[i][0] + "</div></div>" +
	"<div class='row detail'><div class='col-sm-2'><center><img id='img' src='' height='150' width='150' alt='Image loading...'>" +
	"</center></div><div class='col-sm-4'><h4 align='center'>Product Detail</h4><hr style='margin-top:-5px; margin-bottom:8px;'>" +
	"<ul><li>Model: <span>"+car[i][1] + '</span></li><li>Color: <span>' + car[i][2] + "</span></li><li>Condition: <span>" + car[i][3] +
	"</span></li><li>Warranty: <span>" + car[i][4] +"</span></li></ul></div><div class='col-sm-4'><h4 align='center'>Saler Detail" +
	"</h4><hr style='margin-top:-5px; margin-bottom:8px;'><ul><li>Email: <span>" + car[i][5] + "</span></li><li>Contact: <span>" +
	car[i][6] + "</span></li><li>City: <span>"+car[i][7] + "</span></li><li>Country: <span>" + car[i][8] + "</span></li></ul></div>" +
	"<div class='col-sm-2'><div class='price-wrap'><span class='tag-head'>&nbsp;</span><p class='post-price' alt='price in pak'>Rs." +
	car[i][9] + "</p></div></div></div>";
   	}
  }
 updateAllCar();
 
function updateCar(){ 
   	document.getElementById("car-adds").innerHTML = "";
   	for(var i =0; i < car.length; i++){
   	document.getElementById("car-adds").innerHTML +=
	"<div class='row'><div class='col-sm-12 brand btn-warning'>" + car[i][0] + "</div></div>" +
	"<div class='row detail'><div class='col-sm-2'><center><img id='img' src='' height='150' width='150' alt='Image loading...'>" +
	"</center></div><div class='col-sm-4'><h4 align='center'>Product Detail</h4><hr style='margin-top:-5px; margin-bottom:8px;'>" +
	"<ul><li>Model: <span>"+car[i][1] + '</span></li><li>Color: <span>' + car[i][2] + "</span></li><li>Condition: <span>" + car[i][3] +
	"</span></li><li>Warranty: <span>" + car[i][4] +"</span></li></ul></div><div class='col-sm-4'><h4 align='center'>Saler Detail" +
	"</h4><hr style='margin-top:-5px; margin-bottom:8px;'><ul><li>Email: <span>" + car[i][5] + "</span></li><li>Contact: <span>" +
	car[i][6] + "</span></li><li>City: <span>"+car[i][7] + "</span></li><li>Country: <span>" + car[i][8] + "</span></li></ul></div>" +
	"<div class='col-sm-2'><div class='price-wrap'><span class='tag-head'>&nbsp;</span><p class='post-price' alt='price in pak'>Rs." +
	car[i][9] + "</p></div></div></div>";
   	}
  }
 updateCar();
 
 
/////////////////////////////////////////////////BIKE Coding Start///////////////////////////////////////////////////////////////

var bike = JSON.parse(localStorage.getItem("bikes")) || [];
	function addBike(){ 
        var arr = bike; 
    	var bike_brand = document.getElementById('bike_brand').value;  
		var bike_model = document.getElementById('bike_model').value;
		var bike_color = document.getElementById('bike_color').value;
		var bike_condition = document.getElementById('bike_condition').value;
		var bike_warranty = document.getElementById('bike_warranty').value;
		var bike_email = document.getElementById('bike_email').value; 
		var bike_contact = document.getElementById('bike_contact').value;
		var bike_city = document.getElementById('bike_city').value;
		var bike_country = document.getElementById('bike_country').value;
		var bike_price = document.getElementById('bike_price').value;
		if(bike_brand == '' || bike_model == '' || bike_color == '' || bike_condition == '' || bike_warranty == '' || bike_email == '' || bike_contact == '' || bike_city == '' || bike_country == '' || bike_price == ''){
			alert('All Fields are Required!');
		}
		else{ 
        arr.unshift([bike_brand,bike_model,bike_color,bike_condition,bike_warranty,bike_email,bike_contact,bike_city,bike_country,bike_price]); 
		localStorage.setItem("bikes",JSON.stringify(arr)); 
  		window.open('ads.html')
		window.close('form.html');
		updateAllBike();
        updateBike();
		}
	}

function updateAllBike(){ 
   document.getElementById("all-adds").innerHTML = "";
   	for(var i =0; i < bike.length; i++){
   	document.getElementById("all-adds").innerHTML +=
	"<div class='row'><div class='col-sm-12 brand btn-warning'>" + bike[i][0] + "</div></div>" +
	"<div class='row detail'><div class='col-sm-2'><center><img id='img' src='' height='150' width='150' alt='Image loading...'>" +
	"</center></div><div class='col-sm-4'><h4 align='center'>Product Detail</h4><hr style='margin-top:-5px; margin-bottom:8px;'>" +
	"<ul><li>Model: <span>"+bike[i][1] + '</span></li><li>Color: <span>' + bike[i][2]+"</span></li><li>Condition: <span>"+bike[i][3] +
	"</span></li><li>Warranty: <span>" + bike[i][4] +"</span></li></ul></div><div class='col-sm-4'><h4 align='center'>Saler Detail" +
	"</h4><hr style='margin-top:-5px; margin-bottom:8px;'><ul><li>Email: <span>" + bike[i][5] + "</span></li><li>Contact: <span>" +
	bike[i][6] + "</span></li><li>City: <span>"+bike[i][7]+"</span></li><li>Country: <span>" + bike[i][8] + "</span></li></ul></div>" +
	"<div class='col-sm-2'><div class='price-wrap'><span class='tag-head'>&nbsp;</span><p class='post-price' alt='price in pak'>Rs." +
	bike[i][9] + "</p></div></div></div>";
   	}
  }
 updateAllBike();
 
function updateBike(){ 
   	document.getElementById("bike-adds").innerHTML = "";
   	for(var i =0; i < bike.length; i++){
   	document.getElementById("bike-adds").innerHTML +=
	"<div class='row'><div class='col-sm-12 brand btn-warning'>" + bike[i][0] + "</div></div>" +
	"<div class='row detail'><div class='col-sm-2'><center><img id='img' src='' height='150' width='150' alt='Image loading...'>" +
	"</center></div><div class='col-sm-4'><h4 align='center'>Product Detail</h4><hr style='margin-top:-5px; margin-bottom:8px;'>" +
	"<ul><li>Model: <span>"+bike[i][1] + '</span></li><li>Color: <span>' + bike[i][2]+"</span></li><li>Condition: <span>"+bike[i][3] +
	"</span></li><li>Warranty: <span>" + bike[i][4] +"</span></li></ul></div><div class='col-sm-4'><h4 align='center'>Saler Detail" +
	"</h4><hr style='margin-top:-5px; margin-bottom:8px;'><ul><li>Email: <span>" + bike[i][5] + "</span></li><li>Contact: <span>" +
	bike[i][6] + "</span></li><li>City: <span>"+bike[i][7] + "</span></li><li>Country: <span>" + bike[i][8]+"</span></li></ul></div>" +
	"<div class='col-sm-2'><div class='price-wrap'><span class='tag-head'>&nbsp;</span><p class='post-price' alt='price in pak'>Rs." +
	bike[i][9] + "</p></div></div></div>";
   	}
  }
 updateBike();