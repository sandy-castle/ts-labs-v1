//
// [문제] 회원 이름이 담긴 string 배열 users를 만들고,
// 다음 조건을 만족하는 코드를 작성하세요.
// 1. 배열에 "eunji", "minsu", "sora"를 추가
let userName: string[] = ["eunji", "minsu", "sora"];
// 2. 길이가 4 이하인 이름만 모아 filteredUsers에 저장
let filteredUsers: string[] = userName.filter((name) => name.length <= 4);
// 3. 모든 이름을 대문자로 변환해서 upperUsers에 저장
let upperUsers: string[] = userName.map((name) => name.toUpperCase());

// TODO: users 배열 선언 및 위 조건 처리
console.log("filteredUsers:", filteredUsers); // ["sora"]
console.log("upperUsers:", upperUsers); // ["EUNJI", "MINSU", "SORA"]
