function CalculateMarket() {
    var MarketValue = document.getElementById("MarketValue").value;
    var Answer = (MarketValue * .99).toFixed(2);
    document.getElementById("OutputMarketMW").value = Answer;
}

function CalculateSolar() {
    var SolarValue = document.getElementById("SolarValue").value;
    var Answer = (SolarValue * .2).toFixed(2);
    document.getElementById("OutputSolarMW").value = Answer;
}

function CalculateWind() {
    var WindValue = document.getElementById("WindValue").value;
    var Answer = (WindValue * .44).toFixed(2);
    document.getElementById("OutputWindMW").value = Answer;
}

function CalculateSmall() {
    var SmallValue = document.getElementById("SmallValue").value;
    var Answer = (SmallValue * .22).toFixed(2);
    document.getElementById("OutputSmallMW").value = Answer;
}

function CalculateLarge() {
    var LargeValue = document.getElementById("LargeValue").value;
    var Answer = (LargeValue * .36).toFixed(2);
    document.getElementById("OutputLargeMW").value = Answer;
}

function CalculateCoal() {
    var CoalValue = document.getElementById("CoalValue").value;
    var Answer = (CoalValue * 1.09).toFixed(2);
    document.getElementById("OutputCoalMW").value = Answer;
}

function CalculateGas() {
    var GasValue = document.getElementById("GasValue").value;
    var Answer = (GasValue * .2).toFixed(2);
    document.getElementById("OutputGasMW").value = Answer;
}

function CalculateGeo() {
    var GeoValue = document.getElementById("GeoValue").value;
    var Answer = (GeoValue * .12).toFixed(2);
    document.getElementById("OutputGeoMW").value = Answer;
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

    tot = parseFloat(MarketValue) + parseFloat(SolarValue) + parseFloat(WindValue) + parseFloat(SmallValue) + parseFloat(LargeValue) + parseFloat(CoalValue) + parseFloat(GasValue) + parseFloat(GeoValue);

    document.getElementById("OutputCapacity").value = tot;
}

function CalculateMW(){
    var MarketValue = document.getElementById("OutputMarketMW").value;
    var SolarValue = document.getElementById("OutputSolarMW").value;
    var WindValue = document.getElementById("OutputWindMW").value;
    var SmallValue = document.getElementById("OutputSmallMW").value;
    var LargeValue = document.getElementById("OutputLargeMW").value;
    var CoalValue = document.getElementById("OutputCoalMW").value;
    var GasValue = document.getElementById("OutputGasMW").value;
    var GeoValue = document.getElementById("OutputGeoMW").value;

    tot = (parseFloat(MarketValue) + parseFloat(SolarValue) + parseFloat(WindValue) + parseFloat(SmallValue) + parseFloat(LargeValue) + parseFloat(CoalValue) + parseFloat(GasValue) + parseFloat(GeoValue)).toFixed(2);

    document.getElementById("OutputMW").value = tot;
}