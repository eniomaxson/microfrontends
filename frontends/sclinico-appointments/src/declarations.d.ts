declare module '@spms/shared' {
  export interface UserInfo {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    name: string;
    preferred_username: string;
  }

  export interface JwtToken {
    username: string;
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: 'Bearer';
    id_token: string;
    session_state: string;
  }

  export interface AuthStorage {
    token: JwtToken;
    userInfo: UserInfo;
  }

  export function setAuthData(data: AuthStorage): void;
  export function isAuthenticated(): Boolean;
  export function getUserInfo(): UserInfo;
  export function getGivenName(): string;
  export function getAuthToken(): string;
}
