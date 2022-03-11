import { StepOptions } from '../auth/interfaces';
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
declare abstract class FRAuth {
  /**
   * Requests the next step in the authentication tree.
   *
   * @param previousStep The previous step with its callback values populated
   * @param options Configuration overrides
   * @return The next step in the authentication tree
   */
  static next(
    previousStep?: FRStep,
    options?: StepOptions,
  ): Promise<FRStep | FRLoginSuccess | FRLoginFailure>;
}
export default FRAuth;
