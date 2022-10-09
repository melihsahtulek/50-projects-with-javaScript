window.addEventListener("load", () => {
  const form = document.forms.namedItem("signUpform");
  const fullName = form.elements.namedItem("fullName");
  const username = form.elements.namedItem("username");
  const dateOfBirth = form.elements.namedItem("dateOfBirth");
  const emailAddress = form.elements.namedItem("emailAddress");
  const password = form.elements.namedItem("password");
  const confirmPassword = form.elements.namedItem("confirmPassword");

  fullName.addEventListener("keyup", (e) => {
    let value = fullName.value.trim();
    if (/^\w\D{1,}$/gimu.test(value)) {
      if (/\s{2,}/gimu.test(value)) {
        fullName.value = value.replace(/\s{2,}/gimu, " ");
      }
    } else {
      fullName.value = value.replace(/\s{1,}/gimu, "");
    }
  });

  form.addEventListener("submit", () => {
    if (fullName.value.length === 0) {
      document.querySelector("[data-inp-id=fullName]").style.display = "block";
    } else {
      document.querySelector("[data-inp-id=fullName]").style.display = "none";
    }

    if (/^[a-z]{1,}[a-z0-9_\.]$/.test(username.value.trim())) {
      document.querySelector("[data-inp-id=username]").style.display = "none";
    } else {
      document.querySelector("[data-inp-id=username]").style.display = "block";
    }

    if (/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/.test(dateOfBirth.value.trim())) {
      document.querySelector("[data-inp-id=dateOfBirth]").style.display = "none";
    } else {
      document.querySelector("[data-inp-id=dateOfBirth]").style.display = "block";
    }

    if (/^[a-z]{1,}[a-z0-9_\-\.]+[a-z0-9]+@[a-z]{1,}\.[a-z]{1,}$/.test(emailAddress.value.trim())) {
      document.querySelector("[data-inp-id=emailAddress]").style.display = "none";
    } else {
      document.querySelector("[data-inp-id=emailAddress]").style.display = "block";
    }

    if ((password.value.trim().length && confirmPassword.value.trim().length) !== 0) {
      if (password.value.trim() === confirmPassword.value.trim()) {
        document.querySelector("[data-inp-id=confirmPassword]").style.display = "none";
      } else {
        document.querySelector("[data-inp-id=confirmPassword]").style.display = "block";
      }
    } else {
      document.querySelector("[data-inp-id=confirmPassword]").style.display = "block";
    }
  });
});
