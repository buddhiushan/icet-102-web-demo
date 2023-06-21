console.log("Hi ICET......");

//var,let,const

var name ="Buddhi";

console.log(name+"Is My Name");

//funtion-method
function print(){
    console.log("print called..!")
}

//funtion calling statement
print();

function getData(){
    var email = document.getElementById('email').Value
    document.getElementById('result').innerHTML=email;
    console.log(email);
}
//true,false,a statement that genarates true or false
x= 5;
y= 4;

if (x!=5) {
    console.log("Hiii");
    
}
//login for in 
function login(){
    var dbUserName=document.getElementById('email').value;
    var dbPassword=document.getElementById('password').value;

    if(dbUserName=="buddhiushan2022@gmail.com" && dbPassword=="buddhi2003"){
        alert("Succefully Loged in......") ;
    }else{
        alert("Login failed!!...");
    }
}