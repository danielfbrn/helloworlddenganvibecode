const messages = [
  "Hello, World!",
  "Selamat datang di JavaScript.",
  "Program pertamamu berjalan dengan sukses ✓"
];

let running = false;

function runCode() {
  if (running) return;
  running = true;

  const output = document.getElementById("output");
  output.textContent = "";

  let msgIndex = 0;
  let charIndex = 0;

  function typeNext() {
    if (msgIndex >= messages.length) {
      running = false;
      return;
    }

    const msg = messages[msgIndex];

    if (charIndex < msg.length) {
      output.textContent += msg[charIndex];
      charIndex++;
      setTimeout(typeNext, 30 + Math.random() * 20);
    } else {
      output.textContent += "\n";
      msgIndex++;
      charIndex = 0;
      setTimeout(typeNext, 300);
    }
  }

  typeNext();
}
