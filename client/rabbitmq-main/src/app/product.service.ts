import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3001/api/products/'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url)
  }

  addLike(id: any) {
    return this.http.post(this.url + id + '/like', {})
  }

  removeProduct(id: number) {
    return this.http.delete(this.url+id)
  }
}
