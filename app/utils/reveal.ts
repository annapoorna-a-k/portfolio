export function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  function handleReveal() {
    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleReveal);
  handleReveal(); // Trigger first load
}
