import { authentificationPageObjects } from "../pages/authentificationPage";
const { Given, When, Then } = require("cucumber");
import {expect} from 'chai';

const authentification: authentificationPageObjects = new authentificationPageObjects();

Given(/^I go to the application$/, async () => {
    await authentification.OpenBrowser("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
});

When(/^I enter "(.*?)" in the username field$/, async (username: string) => {
    await authentification.UsernameSendKeys(username);
});

When(/^I enter "(.*?)" in the password field$/, async (password: string) => {
    await authentification.PasswordSendKeys(password);
});

When(/^I press the login button$/, async () => {
    await authentification.LoginButtonClick();
});

Then(/^The dashboard page is displayed$/, async () => {
    const dashbordText = await authentification.dashboardLinkText();
    expect(dashbordText).to.equal("Dashboard");
});
