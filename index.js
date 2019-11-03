var TelegramBot = require('node-telegram-bot-api');
var token = '1035793997:AAFYnqYiEqD-Hb0-BEzV63xFORabnEOeDJs';
var bot = new TelegramBot(token, {polling:true});
const smiley = "\u{1F604}";
const rooster = "\u{1F413}";
const white = "\u{26AA}";
const red = "\u{1F534}";
const vs = "\u{1F19A}";
bot.onText(/\/start/, (msg) => {

	const opts = {
		reply_markup: {
		    resize_keyboard: true,
		    keyboard: [[rooster + red],[rooster + white]]
		}
	};

bot.sendMessage(msg.chat.id, "Welcome to Cock Fight Rooster! " + rooster + vs + rooster);
bot.sendMessage(msg.chat.id, "Are you Ready?");

function introBet() {
	bot.sendMessage(msg.chat.id, "Bet on your rooster! click the button to choose", opts);
}

setTimeout(introBet, 10000);

function initStart() {
	bot.sendMessage(msg.chat.id, "Finalize your bet, the game begin in a moment");
}

setTimeout(initStart, 15000);

function gameStart() {
	bot.sendMessage(msg.chat.id, "Fight begins! Result in a moment");
}

setTimeout(gameStart, 30000);

function gameResult() {
	bot.sendMessage(msg.chat.id, "Red Rooster Wins!" + red + rooster + " " + "Congratulations");
}

setTimeout(gameResult, 40000);



});
bot.on('message', (msg) => {
    
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
}

// if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
// 	bot.sendMessage(msg.chat.id,"<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>" ,{parse_mode : "HTML"});
// }

var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name); 
} 

});
