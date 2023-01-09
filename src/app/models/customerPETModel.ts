export class CustomerPETModel {


    customerPetID!:number;
    customerID!:number;
    petName!:string;
    gender:string='Male';
    dateOfBirth?:Date;
    petSpeciesID?:number;
    petSubSpeciesID?:number;
    petBreedID?:number;
    petColorID?:number;
    petSizeID?:number;
    petWeight?:string;
    petOriginID?:number;
    petImage?:string;
    petStatus:string='Alive';
}