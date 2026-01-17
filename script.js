function viewResult() {
  const matric = document.getElementById("matric").value;

  if (matric === "24/14360") {
    document.getElementById("output").innerHTML =
      "Name: Ogunbadejo Oluwatumininu Favour<br>Score: 78<br>Grade: A";
  } else {
    document.getElementById("output").innerHTML = "Result not found";
  }
}