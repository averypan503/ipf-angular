import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsComponent } from './forms/forms.component';
import { TriggerRulesComponent } from './trigger-rules/trigger-rules.component';
import { NotificationRulesComponent } from './notification-rules/notification-rules.component';
import { AuditEventsComponent } from './audit-events/audit-events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './forms/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'feedback', pathMatch: 'full'},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'form/:id', component: FormComponent},
  {path: 'trigger-rules', component: TriggerRulesComponent},
  {path: 'notification-rules', component: NotificationRulesComponent},
  {path: 'audit-events', component: AuditEventsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'feedback', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
