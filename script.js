const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent("Website enquiry — " + formData.get("service"));
    const body = encodeURIComponent(
      "Name: " + formData.get("name") + "\n" +
      "Email: " + formData.get("email") + "\n" +
      "Service: " + formData.get("service") + "\n\n" +
      "Project details:\n" + formData.get("message")
    );
    const mailto = "mailto:mullarmediaandcommunications@gmail.com?subject=" + subject + "&body=" + body;
    if (formStatus) formStatus.textContent = "Opening your email app. Please review and send your enquiry there.";
    window.location.href = mailto;
  });
}