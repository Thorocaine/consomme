import { Reducer, ReducerResult } from './Reducer';

export const select = <TIn, TOut>(predicate: (value: TIn) => TOut) => (value: TIn): ReducerResult<TOut> => ({
  type: 'select',
  value: predicate(value)
});
