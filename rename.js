function CalculateWind() {
    var WindValue = document.getElementById("WindValue").value;
    var Answer = (WindValue * .99).toFixed(2);
    document.getElementById("OutputWindMW").value = Answer;
}