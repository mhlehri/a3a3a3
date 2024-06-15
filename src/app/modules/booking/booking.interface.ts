export type TBooking = {
  room: String;
  slots: [String];
  user: String;
  totalAmount: number;
  date: String;
  isConfirmed: "confirmed" | "unconfirmed" | "canceled";
  isDeleted: boolean;
};
