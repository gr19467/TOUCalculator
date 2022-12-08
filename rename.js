var MW = document.getElementById("OutputGeoMW").value;
var Actual = (MW * 87.00).toFixed(2);
document.getElementById("OutputGeoPrice").value = "$" + Actual;