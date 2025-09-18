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

  const outroGreetings = [
  `Thank you everyone for being part of today’s episode. Your time and attention mean the world to us, and we hope you leave with new energy and inspiration.`,
  `We’re so grateful, friends, that you joined us today. Every moment we share with you adds more meaning to this podcast. Until next time, stay positive and keep smiling!`,
  `A big thanks to all our listeners. You are the reason we create, share, and keep moving forward. We can’t wait to meet you again in the next episode.`,
  `Thanks people, for tuning in and giving us your precious time. We hope today’s session brought value to your day. Stay connected and stay inspired.`,
  `We deeply appreciate you, everyone, for being with us till the end. Each episode feels special because of your support and presence.`,
  `Grateful thanks to our amazing audience. Without you, none of this would be possible. We’ll be back soon with more stories, ideas, and conversations.`,
  `Thank you dear listeners for joining us. Your support keeps this journey alive. Take care, keep learning, and see you in the next episode.`,
  `Thanks again to each one of you. This podcast is more than just words — it’s a shared journey, and we’re honored to share it with such wonderful people.`,
  `We appreciate you, everyone, for your time and energy today. Keep spreading positivity, and remember, the best is yet to come.`,
  `Big thanks, friends, for listening in. May your days be filled with joy and growth until we meet again in the next episode.`
];

const randomOutro = outroGreetings[Math.floor(Math.random() * outroGreetings.length)];
document.getElementById("output").innerText = randomOutro;

}


