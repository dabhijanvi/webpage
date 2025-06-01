function changeBackground() {
  const colors = ["#f2f2f2", "#ffcccb", "#c1f0f6", "#d5f5e3", "#f9e79f"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
