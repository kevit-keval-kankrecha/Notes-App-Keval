//--
// console.log("Below is the content of Utils.js");
// const name="keval Kankrecha";
// const age=21;
// const city="Gondal";
// const college="DIET";
// console.log("Above is the content of Utils.js");
// const personaldata={
//     name:name,
//     age:age,
//     city:city,
//     college:college
// }
// module.exports = personaldata;
// !--

const MathsFunction={};
function addition(no1,no2){
    return no1+no2;
}
function subtraction(no1,no2){
    return no1-no2;
}
function multiplication(no1,no2){
    return no1*no2;
}
function division(no1,no2){
    return no1/no2;
}
function modulo(no1,no2){ 
    return no1%no2;
}
MathsFunction.addition=addition;
MathsFunction.subtraction=subtraction;
MathsFunction.multiplication=multiplication;
MathsFunction.division=division;
MathsFunction.modulo=modulo;
module.exports=MathsFunction;