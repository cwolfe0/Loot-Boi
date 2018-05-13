const Discord = require('discord.js');
const config = require ("./config.json");
const bot = new Discord.Client();
var lastmessage;

bot.on('ready',() => {
	console.log(bot.user + " connected.");
	r9k = 0;
});

bot.on('uncaughtException', (err) => {
	console.log("Uncaught exception for some reason");
});

bot.on('message', message => {
	text = message.toString();
	console.log(message.createdTimestamp);
	if(message.bot == 1 && lmtime != null){
		tdelta = lmtime-message.createdTimestamp;
		if(tdelta>5000)
			message.channel.send("slow bot");
	}
	lmtime = message.createdTimestamp;
	var command = text.substring(0,1);
	if(command == "!"){
		var msg = text.substring(1);
		var split = msg.split(" ");
		var letter = 0;

		/*The general format for a command is as follows
		 *
		 * if(split[0] == "command"){
		 * 	do whatever;
		 * }
		 */
		if(split[0] == "schedule"){
			allowedChannel = '<#127605610114973696>';
			if(message.channel == allowedChannel){
				let promise = message.channel.fetchPinnedMessages()
				promise.then(pinned =>{
					for(i = 0;i<pinned.array().length;i++){
						if(pinned.array()[i].author == message.author){
							pinned.array()[i].unpin();
						}
					}
				});
				promise.catch(console.error);
				message.pin();
		}
		}
		if(split[0] == "post-bogo"){
			for(var a = [],i = 0; i < parseInt(split[1]);i++){
				a[i] = Math.random();
			}
			message.reply(a + "\nSort these bitch.");
		}
		if(split[0] == "how2feel" || split[0] == "h2f"){
			emoji = bot.emojis; // change to message.guild.emojis for only that server
			emojiList = emoji.array();
			console.log("Fetched " + emojiList.length + " emojis.");
			reply = emoji.random().toString();
			message.channel.send("You should feel " + reply);
		}
		if(split[0] == "spin"){
			let promise = message.channel.fetchMessages({ before:message.id, limit:1 }) 
			 promise.then(messages =>{
				 lastmessage = messages.array()[0];
				 console.log(lastmessage.id);
				 lastmessage.react("a:thonkspin:405110890325868576");
				 message.delete()
				  .catch(console.error);
			 });	
			promise.catch(console.error);
			}
		if(split[0] == "bee"){
			var prString = "<a:script:396554367731499008> <a:script1:396554367538561034> <a:script2:396554367487967251> <a:script3:396554366791974922> <a:script4:396554366913609758> <a:script5:396554348148031508>"
			message.channel.send(prString);
		}
		if(split[0] == "sudo"){
			var prString = message.author + " is not in the sudoers file. This incident will be reported."
			message.channel.send(prString);
		}
		if(split[0] == "weed"){
			prString = "GayWeed RareParrot rare peruvian space grass is inbound via white courier owl RareParrot GayWeed";
			message.channel.send(prString);
		}
		if(split[0] == "sponge"){
			msg = msg.toLowerCase();
			split = msg.split(" ");
			var prString = "<:sPoNgE:400083851059396610> ";
			for(var i=1;i<split.length;i++){
				var word = split[i].split("");
				for(var o=0;o<word.length;o++){
					if(letter%2==1 && Math.floor((Math.random() * 10) + 1)<=9){
						word[o].toUpperCase();
						prString+=word[o].toUpperCase();
					}else
					prString+=word[o];
					letter++;
				}
				prString += " ";
			}
			prString += "<:sPoNgE:400083851059396610>";
			message.channel.send(prString);
			message.delete()
			 .catch(console.error);
			console.log(message.channel+","+prString);
		}
		if(split[0] == "lootsplitter"){
			var X = split[1];
			var Y = split[2];
			if(Y>X){
				var y = Y;
				Y = X;
				X = y;
			}
			var killSplit = X/Y*1.3;
			var elseSplit = (X-killSplit)/(Y-1);
			var prString = "Killer's split: " + killSplit +"\n" + "Everyone else: " + elseSplit;
			message.channel.send(prString);
			console.log("Ran loot split command on channel " + channelID + "for user " + user + ".");
		}
		if(split[0] == "cancer"){
			var len = split.length;
			var emote = split[len-1];
			var prString = emote;
			if(emote.charCodeAt(0) == 55356){
			for(var i=1;i<len-1;i++){
				for(var o=0;o<split[i].length;o++){
					prString+=split[i].charAt(o) +emote;
				}
				prString+=" ";
			}
			}else{
			for(var i=1;i<len-1;i++){
				for(var o=0;o<split[i].length;o++){
					prString+=" " + split[i].charAt(o)+ " " +emote;
				}
			}
			}
			message.channel.send(prString);
		}
	}
	if(message.mentions.everyone){
		message.react(":angery:435576109502038016")
		.then(console.log)
		.catch(console.error);
	}
});

bot.login(config.token);
