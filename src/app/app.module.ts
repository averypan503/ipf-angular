import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsComponent } from './forms/forms.component';
import { TriggerRulesComponent } from './trigger-rules/trigger-rules.component';
import { NotificationRulesComponent } from './notification-rules/notification-rules.component';
import { AuditEventsComponent } from './audit-events/audit-events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormPreviewComponent } from './forms/form-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from '../app/forms/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FormInputComponent } from '../app/forms//input.component';
import { ResizeDirective } from './directive/resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FormsComponent,
    TriggerRulesComponent,
    NotificationRulesComponent,
    AuditEventsComponent,
    DashboardComponent,
    FormPreviewComponent,
    FormComponent,
    FormInputComponent,
    ResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
