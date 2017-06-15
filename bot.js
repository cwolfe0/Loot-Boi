var Discord = require('discord.io');
var bot = new Discord.Client({
	token: "INSERT_TOKEN_HERE",
	autorun: true
});
bot.on('ready',function() {
	console.log(bot.username + " - (" + bot.id+ ") connected.");
	r9k = 0;
});

bot.on('message', function(user, userID, channelID, message, event) {
	//var messageID = rawEvent.d.ID;
	if(message.substring(0,1) =="!"){
		var command = message.substring(1);
		var split = command.split(" ");
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
			bot.sendMessage({
				to: channelID,
				message: prString
			});
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
			bot.sendMessage({
				to: channelID,
				message: prString
			});
		}
	}
});


