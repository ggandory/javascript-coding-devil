const name1 = "Mike";
let age = 30;
let grade = "F";
/** 변하지 않는값은 const 변할 수 있는 값은 let
 * 보통은 먼저 const로 선언하고 변할 여지가 있는거는 let으로 변환함
 */
const message = "I'm a boy";
const message2 = `My name is ${name1}`;
const message3 = `나는 ${20 + 1}살 입니다.`;
console.log(message3);
const y = name1 / 2;

console.log(typeof null);

const a = "나는";
const b = "입니다.";
console.log(a + name1 + b); /**문자형으로 변환됨 */

/**
 * alert 알려주는거임
 * prompt 입력 받는거임
 * confirm 확인받는거임
 */
const name2 = prompt("이름을 입력하세요.");
alert("환영합니다," + name1 + "님");
