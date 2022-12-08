function CalculateMarket() {
    var MarketValue = document.getElementById("MarketValue").value;
    var Answer = (MarketValue * .99).toFixed(2);
    document.getElementById("OutputMarketMW").value = Answer;

    var MW = document.getElementById("OutputMarketMW").value;
    var Actual = (MW * 109.48).toFixed(2);
    document.getElementById("OutputMarketPrice").value = "$" + Actual;
}

function CalculateSolar() {
    var SolarValue = document.getElementById("SolarValue").value;
    var Answer = (SolarValue * .2).toFixed(2);
    document.getElementById("OutputSolarMW").value = Answer;

    var MW = document.getElementById("OutputSolarMW").value;
    var Actual = (MW * 43.00).toFixed(2);
    document.getElementById("OutputSolarPrice").value = "$" + Actual;
}

function CalculateWind() {
    var WindValue = document.getElementById("WindValue").value;
    var Answer = (WindValue * .44).toFixed(2);
    document.getElementById("OutputWindMW").value = Answer;

    var MW = document.getElementById("OutputWindMW").value;
    var Actual = (MW * 69.00).toFixed(2);
    document.getElementById("OutputWindPrice").value = "$" + Actual;
}

function CalculateSmall() {
    var SmallValue = document.getElementById("SmallValue").value;
    var Answer = (SmallValue * .22).toFixed(2);
    document.getElementById("OutputSmallMW").value = Answer;

    var MW = document.getElementById("OutputSmallMW").value;
    var Actual = (MW * 26.00).toFixed(2);
    document.getElementById("OutputSmallPrice").value = "$" + Actual;
}

function CalculateLarge() {
    var LargeValue = document.getElementById("LargeValue").value;
    var Answer = (LargeValue * .36).toFixed(2);
    document.getElementById("OutputLargeMW").value = Answer;

    var MW = document.getElementById("OutputLargeMW").value;
    var Actual = (MW * 53.55).toFixed(2);
    document.getElementById("OutputLargePrice").value = "$" + Actual;
}

function CalculateCoal() {
    var CoalValue = document.getElementById("CoalValue").value;
    var Answer = (CoalValue * 1.09).toFixed(2);
    document.getElementById("OutputCoalMW").value = Answer;

    var MW = document.getElementById("OutputCoalMW").value;
    var Actual = (MW * 39.00).toFixed(2);
    document.getElementById("OutputCoalPrice").value = "$" + Actual;
}

function CalculateGas() {
    var GasValue = document.getElementById("GasValue").value;
    var Answer = (GasValue * .2).toFixed(2);
    document.getElementById("OutputGasMW").value = Answer;

    var MW = document.getElementById("OutputGasMW").value;
    var Actual = (MW * 67.00).toFixed(2);
    document.getElementById("OutputGasPrice").value = "$" + Actual;
}

function CalculateGeo() {
    var GeoValue = document.getElementById("GeoValue").value;
    var Answer = (GeoValue * .12).toFixed(2);
    document.getElementById("OutputGeoMW").value = Answer;

    var MW = document.getElementById("OutputGeoMW").value;
    var Actual = (MW * 87.00).toFixed(2);
    document.getElementById("OutputGeoPrice").value = "$" + Actual;
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

function CalculatePrice(){
    var MarketValue = document.getElementById("OutputMarketMW").value;
    var SolarValue = document.getElementById("OutputSolarMW").value;
    var WindValue = document.getElementById("OutputWindMW").value;
    var SmallValue = document.getElementById("OutputSmallMW").value;
    var LargeValue = document.getElementById("OutputLargeMW").value;
    var CoalValue = document.getElementById("OutputCoalMW").value;
    var GasValue = document.getElementById("OutputGasMW").value;
    var GeoValue = document.getElementById("OutputGeoMW").value;

    total = (parseFloat(MarketValue * 109.48) + parseFloat(SolarValue * 43.00) + parseFloat(WindValue * 69.00) + parseFloat(SmallValue * 26.00) + parseFloat(LargeValue * 53.55) + parseFloat(CoalValue * 39.00) + parseFloat(GasValue * 67.00) + parseFloat(GeoValue * 87.00)).toFixed(2);

    document.getElementById("OutputActual").value = "$" + total;
}