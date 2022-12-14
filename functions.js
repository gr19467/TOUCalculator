function Calculate(){
    var MarketValue = document.getElementById("MarketValue").value;
    var MarketAnswer = (MarketValue * .99).toFixed(2);
    document.getElementById("OutputMarketMW").value = MarketAnswer;

    var MarketMW = document.getElementById("OutputMarketMW").value;
    var ActualMarket = (MarketMW * 109.48).toFixed(2);
    document.getElementById("OutputMarketPrice").value = "$" + ActualMarket;

    var SolarValue = document.getElementById("SolarValue").value;
    var SolarAnswer = (SolarValue * .2).toFixed(2);
    document.getElementById("OutputSolarMW").value = SolarAnswer;

    var SolarMW = document.getElementById("OutputSolarMW").value;
    var ActualSolar = (SolarMW * 43.00).toFixed(2);
    document.getElementById("OutputSolarPrice").value = "$" + ActualSolar;

    var WindValue = document.getElementById("WindValue").value;
    var SmallAnswer = (WindValue * .44).toFixed(2);
    document.getElementById("OutputWindMW").value = SmallAnswer;

    var WindMW = document.getElementById("OutputWindMW").value;
    var ActualWind = (WindMW * 69.00).toFixed(2);
    document.getElementById("OutputWindPrice").value = "$" + ActualWind;

    var SmallValue = document.getElementById("SmallValue").value;
    var SmallAnswer = (SmallValue * .22).toFixed(2);
    document.getElementById("OutputSmallMW").value = SmallAnswer;

    var SmallMW = document.getElementById("OutputSmallMW").value;
    var ActualSmall = (SmallMW * 26.00).toFixed(2);
    document.getElementById("OutputSmallPrice").value = "$" + ActualSmall;

    var LargeValue = document.getElementById("LargeValue").value;
    var LargeAnswer = (LargeValue * .36).toFixed(2);
    document.getElementById("OutputLargeMW").value = LargeAnswer;

    var LargeMW = document.getElementById("OutputLargeMW").value;
    var ActualLarge = (LargeMW * 53.55).toFixed(2);
    document.getElementById("OutputLargePrice").value = "$" + ActualLarge;

    var CoalValue = document.getElementById("CoalValue").value;
    var CoalAnswer = (CoalValue * 1.09).toFixed(2);
    document.getElementById("OutputCoalMW").value = CoalAnswer;

    var CoalMW = document.getElementById("OutputCoalMW").value;
    var ActualCoal = (CoalMW * 39.00).toFixed(2);
    document.getElementById("OutputCoalPrice").value = "$" + ActualCoal;

    var GasValue = document.getElementById("GasValue").value;
    var GasAnswer = (GasValue * .2).toFixed(2);
    document.getElementById("OutputGasMW").value = GasAnswer;

    var GasMW = document.getElementById("OutputGasMW").value;
    var ActualGas = (GasMW * 67.00).toFixed(2);
    document.getElementById("OutputGasPrice").value = "$" + ActualGas;

    var GeoValue = document.getElementById("GeoValue").value;
    var GeoAnswer = (GeoValue * .12).toFixed(2);
    document.getElementById("OutputGeoMW").value = GeoAnswer;

    var GeoMW = document.getElementById("OutputGeoMW").value;
    var ActualGeo = (GeoMW * 87.00).toFixed(2);
    document.getElementById("OutputGeoPrice").value = "$" + ActualGeo;
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

    var MW = document.getElementById("OutputMW").value;
    cost = (total/MW).toFixed(2);
    document.getElementById("OutputCost").value = "$" + cost;

    adequacy = (MW/50).toFixed(2);
    ad = (adequacy * 100).toFixed();
    
    document.getElementById("OutputAdequacy").value = ad + "%";
    if(ad >= 99){
        document.getElementById("OutputAdequacy").style = 'color:green';
    }else{
        document.getElementById("OutputAdequacy").style = 'color:red'
    }

    document.getElementById("MWA").value = MW;
}