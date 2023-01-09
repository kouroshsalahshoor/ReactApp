export interface UserModel {
  userName: string;
  token: string;
  roles: string[];
}

export interface LoginModel {
  userName: string;
  password: string;
}
