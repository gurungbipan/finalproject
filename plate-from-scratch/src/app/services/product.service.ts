import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:9090/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
    GetProductFromDb(): Observable<Product[]> {
      return this.http.get<Product[]>(apiUrl);
    }
    // getAllProductDetails():Observable<Product[]> {
    //   return this.httpClient.get<Product[]>("http://localhost:9090/product/productFromDb");
    // }


    // *****************************lines added:3**********************************
    getAllProductDetails():Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:9090/products");
    }
  
    storeProductDetailsInDb(prodRef): Observable<any> {
     return this.http.post("http://localhost:9090/products/storeProduct", prodRef);
  
    }
  
    deleteProductById(prodId):Observable<any>{
    return this.http.delete("http://localhost:9090/products/deleteProductById/"+prodId);
    }
  
    updateProductDetailsFromDb(prodRef):Observable<any> {
      return this.http.put("http://localhost:9090/products/updateProduct",prodRef);
    }
  }
  