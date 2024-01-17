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

console.log(
  //전부 false로 뜸 그 외에는 true임
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);

Number(0); //false
Number("0"); //ture

Number(""); //false
Number(" "); //true

/**나머지(%)어디에 쓸까?
 * 홀수: x%2=1
 * 짝수: y%2=0
 *
 * 어떤 값이 들어와도 5를 넘기면 안됨
 * x%5=0~4사이의 값만 반환
 *
 * 거듭제곱
 * const num=2**3;
 * console.log(num); //8로뜸
 *
 * let num=10;
 * num+=5;
 * console.log(num);  15임
 * num*=5;도 가능함
 *
 * ++변수
 * 변수++차이는 전연산 후연산임
 * */

/**
 * 그리고 ==이거에 대해서 좀 헷갈리는데
 * = 이거는 말그대로 오른쪽을 왼쪽에 대입하는거고
 * ==이거는 양쪽이 서로 같은지 다른지에 대해서 판단하는거임
 * !=이것도 다르다는것으로 비교하는거임 즉 ==이거의 반대로 판단
 * 항상 반환값은 true or false임
 *
 * 대신 이건 조심해야함
 * const a=1;
 * const b="1";
 * console.log(a==b);이거는 같다고 함 근데
 * console.log(a==b);이거는 형까지 보기 때문에 false임
 *
 * ||or은 true를 발견하자마자 바로 실행종료다
 * &&and는 false를 보면 바로 실행 종료.
 */

//or
//이름이 tom이거나, 성인이면 통과

const name3 = "mike";
const age1 = 30;

if (name3 === "tom" || age1 > 19) {
  console.log("통과");
} else {
  console.log("노통과");
}
//and
//이름이 mike이거나, 성인이면 통과
const name4 = "mike";
const age2 = 20;

if (name4 === "mike" || age2 > 19) {
  console.log("통과");
} else {
  console.log("노통과");
}

//not
//나이를 입력받아 성인이 아니면 돌아가라

const age3 = prompt("나이?");
const isAdult1 = age3 > 19;
if (!isAdult1) {
  console.log("돌아가시오");
}

/**for(let i=0; i<10; i++){
 * 반복할 코드 들어가는곳} */

/** let i=0;
 * while(i<10){
 * console.log(i);
 * i++;} */

/**
 * let i=0
 * do{
 * }while(){
 * }
 * break 멈추고 빠져나옴
 * continue 멈추고 다음반복으로 진행
 */

/**
 * 사과:100원
 * 바나나:200원
 * 키위:300원
 * 멜론:500원
 * 복숭아:500원
 * 수박:1000원
 * 사고 싶은 과일 물어보고 가격 알려주기
 */

let fruit = prompt("무슨 과일을 사고 싶나요?");

switch (fruit) {
  case "사과":
    console.log("100원 입니다.");
    break;
  case "바나나":
    console.log("200원 입니다.");
    break;

  case "키위":
    console.log("300원 입니다.");
    break;

  case "멜론":
  case "복숭아":
    console.log("500원 입니다.");
    break;

  case "수박":
    console.log("1000원 입니다.");
    break;

  default:
    console.log("없는 과일입니다.");
}
