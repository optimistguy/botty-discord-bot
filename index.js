const Discord = require('discord.js');
const {Client, Attachment, RichEmbed} = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Botty Stuff!', { type: 'PLAYING' });
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send(`pong! ${message.author}`);
  }
  if (message.content === `botty!avatar`) {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
    message.reply(`Nice Avatar DUDE ${message.author}`);
  }
  // Rip emote command
  if (message.content === 'botty!rip') {
        // Create the attachment using Attachment
        const ripA = new Attachment('./emotes/rip.png');
        // Send the attachment in the message channel
        message.channel.send(ripA);
    }
  // Thinking Emote Command
  if (message.content === 'botty!thinking') {
          // Create the attachment using Attachment
          const thinkingA = new Attachment('./emotes/thinking.gif');
          // Send the attachment in the message channel
          message.channel.send(thinkingA);
      }
      if (message.content === 'botty!100') {
              // Create the attachment using Attachment
              const thinkingA = new Attachment('./emotes/animated_100.gif');
              // Send the attachment in the message channel
              message.channel.send(thinkingA);
          }
  // Help Command
  if (message.content === 'botty!help'){
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Botty Bot Is here to HELP!",
    description: "Sending some helps",
    fields: [{
        name: "botty!ping",
        value: "Make me say pong!"
      },
      {
        name: "botty!helpEmotes",
        value: "I will send you some help about Emotes"
      },
      {
        name: "botty!8ball",
        value: "I will do the 8 ball thing for ya!"
      },
      {
        name: "botty!coinFlip",
        value: "I will do the flip a coin for ya!"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Josh"
    }
  }
});
  }
  // Help Emotes Command
  if(message.content === 'botty!helpEmotes'){
    message.channel.send({embed: {
    color: 3447999,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Botty Bot Is here to HELP!",
    description: "About Emotes",
    fields: [{
        name: "botty!rip",
        value: "I will send a *RIP* emote"
      },
      {
        name: "botty!thinking",
        value: "I will send a *THINKING* emote"
      },
      {
        name: "botty!100",
        value: "I will send a *100* emote"
      },
      {
        name: "Emotes will be added",
        value: "I will add more Emotes"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Josh"
    }
  }
});
  }
  if(message.content === 'botty!8ball'){
    //Just The arrays/list of available answers
var list = [
    'You are stupid doing that',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Dont count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];
//The randomizer    Math.floor = rounds to the nearest integers     Math.random = Generates random number between a number between 0 and 1      list.length = Grabs the length of the list
var rand = Math.floor(Math.random() * list.length);

//Send's a reply to the user who wrote the message
message.reply(list[rand])
  }

  if (message.content === 'botty!coinFlip'){
    var randCoin = Math.floor(Math.random() * 2) + 1;
    if (randCoin === 1){
      message.reply(`You fliped a **HEAD**, ${message.author}`);
    } else {
      message.reply(`You fliped a **TAIL**, ${message.author}`);
    }
  }
  // End
});


client.login('tokenhere'); //Token Spot
