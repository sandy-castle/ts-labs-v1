// [문제 5] any, unknown 실습
// (1) 아래 두 변수를 선언하세요.

let guessAny: any = 42;
let guessUnknown: unknown = 42;

// (2) 아래 코드가 각각 컴파일/런타임에서 어떻게 동작하는지 예측하고 실험하세요.

// any 타입은 어떤 메서드든 호출 가능 (컴파일 타임에 검사 안 함)
// 따라서 아래는 모두 컴파일 통과되며, 런타임에만 오류 발생 가능

guessAny.toFixed(); // ✅ OK → 실행 시 정상 (숫자니까)
guessAny.toUpperCase(); // ❌ 런타임 오류 발생 (숫자에 string 메서드 호출)

// unknown 타입은 어떤 속성이나 메서드도 직접 접근 불가
// 컴파일 타임에 에러 발생

//guessUnknown.toFixed();     // ❌ 오류: Object is of type 'unknown'
//guessUnknown.toUpperCase(); // ❌ 오류: Object is of type 'unknown'

// (3) 타입 가드로 unknown 값을 안전하게 다뤄보세요.
if (typeof guessUnknown === "number") {
  // 여기에 toFixed() 사용해보세요.
}
