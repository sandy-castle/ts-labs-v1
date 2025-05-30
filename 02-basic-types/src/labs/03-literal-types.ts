// [문제 3] 아래 요구사항에 맞게 타입을 직접 완성하세요.
// 유니온 타입 '|' 사용해서 풀어보기

// 요일: "Mon"~"Fri" 중 하나만 허용
let dayOfWeek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

dayOfWeek = "Mon";
dayOfWeek = "Fri";
// dayOfWeek = "Sat" // ❌ 오류: "Sat"은 허용되지 않은 값

// yes/no만 허용
let answer: "yes" | "no";

answer = "yes";
answer = "no";
// answer = "maybe" // ❌ 오류: "maybe"는 허용되지 않은 값
