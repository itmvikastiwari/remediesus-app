import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'address-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.address.home.title' },
        loadChildren: () => import('./address-my-suffix/address-my-suffix.module').then(m => m.AddressMySuffixModule),
      },
      {
        path: 'customer-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.customer.home.title' },
        loadChildren: () => import('./customer-my-suffix/customer-my-suffix.module').then(m => m.CustomerMySuffixModule),
      },
      {
        path: 'tour-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.tour.home.title' },
        loadChildren: () => import('./tour-my-suffix/tour-my-suffix.module').then(m => m.TourMySuffixModule),
      },
      {
        path: 'plan-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.plan.home.title' },
        loadChildren: () => import('./plan-my-suffix/plan-my-suffix.module').then(m => m.PlanMySuffixModule),
      },
      {
        path: 'plan-day-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.planDay.home.title' },
        loadChildren: () => import('./plan-day-my-suffix/plan-day-my-suffix.module').then(m => m.PlanDayMySuffixModule),
      },
      {
        path: 'plan-day-execution-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.planDayExecution.home.title' },
        loadChildren: () =>
          import('./plan-day-execution-my-suffix/plan-day-execution-my-suffix.module').then(m => m.PlanDayExecutionMySuffixModule),
      },
      {
        path: 'plan-day-execution-place-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.planDayExecutionPlace.home.title' },
        loadChildren: () =>
          import('./plan-day-execution-place-my-suffix/plan-day-execution-place-my-suffix.module').then(
            m => m.PlanDayExecutionPlaceMySuffixModule
          ),
      },
      {
        path: 'user-leave-logs-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.userLeaveLogs.home.title' },
        loadChildren: () => import('./user-leave-logs-my-suffix/user-leave-logs-my-suffix.module').then(m => m.UserLeaveLogsMySuffixModule),
      },
      {
        path: 'user-leave-my-suffix',
        data: { pageTitle: 'bengalRemediesApp.userLeave.home.title' },
        loadChildren: () => import('./user-leave-my-suffix/user-leave-my-suffix.module').then(m => m.UserLeaveMySuffixModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
