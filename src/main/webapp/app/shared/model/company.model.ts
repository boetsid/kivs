import { IUser } from 'app/core/user/user.model';

export interface ICompany {
  id?: number;
  companyId?: string;
  companyCode?: string;
  companyName?: string;
  address?: string;
  contactPerson?: string;
  phoneNumber?: string;
  active?: boolean;
  companyId?: IUser;
}

export class Company implements ICompany {
  constructor(
    public id?: number,
    public companyId?: string,
    public companyCode?: string,
    public companyName?: string,
    public address?: string,
    public contactPerson?: string,
    public phoneNumber?: string,
    public active?: boolean,
    public companyId?: IUser
  ) {
    this.active = this.active || false;
  }
}
