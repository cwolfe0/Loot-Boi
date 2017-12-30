# Loot-Boi
In order to set up this server you need to do a few things.

First run `npm install` in the directory where the files are located (this requires node.js).  After you have done this you should follow this [link](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) in order to create a bot account. Then, edit `config.json` and put the generated bot token where it is indicated. 

After you have done this you should be good to run `node bot.js` and the bot should run! (I only have Linux computers and I don't know how to set it up for you, but if you want to try out the bot you can add it to a server [here](https://discordapp.com/oauth2/authorize?&client_id=274697169720573952&scope=bot&permissions=0).  Thanks for checking this out.

The math that this does is:
```
Input: (X, Y)
Killer's split = X/Y * 1.3
Remaining = X - Killer
Everyone else = Remaining/(Y-1)
```
Other new commands are:
1.`!sponge This is a sentence` - > `sPoNgE THiS iS a SentEnCe  sPoNgE` (With [BetterDiscord](https://betterdiscord.net/home/) you get ![sPoNgE image](https://cdn.frankerfacez.com/emoticon/183492/1) as an emote instead of the text. 

2.`!cancer hello `:green_apple: -> :green_apple:h:green_apple:e:green_apple:l:green_apple:l:green_apple:o:green_apple:This also works with BetterDiscord and will place spaces between emotes and letters to make sure the emotes show up if you're using a BD emote instead of one from Discord/a Server.
