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

  addNewProduct(event: Event) {
    event.preventDefault();

    this.productService.addProduct({
      title: this.dataForm.get('title')!.value,
      image: this.dataForm.get('image')!.value,
    }).subscribe(res => {
      this.productList = res
    })

    this.dataForm.reset()
  }

  removeProduct(event: Event, id: number) {
    event.preventDefault();

    this.productService.removeProduct(id).subscribe(res => {
      this.productList = res
    })
  }
}
