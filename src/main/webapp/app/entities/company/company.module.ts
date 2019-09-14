import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KivsSharedModule } from 'app/shared/shared.module';
import { CompanyComponent } from './company.component';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyUpdateComponent } from './company-update.component';
import { CompanyDeletePopupComponent, CompanyDeleteDialogComponent } from './company-delete-dialog.component';
import { companyRoute, companyPopupRoute } from './company.route';

const ENTITY_STATES = [...companyRoute, ...companyPopupRoute];

@NgModule({
  imports: [KivsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CompanyComponent,
    CompanyDetailComponent,
    CompanyUpdateComponent,
    CompanyDeleteDialogComponent,
    CompanyDeletePopupComponent
  ],
  entryComponents: [CompanyComponent, CompanyUpdateComponent, CompanyDeleteDialogComponent, CompanyDeletePopupComponent]
})
export class KivsCompanyModule {}
