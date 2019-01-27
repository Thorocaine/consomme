import { Reducer } from './Reducer';

export const select = <TIn extends any[], TOut extends any[]>(predicate: Reducer<TIn, TOut>) => predicate;
