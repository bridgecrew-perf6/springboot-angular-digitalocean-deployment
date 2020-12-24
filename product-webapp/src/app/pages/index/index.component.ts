import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {

  public product: Product;

  constructor(
    private route: Router,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.productService.getter();
  }

  ngAfterViewInit() {
    this.getAllProducts();
  }

  private getAllProducts(): any {
    this.productService.getAllProduct().subscribe((data) => {
      this.product = data;
    });
  }
}
