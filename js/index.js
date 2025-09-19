// console.log("Hello World");
// var a = 20;
// console.log(a);


// console.log(a);
// var a = 20;

let a = 50;
if(a>10){
let a = 100;
console.log("a=" +a);
}else{
console,log("hiiiiii")
}
console.log("hiii"+a);


// function fun(){
//     return "Hey...";
//     console.log("Helllo");
// }

// const data = fun();
// console.log(data);



// //function as an expression.
// const data=function(a,b){
//     return a*b;
// }

// console.log(data(12,20));



// // Arrow function
// const data=(msg)=>{
//     console.log("heyy... using arrow func" + msg)
// }
// data("In react development");


// const data = msg => msg;
// console.log(data("greeting of the day"));



// // IIFE
// (function(){
//     console.log("Welcome to mern session");
// })();



// setTimeout(() => {
//     console.log("HEloo");
// },1000);



// function greet(msg="java"){
//     console.log(msg +"is a good language");
// }
// greet("python");



function selectlanguage(lang){
    let result;
    if(lang=="java"){
        function javacompiler(){
            return "using java compiler";
        }
        result=ccompiler();
    }
    else if(lang=='c'){
        function ccompiler(){
            return "using c compiler"
        }
        result=ccompiler();
    }
    
    else{
        result="no compiler found"
    }
    return result;

}
console.log(selectlanguage("java"));