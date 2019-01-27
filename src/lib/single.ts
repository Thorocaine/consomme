import { Reducer } from './Reducer';

type Comparable = string | number;
type SinglePredicate<T> = (value: T) => Comparable;

function max<T extends Comparable>(): Reducer<T, T>;
function max<T>(predicate: SinglePredicate<T>): Reducer<T, T>;
function max<T>(predicate?: SinglePredicate<T>): Reducer<T, T> {
  if (!predicate) predicate = ((x: Comparable) => x) as any;
  return (value, accumulator) => ({
    type: 'single',
    value: !accumulator || predicate(value) >= predicate(accumulator) ? value : accumulator
  });
}

function min<T extends Comparable>(): Reducer<T, T>;
function min<T>(predicate: SinglePredicate<T>): Reducer<T, T>;
function min<T>(predicate?: SinglePredicate<T>): Reducer<T, T> {
  if (!predicate) predicate = ((x: Comparable) => x) as any;
  return (value, accumulator) => ({
    type: 'single',
    value: !accumulator || predicate(value) <= predicate(accumulator) ? value : accumulator
  });
}

export { max, min };
