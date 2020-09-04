export class SocialAccount {
    id: string;
    name: string;
    faIcon: string;
    link: string;

    constructor(data?: {
        id?: string,
        name?: string,
        faIcon?: string,
        link?: string
    }) {
        if (!data) {
            data = {};
        }
        this.id = data.id;
        this.name = data.name;
        this.faIcon = data.faIcon;
        this.link = data.link;
    }
}