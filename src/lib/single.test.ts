import consumme from './consumme';
import { max, min } from './single';

const numberArray = [2, 4, 1, 5, 3];

it('should', () => expect(1).toEqual(1));

it('should return max', () => {
  const result = numberArray.reduce(consumme(max()), null);
  expect(result).toEqual(5);
});

it('should return min', () => {
  const result = numberArray.reduce(consumme(min()), null);
  expect(result).toEqual(1);
});
