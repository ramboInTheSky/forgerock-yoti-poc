/**
 * Provides access to the current user's profile.
 */
declare abstract class UserManager {
  /**
   * Gets the current user's profile.
   */
  static getCurrentUser(): Promise<unknown>;
}
export default UserManager;
