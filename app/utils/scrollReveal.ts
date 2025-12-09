"use client";

export const revealOnScroll = () => {
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
