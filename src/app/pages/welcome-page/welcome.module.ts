import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";
import { WelcomePageComponent } from "../../pages/welcome-page/welcome-page.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BannerComponent } from "../../components/banner/banner.component";
import { WaitingComponent } from "../../components/waiting/waiting.component";

const routes: Routes = [{ path: "", component: WelcomePageComponent }];
@NgModule({
  declarations: [
    NavbarComponent,
    WelcomePageComponent,
    BannerComponent,
    WaitingComponent
  ],
  imports: [CommonModule, FlexLayoutModule, RouterModule.forChild(routes)]
})
export class WelcomeModule {}
