const enter = document.querySelector("textarea");
const sent = document.querySelector("button");
const chatbox = document.querySelector(".chatbox");

const botReplies = [
  "Hello! How can I help you today?",
  "That's an interesting question!",
  "Hmm, let me think...",
  "Tell me more!",
  "Haha, you're funny! 😄",
  "Nice to hear from you 😊",
  "I'm here to help you — just ask!",
  "Let’s figure this out together!"
];


function getRandomReply() {
  const index = Math.floor(Math.random() * botReplies.length);
  return botReplies[index];
}


function addMessage(text, className) {
  const li = document.createElement("li");
  li.classList.add("chat", className);

  const p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);

  chatbox.appendChild(li);
  chatbox.scrollTop = chatbox.scrollHeight;
}

sent.addEventListener("click", () => {
  const userMsg = enter.value.trim();
  if (userMsg !== "") {
    addMessage(userMsg, "outgoing");
    enter.value = "";

    setTimeout(() => {
      const botReply = getRandomReply();
      addMessage(botReply, "incoming");
    }, 1000);
  }
});

enter.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sent.click();
  }
});