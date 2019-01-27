import { sum } from './index';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

it('Does a jest thing', () => {
  expect(1).toEqual(2);
});
