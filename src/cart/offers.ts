import { ProductSKU } from '../enums';
import { BulkDiscount, ProductInfo, XForYDeal } from '../types';
import { products } from './product';

export const discountOnXForYDeal = (
  sku: ProductSKU,
  noOfitems: number,
  deal: XForYDeal,
): number => {
  let totalDiscount = 0;
  if (deal.itemToPurchase <= noOfitems) {
    totalDiscount +=
      Math.trunc(noOfitems / deal.itemToPurchase) *
      (deal.itemToPurchase - deal.itemToPayFor) *
      products[sku].price;
  }
  return totalDiscount;
};

export const bulkDiscount = (
  sku: ProductSKU,
  noOfitems: number,
  bulkDiscount: BulkDiscount,
) => {
  let totalDiscount = 0;
  if (bulkDiscount.minimunItems < noOfitems) {
    totalDiscount +=
      noOfitems * (products[sku].price - bulkDiscount.discountAmount);
  }
  return totalDiscount;
};
