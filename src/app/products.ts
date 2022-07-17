export interface Product {
  id: number;
  qrCodeNum: number;
  description: string;
  qty: number;
  value: number;
}

export const products = [
  {
    id: 1,
    qrCodeNum: 1,
    description: 'MS PRoduct 1',
    qty: 10,
    value: 5,
  },
  {
    id: 2,
    qrCodeNum: 2,
    description: 'car doors',
    qty: 3,
    value: 5,
  },
  {
    id: 3,
    qrCodeNum: 3,
    description: 'car doors',
    qty: 8,
    value: 50,
  },
];
