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