import { PricingRule } from './cart/pricingRule';
import { ProductSKU } from './enums/';
import { Checkout } from './cart/checkout';

const checkout = new Checkout(new PricingRule());

checkout.scan(ProductSKU.ATV);
checkout.scan(ProductSKU.ATV);
checkout.scan(ProductSKU.ATV);

checkout.total();
