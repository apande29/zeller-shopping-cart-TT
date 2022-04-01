import { OfferType } from 'enums';

export interface BulkDiscount {
  discountAmount: number;
  minimunItems: number;
}

export interface XForYDeal {
  itemToPurchase: number;
  itemToPayFor: number;
}

export interface Offers {
  offerType: OfferType;
  bulkDiscount?: BulkDiscount;
  xForYDeal?: XForYDeal;
}
