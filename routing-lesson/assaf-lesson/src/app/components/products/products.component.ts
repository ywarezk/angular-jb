import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    public product: Product = new Product();

    constructor(private productsService: ProductsService) { }

    public addProduct(): void {
        this.productsService
            .addProduct(this.product)
            .subscribe(addedProduct => {
                alert("Product has been added! ID: " + addedProduct.id);
            }, err => alert(err.message));
    }

}
