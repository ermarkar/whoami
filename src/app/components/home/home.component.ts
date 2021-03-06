import { Component, OnInit } from '@angular/core';
import { SocialAccount } from '../../models/social-account';
import { User } from 'src/app/models/user';

@Component({
    selector: 'whoami-home',
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
    copyright: string;
    user: User;

    ngOnInit(): void {
        const _socialAccounts = [
            { id: "LINKEDIN", name: "Linkedin", faIcon: "fa fa-linkedin", link: "https://www.linkedin.com/in/sunil-garg-bb717580/" },
            { id: "STACK_OVERFLOW", name: "Stackoverflow", faIcon: "fa fa-stack-overflow", link: "https://stackoverflow.com/users/2172547/sunil-garg" },
            { id: "GITHUB", name: "GitHub", faIcon: "fa fa-github", link: "https://github.com/ermarkar" },
            { id: "INSTAGRAM", name: "Instagram", faIcon: "fa fa-instagram", link: "https://www.instagram.com/sunny.dhaula/" },
            { id: "YOU_TUBE", name: "YouTube", faIcon: "fa fa-youtube", link: "https://youtube.com/sunilgarg04" },
        ];

        this.user = new User({
            id: 1,
            name: "Sunil Garg",
            designation: "Full Stack Developer",
            socialAccounts: _socialAccounts
        })

        this.copyright = `© ${new Date().getFullYear()} Sunil Garg | Lets work together!!`
    }

    openLink(account: SocialAccount): void {
        window.open(account.link, "_blank");
    }
}
