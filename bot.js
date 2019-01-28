const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('welcome to GS :heart:️,', msg => {
   if msg.send('**Welcome To Games Soceity :heart: 
          -     You Are in Big Society**');
  }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
