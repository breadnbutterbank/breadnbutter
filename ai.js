async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;

  chatBox.innerHTML += `<div class="user-msg">${userText}</div>`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are Jeff, a friendly financial assistant for teens. Be simple and helpful."
        },
        { role: "user", content: userText }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  chatBox.innerHTML += `<div class="bot-msg">${reply}</div>`;

  input.value = "";
}
}
