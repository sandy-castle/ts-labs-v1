// /**
//  * [문제] 주문 상태(OrderStatus)를 enum으로 정의하고, 주문 목록에서 "배송 중"인 주문만 추출하세요.
//  * 1. OrderStatus: "PENDING", "SHIPPED", "DELIVERED", "CANCELLED" 네 가지 값
enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}
//  * 2. Order 타입은 id, status, item 필수
type Order = {
  id: number;
  status: OrderStatus;
  item: string;
};
//   * 3. orders 배열에 3개 이상 입력
const orders: Order[] = [
  { id: 1, status: OrderStatus.PENDING, item: "노트북" },
  { id: 2, status: OrderStatus.SHIPPED, item: "키보드" },
  { id: 3, status: OrderStatus.SHIPPED, item: "마우스" },
  { id: 4, status: OrderStatus.DELIVERED, item: "책" },
];
//  * 4. 배송 중(SHIPPED) 주문만 shippedOrders에 저장
const shippedOrders = orders.filter(
  (order) => order.status === OrderStatus.SHIPPED
);
console.log(shippedOrders);

// // TODO: OrderStatus enum, Order 타입, orders 배열, shippedOrders 추출
