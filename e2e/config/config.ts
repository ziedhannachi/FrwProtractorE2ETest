import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../util/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4445/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.google.com",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../e2e/stepDefinitions/*.ts", "../../e2e/util/*.ts"],
        strict: true,
        tags: "@CucumberScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
