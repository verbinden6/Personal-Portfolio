function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleTheme() {
  const body = document.body;
  const desktopIcon = document.getElementById("theme-icon-desktop");
  const mobileIcon = document.getElementById("theme-icon-mobile");

  body.classList.toggle("dark-mode");

  const newIcon = body.classList.contains("dark-mode")
    ? "./assets/sun.png"
    : "./assets/moon.png";

  if (desktopIcon) desktopIcon.src = newIcon;
  if (mobileIcon) mobileIcon.src = newIcon;
}
/* ---------------- Typing effect ---------------- */
const lines = [
  { text: "Hello, I'm", id: "line1" },
  { text: "Aditya Gupta", id: "line2" },
  { text: "Software Developer", id: "line3" },
];

function typeLine(lineObj, callback) {
  const el = document.getElementById(lineObj.id);
  el.textContent = "";
  el.classList.add("blinking-cursor");

  let idx = 0;
  const interval = setInterval(() => {
    el.textContent += lineObj.text[idx];
    idx++;
    if (idx === lineObj.text.length) {
      clearInterval(interval);
      el.classList.remove("blinking-cursor");
      if (callback) setTimeout(callback, 500); // delay before next line
    }
  }, 75);
}

function clearAll() {
  lines.forEach((line) => {
    const el = document.getElementById(line.id);
    el.textContent = "";
  });
}

function startTypingLoop() {
  typeLine(lines[0], () => {
    typeLine(lines[1], () => {
      typeLine(lines[2], () => {
        // Pause, then clear and restart
        setTimeout(() => {
          clearAll();
          setTimeout(startTypingLoop, 800); // delay before restart
        }, 2000); // delay after last line types
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", startTypingLoop);


