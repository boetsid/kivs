export interface ICompany {
  id?: number;
  companyCode?: string;
  companyName?: string;
  address?: string;
  contactPerson?: string;
  phoneNumber?: string;
  active?: boolean;
}

export class Company implements ICompany {
  constructor(
    public id?: number,
    public companyCode?: string,
    public companyName?: string,
    public address?: string,
    public contactPerson?: string,
    public phoneNumber?: string,
    public active?: boolean
  ) {
    this.active = this.active || false;
  }
}
