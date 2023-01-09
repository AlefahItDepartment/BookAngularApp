import { Component, OnInit } from "@angular/core";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { CustomerPETModel } from "src/app/models/customerPETModel";
import { CustomerPetService } from "src/app/services/customerpet.service";
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'
import { Router } from "@angular/router";
import { PetSpeciesService } from "src/app/services/petspecies.service";
import { PetSubSpeciesService } from "src/app/services/petsubspecies.service";
import { PetBreedsService } from "src/app/services/petbreeds.service";
import { PetMastersService } from "src/app/services/petmasters.service";
import { PetOriginsService } from "src/app/services/petorigins.service";
import { PetColorsService } from "src/app/services/petcolors.service";
import { PetSizesService } from "src/app/services/petsizes.service";

@Component({

   selector:'app-customerservice-petmodal',
   templateUrl:'./customerservices.pets.create.component.html',
   styleUrls:['./customerservices.pets.create.css']

})


export class CustomerServicesPetsCreateComponent implements OnInit {
public pet: CustomerPETModel = new CustomerPETModel;
files: File[] = [];
imageData?:string;
public datePickerConfig?:Partial<BsDatepickerConfig>
public PetSpeciesList:any[] = [];
public PetSubSpeciesList:any[] = [];
public PetBreedsList:any[] = [];
public PetMastersList:any[] = [];
public PetColorsList:any[] = [];
public PetSizesList:any[] = [];
public PetOriginsList:any[] = [];


constructor(private customerPETService: CustomerPetService, private router:Router,
  private petSpeciesService: PetSpeciesService,
  private petSubSpeciesService: PetSubSpeciesService,
  private petBreedsService: PetBreedsService,
  private petMastersService: PetMastersService,
  private petOriginsService: PetOriginsService,
  private petColorsService: PetColorsService,
  private petSizesService: PetSizesService){


  this.datePickerConfig = Object.assign(new BsDatepickerConfig(),{
        
    containerClass:'theme-default',
    showWeekNumbers:false,
    dateInputFormat:'DD/MM/YYYY',
      

});

          }
          ngOnInit(): void {

            try {

            this.GetPetSpeciesList();
            this.GetPetSubSpeciesList();
            this.GetPetColorsList();
            this.GetPetSizesList();
            this.GetPetOriginsList();
          }
          catch(e){
            console.error(e);
          }
              
          }

        AddPet = async () => {

     
          let elImage: any = document.getElementById("petImage");

          if (elImage != null) {
      
            this.pet.petImage = elImage.src.substring((elImage.src.lastIndexOf(",") + 1));
          }
      
          let results:any = await this.customerPETService.AddPet(this.pet);

            if(results !=null){
              if(results?.status){
                    
                this.router.navigate(['/customer/pets'])
              
              }
            }
            
        }


        GetPetSpeciesList = async() => {

          let results:any = await this.petSpeciesService.GetPetSpeciesList();
          if(results !=null){
            if(results.status){
                  this.PetSpeciesList = results.data;
            }
          }
      }



        GetPetSubSpeciesList = async() => {

            let results:any = await this.petSubSpeciesService.PetSubSpeciesList();

            debugger;

            if(results !=null){
              if(results.status){
                    this.PetSubSpeciesList = results.data;
              }
            }
        }

        GetPetBreedsList = async(id:number) => {

          let results:any = await this.petBreedsService.GetPetBreedsList(id);
          if(results !=null){
            if(results.status){
                  this.PetBreedsList = results.data;
            }
          }
      }
      GetPetMastersList = async(id:number) => {

        let results:any = await this.petMastersService.GetPetMastersList(id);
        if(results !=null){
          if(results.status){
                this.PetMastersList = results.data;
          }
        }
     }

      GetPetColorsList = async() => {

        let results:any = await this.petColorsService.GetPetColorsList();
        if(results !=null){
          if(results.status){
                this.PetColorsList = results.data;
          }
        }
    }

      GetPetSizesList = async() => {

        let results:any = await this.petSizesService.GetPetSizesList();
        if(results !=null){
          if(results.status){
                this.PetSizesList = results.data;
          }
        }
    }


      GetPetOriginsList = async() => {

        let results:any = await this.petOriginsService.GetPetOriginsList();
        if(results !=null){
          if(results.status){
                this.PetOriginsList = results.data;
          }
        }
    }



      onSelectSpecies =(e:any) => {
       
         try{
        

          this.GetPetSubSpeciesList();

         }
         catch(e){
          console.error(e);
         }

      }

      onSelectSubSpecies =(e:any) => {
       
        try{

         this.GetPetBreedsList((e.target.value || -1));

        }
        catch(e){
         console.error(e);
        }

      }
     

        onSelect(event:any) {
           if (this.files.length > 0){
             this.files.splice(this.files.indexOf(event), 1);

             }
          

             this.files.push(...event.addedFiles);

             this.blobToBase64(this.files[0]).then((base64): any  => {

          
               this.imageData = <string>base64;

               if(this.imageData.length > 0 && this.imageData.includes(',')){
               this.imageData = this.imageData.substring(this.imageData.lastIndexOf(',')+1);
              }
        
        
            })
        }
        
        onRemove(event:any) {

          this.files.splice(this.files.indexOf(event), 1);
        }


        private blobToBase64 = (file:any) => {

            return new Promise((resolve, reject) => {
    
              const reader = new FileReader();
              reader.readAsDataURL(file);
                 
              reader.onload = (e) =>{
    
                resolve(reader.result);              
              }
              
              reader.onerror = (error) =>{
                reject(error);
              }
    
            });
    
      }


      handleUpload(event:any) {

        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let elImage: any = document.getElementById("petImage");
          elImage.src = reader.result;
        };

      }


}