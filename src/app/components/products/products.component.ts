import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { IProductList } from '../../interfaces/product.interface';
import { withFetch } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ withFetch],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList:IProductList[] = [];
  constructor(private productService: ProductsService){}

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (result)=>{
        this.productList = result.product;
        console.log(this.productList );

      },
      error: (err)=>{
        console.log({err});

      }
    })
  }

  crearProduct(){
    console.log("crear producto");

  }

}
