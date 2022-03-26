import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/api/products/'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url)
  }

  addProduct(data: any) {
    return this.http.post(this.url, data)
  }

  removeProduct(id: number) {
    return this.http.delete(this.url+id)
  }
}
