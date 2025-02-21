import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from "./components/nabvar/nabvar.component";
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NabvarComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front_Tecser';
}
