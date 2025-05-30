// [문제] 문자열 변환 파이프라인 함수
// 문자열 배열과 변환 함수(transform: string => string)를 받아
// 각 요소를 변환 함수로 처리해 새 배열로 반환하는 processStrings 함수를 작성하세요.
// transform 함수 타입은 type alias로 선언하세요.

/*
예시)
const shout = (str: string) => str + '!';
processStrings(['hi', 'bye'], shout) // ['hi!', 'bye!']
*/
// 1. 변환 함수 타입 별칭 정의
type StringTransformer = (str: string) => string;

// 2. 문자열 배열을 변환하는 함수 작성
function processStrings(
  strings: string[],
  transform: StringTransformer
): string[] {
  return strings.map(transform);
}

const shout = (str: string) => str + "!";
const toUpper = (str: string) => str.toUpperCase();

console.log(processStrings(["hi", "bye"], shout));
console.log(processStrings(["apple", "banana"], toUpper));
