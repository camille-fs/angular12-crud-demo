import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {ProduitRoutingModule} from "./produit-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProduitModule {
}
