document.addEventListener("DOMContentLoaded", function () {
  console.log(" Login script loaded!");

  let form = document.getElementById("loginForm");

  if (!form) {
      console.error("Kunne ikke finde login-formularen!");
      return;
  }

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stopper standard form-submission

      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      if (email && password) { 
          localStorage.setItem("isLoggedIn", "true");
          console.log(" Bruger logget ind:", email);
          window.location.href = "../Brugerportal/startside.html"; // Korrekt sti
      } else {
          alert("Udfyld både email og adgangskode!");
      }
  });
});