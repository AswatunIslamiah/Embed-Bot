const express = require("express");
const app = express();

app.listen(3000,() => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("I am Aswa!");
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});


// Aswatun Islamiah Binti Hanifah //


client.on("messageCreate", message => {

  // ping test start here
  if(message.content === "ping"){
    message.channel.send("pong")
  }
  // ping test end here

  // This is the embed message section
  if(message.content === "embed"){
    let embed = new Discord.MessageEmbed()
    .setColor('#00FF00')
	  .setTitle('欢迎来到 Missing Face Discord 官方社群！')
	  .setDescription('**我们很高兴在看到你在失踪的脸官方不和!**\n\请花点时间阅读我们的规则 <#962077440082063440>\nMissing Face 最新公告在 <#962082466842152960>\n与社区的其他成员聊天在 <#962088830679269447>\n与他人分享关于 Missing Face 的任何图文在 <#962088994324230174>\nofficial-links中 查看我们的联系地址和 Missing Face 官方链接在<#962091354488442930> 和 <#962082604830588949>')
	  .addFields(
      { name: '\u200B', value: '\u200B' },
      { name: 'Missing Face 是什么？', value: 'Missing Face 是一个罕见的3D艺术收藏品，共有9,332个独特的1/1 Nfts。“Missing Face” NFT 的创作灵感来自使用日文字母的草体制作而成。 利用不同的面孔及独特的特征，并制作出每一个独特的Missing Face。' },
      { name: 'NO WARS, MAKE TOYS!', value: '\u200B' },
      { name: '欢迎来到Missing Face社区！', value: '\u200B'}
	)
	  .setImage('https://images-ext-1.discordapp.net/external/imrNHy4WpvA6WoZNYHszHtdaGEk4hb6siiIDVZaPRks/https/probot.media/IHSNUnwzYh.jpg?width=1025&height=293')
	  .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed ] } )
  }

// End of embed message
//welcome

  if(message.content === "welcome"){
    let embed = new Discord.MessageEmbed()
    .setColor('#00FF00')
	  .setTitle('Welcome To Missing Face Official Discord Server')
	  .setDescription('**We are super happy to see you on the Missing Face Official Discord!**\n\nPlease take a moment to read our rules in  <#955786970179702784>\nStay up-to-date on the Missing Face Project in <#955786972151029790>\nChat with other members of the community in <#955786976848658503>\nShare your Unique Missing Face and related memes with others in <#955786977771405323>\nView our contact address and OFFICIAL Missing Face links in <#955786994879975444> and <#955786973111533588>')
	  .addFields(
      { name: '\u200B', value: '\u200B' },
      { name: 'What is Missing Face?', value: 'A rare 3D Art Collection of 9,332 Unique 1/1 NFTs. MISSING FACE NFT collection is inspired from a face known to be drawn by Japanese school children using hiragana characters. By adding different faces and unique traits, a unique MISSING FACE is created.' },
      { name: 'NO WARS, MAKE TOYS!', value: '\u200B' },
      { name: 'Welcome to Missing Face Community!', value: '\u200B'}
	)
	  .setImage('https://images-ext-1.discordapp.net/external/imrNHy4WpvA6WoZNYHszHtdaGEk4hb6siiIDVZaPRks/https/probot.media/IHSNUnwzYh.jpg?width=1025&height=293')
	  .setTimestamp()
	.setFooter({ text: 'Please open a support ticket if have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed ] } )
  }//end
// Start of rule embed
if(message.content === "rule"){
    let embed = new Discord.MessageEmbed()
    .setColor('#00FF00')
	  .setTitle('MISSING FACE RULES')
	  .setDescription('*Please take your time to read all of our rules and regulations*\n\n**1. Be respectful.** \nPlease show respect to others and be friendly. \nNo harassment and discrimination of any kind. \nUsers with disrespectful manners or offensive speech may result in a mute or a ban. \nStrikes will be given automatically for every use of inappropriate words. \nPlease remember that 20 strikes will give you a ban.\n\n**2. No self-promotion or outsiders product advertisement.**\nPlease keep in mind that this server is not a marketplace.\n\n**3. Protect your personal information.**\nDo not share your personal data to anyone. \nAlways keep it private. \nDo not give you security key to anyone.\n\n**4. English only.**\nIf you are in a public channel, please use English. \nWe want to make sure that everyone understands each other. \nHowever, you can use whatever language you want in a private group. \nNon-English messages may be deleted without any notice.\n\n**5. Use proper profile picture, nickname, and bio.**\nMembers with inappropriate profile picture/bio will be warned, and will be kicked/banned if not changed within 24 hours. \nImproper username will be changed to a random name without any notice. \nWe encourage our members to use their own nickname.\n\n**6. No offensive content.**\nThis includes racism, homophobia, sexism, and any other sensitive topics that are considered offensive. \nPlease be kind to each other.\n\n**7. No illegal behaviour.**\nDo not share, encourage, or engage in any illegal content.\n\n**8. No Spamming.**\nDo not spam. This includes excessive use of emojis, capital letter messages, repeated messages, and any others that may disrupt the channels flow.\n\n**9. No impersonating NFT Project server staff.**\nSuch actions will result in a ban without prior warning.')
      .setTimestamp()
	.setFooter({ text: 'Please open a support ticket if have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed ] } )
}

  // End of rule

  if(message.content === "scam"){
    let embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
	  .setTitle('🚨 诈骗警报🚨')
    .setThumbnail('https://images-ext-2.discordapp.net/external/5UDjY4yPdDkv7iyGGRTefjb-RKumEO6ZKUWnaJKKtZI/https/probot.media/MwJPBQDIfs.png?width=498&height=498')
	  .setDescription('Missing Face 团队绝不会直接向您发送以下任何信息：\n\n - 我们绝不会要求您汇款\n-我们不会向您收取资金\n-我们不会要求您分享您的私钥\n-我们不会要求您查看任何不相关的网站\n-我们不会要求您参与任何不相关的空投\n\n 如果您收到上述任何一条消息，这是冒充我们团队的骗子。\n\n⚠ 请务必检查我们的官方链接<#962082604830588949>，并确保逐个检查我们的网站地址，以确保它是正确的。\n\n ℹ 我们的Discord社群设置为最高的安全设置。 但是骗子总会使用新的方法来欺骗你，所以在打开你的钱包之前要保持警惕并做充分的研究！\n\n 请注意安全')
      .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed ] } )
    
  let embed1 = new Discord.MessageEmbed()
    .setColor('#FF0000')
	  .setTitle('避免诈骗讯息')
    .setThumbnail('https://images-ext-2.discordapp.net/external/hjyObBj92o9P6Q_N5VULIqfaJtskuyEsiRRHPSwH3fo/https/probot.media/h61KDmaHx0.png?width=498&height=498')
	  .setDescription('为了避免所有诈骗讯息，请关闭服务器内成员直接讯息您。\nMissing Face 工作人员永远不会给您发消息。\n\n请检查所有官方链接<#962082604830588949> 不要点击任何不受官方承认的链接。\n\用户设置 > 隐私和安全 > 允许来自服务器成员的直接讯息 > 关闭')
      .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
//scam eng

  if(message.content === "scam1"){
    let embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
	  .setTitle('🚨 SCAM ALERT 🚨')
    .setThumbnail('https://images-ext-2.discordapp.net/external/5UDjY4yPdDkv7iyGGRTefjb-RKumEO6ZKUWnaJKKtZI/https/probot.media/MwJPBQDIfs.png?width=498&height=498')
	  .setDescription('The MISSING FACE team will NEVER direct message you any of the following：\n\n - We will NEVER ask you to send funds\n- We will NEVER ask you to share your private keys\n- We will NEVER ask you to share your seed phrase\n- We will NEVER ask you to view a website\n- We will NEVER ask you to participate in an airdrop\n\n If you receive a direct message with any of the above, then this is from a scammer impersonating our team.\n\n⚠ Always check <#955786973111533588> for our official links, and make sure to check our website address letter-by-letter to ensure it is correct.\n\n ℹ Our Discord community is set to the highest security settings. But scammers will always use new methods to trick you, so be vigilant and do your research before opening your wallet!\n\n Please be safe')
      .setTimestamp()
	.setFooter({ text: 'Please open a ticket if you have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed ] } )
    
  let embed1 = new Discord.MessageEmbed()
    .setColor('#FF0000')
	  .setTitle('Avoid Scam Direct Messages')
    .setThumbnail('https://images-ext-2.discordapp.net/external/hjyObBj92o9P6Q_N5VULIqfaJtskuyEsiRRHPSwH3fo/https/probot.media/h61KDmaHx0.png?width=498&height=498')
	  .setDescription('In order to avoid all scam direct messages, please turn off direct messages from server members.\nMissing Face staff will never message you first.\n\nCheck <#955786973111533588> for all official links and do not click on any unexpected or untrusted links.\n\nUser Settings > Privacy & Safety > Allow direct messages from server members > Off')
      .setTimestamp()
	.setFooter({ text: 'Please open a ticket if you have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }

  //end
  if(message.content === "link"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FFD700')
	  .setTitle('Missing Face Official Links')
	  .setDescription('💻 Website: https://www.Missingface.io ✨\n\n 📱・**Missing Face Social Media**\n🐤 Twitter：https://twitter.com/MissingFace\n 📷 Instagram : https://www.instagram.com/missingface_official/\n 📘 Facebook：https://www.facebook.com/Missing-Face-102355729106297\n🔴 YouTube：https://www.youtube.com/channel/UCrmgahG5r7r2nfta4mepwzw\n👾 Discord：https://discord.gg/xCfkVhTxpG')
      .setTimestamp()
	.setFooter({ text: 'All official Missing Face links may be found here. Always double-check to ensure you are not being fooled. Please open a ticket if you have any inquiry•Today at 3:33 PM', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }

///BREAK

  if(message.content === "giveaway"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FF0D01')
	  .setTitle('Missing Face is giving away 100 Whitelist Slot!\n')
    .setThumbnail('https://images-ext-1.discordapp.net/external/nJN_AInzohCQuLafAsUGzRA2zvWlA0of4F6eQ2Btclg/https/probot.media/jkOtUrKGCf.png?width=498&height=498')
	  .setDescription('\n\n**Requirement:**\n1. Invite 3 friends using your own invitation link\n2. [Submit your MetaMask Wallet Address Here](https://dyno.gg/form/c83af3ad)\n\n🗓️ Start on 10/4/22\n🗓️ End on 16/4/22\n\n**How to get your invitation link?**\n1. Hold or right click any channel, until a new menu popped up.\n2. Click ‘Invite’ and click ‘Copy Link’ and you can sent it to your friends.\n\nWinner will be announce on the 17th of April 2022 here in discord.')
      .setImage('https://media.discordapp.net/attachments/952115280962793482/962369281532780565/MF_Poster_Giveaway.jpg?width=664&height=498')
      .setTimestamp()
	.setFooter({ text: 'Please open a ticket if you have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }// giveaway cn

  if(message.content === "giveawaycn"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FF0D01')
	  .setTitle('Missing Face 将送出100个白名单!\n')
    .setThumbnail('https://images-ext-1.discordapp.net/external/nJN_AInzohCQuLafAsUGzRA2zvWlA0of4F6eQ2Btclg/https/probot.media/jkOtUrKGCf.png?width=498&height=498')
	  .setDescription('\n\n**条件:**\n1. 使用您自己的邀请链接邀请3位朋友\n2. [提交您的Metamask钱包地址](https://dyno.gg/form/c83af3ad)\n\n活动日期\n🗓️ 开始于 10/4/22\n🗓️ 结束于 16/4/22\n\n**如何获取邀请链接？**\n1. 点击任何频道，直到弹出新菜单。\n2. 点击"邀请"并点击"复制链接"，您可以将其链接发送给您的朋友。\n\n得奖者名单将于2022年4月17日在Discord社群宣布。')
      .setImage('https://media.discordapp.net/attachments/952115280962793482/962369281532780565/MF_Poster_Giveaway.jpg?width=664&height=498')
      .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
// FAQ
   if(message.content === "faq"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FF0000')
	  .setTitle('Missing Face FAQ 💬')
	  .setDescription('**What is NFT?**\nA non-fungible token (NFT) is a unique digital asset that represents ownership of real-world items like art, video clips, music, and more.\n\n**What blockchain is Missing Face based on?**\nEthereum. ERC-721 Token and file hosting is IPFS\n\n**What Is The Total Supply?**\nIn total there will be 9,999 unique NFTs with special rewards.\n\n**When will I see a picture of my Missing Face?**\nAfter successfully minted within 72 hours, the NFTs will appear in your wallet.\n\n**How to mint?**\nMinting will be available on our website on the day of launching. Whitelist will be available for early contributors, and it provides a guaranteed spot to mint the Missing Face NFT during presale, and a longer time frame to mint. Presale details will be announced closer to the mint date.\n\n**Where can I find more information?**\nJoin our Discord and open a support ticket, our team is available 24/7.\n')
      .setTimestamp()
	.setFooter({ text: 'Please open a ticket if you have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }

  //FAQ
//jump to first page
   if(message.content === "jump"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FFD700')
	  .setTitle('Welcome to Missing Face Community')
	  .setDescription('[Click Here](https://discord.com/channels/942690982212812810/955786968476827648/959003648644497408) to jump to the first chat.')
      .setTimestamp()
	.setFooter({ text: 'Please open a ticket if you have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
//jump

  //suggest
  if(message.content === "suggest"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FFD700')
	  .setTitle('说出你的建议！')
	  .setDescription('对 Missing Face 有任何建议或反馈吗？\n这是一个表达你意见的机会。我们在听。\n\n**这不是一个支持渠道。**\n问题不属于这里。\n尊重他人。批评想法，而不是人。')
      .setThumbnail('https://images-ext-2.discordapp.net/external/OlmaF8IZUJMhNmUF_DShgYK7tY9zS5C6q-uuvZUn8FQ/https/probot.media/K3iecIzAqa.webp?width=498&height=498')
      .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
//alert
  if(message.content === "alert"){
    let embed1 = new Discord.MessageEmbed()
    .setColor('#FF0000')
	  .setTitle('警报！')
    .setThumbnail('https://images-ext-2.discordapp.net/external/hjyObBj92o9P6Q_N5VULIqfaJtskuyEsiRRHPSwH3fo/https/probot.media/h61KDmaHx0.png?width=498&height=498')
	  .setDescription('您是否收到过来自某人的可疑 DM？请使用消息的屏幕截图 + 用户名进行报告，以便采取适当的措施。\n\n您可以按照以下说明禁用人们在 Discord 上向您发送 DM 的功能：\nhttps://support.discord.com/hc/en-us/articles/217916488-Blocking-Privacy-Settings-\n\n谢谢你，保持安全！')
      .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
//roadmap
   if(message.content === "roadmap"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FFD700')
	  .setTitle('MISSING FACE ROADMAP')
	  .setDescription('**LAUNCHING THE COLLECTION**\n- Launch Missing Face Social Media Channel and Website. \n- Missing Face NFTs Training in progress \n- **[MAY 2022] MISSING FACE I** - 4,666 MISSING FACE NFT 3D Art Collection\n\n**COMMUNITY BUILDING**\n- Minting rewards will be deployed \n- NFTs giveaways and special rewards for the community\n\n**WORK IN PROGRESS**\n- [JULY 2022] MISSING FACE II - 4,666 MISSING FACE NFT 3D Art Collection.\n- Collaboration with 3 Premium Fashion Brand\n- Launch  MISSING FACE x BLIND BOX \n- MISSING FACE x LIVE EVENT\n- Launch Official Merch Store. (Limited Designs And Quality)\n\n**COLLECTIBLES X MAKE TOYS**\n- 9 Limited Edition 3D Vinyl Toys')
      .setImage('https://media.discordapp.net/attachments/955786965649879100/962359575774896198/IMG-20220409-WA0052.jpg?width=747&height=498')
      .setTimestamp()
	.setFooter({ text: 'Please open a ticket if you have any inquiry', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
if(message.content === "cn"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#FFD700')
	  .setTitle('Missing Face 规划蓝图')
	  .setDescription('**推出 Missing Face 艺术收藏品**\n- 推出 Missing Face 社交媒体和网站。\n- Missing Face NFT 正在持续制作中。 \n-【2022年5月】Missing Face 第一阶段将推出 4,666 张NFT 3D艺术收藏品。\n\n**社群建设**\n- 将部署购买奖励 \n- 赠品及社群特别奖励\n\n**正在进行的工作**\n- 【2022年7月】Missing Face 第二阶段将推出 4,666 张NFT 3D艺术收藏品。\n- 将与3个高级时装品牌合作\n- 将推出 Missing Face 盲盒公仔 \n- Missing Face 将举办线下活动\n- 将开展官方周边商店。 (限量的设计和质量)\n\n**公仔收藏品**\n- 将推出9款限量版3D公仔')
       .setImage('https://media.discordapp.net/attachments/955786965649879100/962359575774896198/IMG-20220409-WA0052.jpg?width=747&height=498')
      .setTimestamp()
	.setFooter({ text: '如有任何疑问请开票', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }
//breakkkk
     if(message.content === "list"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#0193FF')
	  .setTitle('Missing Face Limited Set #001')
    .setURL('https://www.missingface.io')
	  .setDescription('`A sewing needle, used for hand-sewing, is a long slender tool with a pointed tip at one end and a hole (or eye) at the other.`')
      .setImage('https://media.discordapp.net/attachments/955786965649879100/962623890352381952/Missing_face_012.jpg?width=498&height=498')
      .setTimestamp()
	.setFooter({ text: 'Data provided by Missing Face', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
  }

    if(message.content === "trailer"){
     let embed1 = new Discord.MessageEmbed()
    .setColor('#0193FF')
	  .setTitle('Missing Face Trailer')
    .setURL('https://www.missingface.io')
	  .setDescription('Missing Face Trailer is finally released! Check out this trailer video 👉 https://cdn.discordapp.com/attachments/955786965649879100/962663696243515412/Mf_Trailer.mp4')
  .setTimestamp()
	.setFooter({ text: 'Data provided by Missing Face', iconURL: 'https://images-ext-2.discordapp.net/external/WCOOTJDg8doE2WLEuil-Z90Z7Tow7QktShu0gWu8TNM/%3Fwidth%3D498%26height%3D498/https/media.discordapp.net/attachments/606508409797476374/955857693963341874/Logo.jpg' });
    message.channel.send( { embeds : [ embed1 ] } )
    }
})

client.login(process.env.TOKEN);
