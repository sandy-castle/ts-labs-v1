// [문제] 조건에 따라 필터링하는 함수
// 숫자 배열과 조건 함수(predicate: number => boolean)를 받아
type Predicate = (n: number) => boolean;
// 조건을 만족하는 값들만 새 배열로 반환하는 filterNumbers 함수를 작성하세요.
function filterNumbers(numbers: number[], predicate: Predicate): number[] {
  return numbers.filter(predicate);
}
// predicate 함수 타입은 타입 별칭으로 선언하세요.
const isEven = (n: number) => n % 2 === 0;
const isPositive = (n: number) => n > 0;

console.log(filterNumbers([1, 2, 3, 4], isEven));
console.log(filterNumbers([-2, 0, 3, 5], isPositive));
/*
예시)
const isEven = (n: number) => n % 2 === 0;
filterNumbers([1, 2, 3, 4], isEven) // [2, 4]
*/
