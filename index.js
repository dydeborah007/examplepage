function myRange(){
    var num=document.getElementById("num").value;
    if((num >= 40) && (num <= 10000)){
        alert("it's true");
    }
    else{
        alert("it's false");
    }
}
function checkNumber(){
    var fNumber = document.getElementById("firstInput").value;
    var sNumber = document.getElementById("secondInput").value;
    var tNumber = document.getElementById("thirdInput").value;
    if(fNumber, sNumber, tNumber>=20){
        if((fNumber >= 20 && (fNumber < sNumber || fNumber < tNumber)) || (sNumber >= 20 && (sNumber < fNumber || sNumber < tNumber)) || (tNumber >= 20 && (tNumber < sNumber || tNumber < fNumber))){
            alert("True");
        }
        else{
            alert("False")
        }
    }
}
function findTriangle(){
    var aSide = document.getElementById("aNum").value;
    var bSide = document.getElementById("bNum").value;
    var cSide = document.getElementById("cNum").value;
    var semiPerimeter = (aSide+bSide+cSide)/2;
    var area = (semiPerimeter*(semiPerimeter-aSide)*(semiPerimeter-bSide)*(semiPerimeter-cSide))**0.5;
    document.getElementById("myP").innerHTML= area.toFixed(2) + "m" 
}