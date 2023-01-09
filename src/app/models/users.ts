export class Users {

    userID!: number;
    fullName!: string;
    mobile!: string;
    password!: string;
    passwordExpired?: Date;
    otpNumber?: string;
    otpExpired?: Date;
    userRoleID!: number;
    createdDate?: Date;
    updatedDate?: Date;

}