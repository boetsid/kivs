import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.KivsCompanyModule)
      },
      {
        path: 'user-1',
        loadChildren: () => import('./user-1/user-1.module').then(m => m.KivsUser1Module)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class KivsEntityModule {}
