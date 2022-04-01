import { OfferType, ProductSKU } from '../enums';
import { bulkDiscount, discountOnXForYDeal } from './offers';
import { products } from './product';
import { PricingRule } from './pricingRule';

export class Checkout {
  private pricingRules: PricingRule;
  private items: Map<ProductSKU, number>;

  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.items = new Map<ProductSKU, number>();
  }

  scan(sku: ProductSKU) {
    if (this.items.get(sku)) {
      this.items.set(sku, this.items.get(sku) + 1);
    } else {
      this.items.set(sku, 1);
    }
  }

  total(): number {
    let total: number = 0;
    this.items.forEach((noOfitems, sku) => {
      // Add total price for items
      total += products[sku].price * noOfitems;

      // Subract discount amount from total
      total -= this.pricingRules.getDiscountOnItem(sku, noOfitems);
    });
    return parseFloat(total.toFixed(2));
  }
}
