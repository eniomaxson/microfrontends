export interface LoginRequestModel {
  username: string;
  password: string;
  returnURL?: string;
}

export interface UserInfoResponseModel {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
}

export interface JwtTokenResponseModel {
  username: string;
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: 'Bearer';
  id_token: string;
  session_state: string;
}
