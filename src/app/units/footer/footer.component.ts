import { Component } from '@angular/core';
import { ContactusComponent } from '../../pages/contactus/contactus.component';
import { DepartmentComponent } from '../../pages/department/department.component';
import { ServicesComponent } from '../../pages/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactusComponent,DepartmentComponent,ServicesComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
