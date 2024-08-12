// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { CardComponent } from './components/card/card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// bootstrap import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInput } from '@angular/material/input';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    CardComponent,
    NgbModule,
    NgScrollbarModule,
    NgbCollapseModule,
    BreadcrumbsComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatError,
  ],
  exports: [
    CommonModule,
    CardComponent,
    SpinnerComponent,
    NgbModule,
    NgScrollbarModule,
    NgbCollapseModule,
    BreadcrumbsComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatError,
  ]
})
export class SharedModule {}
