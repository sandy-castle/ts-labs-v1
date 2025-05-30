// [문제] 책(Book) 객체 타입을 선언하고, 책 목록을 다루는 코드를 작성하세요.
//  1. Book 타입은 title, author, publishedYear(출간년도), isAvailable(대출가능여부) 필수
type Book = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};
//  2. books 배열을 만들고 2권 이상 입력
const books: Book[] = [
  {
    title: "자바스크립트 완벽 가이드",
    author: "데이비드 플래너건",
    publishedYear: 2020,
    isAvailable: true,
  },
  {
    title: "타입스크립트 핸드북",
    author: "앤더스 헬스버그",
    publishedYear: 2021,
    isAvailable: false,
  },
  {
    title: "클린 코드",
    author: "로버트 C. 마틴",
    publishedYear: 2008,
    isAvailable: true,
  },
];

//  3. 현재 대출 가능한 책만 availableBooks에 추출

const availableBooks: Book[] = books.filter((book) => book.isAvailable);

console.log(availableBooks);
// TODO: Book 타입, books 배열, availableBooks 필터링
