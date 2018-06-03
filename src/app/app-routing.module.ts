import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/todo", pathMatch: "full" },
  { path: "todo", loadChildren: './todos/todos.module#TodosModule' },
  { path : "exception", loadChildren: './extensions/extensions.module#ExtensionsModule'},
  { path: "**", redirectTo: "/exception" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
