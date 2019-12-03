import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private httpClient: HttpClient) { }

    public addProduct(product: Product): Observable<Product> {
        return this.httpClient.post<Product>("https://jsonplaceholder.typicode.com/posts", product);
    }
}
