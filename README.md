# Loot-Boi
In order to set up this server you need to do a few things.

First run `npm install` in the directory where the files are located (this requires node.js).  After you have done this you should follow this [link](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) in order to create a bot account. Then, edit `bot.js` and on line 3 put the bot token you generated into the quotes, where indicated. 

After you have done this you should be good to run `node bot.js` and the bot should run! (I only have windows computers and I don't know how to set it up for you, but if you want to try out the bot you can do so [here](https://discordapp.com/oauth2/authorize?&client_id=274697169720573952&scope=bot&permissions=0).  Thanks for checking this out.

The math that this does is:
```
Input: (X, Y)
Killer's split = X/Y * 1.3
Remaining = X - Killer
Everyone else = Remaining/(Y-1)
```
