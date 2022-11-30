const AUTH_STORAGE_KEY = "shared.accounts";

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
  token_type: "Bearer";
  id_token: string;
  session_state: string;
}

export interface AuthStorage {
  token: JwtToken;
  userInfo: UserInfo;
}

export function isAuthenticated(): Boolean {
  let stored = sessionStorage.get(AUTH_STORAGE_KEY);
  return stored != undefined;
}

export function getAuthToken(): string {
  let auth = JSON.parse(sessionStorage.get(AUTH_STORAGE_KEY)) as AuthStorage;
  return auth?.token?.access_token;
}

export function getUserInfo(): UserInfo {
  let stored = JSON.parse(sessionStorage.getItem(AUTH_STORAGE_KEY)) as AuthStorage;
  return stored?.userInfo;
}

export function getGivenName(): string {
  return getUserInfo()?.given_name;
}

export function setAuthData(data: AuthStorage): void {
  sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
}

export function getAuthData(): AuthStorage {
  return JSON.parse(sessionStorage.getItem(AUTH_STORAGE_KEY)) as AuthStorage;
}
