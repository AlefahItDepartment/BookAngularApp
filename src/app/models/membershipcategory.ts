export class MembershipCategory {
    membershipCategoryID!: number;
    membershipCategoryCode!: string;
    membershipCategoryNameEN!: string;
    membershipCategoryNameAR?: string;
    no_of_Visit_Begin?: number;
    no_of_Visit_End?: number;
    isActive?:boolean;
    createdDate?: Date;
    updateDate?:Date;
}