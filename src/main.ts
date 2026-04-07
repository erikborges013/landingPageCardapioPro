document.addEventListener("DOMContentLoaded", () => {
  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      // Toggle current item
      const isActive = item.classList.contains("active");
      
      // Close all other items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        (otherItem.querySelector(".faq-answer") as HTMLElement).style.maxHeight = "0";
      });

      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer") as HTMLElement;
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".feature-card, .pricing-card, .panel-image").forEach((el) => {
    el.classList.add("hidden-reveal");
    observer.observe(el);
  });
});

console.log("CardápioPró Landing Page Loaded");
