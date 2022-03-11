/*
 * @forgerock/javascript-sdk
 *
 * index.ts
 *
 * Copyright (c) 2020 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Auth from '../auth/index';
import FRLoginFailure from './fr-login-failure';
import FRLoginSuccess from './fr-login-success';
import FRStep from './fr-step';
/**
 * Provides access to the OpenAM authentication tree API.
 *
 * Call `FRAuth.next()` recursively.  At each step, check for session token or error, otherwise
 * populate the step's callbacks and call `next()` again.
 *
 * Example:
 *
 * ```js
 * async function nextStep(previousStep) {
 *   const thisStep = await FRAuth.next(previousStep);
 *
 *   switch (thisStep.type) {
 *     case StepType.LoginSuccess:
 *       const token = thisStep.getSessionToken();
 *       break;
 *     case StepType.LoginFailure:
 *       const detail = thisStep.getDetail();
 *       break;
 *     case StepType.Step:
 *       // Populate `thisStep` callbacks here, and then continue
 *       thisStep.setInputValue('foo');
 *       nextStep(thisStep);
 *       break;
 *   }
 * }
 * ```
 */
var FRAuth = /** @class */ (function () {
    function FRAuth() {
    }
    /**
     * Requests the next step in the authentication tree.
     *
     * @param previousStep The previous step with its callback values populated
     * @param options Configuration overrides
     * @return The next step in the authentication tree
     */
    FRAuth.next = function (previousStep, options) {
        return __awaiter(this, void 0, void 0, function () {
            var nextPayload, callbackFactory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.next(previousStep ? previousStep.payload : undefined, options)];
                    case 1:
                        nextPayload = _a.sent();
                        if (nextPayload.authId) {
                            callbackFactory = options ? options.callbackFactory : undefined;
                            return [2 /*return*/, new FRStep(nextPayload, callbackFactory)];
                        }
                        if (!nextPayload.authId && nextPayload.ok) {
                            // If there's no authId, and the response is OK, tree is complete
                            return [2 /*return*/, new FRLoginSuccess(nextPayload)];
                        }
                        // If there's no authId, and the response is no OK, tree has failure
                        return [2 /*return*/, new FRLoginFailure(nextPayload)];
                }
            });
        });
    };
    return FRAuth;
}());
export default FRAuth;
//# sourceMappingURL=index.js.map