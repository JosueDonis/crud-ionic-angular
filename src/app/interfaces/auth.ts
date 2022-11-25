export interface ILogin {
  username: string | undefined;
  password: string | undefined;
}

export interface IAuth {
  birthday: string | Date;
  createdAt: string | Date;
  email: string;
  id: string;
  image: string;
  name: string;
}
