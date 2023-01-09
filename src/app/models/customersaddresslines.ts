export class CustomersAddressLines {

    addressID!: number;
    addressLineTypeID!: number;
    customerID!: number;
    addressLine1?: string='';
    addressLine2?: string='';
    countryID?: number;
    regionID?: number;
    zipCode?: string;
    cityID?: number;
    location?: string;
    isDefault?: boolean=true;

}