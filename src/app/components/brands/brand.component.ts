import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {

   brands:Brand []=[];
   currentBrand:Brand;


  
  
 
  
 

   //listResponseModel:ListResponseModel<Brand>={
   // data:this.brands,
   // message:"",
   // success:true
  //}
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }



  getBrands()
  {
     this.brandService.getBrands()
     .subscribe(response=> {
       if(response.success)
        {
          this.brands=response.data;
         
        
        
        }
       
     })
  }

   setCurrentBrand(brand:Brand)
   {
       this.currentBrand=brand;
   }

  

}
