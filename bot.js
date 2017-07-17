var https = require('https');
var fs = require('fs');
var file = fs.createWriteStream("cards.json");
var request = https.get("https://api.hearthstonejson.com/v1/20022/enUS/cards.json", function(response) {
  response.pipe(file);
});
const Discord = require('discord.io');
const config = require ("./config.json");
const bot = new Discord.Client({
	token: config.token,
	autorun: true
});


bot.on('ready',function() {
	console.log(bot.username + " - (" + bot.id+ ") connected.");
	r9k = 0;
});

bot.on('message', function(user, userID, channelID, message, event) {
	var command = message.substring(0,1);
	if(command == "[" && message.substring(message.length-1,message.length)){
		bot.sendMessage({
			to: channelID,
			message: "HS Card detected"
		});
	}
	if(command == "!"){
		var msg = message.substring(1);
		var split = msg.split(" ");
		var letter = 0;
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
			bot.sendMessage({
				to: channelID,
				message: prString
			});
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

