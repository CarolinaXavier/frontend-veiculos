import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosFormComponent } from './components/veiculos-form/veiculos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
        MatIconModule,
    MatCardModule,
  ],
  declarations: [VeiculosFormComponent,ConfirmDialogComponent],
  exports: [VeiculosFormComponent,ConfirmDialogComponent]
})
export class SharedModule { }
