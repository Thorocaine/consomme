import { Reducer } from './Reducer';

// tslint:disable
function consume<TIn, TOut>(arg1: Reducer<TIn, TOut>): (p: TOut[], c: TIn) => TOut[];
// prettier-ignore
function consume<TIn, T1, TOut>(arg1: Reducer<TIn, T1>,arg2: Reducer<T1, TOut>): (p: TOut[], c: TIn)=> TOut[];
// prettier-ignore
function consume<TIn, T1, T2, TOut>(arg1: Reducer<TIn, T1>,arg2: Reducer<T1, T2>, arg3: Reducer<T2, TOut>): (p: TOut[], c: TIn)=> TOut[];
// tslint:enable

function consume(...args: Array<Reducer<any, any>>) {
  return (previous: any[], current: any, index: number) => {
    let accumulator: any;
    for (const arg of args) {
      const value = accumulator || current;
      const result = arg(value);
      if (result.value === undefined) break;
      accumulator = result.value;
    }

    return accumulator ? [...previous, accumulator] : previous;
  };
}

export default consume;
