import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IUser1 } from 'app/shared/model/user-1.model';
import { AccountService } from 'app/core/auth/account.service';
import { User1Service } from './user-1.service';

@Component({
  selector: 'jhi-user-1',
  templateUrl: './user-1.component.html'
})
export class User1Component implements OnInit, OnDestroy {
  user1S: IUser1[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected user1Service: User1Service,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.user1Service
      .query()
      .pipe(
        filter((res: HttpResponse<IUser1[]>) => res.ok),
        map((res: HttpResponse<IUser1[]>) => res.body)
      )
      .subscribe(
        (res: IUser1[]) => {
          this.user1S = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInUser1S();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IUser1) {
    return item.id;
  }

  registerChangeInUser1S() {
    this.eventSubscriber = this.eventManager.subscribe('user1ListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
