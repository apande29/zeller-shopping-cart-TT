import { Offers } from '../types';
import { OfferType, ProductSKU } from '../enums';
import { bulkDiscount, discountOnXForYDeal } from './offers';

export class PricingRule {
  private pricingRules: Map<ProductSKU, Offers[]>;
  constructor() {
    this.pricingRules = new Map<ProductSKU, Offers[]>();

    this.pricingRules.set(ProductSKU.ATV, [
      {
        offerType: OfferType.xForY,
        xForYDeal: {
          itemToPayFor: 2,
          itemToPurchase: 3,
        },
      },
    ]);

    this.pricingRules.set(ProductSKU.IPD, [
      {
        offerType: OfferType.bulk,
        bulkDiscount: {
          discountAmount: 499.99,
          minimunItems: 4,
        },
      },
    ]);
  }

  getDiscountOnItem(sku: ProductSKU, noOfitems: number): number {
    let totalDiscount = 0;

    let offers = this.pricingRules.get(sku);
    if (offers) {
      offers.forEach((rule) => {
        switch (rule.offerType) {
          case OfferType.bulk: {
            totalDiscount += bulkDiscount(sku, noOfitems, rule.bulkDiscount);
            break;
          }
          case OfferType.xForY: {
            totalDiscount += discountOnXForYDeal(
              sku,
              noOfitems,
              rule.xForYDeal,
            );
            break;
          }
        }
      });
    }

    return totalDiscount;
  }
}
