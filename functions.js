function CalculateSquare() {
    var FieldValue = document.getElementById("InputValue").value;

    if (isNaN(FieldValue) | FieldValue == "") {
    var OutputValue = document.getElementById("OutputValue")
    
    while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild)

    var ErrorMessage = document.createTextNode("Incorrect or no content in the input field. Note: The system uses . (dot) as decimal separator!");
    OutputValue.appendChild(ErrorMessage);
}

else {
    var OutputValue = document.getElementById("OutputValue");
    while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild)
    var Result = document.createTextNode(FieldValue * 1.09);
    OutputValue.appendChild(Result);
    }
}

function CalculateMarket() {
    var MarketValue = document.getElementById("MarketValue").value;

    if (isNaN(MarketValue) | MarketValue == "") {
    var OutputMarketMW = document.getElementById("OutputMarketMW")
    
    while(OutputMarketMW.firstChild)OutputMarketMW.removeChild(OutputMarketMW.firstChild)

    var ErrorMessage = document.createTextNode("Incorrect or no content in the input field. Note: The system uses . (dot) as decimal separator!");
    OutputMarketMW.appendChild(ErrorMessage);
}

else {
    var OutputMarketMW = document.getElementById("OutputMarketMW");
    while(OutputMarketMW.firstChild)OutputMarketMW.removeChild(OutputMarketMW.firstChild)
    var Result = document.createTextNode(MarketValue * 1.09);
    
    OutputMarketMW.appendChild(Result);
    }
}