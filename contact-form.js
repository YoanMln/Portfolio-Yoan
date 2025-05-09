document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        document.getElementById("confirmation-message").style.display = "block";

        form.style.display = "none";

        setTimeout(() => {
          form.style.display = "block";

          document.getElementById("confirmation-message").style.display =
            "none";
        }, 1000);
      })
      .catch((error) => {
        alert("Une erreur est survenue. Veuillez réessayer.");
        console.error(error);
      });
  });
