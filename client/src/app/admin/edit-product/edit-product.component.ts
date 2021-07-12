import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ShopService } from '../../shop/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFormValues } from '../../shared/models/product';
import { IBrand } from 'src/app/shared/models/brand';
import { IType } from 'src/app/shared/models/productType';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: ProductFormValues;
  brands: IBrand[];
  types: IType[];

  constructor(private adminService: AdminService, private shopService: ShopService, private route: ActivatedRoute, private router: Router) {
    this.product = new ProductFormValues();
  }

  ngOnInit(): void {
    const brands = this.shopService.getBrands();
    const types = this.shopService.getTypes();

    forkJoin([types, brands]).subscribe(results => {
      this.brands = results[0];
      this.types = results[1];
    }, error => {
      console.log(error);
    }, () => {
      if (this.route.snapshot.url[0].path === 'edit') {
        this.loadProduct();
      }
    });
  }

  updatePrice(event: any): any {
    this.product.price = event;
  }

  loadProduct(): any {
    this.shopService.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe((response: any) => {
      const productBrandId = this.brands && this.brands.find(x => x.name === response.productBrand).id;
      const productTypeId = this.types && this.types.find(x => x.name === response.productType).id;
      this.product = {...response, productBrandId, productTypeId};
    });
  }

  getBrands(): any {
    return this.shopService.getBrands();
  }

  getTypes(): any {
    return this.shopService.getTypes();
  }

  onSubmit(product: ProductFormValues): any {
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedProduct = {...this.product, ...product, price: +product.price};
      this.adminService.updateProduct(updatedProduct, +this.route.snapshot.paramMap.get('id')).subscribe((response: any) => {
        this.router.navigate(['/admin']);
      });
    } else {
      const newProduct = {...product, price: +product.price};
      this.adminService.createProduct(newProduct).subscribe((response: any) => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
