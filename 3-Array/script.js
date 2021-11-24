
//tapsirig 1 start


// let list=document.getElementById("list");
// let users = [
//     "Arif" ,"Akif" ,"Asif","kenan"
// ];


// let li="";

// for(let i=0;i<users.length; i++){
// li+=`<li> ${users [i]}</li>`
// }

// list.innerHTML=li;


//tapsirig 1 end


//tapsirig 2 start

let num =[
    1,3,5,7,9
];

let x = 2;

let nbr=document.getElementById("show");

num.forEach(function(item) {
    x += item
});

nbr.innerHTML=x