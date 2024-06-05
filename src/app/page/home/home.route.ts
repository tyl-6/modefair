import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductOrderPadComponent } from "./components/product-order-pad/product-order-pad.component";
import { ProductSelectionComponent } from "./components/product-selection/product-selection.component";


const routes: Routes = [
    {
        path: '',
        component: ProductSelectionComponent
    },
    {
        path: 'buy-mac',
        component: ProductSelectionComponent,
        data: {
            nav: {
                link:'buy-mac'
            }
        }
    },
    {   
        path: 'order/:screensize/:color/:processor',
        component: ProductOrderPadComponent,
        data: {
            nav: {
                link: 'order'
            }
        }
    }
    
    
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoute{}