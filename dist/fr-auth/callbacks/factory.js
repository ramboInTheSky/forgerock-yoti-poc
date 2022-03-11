/*
 * @forgerock/javascript-sdk
 *
 * factory.ts
 *
 * Copyright (c) 2020 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */
import FRCallback from '.';
import { CallbackType } from '../../auth/enums';
import AttributeInputCallback from './attribute-input-callback';
import ChoiceCallback from './choice-callback';
import ConfirmationCallback from './confirmation-callback';
import DeviceProfileCallback from './device-profile-callback';
import HiddenValueCallback from './hidden-value-callback';
import KbaCreateCallback from './kba-create-callback';
import MetadataCallback from './metadata-callback';
import NameCallback from './name-callback';
import PasswordCallback from './password-callback';
import PollingWaitCallback from './polling-wait-callback';
import ReCaptchaCallback from './recaptcha-callback';
import SuspendedTextOutputCallback from './suspended-text-output-callback';
import TermsAndConditionsCallback from './terms-and-conditions-callback';
import TextOutputCallback from './text-output-callback';
import ValidatedCreatePasswordCallback from './validated-create-password-callback';
import ValidatedCreateUsernameCallback from './validated-create-username-callback';
/**
 * @hidden
 */
function createCallback(callback) {
    switch (callback.type) {
        case CallbackType.BooleanAttributeInputCallback:
            return new AttributeInputCallback(callback);
        case CallbackType.ChoiceCallback:
            return new ChoiceCallback(callback);
        case CallbackType.ConfirmationCallback:
            return new ConfirmationCallback(callback);
        case CallbackType.DeviceProfileCallback:
            return new DeviceProfileCallback(callback);
        case CallbackType.HiddenValueCallback:
            return new HiddenValueCallback(callback);
        case CallbackType.KbaCreateCallback:
            return new KbaCreateCallback(callback);
        case CallbackType.MetadataCallback:
            return new MetadataCallback(callback);
        case CallbackType.NameCallback:
            return new NameCallback(callback);
        case CallbackType.NumberAttributeInputCallback:
            return new AttributeInputCallback(callback);
        case CallbackType.PasswordCallback:
            return new PasswordCallback(callback);
        case CallbackType.PollingWaitCallback:
            return new PollingWaitCallback(callback);
        case CallbackType.ReCaptchaCallback:
            return new ReCaptchaCallback(callback);
        case CallbackType.StringAttributeInputCallback:
            return new AttributeInputCallback(callback);
        case CallbackType.SuspendedTextOutputCallback:
            return new SuspendedTextOutputCallback(callback);
        case CallbackType.TermsAndConditionsCallback:
            return new TermsAndConditionsCallback(callback);
        case CallbackType.TextOutputCallback:
            return new TextOutputCallback(callback);
        case CallbackType.ValidatedCreatePasswordCallback:
            return new ValidatedCreatePasswordCallback(callback);
        case CallbackType.ValidatedCreateUsernameCallback:
            return new ValidatedCreateUsernameCallback(callback);
        default:
            return new FRCallback(callback);
    }
}
export default createCallback;
//# sourceMappingURL=factory.js.map