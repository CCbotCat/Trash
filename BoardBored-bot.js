const Discord = require("discord.js");
const now = require('performance-now');
//NEW
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
//NEW
const bot = new Discord.Client();

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${149368356821139456}:${01234}`);
});

server.bind(01234);
// server listening 0.0.0.0:41234
//NEW

if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}

bot.on ("message", message =>
{
	let prefix = "%";
//If no prefix stop
 if(!message.content.startsWith(prefix)) return;
//If author of message with same prefix is bot with same prefix, ignore
 if(message.author.bot) return;
//Start Array of commands so its easier to input with if/else statements
 if (message.content.startsWith(prefix + "CHRIS"))
	{
//defining voice channel here with this code:
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel)
		{
      return message.reply("Please be in a voice channel first!");
    }
//Actual establishment of connection to voice channel
voiceChannel.join()
.then(connection => {
 const dispatcher = connection.playFile('C:/Bots/bot mp3s/CHRIIIIIIIIIIISS.mp3');
 dispatcher.on("end", () =>
 {
   voiceChannel.leave();
 });
})
.catch(console.error);
} else if (message.content.startsWith(prefix + "pylons"))
{
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 const dispatcher = connection.playFile('C:/Bots/bot mp3s/StarCraft - You Must Construct Additional Pylons.mp3');
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 })
   .catch(console.error);
} else if (message.content.startsWith(prefix + "BAWKSES"))
{
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 const dispatcher = connection.playFile('C:/Bots/bot mp3s/METAL BOXES!!!!1111.mp3');
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 })
   .catch(console.error);
} else if (message.content.startsWith(prefix + "BANEBLADE"))
{
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 const dispatcher = connection.playFile('C:/Bots/bot mp3s/Baneblade!!.mp3');
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 })
   .catch(console.error);
} else if (message.content.startsWith(prefix + "Mah Boi"))
{
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 const dispatcher = connection.playFile('C:/Bots/bot mp3s/Mah Boi, This Peace Is What All True Warriors Strive For!.mp3');
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 })
   .catch(console.error);
} else if (message.content.startsWith(prefix + "Spanish Inquisition"))
{
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 const dispatcher = connection.playFile("C:/Bots/bot mp3s/The Spanish Inquisition.mp3");
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 })
   .catch(console.error);
} else if (message.content.startsWith(prefix + "thermaldrill"))
{
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 const dispatcher = connection.playFile("C:/Bots/bot mp3s/Guys, The Thermal Drill. Go Get It.mp3");
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 })
   .catch(console.error);
 }
 else if (message.content.startsWith(prefix + "YEE"))
 {
 	const voiceChannel = message.member.voiceChannel;
 	if (!voiceChannel)
 	{
 		return message.reply("Please be in a voice channel first!");
 	}
 //Actual establishment of connection to voice channel
 	voiceChannel.join()
 	.then(connection =>
 		{
 		 const dispatcher = connection.playFile("C:/Bots/bot mp3s/I dinosauri antropomorfi hanno il sangue nel ritmo.mp3");

 		 dispatcher.on("end", () =>
 		 {
 			 voiceChannel.leave();
 		 });
    })
    .catch(console.error);
  } else if (message.content.startsWith(prefix + "WTF"))
{
	message.channel.sendMessage(" Commands with '%' prefix: CHRIS, pylons, BAWKSES, BANEBLADE, Mah Boi, Spanish Inquisition, thermaldrill, YEE");
}
});
bot.on("ready", () =>
{
  console.log("Rockin n rollin");
});
bot.on('unhandledRejection', e => { console.error("Keep your sandwich. Uncaught promise error: \n" + err.stack); });
bot.on('warn', e => { console.warn("Uh oh."); });
bot.on('debug', e => { console.info("constructing additional pylons..."); });
//bot token goes here:
bot.login()
