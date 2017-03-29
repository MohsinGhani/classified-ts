// JavaScript Document
	
/*function signUp(){
	var u_name = document.getElementById('u_name').value;
	var u_email = document.getElementById('u_email').value;
	var u_pass = document.getElementById('u_pass').value;
	var re_pass = document.getElementById('re-u_pass').value;
	if(u_name !=='' && u_email !=='' && u_pass !==''){
		if(u_pass == re_pass){
		var local_name = localStorage.setItem('local_n',u_name)
		var local_email = localStorage.setItem('local_email',u_email)
		var local_pass = localStorage.setItem('local_p',u_pass)
		alert('Your Id is: "' + u_name + '"');
		window.open('ads.html');
		window.close('signUp.html');
		}else{
			alert('Re-Password is not match');
			}}
	else{
		alert('All Fields are Required');
	}
}*/

var is = JSON.parse(localStorage.getItem("user")) || [];
	function signUp(){ 
        var array = is; 
    	var user_name = document.getElementById('u_name').value;  
		var user_email = document.getElementById('u_email').value;
		var user_pass = document.getElementById('u_pass').value;
		var re_user_pass = document.getElementById('re_u_pass').value;
		if(user_name == '' || user_email == '' || user_pass == '' || re_user_pass == ''){
			alert('All Fields are Required!');
			exit();
		}
		if(user_pass !== re_user_pass){
			alert('Your Both Password are not match one together');
		}
		else{ 
        array.push([user_name, user_pass]); 
		localStorage.setItem("user",JSON.stringify(array)); 
  		window.open('ads.html');
                window.close('signUp.html');
        user_update(); 
		}
	}
function user_update(){ 
   /*document.getElementById("all-adds").innerHTML = ""; 
   	for(var i =0; i < is.length; i++){
   	document.getElementById("all-adds").innerHTML +=
	"<div class='col-sm-2'><p>" + ls[i][0] + "</p></div>" +
	"<div class='col-sm-2'><p>" + ls[i][1] + "</p></div>" +
	"<div class='col-sm-1'><p>" + ls[i][2] + "</p></div>" +
	"<div class='col-sm-1'><p>" + ls[i][3] + "</p></div>" +
	"<div class='col-sm-1'><p>" + ls[i][4] + "</p></div>" + 
	"<div class='col-sm-1'><p>" + ls[i][5] + "</p></div>" + 
	"<div class='col-sm-1'><p>" + ls[i][6] + "</p></div>" + 
	"<div class='col-sm-3'><p>" + "<img id='img' src='' height='150' width='150' alt='Image loading...'>" + "</p></div>";
   	}
  }*/
  
    update();
}
	
	
function login(){
	//var userData = JSON.parse(localStorage.getItem("user"))
	
    	/*var name = document.getElementById('name').value;
		var pass = document.getElementById('pass').value;
		var id_name = localStorage.getItem('user');
		var u_pass = localStorage.getItem('user');
		if(name == '' || pass == ''){
			alert('Please Create your own Account, Just Click on SignUp Button!');
		}
		else{
		if(name == id_name){
			if(pass == u_pass){
				window.alert('You are Loged in as: ' + id_name );
				window.open('index.html');
				window.close('login.html'); 
			}else{
				window.alert('Incorrect Password');
			}
		}else{
				window.alert('Incorrect User Id');
			}
		}*/
		
	var name = document.getElementById('name').value;
	var pass = document.getElementById('pass').value;
	var userData1 = JSON.parse(localStorage.getItem("user"));
	
	for(var i=0; i < userData1.length;){		
		if(userData1[i][0] == name && userData1[i][1] == pass){
			localStorage.setItem('welcome', userData1[i][0]);
			window.open('ads.html');
			exit();
		}
		else{
			var error = 'Incorrect User ID or Password';
			i++;
		}
		
	}alert(error);
}	