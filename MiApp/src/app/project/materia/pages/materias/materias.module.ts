import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriasPageRoutingModule } from './materias-routing.module';

import { RouterModule } from '@angular/router';

import { MateriasPage } from './materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     RouterModule.forChild([
      { path: '', component: MateriasPage }
    ]),
    MateriasPageRoutingModule
  ],
  declarations: [MateriasPage]
})
export class MateriasPageModule {}
