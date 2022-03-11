import { ConfigOptions } from '../config/index';
import { ResponseType } from './enums';
import { GetAuthorizationUrlOptions, GetOAuth2TokensOptions, OAuth2Tokens } from './interfaces';
declare const allowedErrors: {
  AuthenticationConsentRequired: string;
  AuthorizationTimeout: string;
  FailedToFetch: string;
  NetworkError: string;
  CORSError: string;
};
/**
 * OAuth 2.0 client.
 */
declare abstract class OAuth2Client {
  static createAuthorizeUrl(options: GetAuthorizationUrlOptions): Promise<string>;
  /**
   * DEPRECATED
   * Calls the authorize URL with an iframe. If successful,
   * it returns the callback URL with authentication code,
   * optionally using PKCE.
   */
  static getAuthorizeUrl(options: GetAuthorizationUrlOptions): Promise<string>;
  /**
   * Exchanges an authorization code for OAuth tokens.
   */
  static getOAuth2Tokens(options: GetOAuth2TokensOptions): Promise<OAuth2Tokens>;
  /**
   * Gets OIDC user information.
   */
  static getUserInfo(options?: ConfigOptions): Promise<unknown>;
  /**
   * Invokes the OIDC end session endpoint.
   */
  static endSession(options?: ConfigOptions): Promise<Response>;
  /**
   * Immediately revokes the stored access token.
   */
  static revokeToken(options?: ConfigOptions): Promise<Response>;
  private static request;
  private static containsAuthCode;
  private static containsAuthError;
  private static getBody;
  private static parseError;
  private static getUrl;
}
export default OAuth2Client;
export {
  allowedErrors,
  GetAuthorizationUrlOptions,
  GetOAuth2TokensOptions,
  OAuth2Tokens,
  ResponseType,
};
