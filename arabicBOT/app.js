const Discord = require('discord.js');
const client = new Discord.Client();







































// جميع حقوق هذا الملف محفوظة ,
client.login('token'); // هنا تضع توكان البوت الخاص بك


































client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('By : RoyalDev');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('⚙            https://discord.gg/hKDyGNN | سيرفر الدعم');
  console.log('⚙            snapchat : ibarmoda');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  

  });

// playing
client.on('ready', () => {
                                                                                                                                                                                                                                                                              client.user.setGame(`-help | By RoyalDev-`,'https://www.twitch.tv/v5bz');
});


    client.on('message', message => {
     if (message.content === "-id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الحــساب")
                                          .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});

   client.on('message', message => {
     if (message.content === "-help") {
message.author.send(".Best Commands" + `  **

 ".General Commands"
🔧               -ping | سرعة الأتصال
🔧               -id | معلومــات عــن حســابــك
🔧               -say | يكرر الكلام الذي تقولة
🔧               -avatar | صورتك في الدسكورد
🔧               -embed | يكرر الكلام بطريقة أخرى 



".Server Commands" 
🔧               -server | معلومات عن السيرفر
🔧               -clear | حذف الرسائل 




)
".Bot Commands", 

🔧               -bot | عدد السيرفرات التي تستخدم البوت





".support"
⚙            https://discord.gg/hKDyGNN | سيرفر الدعم 
⚙            snapchat : ibarmoda


© Made By :<@!222825921311277059> ™.


**`);
    }
});



// -ping
   client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(`© Made By :<@!222825921311277059> ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')

  message.channel.sendEmbed(embed);
    }
});

// -say
var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

 
    client.on('message', message => {
     if (message.content === "-server") {
 var servername = message.guild.name;
var serverowner = message.guild.owner;
var memberCount = message.guild.memberCount;
var id = message.guild.id;
var region = message.guild.region;
var channels = message.guild.channels.size;
var roles = message.guild.roles;
var createdAt = message.guild.createdAt;
var verificationLevel = message.guild.verificationLevel;
var defaultChannel = message.guild.defaultChannel;
    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`)         
               .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')
          .setColor(0x00AE86)
                          .addField('|- رقم الشــخصي الخاص بـ السيرفر ',`**(${message.guild.id})**`)
                          .addField('|- الشات الأساسي في السيرفر',`**${message.guild.defaultChannel}**`, true)
                          .addField('|- عدد اعضاء السيرفر',`**[${memberCount}]**`)
                          .addField('|- الدوله الي موجود عليها السيرفر', `**[${message.guild.region}]**`)
                          .addField('|- عدد الرومات الموجودة في السيرفر',`**[${message.guild.channels.size}]**`, true)
                          .addField('|- صاحب السيرفر',`**${message.guild.owner}**`)
                          .addField('|- تاريخ افتتاح السيرفر',`**${message.guild.createdAt}**`)
      message.channel.send({embed})
} 
});



client.on('message', message => {
  if (true) {
if (message.content === '-info') {
      message.author.send('🚬 | https://discord.gg/kZKFSgr | لـ أي استفسار').catch(e => console.log(e.stack));

    }
   } 
  });

   client.on('message', message => {
     if (message.content === "-info") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
               .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')
  .addField("Done | تــــم" , "✉ | تم ارسالك في الخاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});
   client.on('message', message => {
     if (message.content === "-help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')
  .setColor("#9B59B6")
  .addField("Done | تــــم" , "✉ | تم ارسالك في الخاص")

     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});


   client.on('message', message => {
     if (message.content === "-bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#9B59B6")
               .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')
  .addField("``عــدد الســيرفــرات الموجود فيها البوت``" , client.guilds.size)

     
     
  message.channel.sendEmbed(embed);
    }
});

  
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© RoyalDev ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

