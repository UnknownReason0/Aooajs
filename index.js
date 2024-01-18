const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.TOKEN);

// const keep_alive = require('./keep_alive.js')

const keep_alive = require('./keep_alive.js')

bot.start((ctx) => {
  ctx.reply("Welcome To Systumm Bomber 🇮🇳\n\n⚠️ Note - Enter Only 10 Digital Number Don't Add Country Code\n\n 📥 Enter Target Number - ");
});

bot.on("text", (ctx) => {
  const username = ctx.message.text;
  if (username.startsWith("")) {
    const keyboard = Markup.inlineKeyboard([   

      [Markup.button.webApp("SMS Bomber", `https://bomber-tools.xyz/sms/?mobile=${username}&accesskey=bombersmm&submit=Submit`)],
      [Markup.button.webApp("Call Bomber", `https://bomber-tools.xyz/?mobile=${username}&accesskey=bombersmm&submit=Submit`)],
      [Markup.button.webApp("SMS Bomber [Mild]", `https://termux.xyz/wp-content/uploads/sms.php?mobile=${username}&submit=Bomb`)],


[Markup.button.webApp("SMS Bomber [Medium]", `https://Mix-Bomber.UnknownReason.in/?number=${username}&countnumber=50&key=%40Virtual_Bomber&submit=submit`)],



      [Markup.button.url("How To Stop Bombing 🛑", `https://t.me/Virtual_Bomber/107`)],

    ]);

    
      
    ctx.reply(`Target Mobile Number For Bombing ${username}...! \n\n🎁 Create Your Bots - @Bot_Making_Tips`, keyboard);
  } else {
    // jika dimulai dari / maka akan dianggap sebagai command
    if (username.startsWith("/")) {
        ctx.reply("Invalid Command");
    } else {
      ctx.reply("Invalid Command");
    }
  }
});

if (process.env.NODE_ENV === "production") {
  bot
    .launch({
      webhook: {
        domain: process.env.REPLIT_URL,
        port: process.env.PORT || 8080,
      },
    })
    .then(() => {
      console.info(`The bot is running on server`);
    });
} else {
  bot.launch().then(() => {
    console.info(`The bot is running locally`);
  });
          }
