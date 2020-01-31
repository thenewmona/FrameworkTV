let btnGetData=document.getElementById('btnGetData');
let resultArea=document.getElementById('result');
let textAdress = document.getElementById('address');

btnGetData.oncick = function(){
    let address=textAdress.node ;
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=" + googleKey + "&address="
+ addressconsole.log(url);}