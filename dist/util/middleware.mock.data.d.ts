import { Action, RequestObj } from '../config/interfaces';
declare type NextFn = () => RequestObj;
declare const _default: ((req: RequestObj, action: Action, next: NextFn) => void)[];
export default _default;
