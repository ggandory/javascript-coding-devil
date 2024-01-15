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
const name2 = prompt("예약일을 입력하세요.", "2024-10-");

alert("환영합니다," + name1 + "님");

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult); //취소하면 false 뜨고 확인하면 true 뜸 그래서 그걸로 적용해서 활용

const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");

const result = (mathScore + engScore) / 2;
console.log(result);
//이러면 값이 안나온다.
//프롬프트로 입력받은 값은 무조건 문자열이기 때문에 8090/2로 표현되는거임 이게 자동형 변환임
//그래서 아예 점수에 숫자값을 넣어줘야함
const mathScore1 = 80;
const engScore1 = 90;
const result1 = (mathScore1 + engScore1) / 2;
console.log(result1);
//이러면 됨

console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
);

console.log(
  Number("123sdfa"), //이건 nan처리가 됨
  Number(true), //1이뜸
  Number(false) //0이뜸
);

Number(null); //0
Number(undefined); //NaN

Number(0); //false
Number("0"); //ture

Number(""); //false
Number(" "); //true

console.log(
  //전부 false로 뜸 그 외에는 true임
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);
