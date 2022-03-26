import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  productList: any = []

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit() {
   this.getProducts()
  }

  dataForm = this.fb.group({
    title: '',
    image: '',
  })

  getProducts() {
    this.productService.getProducts()
      .subscribe(res => {
        this.productList = res
        console.log(res)
      })
  }



  addLike(event: Event, id: number) {
    event.preventDefault();

    this.productService.addLike(id).subscribe(res => {
      this.productList = res
    })
  }
}
