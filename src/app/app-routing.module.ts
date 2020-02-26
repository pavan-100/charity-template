import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome-page/welcome.module").then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
