import { ProductSKU } from '../enums';

export const products: any = {
  [ProductSKU.ATV]: {
    name: 'Apple Tv',
    price: 109.5,
    sku: ProductSKU.ATV,
  },
  [ProductSKU.IPD]: {
    name: 'Super Ipad',
    price: 549.99,
    sku: ProductSKU.IPD,
  },
  [ProductSKU.MBP]: {
    name: 'MacBook Pro',
    price: 1399.99,
    sku: ProductSKU.MBP,
  },
  [ProductSKU.VGA]: {
    name: 'VGA adapter',
    price: 30.0,
    sku: ProductSKU.VGA,
  },
};
