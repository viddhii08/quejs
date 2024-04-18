let a = 3;
let b = 4;
let c = 5;
if(a==b && b==c && c==a ){
console.log("Equilateral")
}else if (a==b && b==c && c!=a){
    console.log("Isosceles")
}else if (a!=b && b!=c && c!=a){
    console.log("Scalene")
}