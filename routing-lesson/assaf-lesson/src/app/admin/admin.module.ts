import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
    {
        path: "", component: AdminComponent, children: [
            { path: "insert", component: InsertComponent },
            { path: "remove", component: RemoveComponent },
            { path: "", redirectTo: "insert" }
        ]
    }
];

@NgModule({
    declarations: [AdminComponent, InsertComponent, RemoveComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes) // Routing-שלב אותו במנגון ה
    ]
})
export class AdminModule { }
