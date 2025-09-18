function generateIntro() {
  const podcast = document.getElementById("podcastName").value;
  const episode = document.getElementById("episodeTitle").value;
  const host = document.getElementById("hostName").value;
  const style = document.getElementById("style").value;

  const introTemplates = [
    `Hello there, and welcome to ${podcast}! This is another episode of ${podcast}, I’m your host ${host}, and today’s topic is “${episode}”.`,
    `Welcome back, everyone! You’re listening to ${podcast}, with your host ${host}. In today’s episode, we’ll dive into “${episode}”.`,
    `Hi friends, it’s great to have you here on ${podcast}. I’m ${host}, and today we’re exploring “${episode}”.`,
    `Greetings and welcome to another exciting episode of ${podcast}. I’m your host ${host}, and today we’re talking all about “${episode}”.`,
    `Hello listeners! You’re tuned into ${podcast}, hosted by ${host}. Our focus for today’s episode is “${episode}”.`,
    `Hey everyone, thanks for joining us at ${podcast}. I’m ${host}, and today we bring you a brand new episode: “${episode}”.`,
    `Welcome everyone to ${podcast}, where ideas meet conversations. I’m your host ${host}, and today’s discussion is about “${episode}”.`,
    `Hi there! You’re listening to ${podcast}. I’m ${host}, and I’m excited to share today’s episode with you: “${episode}”.`,
    `Good day, friends, and welcome back to ${podcast}. I’m your host ${host}, and today we’ll dive deep into “${episode}”.`,
    `Hello audience! It’s time for another episode of ${podcast}. I’m ${host}, guiding you through today’s topic: “${episode}”.`,
    `Welcome once again to ${podcast}. I’m your host ${host}, and today’s journey takes us into “${episode}”.`,
    `Hey folks, glad you’re here! This is ${podcast}, and I’m ${host}. Let’s begin today’s episode on “${episode}”.`,
    `Hello and welcome to ${podcast}, your place for fresh ideas and inspiring conversations. I’m ${host}, and today’s focus is “${episode}”.`,
    `Hi everyone, thanks for tuning in to ${podcast}. I’m ${host}, and in this episode we’ll cover “${episode}”.`,
    `Hey friends! You’re listening to ${podcast}. I’m your host ${host}, and today we’re going to talk about “${episode}”.`,
    `Welcome to another session of ${podcast}. I’m ${host}, and our topic for today is “${episode}”.`,
    `Greetings everyone! You’re here with ${host} on ${podcast}, and today we’re discussing “${episode}”.`,
    `Hello to all our amazing listeners. This is ${podcast}, I’m your host ${host}, and today’s topic is “${episode}”.`,
    `Hey there! Thanks for being here at ${podcast}. I’m ${host}, and today we’re going to dive into “${episode}”.`,
    `Welcome everyone! This is ${podcast}, I’m ${host}, and I can’t wait to get started with today’s episode on “${episode}”.`
  ];

  // Pick one randomly
  let intro = introTemplates[Math.floor(Math.random() * introTemplates.length)];

  // Add style flavor
  if (style === "professional") {
    intro += ` We’re here to bring you clear insights and valuable discussions. Let’s get started right away.`;
  } else if (style === "storytelling") {
    intro += ` Let’s unfold this story together, taking you on a journey filled with experiences and lessons.`;
  } else {
    intro += ` Get ready for an energetic and fun session packed with ideas and inspiration.`;
  }

  document.getElementById("output").innerText = intro;
}

function generateOutro() {
  const podcast = document.getElementById("podcastName").value;
  const host = document.getElementById("hostName").value;
  const style = document.getElementById("style").value;

  const outroTemplates = [
    `And there you have it — ${podcast}. We hope you’re buzzing with excitement and inspiration from what we explored today. If you loved what you heard, don’t forget to subscribe, leave a review, and share it with your friends. Catch you next time on ${podcast}. Bye for now!`,
    `That’s a wrap on today’s episode of ${podcast}. Thank you so much for tuning in. If you enjoyed this conversation, hit subscribe, share it with your circle, and join us again soon. Until then, goodbye from ${podcast}.`,
    `You’ve been listening to ${podcast}, and we truly appreciate your time. Remember to subscribe, leave a review, and spread the word. We’ll see you in the next episode of ${podcast}. Take care!`,
    `Thanks for being part of today’s journey on ${podcast}. If this episode inspired you, show us some love by subscribing and sharing it with your community. Until next time, it’s goodbye from ${podcast}.`,
    `That’s it for today’s ${podcast}. We hope you gained something valuable and uplifting. Don’t forget to subscribe and leave a review. Join us again soon on ${podcast}!`,
    `Another episode of ${podcast} comes to a close. If you enjoyed this, make sure to share it with friends and hit that subscribe button. See you again soon right here on ${podcast}.`,
    `You’ve reached the end of this episode of ${podcast}. Thanks for listening! Be sure to subscribe and spread the word. Until next time, goodbye from ${podcast}.`,
    `We hope you enjoyed today’s discussion on ${podcast}. Remember, subscribing and reviewing helps us keep going. Share this with others and meet us again in the next episode of ${podcast}.`,
    `That’s all from us today on ${podcast}. We loved having you here! Subscribe, review, and keep the conversation alive. See you in the next episode.`,
    `Thank you for joining us at ${podcast}. Your support means the world to us. Don’t forget to subscribe and share with your friends. Until next time, goodbye from ${podcast}.`,
    `We’re signing off from ${podcast}. If this episode inspired you, subscribe and tell others about us. Looking forward to having you back soon!`,
    `And with that, we conclude another chapter of ${podcast}. Stay tuned for more by subscribing and sharing this episode. Till then, it’s goodbye from ${podcast}.`,
    `It’s been a pleasure having you with us on ${podcast}. Keep the energy alive by subscribing and reviewing. We’ll catch you soon with another exciting episode.`,
    `That’s the end of today’s ${podcast}. But don’t worry — more is on the way. Subscribe, share, and leave a review to stay connected with us. Goodbye for now.`,
    `Thanks for hanging out with us on ${podcast}. If you liked today’s talk, subscribe and share it with your fellow listeners. We’ll meet again soon.`,
    `Another episode wraps up here at ${podcast}. Subscribe for more, leave a review to help us grow, and we’ll be back with more insights and stories.`,
    `That’s it from ${podcast} for today. Remember, the journey doesn’t end here. Subscribe, share, and come back next time for another great conversation.`,
    `We’ve reached the finish line of today’s ${podcast}. If you enjoyed it, show your support with a subscribe and a review. Until then, goodbye from ${podcast}.`,
    `It’s goodbye from ${podcast}, but not for long. Subscribe, share, and stay tuned for the next one. See you soon!`,
    `Thank you for being part of this episode of ${podcast}. We hope you’ll subscribe, review, and spread the word. Until the next episode, take care and goodbye!`
  ];

  // Pick one randomly
  let outro = outroTemplates[Math.floor(Math.random() * outroTemplates.length)];

  // Add style flavor
  if (style === "professional") {
    outro += ` Stay sharp, stay inspired, and we’ll meet again soon.`;
  } else if (style === "storytelling") {
    outro += ` Every ending is a doorway to a new story — see you in the next one.`;
  } else {
    outro += ` Keep the energy high and join us again soon!`;
  }

  document.getElementById("output").innerText = outro;
}
