import { Reducer } from './Reducer';

// tslint:disable
function consume<TIn extends any[], TOut extends any[]>(arg1: Reducer<TIn, TOut>): (p: TOut, c: TIn[0]) => TOut;
// prettier-ignore
function consume<TIn extends any[], T1 extends any[], TOut extends any[]>
    (arg1: Reducer<TIn, T1>,arg2: Reducer<T1, TOut>): (p: TOut, c: TIn[0])
     => TOut;
// prettier-ignore
function consume<TIn extends any[], T1 extends any[], T2 extends any[], TOut extends any[]>
(arg1: Reducer<TIn, T1>,arg2: Reducer<T1, T2>, arg3: Reducer<T2, TOut>): (p: TOut, c: TIn[0])
 => TOut;
// tslint:enable
function consume(...args: Array<Reducer<any, any>>) {
  return (previous: any, current: any) => {
    let result: any;
    args.forEach(arg => {
      const newValue = arg(result || current);
      result = newValue;
    });
    return [...previous, result];
  };
}

export default consume;
