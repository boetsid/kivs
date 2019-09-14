export interface IUser1 {
  id?: number;
  userName?: string;
  password?: string;
  description?: string;
}

export class User1 implements IUser1 {
  constructor(public id?: number, public userName?: string, public password?: string, public description?: string) {}
}
