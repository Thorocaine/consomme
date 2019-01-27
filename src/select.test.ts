import consumme from './consumme';
import { select } from './select';

interface IPerson {
  name: string;
  surname: string;
}
const numberArray = [1, 2, 3, 4, 5];
const personArray = [{ name: 'David', surname: 'Peel' }, { name: 'Jon', surname: 'Michael' }];

it('should return itself', () => {
  const result = numberArray.reduce(consumme(select(x => x)), [] as number[]);
  expect(result).toEqual(numberArray);
});

it('should return doubles', () => {
  const result = numberArray.reduce(consumme(select(x => x * 2)), [] as number[]);
  expect(result).toEqual([2, 4, 6, 8, 10]);
});

it('should add one and doubles', () => {
  const result = numberArray.reduce(consumme(select(x => x + 1), select(x => x * 2)), [] as number[]);
  expect(result).toEqual([4, 6, 8, 10, 12]);
});

it('should add one and doubles minus one', () => {
  const result = numberArray.reduce(
    consumme(select(x => x + 1), select(x => x * 2), select(x => x - 1)),
    [] as number[]
  );
  expect(result).toEqual([3, 5, 7, 9, 11]);
});

it('should map person to name', () => {
  const result = personArray.reduce(consumme(select(x => `${x.name} ${x.surname}`)), [] as IPerson[]);
  expect(result).toEqual(['David Peel', 'Jon Michael']);
});

it('should return name length', () => {
  const result = personArray.reduce(
    consumme(select(x => `${x.name}${x.surname}`), select(x => x.length)),
    [] as IPerson[]
  );
  expect(result).toEqual([9, 10]);
});
