const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if message.channel.send('****Welcome To Games Soceity :heart:
          -     You Are in Big Society****');
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
