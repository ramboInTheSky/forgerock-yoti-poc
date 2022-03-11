import { Tokens } from '../shared/interfaces';
/**
 * Provides wrapper for tokens with localStorage.
 */
declare abstract class LocalStorageWrapper {
  /**
   * Retrieve tokens.
   */
  static get(clientId: string): Promise<Tokens>;
  /**
   * Saves tokens.
   */
  static set(clientId: string, tokens: Tokens): Promise<void>;
  /**
   * Removes stored tokens.
   */
  static remove(clientId: string): Promise<void>;
}
export default LocalStorageWrapper;
