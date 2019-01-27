type ReductionTypes = 'select' | 'where';

export interface ReducerResult<TOut> {
  type: ReductionTypes;
  value: TOut;
}

export type Reducer<TIn, TOut> = (inputValue: TIn) => ReducerResult<TOut>;
