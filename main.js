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