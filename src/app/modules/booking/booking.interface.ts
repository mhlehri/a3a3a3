export type TisConfirmed = "confirmed" | "unconfirmed" | "canceled";

export type TBooking = {
  room: string;
  slots: [string];
  user: string;
  totalAmount: number;
  date: string;
  isConfirmed: TisConfirmed;
  isDeleted: boolean;
};
