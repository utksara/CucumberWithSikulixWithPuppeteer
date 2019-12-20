module.exports = function (imagePath,region,accuracy){
   
    var ret =  true;

    var XS = region.X.toString();
    var YS = region.Y.toString();

    var widthS =  region.width.toString();
    var heightS = region.height.toString();

    var accuracyS = accuracy.toString();

    var exec = require('child_process').exec, child;
    child = exec('java -jar D:\\puppeteer-sikulix-jars\\Check_Gold_Image.jar ' + imagePath + ' ' + XS +
    ' ' + YS +' ' + widthS +' ' + heightS +' ' + accuracyS,
    function (error, stdout, stderr){
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      ret = stdout.charAt(stdout.length-4);
    });

    if (ret == "t")
      return true;
    if (ret == "a")
      return false;
}