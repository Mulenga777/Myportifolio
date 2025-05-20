const roles = [
  { title: "a Facilitator", description: "I deliver structured, engaging learning experiences." },
  { title: "a Trainer", description: "I help others grow their skills through hands-on guidance." },
  { title: "a Technician", description: "I solve technical problems with precision and expertise." },
  { title: "a Full Stack Web Developer", description: "I build robust websites from front to back." }
];

let index = 0;
let typingElement, descriptionElement;

document.addEventListener("DOMContentLoaded", () => {
  typingElement = document.getElementById("typing");
  descriptionElement = document.getElementById("description");
  typeRole();
});

function typeRole() {
  const role = roles[index];
  const text = role.title;
  let i = 0;

  typingElement.innerHTML = "";
  descriptionElement.innerHTML = "";

  const typingInterval = setInterval(() => {
    typingElement.textContent += text.charAt(i);
    i++;

    if (i === text.length) {
      clearInterval(typingInterval);
      descriptionElement.textContent = role.description;
      setTimeout(() => {
        index = (index + 1) % roles.length;
        typeRole();
      }, 3000);
    }
  }, 100);
}
