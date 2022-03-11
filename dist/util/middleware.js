/*
 * @forgerock/javascript-sdk
 *
 * middleware.ts
 *
 * Copyright (c) 2020 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */
import Config from '../config';
/**
 * @function middlewareWrapper - A "Node" and "Redux" style middleware that is called just before
 * the request is made from the SDK. This allows you access to the request for modification.
 * @param request - A request object container the URL and the Request Init object
 * @param type - A "Redux" style type that contains the serialized action
 * @param payload - The payload of the action that can contain metadata
 */
// eslint-disable-next-line
function middlewareWrapper(request, type, payload) {
    var middleware = Config.get().middleware;
    if (!Array.isArray(middleware)) {
        return request;
    }
    // no mutation and no reassignment
    var action = Object.freeze({ type: type, payload: payload });
    // Copy middleware so the `shift` below doesn't mutate source
    var mwareCopy = middleware.map(function (fn) { return fn; });
    function iterator() {
        var next = mwareCopy.shift();
        next && next(request, action, iterator);
        return request;
    }
    return iterator();
}
export default middlewareWrapper;
//# sourceMappingURL=middleware.js.map