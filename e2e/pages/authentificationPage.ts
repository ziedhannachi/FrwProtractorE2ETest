import {browser, element, by, protractor, $$, $} from 'protractor';

export class authentificationPageObjects {

    username = element(by.id("txtUsername"))
    password = element(by.id("txtPassword"))
    loginButton = element(by.id("btnLogin"))
    dashboardLink = element(by.id("menu_dashboard_index"))


    OpenBrowser(url: String){
        browser.get("url");
    }

    UsernameSendKeys(username: String){
         this.username.sendKeys("username");
    }

    PasswordSendKeys(password: String){
        this.username.sendKeys("password");
    }

    LoginButtonClick(){
        this.loginButton.click();
    }

    dashboardLinkText(){
        return this.dashboardLink.getText();
    }
}