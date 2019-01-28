const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});
         client.on('message', message => {
            if (message.content === 'welcome to GS :heart:️') {
              message.channel.send('**Welcome To Games Soceity :heart: 
                                     -     You Are in Big Society**');

              message.channel.sendFile("./photoshop.PNG");


            }
});
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
