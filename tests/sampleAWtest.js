
var Region = require('D:/NODE_PROJECTS/AW_test1/lib/Region.js');
const Check_Gold_Image = require('D:/NODE_PROJECTS/AW_test1/lib/Check_Gold_Image.js');
const puppeteer = require('puppeteer');

var imagePath1 = "C:\\Users\\vqmmx3\\Pictures\\vlp_vise";
var imagePath2 = "C:\\Users\\vqmmx3\\Pictures\\windowsIcon";
var accuracy = 0.99;
var region = new Region(0,0,1680,1050);

(async () => {
    function execute(callback){
        callback();
    }

    const browser = await puppeteer.launch({
       headless: false,
       args:['--start-maximized'] 
       });

    const page = await browser.newPage();

    var awURL = "http://10.134.153.95:3000/";

    var usernameBox = 'input[ng-model="userName"]';
    var passwordBox = 'input[ng-model="password"]';
    var signinButton = 'button[type="button"][ng-click="login()"]';
    var searchPanel = 'input[aw-enter-key="doGlobalSearch"]'
    var searchButton = 'aw-icon[id = "cmdSearch"]';

    var imageCanvas = 'canvas[id="ImageViewerCanvas"]';

    var userID = 'bartolom';
    var password = 'pw_bartolom';
    var data = 'vlp_vise';

    // fetch URL
    await page.goto(awURL);
    await page.setViewport({ width: 1680, height: 1050});

    //enter username
    await page.waitFor(usernameBox);
    await page.click(usernameBox);
    await page.type(usernameBox,userID);

    //enter password
    await page.waitFor(passwordBox);
    await page.click(passwordBox);
    await page.type(passwordBox,password);

    //sign in
    await page.waitFor(signinButton);
    await page.click(signinButton);

    //search data
    await page.waitFor(searchPanel);
    await page.click(searchPanel);
    await page.type(searchPanel,data);

    await page.waitFor(searchButton);
    await page.click(searchButton);

    await page.waitFor(imageCanvas);

    execute( function() {
        var Check_Gold_Image1 = new Check_Gold_Image(imagePath1,region,accuracy);
        console.log(Check_Gold_Image1);
    });
    
    console.log("Hello from sampleTest1.js");
    })();