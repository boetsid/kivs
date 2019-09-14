import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICompany, Company } from 'app/shared/model/company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'jhi-company-update',
  templateUrl: './company-update.component.html'
})
export class CompanyUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    companyCode: [],
    companyName: [],
    address: [],
    contactPerson: [],
    phoneNumber: [],
    active: []
  });

  constructor(protected companyService: CompanyService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ company }) => {
      this.updateForm(company);
    });
  }

  updateForm(company: ICompany) {
    this.editForm.patchValue({
      id: company.id,
      companyCode: company.companyCode,
      companyName: company.companyName,
      address: company.address,
      contactPerson: company.contactPerson,
      phoneNumber: company.phoneNumber,
      active: company.active
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const company = this.createFromForm();
    if (company.id !== undefined) {
      this.subscribeToSaveResponse(this.companyService.update(company));
    } else {
      this.subscribeToSaveResponse(this.companyService.create(company));
    }
  }

  private createFromForm(): ICompany {
    return {
      ...new Company(),
      id: this.editForm.get(['id']).value,
      companyCode: this.editForm.get(['companyCode']).value,
      companyName: this.editForm.get(['companyName']).value,
      address: this.editForm.get(['address']).value,
      contactPerson: this.editForm.get(['contactPerson']).value,
      phoneNumber: this.editForm.get(['phoneNumber']).value,
      active: this.editForm.get(['active']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICompany>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
