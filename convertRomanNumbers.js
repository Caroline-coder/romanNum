function convertRomanNumbers(num=0){
    var result = (num === 0)?"N":"";
    if (isNaN(num)){
        result = "cannot be converted";
    }else{
        var romanValue = romanBig(num);
        for ( var i in romanValue ) {
            while ( num >= romanValue[i] ) {
                result += i;
                num -= romanValue[i];
            }
        }
    }
    return result;
}
function romanBig(num){
    var romanValueList = {m:1000000,d:500000,l:50000,x:10000,ix:9000,v:5000,vi:6000,iv:4000,i:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    if(num < 4000){
        romanValueList = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    }
    return romanValueList;
}

module.exports = convertRomanNumbers;