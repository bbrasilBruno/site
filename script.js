// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mobileMenu.classList.remove("active")
    }
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      })

      // Close mobile menu if open
      if (mobileMenu) {
        mobileMenu.classList.remove("active")
      }
    }
  })
})

// Form submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form values
    const name = this.querySelector('input[type="text"]').value
    const email = this.querySelector('input[type="email"]').value
    const message = this.querySelector("textarea").value

    // Here you would typically send the data to a server
    // For demo purposes, we'll just log it and show an alert
    console.log("Form submitted:", { name, email, message })

    // Show success message
    alert("Obrigado pelo seu contato! Entraremos em contato em breve.")

    // Reset form
    this.reset()
  })
}
