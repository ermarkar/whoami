import { SocialAccount } from './social-account';

export class User {
    id: number;
    name: string;
    designation: string;
    socialAccounts: SocialAccount[];
    constructor(data?: {
        id?: number,
        name?: string,
        designation?: string,
        socialAccounts?: SocialAccount[]
    }) {
        if (!data) { data = {}; }
        this.id = data.id;
        this.name = data.name;
        this.designation = data.designation;
        this.socialAccounts = data.socialAccounts;
    }
}