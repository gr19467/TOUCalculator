function CalculateMarket() {
    var MarketValue = document.getElementById("MarketValue").value;

    if (isNaN(MarketValue) | MarketValue == "") {
    var OutputMarketMW = document.getElementById("OutputMarketMW")
    
    while(OutputMarketMW.firstChild)OutputMarketMW.removeChild(OutputMarketMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputMarketMW.appendChild(ErrorMessage);
}

else {
    var OutputMarketMW = document.getElementById("OutputMarketMW");
    while(OutputMarketMW.firstChild)OutputMarketMW.removeChild(OutputMarketMW.firstChild)

    var Answer = (MarketValue * .99).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputMarketMW.appendChild(Result);
    }
}

function CalculateSolar() {
    var SolarValue = document.getElementById("SolarValue").value;

    if (isNaN(SolarValue) | SolarValue == "") {
    var OutputSolarMW = document.getElementById("OutputSolarMW")
    
    while(OutputSolarMW.firstChild)OutputSolarMW.removeChild(OutputSolarMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputSolarMW.appendChild(ErrorMessage);
}

else {
    var OutputSolarMW = document.getElementById("OutputSolarMW");
    while(OutputSolarMW.firstChild)OutputSolarMW.removeChild(OutputSolarMW.firstChild)

    var Answer = (SolarValue * .2).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputSolarMW.appendChild(Result);
    }
}

function CalculateWind() {
    var WindValue = document.getElementById("WindValue").value;

    if (isNaN(WindValue) | WindValue == "") {
    var OutputWindMW = document.getElementById("OutputWindMW")
    
    while(OutputWindMW.firstChild)OutputWindMW.removeChild(OutputWindMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputWindMW.appendChild(ErrorMessage);
}

else {
    var OutputWindMW = document.getElementById("OutputWindMW");
    while(OutputWindMW.firstChild)OutputWindMW.removeChild(OutputWindMW.firstChild)

    var Answer = (WindValue * .44).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputWindMW.appendChild(Result);
    }
}

function CalculateSmall() {
    var SmallValue = document.getElementById("SmallValue").value;

    if (isNaN(SmallValue) | SmallValue == "") {
    var OutputSmallMW = document.getElementById("OutputSmallMW")
    
    while(OutputSmallMW.firstChild)OutputSmallMW.removeChild(OutputSmallMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputSmallMW.appendChild(ErrorMessage);
}

else {
    var OutputSmallMW = document.getElementById("OutputSmallMW");
    while(OutputSmallMW.firstChild)OutputSmallMW.removeChild(OutputSmallMW.firstChild)

    var Answer = (SmallValue * .22).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputSmallMW.appendChild(Result);
    }
}

function CalculateLarge() {
    var LargeValue = document.getElementById("LargeValue").value;

    if (isNaN(LargeValue) | LargeValue == "") {
    var OutputLargeMW = document.getElementById("OutputLargeMW")
    
    while(OutputLargeMW.firstChild)OutputLargeMW.removeChild(OutputLargeMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputLargeMW.appendChild(ErrorMessage);
}

else {
    var OutputLargeMW = document.getElementById("OutputLargeMW");
    while(OutputLargeMW.firstChild)OutputLargeMW.removeChild(OutputLargeMW.firstChild)

    var Answer = (LargeValue * .36).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputLargeMW.appendChild(Result);
    }
}

function CalculateCoal() {
    var CoalValue = document.getElementById("CoalValue").value;

    if (isNaN(CoalValue) | CoalValue == "") {
    var OutputCoalMW = document.getElementById("OutputCoalMW")
    
    while(OutputCoalMW.firstChild)OutputCoalMW.removeChild(OutputCoalMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputCoalMW.appendChild(ErrorMessage);
}

else {
    var OutputCoalMW = document.getElementById("OutputCoalMW");
    while(OutputCoalMW.firstChild)OutputCoalMW.removeChild(OutputCoalMW.firstChild)

    var Answer = (CoalValue * 1.09).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputCoalMW.appendChild(Result);
    }
}

function CalculateGas() {
    var GasValue = document.getElementById("GasValue").value;

    if (isNaN(GasValue) | GasValue == "") {
    var OutputGasMW = document.getElementById("OutputGasMW")
    
    while(OutputGasMW.firstChild)OutputGasMW.removeChild(OutputGasMW.firstChild)

    var ErrorMessage = document.createTextNode("0");
    OutputGasMW.appendChild(ErrorMessage);
}

else {
    var OutputGasMW = document.getElementById("OutputGasMW");
    while(OutputGasMW.firstChild)OutputGasMW.removeChild(OutputGasMW.firstChild)

    var Answer = (GasValue * .2).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputGasMW.appendChild(Result);
    }
}

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

    var Answer = (GeoValue * .12).toFixed(2);
    var Result = document.createTextNode(Answer);
    
    OutputGeoMW.appendChild(Result);
    }
}

function CalculateCapacity(){
    var MarketValue = document.getElementById("MarketValue").value;
    var SolarValue = document.getElementById("SolarValue").value;
    var WindValue = document.getElementById("WindValue").value;
    var SmallValue = document.getElementById("SmallValue").value;
    var LargeValue = document.getElementById("LargeValue").value;
    var CoalValue = document.getElementById("CoalValue").value;
    var GasValue = document.getElementById("GasValue").value;
    var GeoValue = document.getElementById("GeoValue").value;

    var OutputCapacity = document.getElementById("OutputCapacity");
    while(OutputCapacity.firstChild)OutputCapacity.removeChild(OutputCapacity.firstChild)

    var Answer = (MarketValue += SolarValue += WindValue += SmallValue += LargeValue += CoalValue += GasValue += GeoValue);
    
    var Result = document.createTextNode(Answer);

    OutputCapacity.appendChild(Result);
}