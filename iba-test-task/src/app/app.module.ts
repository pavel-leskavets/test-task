import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppMainMenuComponent } from "./app-main-menu/app-main-menu.component";
import { AppEmployeeComponent } from "./app-employee/app-employee.component";
import { NewServiceService } from "./new-service.service";
import { HttpClientModule } from "@angular/common/http";
import { AppTableComponent } from "./app-table/app-table.component";
import { AppFullDescriptionComponent } from "./app-full-description/app-full-description.component";
import { AppNavigationMenuComponent } from "./app-navigation-menu/app-navigation-menu.component";

const appRoutes: Routes = [
  { path: "", component: AppMainMenuComponent },
  { path: "employee", component: AppEmployeeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AppMainMenuComponent,
    AppEmployeeComponent,
    AppTableComponent,
    AppFullDescriptionComponent,
    AppNavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
