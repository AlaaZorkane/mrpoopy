// IMPORT SQUAD KEK
const mainconfig = require ("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const countdown = require("countdown");
const poopy = new Discord.Client({disableEveryone: true});
// -----------------------------------------------------------------
// Consts and vars
var nWatani = 0;
var wataniCountdown = countdown( new Date(2018, 5, 5, 8) ).toString();
const wataniDetect = ["watani",
                      "national",        
                      "nationale",
                      "natio"]
// ++++++++ NATIO / REGIO ++++++++
var nJihawi = 0;
var jihawiCountdown = countdown( new Date(2018, 5, 1, 8) ).toString()
const jihawiDetect = ["jihawi",
                      "regional",        
                      "regionale",
                      "regio"]
// ++++++++ Zak's Exams ++++++++
var encgCountdown = countdown( new Date(2018, 4, 14, 8) ).toString();
const encgDetect = ["encg",
                    "exams",        
                    "zak",
                    "finale"];

// -----------------------------------------------------------------
// Mr Poopy uwu
poopy.on("ready", async () => {
    console.log(`[+] >> ༼ つ ◕_◕ ༽つ ${poopy.user.username} is ON and READY ༼ つ ◕_◕ ༽つ`);
    poopy.user.setActivity('exams countdown', { type: 'WATCHING' });
});
poopy.on('message', async message => {
    // ignores the poopy
    if (message.author.poopy) return;
    // Watani Counter
    if (wataniDetect.includes(message.content.toLowerCase())){
        // Watani Embed
        const embed =  new Discord.RichEmbed()
            .setTitle("Did you ever hear the tragedy of OkCUCK The Wise? I thought not. It’s not a story Ayman nibba would tell you.")
            .setAuthor(" Ｗａｔａｎｉ　Ｃｏｕｎｔｄｏｗｎ　ヒ内・", "http://i.imgur.com/74htSTS.jpg")
            .setColor(0x00AE86)
            .setDescription("<:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586>")
            .setFooter("my wee wee too big")
            .setImage()
            .setThumbnail()
            .setTimestamp()
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .addField(`${wataniCountdown}`,
                "Until l Watani <:notlikethis:442817191147208726>")
        message.channel.send("༼ つ ◕_◕ ༽つ **_Watani Countdown Boii_** ༼ つ ◕__◕ ༽つ\n\n", { embed });
        nWatani++;
        console.log(' [+] >> I was asked about watani '+nWatani+' times!')
    }
    // Jihawi Counter
    if (jihawiDetect.includes(message.content.toLowerCase())){
        const embed =  new Discord.RichEmbed()
            .setTitle("Did you ever hear the tragedy of OkCUCK The Wise? I thought not. It’s not a story Ayman nibba would tell you.")
            .setAuthor(" Ｊｉｈａｗｉ　Ｃｏｕｎｔｄｏｗｎ　れムモ", "http://i.imgur.com/74htSTS.jpg")
            .setColor(0x00AE86)
            .setDescription("<:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586>")
            .setFooter("my wee wee too big")
            .setImage()
            .setThumbnail()
            .setTimestamp()
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .addField(`${jihawiCountdown}`,
                "Until l jihawi <:notlikethis:442817191147208726>")
        message.channel.send("༼ つ ◕_◕ ༽つ **_Jihawi Countdown Boii_** ༼ つ ◕__◕ ༽つ\n\n", { embed });
        nJihawi++;
        console.log(' [+] >> I was asked about jihawi '+nJihawi+' times!')
    }
    // ENCG counter
    if (encgDetect.includes(message.content.toLowerCase())){
        const embed =  new Discord.RichEmbed()
            .setTitle("Did you ever hear the tragedy of OkCUCK The Wise? I thought not. It’s not a story Ayman nibba would tell you.")
            .setAuthor(" ＥＮＣＧ　Ｃｏｕｎｔｄｏｗｎ　ス育ミ", "http://i.imgur.com/74htSTS.jpg")
            .setColor(0x00AE86)
            .setDescription("<:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586>")
            .setFooter("my wee wee too big")
            .setImage()
            .setThumbnail()
            .setTimestamp()
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .addField(`${encgCountdown}`,
                "Until l ENCG's exams <:notlikethis:442817191147208726>")
        message.channel.send("༼ つ ◕_◕ ༽つ **_ENCG exams Countdown Boii_** ༼ つ ◕__◕ ༽つ\n\n", { embed });
    }
    // Times Asked
    if (message.content === 'times?') {
        if (message.author.poopy) return;
        if ( nWatani == 0 ) {
            message.channel.send(' <:okcuck:442806130738200586> No one asked me about L Watani cuck <:okcuck:442806130738200586> ')
        } 
        else {
            message.channel.send(`<:woah:442772942481391623> I was asked about l Watani ${nWatani} ${(nWatani>1) ? 'times' : 'time'}! <:woah:442772942481391623>`
                                +`\n<:eww:442777400506581007> and about l Jihawi ${nJihawi} ${(nJihawi>1) ? 'times' : 'time'}! <:eww:442777400506581007>`);
            };
    }
    // Notifying
    if (message.content === '!notify exams') {
        const embed =  new Discord.RichEmbed()
                .setTitle("Did you ever hear the tragedy of OkCUCK The Wise? I thought not. It’s not a story Ayman nibba would tell you.")
                .setAuthor(" ＥＮＣＧ　Ｃｏｕｎｔｄｏｗｎ　ス育ミ", "http://i.imgur.com/74htSTS.jpg")
                .setColor(0x00AE86)
                .setDescription("<:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586>")
                .setFooter("my wee wee too big")
                .setImage()
                .setThumbnail()
                .setTimestamp()
                .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                .addField(`${encgCountdown}`,
                    "Until l ENCG's exams <:notlikethis:442817191147208726>");
        message.channel.send(" You'll start getting notified of your exams every 24h, beginning... NOW! ");
        message.author.send("To not bug this feature, please don't write another ''!notify exams''");
        message.author.send("༼ つ ◕_◕ ༽つ **_Daily reminder of your exams_** ༼ つ ◕__◕ ༽つ\n\n", { embed })
        setInterval( 
            function(){
                const embed =  new Discord.RichEmbed()
                .setTitle("Did you ever hear the tragedy of OkCUCK The Wise? I thought not. It’s not a story Ayman nibba would tell you.")
                .setAuthor(" ＥＮＣＧ　Ｃｏｕｎｔｄｏｗｎ　ス育ミ", "http://i.imgur.com/74htSTS.jpg")
                .setColor(0x00AE86)
                .setDescription("<:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586> <:okcuck:442806130738200586>")
                .setFooter("my wee wee too big")
                .setImage()
                .setThumbnail()
                .setTimestamp()
                .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                .addField(`${encgCountdown}`,
                    "Until l ENCG's exams <:notlikethis:442817191147208726>");
                message.author.send("༼ つ ◕_◕ ༽つ **_Daily reminder of your exams_** ༼ つ ◕__◕ ༽つ\n\n", { embed })
            }, 86400000);
            console.log(` [+] >> ${message.author.username} is starting to get notified!`)
    }
});

// -----------------------------------------------------------------
// END
poopy.login(token.token);