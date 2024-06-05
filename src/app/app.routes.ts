import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { GridComponent } from './page/grid/grid.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
        loadChildren: ()=> import('./page/home/home.module').then(m=> m.HomeModule)
    },
    {
        path: 'grid',
        component: GridComponent,
        title: 'Grid Page',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                scrollPositionRestoration:'top',
                onSameUrlNavigation: 'reload',
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [RouterModule]
})

export class AppRouteModule{}