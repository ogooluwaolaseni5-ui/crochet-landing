 // 1. Variable storing a user's name
  let userName = document.getElementById("userName").value.trim();
  let userAge = Number(document.getElementById("userAge").value);

  const messageBox = document.getElementById("message-box");
  const countdown = document.getElementById("countdown");

  // Basic validation
  if (userName === "" || isNaN(userAge) || userAge <= 0) {
    messageBox.className = "show error";
    messageBox.innerHTML = "Please enter a valid name and age.";
    countdown.innerHTML = "";
    return;
  }

  // 2. Condition that checks if the user is above 18 or not
  if (userAge >= 18) {
    // Adult → show greeting
    messageBox.className = "show success";
    messageBox.innerHTML = `Hello, <strong>${userName}</strong>! 🧶<br>Welcome to Yarn & Bloom. Enjoy our handcrafted collection!`;

    // 3. Loop that counts from 1 to 5
    let countText = "Entering in: ";
    for (let i = 1; i <= 5; i++) {
      countText += i + (i < 5 ? " · " : "");
    }
    countdown.innerHTML = countText;

    // After a short delay, hide the panel and remove blur
    setTimeout(function () {
      document.getElementById("verification-panel").classList.add("hidden");
      document.getElementById("main-content").classList.remove("blurred");
    }, 2200);

  } else {
    // Under 18 → show message
    messageBox.className = "show error";
    messageBox.innerHTML = `Sorry, <strong>${userName}</strong>. You must be 18 or older to enter this site.`;
    countdown.innerHTML = "";
  }
