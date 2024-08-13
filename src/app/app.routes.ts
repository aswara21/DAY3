import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"department",component:DepartmentComponent},
    {path:"services",component:ServicesComponent},
];