type ReductionTypes = 'select' | 'single' | 'where';

export interface ReducerResult<TOut> {
  type: ReductionTypes;
  value: TOut;
}

export type Reducer<TIn, TOut> = (inputValue: TIn, accumulation: TOut | null) => ReducerResult<TOut>;
