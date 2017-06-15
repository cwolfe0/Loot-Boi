var Discord = require('discord.io');
var bot = new Discord.Client({
	token: "<put your token in the quotes>",
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
			var killSplit = X/Y*1.3;
			var elseSplit = (X-killSplit)/(Y-1);
			var kiString = "Killer's split: " + killSplit;
			var elString = "Everyone else: " + elseSplit;
			bot.sendMessage({
				to: channelID,
				message: elString
			});
			bot.sendMessage({
				to: channelID,
				message: kiString
			});
		}
	}
});


