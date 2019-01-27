import { ReducerResult } from './Reducer';

const where = <T>(predicate: (value: T) => boolean) => (value: T): ReducerResult<T | undefined> => ({
  type: 'where',
  value: value && predicate(value) ? value : undefined
});

export default where;
