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

const introGreetings = [
  `Hi everyone, welcome aboard! We’re truly excited to have you here with us today. Get ready for an engaging and memorable experience that’s just about to begin.`,
  `Hello friends! It’s a wonderful day to start something new. We’re thrilled to have you join us, and we can’t wait to share some amazing moments together.`,
  `Hey people, great to see you all! This space was missing your energy, and now that you’re here, things are already brighter. Let’s make this session something special.`,
  `Warm greetings to everyone. Today’s journey is going to be full of insights, stories, and inspiration. We’re honored to have you on board.`,
  `Welcome friends! From the moment you stepped in, this place feels more alive. Sit back, relax, and enjoy what we’ve prepared especially for you.`,
  `Good to see you all here. This moment is all about you, and we’re grateful to share it with you. Let’s dive deep and make it a time worth remembering.`,
  `Hi everyone! Every great journey begins with a single hello, and today it begins with you. We hope this experience leaves you smiling and inspired.`,
  `Hello people, thanks for being here today. Your energy and presence make everything more meaningful. Together, let’s create something unforgettable.`,
  `Hey friends! Your presence here today adds so much value. Let’s get ready for a wonderful time together that you won’t forget.`,
  `Welcome everyone, to a place where new ideas and fresh energy come alive. We’re so happy to share this experience with you all.`
];

const randomIntro = introGreetings[Math.floor(Math.random() * introGreetings.length)];
document.getElementById("output").innerText = randomIntro;

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

