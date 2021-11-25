import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: 'produit', pathMatch: 'full', redirectTo: 'produit/index'
  },
  {
    path: 'produit/index', component: IndexComponent
  },
  {
    path: 'produit/create', component: CreateComponent
  },
  {
    path: 'produit/:produitId/edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule {
}
