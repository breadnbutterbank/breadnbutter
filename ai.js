async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;
  chatBox.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are Jeff, a friendly financial advisor for students."
        },
        { role: "user", content: userText }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  chatBox.innerHTML += `<p><strong>Jeff:</strong> ${reply}</p>`;
  input.value = "";
}
