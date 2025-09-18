function generateIntro() {
  const podcast = document.getElementById("podcastName").value;
  const episode = document.getElementById("episodeTitle").value;
  const host = document.getElementById("hostName").value;
  const style = document.getElementById("style").value;

  let intro = "";

  if (style === "professional") {
    intro = `🎙️ Welcome to ${podcast}! This is your host ${host}, and today we dive into '${episode}'. Let's get started!`;
  } else if (style === "storytelling") {
    intro = `Once upon a conversation... Welcome to ${podcast}, hosted by ${host}. In this episode, '${episode}', a new journey begins.`;
  } else {
    intro = `Welcome to ${podcast}. I'm ${host}, and today's episode is '${episode}'. Let's begin!`;
  }

  document.getElementById("output").innerText = intro;
}

function generateOutro() {
  const podcast = document.getElementById("podcastName").value;
  const host = document.getElementById("hostName").value;
  const style = document.getElementById("style").value;

  let outro = "";

  if (style === "professional") {
    outro = `🔥 That’s a wrap on this episode of ${podcast}. Thanks for tuning in with ${host}. Don’t forget to subscribe!`;
  } else if (style === "storytelling") {
    outro = `And so, another chapter closes. This was ${podcast}, with your host ${host}. Until next time, keep listening.`;
  } else {
    outro = `That’s the end of today’s ${podcast}. Thanks for joining me, ${host}. See you in the next one!`;
  }

  document.getElementById("output").innerText = outro;
}