// console.log("Hello Abhi");
// let a=15;
// console.log(a+a);


// console.log(a);
// var a=20;


// let a=20;
// if(a>10){
//     let a=100
//     console.log("a="+a);
// }
// else{
//     console.log("Hii");
// }
// console.log(a);


// const a=23;
// a=50;


// normal function

// function fun(msg){
//     return "Hii"+" "+msg;
// }

// const data=fun("Ankur");
// console.log(data);


// function as an expression 

// const data=function fun(a,b){
//     return a*b;
// }
// console.log(data(10,20));

// const data=()=>{
//     console.log("Ankur");
// }
// console.log(data());


// IIFE 

// (function(){
//     console.log("Welcome to MERN Session");
// })();


// setTimeout(()=>{
//     console.log("Hii");
// },1000);


// function greet(msg="Java"){
//     console.log(msg+" is a good language");
// }
// greet("Python");


// function selectlanguage(lang){
//     let result;
//     if(lang=="Java"){
//         function JCompiler(){
//             return "Using J Compiler";

//         }
//         result=JCompiler();
//     }
//     else if(lang=="C"){
//         function CCompiler(){
//             return "Using C Compiler";
//         }
//     }
//     else{
//         result="No Compiler Found";
//     }
//     return result;
// }

// final=selectlanguage("Java");
// console.log(final);





// DOM FUNCTIONS:-

// const div = document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="Hello world";
// div[0].style.color='red';
// div[0].style.backgroundColor='cyan';
// console.log(div);


// const container = document.getElementsByClassName('container');

// console.log(container);
// container[0].innerHTML='<h2 style=color:red>Hello World</h2>'
// console.dir(container)

// const h2 = document.createElement('h2');
// h2.innerText = "ABES Engineering College";
// h2.style.color = 'white';
// h2.style.backgroundColor = 'brown';
// console.log(h2);
// container[0].appendChild(h2);




// const button = document.getElementById('btn');
// console.log(button);

// function msg() {
//     // console.log("Hi, I m working on DOM");
//     alert("hiii, i am using dom");
//     document.getElementById('disp').innerHTML="<h>Loading Image...</h>"
//     setTimeout(()=>{
//     document.getElementById('disp').innerHTML="<h2>ABES Engineering College</h2>"

//     const img = document.createElement('img');
//     img.src = 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/copy-urls-tabs-featured-image.jpg';
//     img.setAttribute('height', '300px');
//     img.setAttribute('width', '400px');
//     console.log(img);
//     container[0].appendChild(img);
//     },2000);
// }
// button.addEventListener('click', msg);
// // button.addEventListener('click',()=>(msg()));







// // Blocking and Non-blocking code

// const button = document.getElementById('btn');
// function longData(){
//     console.log("start");
//     for(i=0; i<10000;i++){
//         console.log(i);
//     }
//     console.log("end");
// }
// button.addEventListener('click',longData);


// console.log("start")
// setTimeout(()=>{
//     console.log("welcome to fsd")
// },2000)
// console.log("end")




// // callback function
// function greetmsg(myname){
//     return "Hiii,"+myname+" welcome to abes college";
// }

// function msgHandler(msg,clbk){
//     console.log(msg);
//     const data = clbk(msg);
//     return data;
// }

// const student = ["rahul","aman","vansh"];
// student.forEach((name)=>{
// console.log(msgHandler(name,greetmsg));
// })
// // const completemsg = msgHandler("hiii",greetmsg);
// // console.log(completemsg);






// //Promise

// const mypromise = new Promise((resolve,reject)=>{
// const password = "786h%^";
// if(password.length>8){
//     resolve("password length is ok");
// }else{
//     reject("password length is not as per our policy");
// }
// });


// // mypromise.then((result)=>{console.log(result)})
// // .catch((err)=>(console.log(err)))
// // .finally(()=>{
// //     console.log("all the resources have closed successfully");
// // })

// async function handleData(){
//     const data = await mypromise;
//     console.log(data);
//     // const result = mypromise;
//     // console.log(result);
// }

// handleData();



const button = document.getElementById('btn');
const disp = document.getElementById('disp');
let table =`<table border=1>`;
async function fetchdata(){
    disp.innerHTML="<h2>Data is loading...</h2>"
    const response = await fetch('https://dummyjson.com/recipes');
    const jsondata = await response.json();
    console.log(jsondata.recipes);
    // disp.innerHTML = `<h2>${jsondata.recipes[0].name} ${jsondata.recipes[0].id}</h2>`;

    jsondata.recipes.forEach(element=>{
        table+=`<tr>
        <td><img src=${element.image} height=200 width=200 alt=/image></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.ingredients}</td>
        <td></td>
        </tr>`
    });

    table+='</table>';
    disp.innerHTML=table;
}
button.addEventListener('click',fetchdata);




