function CalculateGeo() {
    var GeoValue = document.getElementById("GeoValue").value;

    if (isNaN(GeoValue) | GeoValue == "") {
    var OutputGeoMW = document.getElementById("OutputGeoMW")
    
    while(OutputGeoMW.firstChild)OutputGeoMW.removeChild(OutputGeoMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputGeoMW.appendChild(ErrorMessage);
}

else {
    var OutputGeoMW = document.getElementById("OutputGeoMW");
    while(OutputGeoMW.firstChild)OutputGeoMW.removeChild(OutputGeoMW.firstChild)

    var Answer = (GeoValue * .22).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputGeoMW.appendChild(Result);
    }
}