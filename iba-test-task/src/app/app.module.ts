import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppMainMenuComponent } from "./app-main-menu/app-main-menu.component";
import { AppEmployeeComponent } from "./app-employee/app-employee.component";
import { NewServiceService } from "./new-service.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AppMainMenuComponent, AppEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
