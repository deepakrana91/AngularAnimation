import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { SearchDataComponent } from './search-data/search-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'users', component:UserDataComponent},
    {path:'search', component:SearchDataComponent, canActivate:[AuthGuard]},
    {path:'not-found',component:HomeComponent},
    {path:'**',redirectTo:'/not-found',pathMatch:'full'}
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],

    exports:[RouterModule]
})
export class AppRoutingModule {}