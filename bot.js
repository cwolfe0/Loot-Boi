const Discord = require('discord.js');
const config = require ("./config.json");
const bot = new Discord.Client();

bot.on('ready',() => {
	console.log(bot.user + " connected.");
	r9k = 0;
});

bot.on('message', message => {
	text = message.toString();
	console.log(message.content);
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
		if(split[0] == "bee"){
			var prString = "<a:script:396554367731499008> <a:script1:396554367538561034> <a:script2:396554367487967251> <a:script3:396554366791974922> <a:script4:396554366913609758> <a:script5:396554348148031508>"
			message.channel.send(prString);
		}
		if(split[0] == "sudo"){
			var prString = user + " is not in the sudoers file. This incident will be reported."
			message.channel.send(prString);
		}
		if(split[0] == "weed"){
			prString = "GayWeed RareParrot rare peruvian space grass is inbound via white courier owl RareParrot GayWeed";
			message.channel.send(prString);
		}
		if(split[0] == "sponge"){
			msg = msg.toLowerCase();
			split = msg.split(" ");
			var prString = "sPoNgE ";
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
			prString += " sPoNgE";
			message.channel.send(prString);
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
});

bot.login(config.token);
