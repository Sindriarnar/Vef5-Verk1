document.querySelectorAll("h1").forEach((heading) => {
  heading.addEventListener("click", () => {
    heading.style.color = randomColor();
  });
});
randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
    const headings = document.querySelectorAll("h1");

    headings.forEach((heading) => {
    heading.style.transition = "color 0.2s, text-shadow 0.2s, transform 0.2s";

    heading.addEventListener("click", () => {
        heading.style.color = randomColor();
        heading.style.textShadow = `0 0 12px ${randomColor()}`;
    });
    });