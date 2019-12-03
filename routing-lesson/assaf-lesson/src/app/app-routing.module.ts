import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: "about", component: AboutComponent  },
    { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
    // { path: "", component: HomeComponent }
    { path: "", redirectTo: "/home", pathMatch: "full" }, // full = exact
    { path: "**", component: PageNotFoundComponent }, /* !!חובה אחרון */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
