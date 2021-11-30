function myFunction() {
    myVar = setTimeout(showPage, 2000);
  }
  
  function showPage() {
    document.querySelector(".spinner6").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
