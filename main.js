var circles=[10,30,50];

var result;
var a=circles.map(function(e){
    result=Math.floor(3.14*e*e);

    //document.write(result+"<br>");
    return result;
})
document.write(a);