import consumme from './consumme';
import { select } from './select';
import where from './where';

const numberArray = [1, 2, 3, 4, 5];

it('should return all', () => {
  const result = numberArray.reduce(consumme(where(_ => true)), []);
  expect(result).toEqual(numberArray);
});

it('should return none', () => {
  const result = numberArray.reduce(consumme(where(_ => false)), []);
  expect(result).toHaveLength(0);
});

it('should return even', () => {
  const result = numberArray.reduce(consumme(where(x => x % 2 === 0)), []);
  expect(result).toEqual([2, 4]);
});

it('should return odd', () => {
  const result = numberArray.reduce(consumme(where(x => x % 2 !== 0)), []);
  expect(result).toEqual([1, 3, 5]);
});

it('should return odd and double', () => {
  const result = numberArray.reduce(consumme(where(x => x % 2 !== 0), select(x => x * 2)), []);
  expect(result).toEqual([2, 6, 10]);
});
