/*
function sum(num1,num2){
  return num1 +num2;
};

const = sum=(num1,num2)={num1+num2};

*/
const sum = (num1, num2) => num1 + num2;

const result = sum(10, 20);
console.log(result);

const pow = (x) => x * x;

const result1 = pow(10);
console.log(result);

const printPie = () => 3.14;

const result2 = printPie();
console.log(result2);

/*
const getObject =()=>{
  return{
    name:"철수",
    age:20
  }
}
*/
const getObject = () => ({
  name: "철수",
  age: 20,
});

const obj = getObject();
console.log(obj.name);

/*
function outer(x){
  return function innner(){
    return x*x;
  }
}
*/
const outer = (x) => () => x * x;

const innerFunc = outer(10);
const result3 = innerFunc();
console.log(result);

let func = (arg1, arg2, ...argN) => expression;

let func1 = function (arg1, arg2, ...argN) {
  return expression;
};

let sum1 = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3

let double = (n) => n * 2;
// let double = function(n) { return n * 2 }과 거의 동일합니다.

alert(double(3)); // 6

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);
*/
