async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;
  chatBox.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

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
