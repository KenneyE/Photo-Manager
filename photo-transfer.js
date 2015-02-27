require('fs');

var strDir = __dirname,
    strName = process.argv[0],
    strPictureDir = "";

fs.readdir(strDir, function(err, files) {
    files.forEach(function (file, iPhotoInd) {

        strFileName = strPictureDir + strName + pad(iPhotoInd + 1)
        fs.createReadStream(file).pipe(fs.createWriteStream(strFileName))
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