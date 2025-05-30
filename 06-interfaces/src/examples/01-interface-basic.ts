// 인터페이스의 기본 구조 선언 및 객체 적용

interface AppUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

const userA: AppUser = { id: 1, name: "홍유저", isAdmin: false };
const userB: AppUser = { id: 2, name: "김유저", isAdmin: true };

function printUser(user: AppUser): void {
  const role = user.isAdmin ? "관리자" : "일반 유저";
  console.log(`🧑‍💻 ${user.name} (ID: ${user.id}) - ${role}`);
}

printUser(userA); // [user] id:1, name:홍유저, admin:false
printUser(userB); // [user] id:2, name:김유저, admin:true
