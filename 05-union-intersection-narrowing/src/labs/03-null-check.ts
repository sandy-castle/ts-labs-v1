// [문제] null 체크 패턴: 유저 정보 안전하게 출력
// user가 undefined일 수도 있으니 안전하게 id, name, (email이 있으면 email도) 출력

type User = { id: number; name: string; email?: string };

function printUserInfomation(user?: User) {
  if (!user) {
    console.log("유저 정보가 없습니다.");
    return;
  }

  console.log(`ID: ${user.id}, 이름: ${user.name}`);

  if (user.email) {
    console.log(`이메일: ${user.email}`);
  }
}

// 사용 예시
printUserInfomation();
printUserInfomation({ id: 2, name: "Tom" });
printUserInfomation({ id: 3, name: "Jane", email: "jane@example.com" });

// 사용 예시
// printUserInfo();
// printUserInfo({ id: 2, name: "Tom" });
// printUserInfo({ id: 3, name: "Jane", email: "jane@example.com" });
