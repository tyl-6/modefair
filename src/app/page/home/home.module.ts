import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { NavigationMenuComponent } from "./components/navigation-menu/navigation-menu.component";
import { HomeRoute } from "./home.route";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./components/product/product.component";
import { ProductOrderPadComponent } from "./components/product-order-pad/product-order-pad.component";
import { ProductSelectionComponent } from "./components/product-selection/product-selection.component";
import { FormsModule } from "@angular/forms";

const DECLARATION: any[] =[
    HomeComponent,
    NavigationMenuComponent,
    ProductComponent,
    ProductOrderPadComponent,
    ProductSelectionComponent
];

const IMPORT: any[] =[
    HomeRoute,
    CommonModule,
    FormsModule
];

@NgModule({
    declarations: [...DECLARATION],
    imports: [...IMPORT],
    exports: []
})

export class HomeModule{}