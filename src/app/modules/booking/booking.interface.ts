export type TBooking = {
  room: string;
  slots: [string];
  user: string;
  totalAmount: number;
  date: string;
  isConfirmed: "confirmed" | "unconfirmed" | "canceled";
  isDeleted: boolean;
};
