import assert from 'assert';
import { ProductSKU } from '../src/enums';
import { Checkout } from '../src/cart/checkout';
import { PricingRule } from '../src/cart/pricingRule';

describe('Checkout test cases', () => {
  let checkout = null;

  beforeEach(() => {
    checkout = new Checkout(new PricingRule());
  });

  test('Should return 0 if no items are present', () => {
    assert.equal(checkout.total(), 0);
  });

  test('Should return price of 2 apple tvs if bought 3', () => {
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    assert.equal(checkout.total(), 219);
  });

  test('Should return price of 3 apple tvs if bought 4', () => {
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    assert.equal(checkout.total(), 328.5);
  });

  test('Should return price of 4 apple tvs if bought 6', () => {
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    assert.equal(checkout.total(), 438);
  });

  test('Should return price of 2 apple tvs if bought 2', () => {
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    assert.equal(checkout.total(), 219);
  });

  test('Should reduce price of Super Ipad if bought more than 4', () => {
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    assert.equal(checkout.total(), 2499.95);
  });

  test('Should not reduce price of Super Ipad if bought less than or equal to 4', () => {
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    assert.equal(checkout.total(), 2199.96);
  });

  test('Should reduce price of Super Ipad if bought 4 and Should return price of 2 apple tvs if bought 3', () => {
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.ATV);
    assert.equal(checkout.total(), 2718.95);
  });

  test('Should not apply discount on the Mac probook', () => {
    checkout.scan(ProductSKU.MBP);
    assert.equal(checkout.total(), 1399.99);
  });

  test('Should not apply discount on the VGA Adapter', () => {
    checkout.scan(ProductSKU.VGA);
    assert.equal(checkout.total(), 30.0);
  });

  test('Should return sum of all the products brought', () => {
    checkout.scan(ProductSKU.ATV);
    checkout.scan(ProductSKU.IPD);
    checkout.scan(ProductSKU.MBP);
    checkout.scan(ProductSKU.VGA);
    assert.equal(checkout.total(), 2089.48);
  });
});
