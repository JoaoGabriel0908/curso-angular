import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { TwoWayBindingsComponent } from "./components/two-way-bindings/two-way-bindings.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'appParent', component: ParentDataComponent,},
  {path: 'appDirectives', component: DirectivesComponent},
  {path: 'appIfRender', component: IfRenderComponent},
  {path: 'two', component: TwoWayBindingsComponent},
  {path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  declarations: [],
  // Rotas começando na raiz
  imports: [RouterModule.forRoot(routes)],
  // Exportando o Routes...
  exports: [RouterModule],
})

export class AppRoutingModule {}
