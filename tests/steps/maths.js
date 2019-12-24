const defineSupportCode = require('cucumber').defineSupportCode;
const puppeteer = require('puppeteer');

var signinButton = 'button[type="button"][ng-click="login()"]';
var searchPanel = 'input[aw-enter-key="doGlobalSearch"]'
var searchButton = 'aw-icon[id = "cmdSearch"]';

var imageCanvas = 'canvas[id="ImageViewerCanvas"]';

var data = 'vlp_vise';
var imageSearchResultIcon = 'span[vlp_wise]';

var awURL = "http://10.134.64.34:3000";

let browser = puppeteer.launch({
  headless: false,
  args: ['--start-maximized']
});

var page;

defineSupportCode(async function ({ Given, Then, When }) {

  Given('I start with windows', function (input) {
    console.log(input);
    answer = input;
  });

  When('I open chrome browser', async function (input) {
    page = (await browser).newPage();
  });

  Then('I open link to AW', async function (input) {
    (await page).goto(awURL);
    (await page).setViewport({ width: 1680, height: 1050 });
  });

  Then('I login with username {string} and password {string}', async function (userID, password) {
    (await page).waitFor(usernameBox);
    (await page).click(usernameBox);
    (await page).type(usernameBox, userID);

    console.log(userID);

    (await page).waitFor(passwordBox);
    (await page).click(passwordBox);
    (await page).type(passwordBox, password);
  });

});