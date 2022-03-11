import { RequestObj } from '../config/interfaces';
import { ActionTypes } from '../config/enums';
/**
 * @function middlewareWrapper - A "Node" and "Redux" style middleware that is called just before
 * the request is made from the SDK. This allows you access to the request for modification.
 * @param request - A request object container the URL and the Request Init object
 * @param type - A "Redux" style type that contains the serialized action
 * @param payload - The payload of the action that can contain metadata
 */
declare function middlewareWrapper(
  request: RequestObj,
  type: ActionTypes,
  payload?: any,
): RequestObj;
export default middlewareWrapper;
