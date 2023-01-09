import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { async } from "rxjs";
import { City } from "src/app/models/city";
import { Country } from "src/app/models/country";
import { Customer } from "src/app/models/customer";
import { CustomersAddressLines } from "src/app/models/customersaddresslines";
import { MembershipCategory } from "src/app/models/membershipcategory";
import { Region } from "src/app/models/region";
import { UserChangePassword } from "src/app/models/userchangepassword";
import { Users } from "src/app/models/users";
import { CityService } from "src/app/services/city.service";
import { CountryService } from "src/app/services/country.service";
import { CustomersService } from "src/app/services/customers.service";
import { CustomersAddressService } from "src/app/services/customersaddress.service";
import { MembershipCategoryService } from "src/app/services/membershipcategory.service";
import { RegionService } from "src/app/services/region.service";
import { UsersService } from "src/app/services/users.service";




@Component({


  selector: 'app-customerservicesprofile',
  templateUrl: './customerservices.profile.component.html'

})


export class CustomerServicesProfileComponent implements OnInit {




  public customerInfo: Customer = new Customer();
  public userChangePassword: UserChangePassword = new UserChangePassword;
  public customerMailingAddress: CustomersAddressLines = new CustomersAddressLines;
  public customerBillingAddress: CustomersAddressLines = new CustomersAddressLines;
  private userInfo: any;
  private user: Users = new Users;
  public membershipcategory: MembershipCategory = new MembershipCategory();
  public countryMailingList?: Country[];
  public regionMailingList?: Region[];
  public cityMailingList?: City[];
  public countryBillingList?: Country[];
  public regionBillingList?: Region[];
  public cityBillingList?: City[];


  constructor(private customersService: CustomersService,
    private customersAddressService: CustomersAddressService,
    private membershipCategoryService: MembershipCategoryService,
    private countryService: CountryService,
    private regionService: RegionService,
    private cityService: CityService,
    private customerAddressService: CustomersAddressService,
    private userService: UsersService,
    private router: Router) {


    this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");




  }

  ngOnInit(): void {

    this.getCustomer();



  }

  UpdateCustomer = async () => {


    let elImage: any = document.getElementById("profileImage");

    if (elImage != null) {

      this.customerInfo.profileImage = elImage.src.substring((elImage.src.lastIndexOf(",") + 1));
    }



    let results = await this.customersService.UpdateCustomer(this.customerInfo);

    if (results != null) {

      alert("done!");

    }

  }

  getCustomer = async () => {

    let results: any = await this.customersService.GetCustomer(this.userInfo.data.customers.customer.customerID);



    if (results != null) {


      if (results.status) {

        this.customerInfo = results.data;
        let resultsMembershipCategory: any = await this.membershipCategoryService.getMembershipCategory(this.customerInfo.membershipCategoryID);
        this.membershipcategory = resultsMembershipCategory.data;
        this.getMailingCountry();
        this.getBillingCountry();

        let resultsArray: any = await this.customersAddressService.GetCustomersAddress(this.customerInfo.customerID);


        if (resultsArray != null) {

          if (resultsArray.status) {
            debugger;

            this.customerMailingAddress = resultsArray.data.filter((x: any) => x.addressLineTypeID === 1)[0];
            if (this.customerMailingAddress == null) {

              this.customerMailingAddress = new CustomersAddressLines;
            }
            else {

              this.fnMailingRegion((this.customerMailingAddress.countryID || -1));
              this.fnMailingCity((this.customerMailingAddress.regionID || -1));
            }

            this.customerBillingAddress = resultsArray.data.filter((x: any) => x.addressLineTypeID === 2)[0];
            if (this.customerBillingAddress == null) {
              this.customerBillingAddress = new CustomersAddressLines;
            }
            else {
              this.fnBillingRegion((this.customerBillingAddress.countryID || -1));
              this.fnBillingCity((this.customerBillingAddress.regionID || -1));
            }

          }
        }

      }

    }

  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let elImage: any = document.getElementById("profileImage");
      elImage.src = reader.result;
    };
  }


  getMailingCountry = async () => {

    let results: any = await this.countryService.getCountry();

    if (results != null) {

      if (results.status) {

        this.countryMailingList = results.data;

      }
    }
  }
  onMailingRegion = async (event: any) => {

    if (event === null)
      return;

    await this.fnMailingRegion(event.target.value);

  }

  fnMailingRegion = async (id: number) => {

    let results: any = await this.regionService.getRegion(id);

    if (results != null) {

      if (results.status) {

        this.regionMailingList = results.data;

      }
    }

  }
  onMailingCity = async (event: any) => {

    if (event === null)
      return;

    await this.fnMailingCity(event.target.value);

  }

  fnMailingCity = async (id: number) => {


    let results: any = await this.cityService.getCity(id);

    if (results != null) {

      if (results.status) {

        this.cityMailingList = results.data;
      }
    }
  }

  getBillingCountry = async () => {


    let results: any = await this.countryService.getCountry();

    if (results != null) {

      if (results.status) {

        this.countryBillingList = results.data;

      }
    }
  }
  onBillingRegion = async (event: any) => {

    if (event === null)
      return;

    await this.fnBillingRegion(event.target.value);

  }
  fnBillingRegion = async (id: number) => {

    let results: any = await this.regionService.getRegion(id);

    if (results != null) {

      if (results.status) {

        this.regionBillingList = results.data;

      }
    }

  }


  onBillingCity = async (event: any) => {

    if (event === null)
      return;
    await this.fnBillingCity(event.taret.value)

  }


  fnBillingCity = async (id: number) => {

    let results: any = await this.cityService.getCity(id);

    if (results != null) {

      if (results.status) {

        this.cityBillingList = results.data;
      }
    }

  }


  UpdateMailingAddress = async () => {

    debugger;

    let results: any = await this.customerAddressService.UpdateCustomerAddressLine(this.customerMailingAddress);

    if (results != null) {

      if (results.status) {



      }
    }

  }


  UpdateBillingAddress = async () => {


    let results: any = await this.customerAddressService.UpdateCustomerAddressLine(this.customerBillingAddress);

    if (results != null) {

      if (results.status) {



      }
    }

  }

  UpdateUser = async () => {

    this.user = this.userInfo.data.user;
    
    if (this.userChangePassword.newpassword !== null && this.userChangePassword.newpassword !== null) {
      if (this.userChangePassword.newpassword === this.userChangePassword.confirmpassword) {
        this.user.password = this.userChangePassword.newpassword;
      }
    }


    let results: any = await this.userService.UpdateUser(this.user);


    if (results != null) {


      if (results.status) {

        localStorage.removeItem("userInfo");

        this.router.navigate(['/login']);

      }
    }


  }



}