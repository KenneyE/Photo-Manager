#!/usr/bin/env node

require('fs');

var strDir = __dirname,
strName = process.argv[0],
strPictureDir = "/Users/erickenney/Pictures/",
strFileName,
strFileExtension;

strPictureDir += new Date().toISOString().slice(0,10) + strFileName + "/";
fs.mkdir(strPictureDir, function()
{
    fs.readdir(strDir, function(err, files) {
        files.forEach(function (file, iPhotoInd) {

            strFileExtension = file.split(".").pop();
            strFileName = strPictureDir + strName + pad(iPhotoInd + 1) + "." + strFileExtension;
            fs.createReadStream(file).pipe(fs.createWriteStream(strFileName));
        });
    });
});

function pad(num)
{
    var paddedNum = num.toString();

    if (paddedNum.length < 4)
    {
        paddedNum = "0" + paddedNum;
        paddedNum = pad(paddedNum);
    }

    return paddedNum;
}