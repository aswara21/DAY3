import { Component } from '@angular/core';
import { CarouselComponent } from "../../units/carousel/carousel.component";

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
