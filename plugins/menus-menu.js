import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` *◞♥️بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ♥️◜*
 *↻╍╍━┛🕋┗━╍╍↺*
*◞{إِنَّمَا ٱلتَّوۡبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعۡمَلُونَ ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ يَتُوبُونَ مِن قَرِيبٖ فَأُوْلَٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيۡهِمۡۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا}◜*
*↻╍╍━┛🕋┗━╍╍↺*   
      

 ▢ *◞❐ Hello🤴:* ${taguser}

 
*◞❐🛑مـلاحـظـة🛑◈◜*
*◞❐ يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『apk.』◈◜*

  
  ❀° ┄──•••───╮
متــابعـة مـــن فضــلك : https://instagram.com/Abdo_ziti

*╭─────≼‎قائمةالقائمة≽*
*▢🌎${usedPrefix}menuaudios* أوديويات 
*▢🌎${usedPrefix}menuanimes* صور 
*╭─────≼‎ تحمــيل التطبيقـــات‎ ≽*
*⌲🌿${usedPrefix}apk*
*⌲🌿${usedPrefix}mediafire*
*⌲🌿${usedPrefix}dapk2*
*⌲🌿${usedPrefix}modapk*
*╭─────≼الذكـاء الاصطنــاعي≽*
*⌲📜${usedPrefix}ai*
*⌲📜${usedPrefix}chatgpt*
*⌲📜${usedPrefix}ia*
*⌲📜${usedPrefix}openai*
*⌲📜${usedPrefix}robot*
*⌲📜${usedPrefix}dx*
*⌲📜${usedPrefix}fofo*
*⌲📜${usedPrefix}simi*
*╭─────≼ ‎ توليــد الصـور ≽*
*⌲🩷${usedPrefix}remini*
*⌲🩷${usedPrefix}hd*
*⌲🩷${usedPrefix}a-img*
*⌲🩷${usedPrefix}dalle*
*⌲🩷${usedPrefix}openai3*
*⌲🩷${usedPrefix}imagen*
*╭─────≼‎ الإســــلام ≽*
*⌲🍀الله*
*⌲🍀حكمة*
*⌲🍀سورة*
*⌲🍀قران*
*⌲🍀هل*
*⌲🍀الطقس*
*╭─────≼‎ المحــولات ≽*
*⌲☄️${usedPrefix}toanime* *<صور>*
*⌲☄️${usedPrefix}togifaud* *<فيديو>*
*⌲☄️${usedPrefix}toimg* *<ملصق>*
*⌲☄️${usedPrefix}tomp3* *<فيديو>* 
*⌲☄️${usedPrefix}tomp3* *<ملاحظة صوتية>*
*⌲☄️${usedPrefix}toptt* *<فيديو / صوت>*
*⌲☄️${usedPrefix}tovideo* *<ملصق>*
*⌲☄️${usedPrefix}tts* *<تأثير> <النص>*
*╭─────≼‎ عبــارات ≽*
*⌲❄️${usedPrefix}piropo*
*⌲❄️${usedPrefix}love*
*⌲❄️${usedPrefix}abdo*
*╭─────≼ ‎ التنــزيـلات   ≽*
 *⌲💕${usedPrefix}play*
 *⌲💕${usedPrefix}song*
 *⌲💕${usedPrefix}yta* *<link>*
 *⌲💕${usedPrefix}ytv* *<link>*
 *⌲💕${usedPrefix}ytmp3* *<link>*
 *⌲💕${usedPrefix}ytmp4* *<link>*
 *⌲💕${usedPrefix}mediafire* *<link>*
 *⌲💕${usedPrefix}gdrive* *<link>*
 *⌲💕${usedPrefix}instagram* *<link>*
 *⌲💕${usedPrefix}spotify*
 *⌲💕${usedPrefix}facebook* *<link>*
  *╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢*
  *╭─────❀° ┄──•••───╮
          𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  
*⌲🐉${usedPrefix}grupos*
*⌲🐉${usedPrefix}estado*
*⌲🐉${usedPrefix}speedtest*
*⌲🐉${usedPrefix}owner*
*⌲🐉${usedPrefix}reporte*
*⌲🐉${usedPrefix}join* *<wagp_url>*
*⌲🐉${usedPrefix}addprem* *[@user]* *<days>*
*⌲🐉${usedPrefix}delprem* *<@user>*
  *╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢*
*╭─────≼ ‎جـــادي بــوت ≽*
*⌲🌺${usedPrefix}serbot --code*
*⌲🌺${usedPrefix}serbot*
*⌲🌺${usedPrefix}deletebot*
*⌲🌺${usedPrefix}bots*
*⌲🌺${usedPrefix}stop*
*⌲🌺${usedPrefix}token*
*╭─────≼ ‎البحــت عـن👇 ≽*
*⌲🪵${usedPrefix}pelisplus* *<txt>* فيلم
*⌲🪵${usedPrefix}stickersearch* *<txt>* ملصق
*⌲🪵${usedPrefix}stickersearch2*  *<txt>* ملصق2
*⌲🪵${usedPrefix}google* *<txt>* موضوع أو نص
*⌲🪵${usedPrefix}letra* *<النص>*
*⌲🪵${usedPrefix}wikipedia* *<النص>*
*⌲🪵${usedPrefix}ytsearch* *<txt>* فيديو يوتيب 
*⌲🪵${usedPrefix}playstore*  *<txt>* تطبيقات 
*╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢*
❀° ┄──•••───╮
          𝘽𝙊𝙏 𝙈𝙀𝙉𝙐     
*⎪⌲👑${usedPrefix}logos*
*⎪⌲👑${usedPrefix}ytcomment* *<النص>*
*⎪⌲👑${usedPrefix}blur*
*⎪⌲👑${usedPrefix}pixelar*
*⎪⌲👑${usedPrefix}cristianoronaldo* رونالدو
*⎪⌲👑${usedPrefix}messi* ميسي
*⎪⌲👑${usedPrefix}meme* ميمي
*⎪⌲👑${usedPrefix}dog* كلب
*⎪⌲👑${usedPrefix}cat* قط
*⎪⌲👑${usedPrefix}blackpink*
*⎪⌲👑${usedPrefix}navidad*
*⎪⌲👑${usedPrefix}itzy*
*⎪⌲👑${usedPrefix}wpmontaña*
*⎪⌲👑${usedPrefix}wallhp*
*⎪⌲👑${usedPrefix}wpaesthetic2*
*⎪⌲👑${usedPrefix}wpgaming*
*⎪⌲👑${usedPrefix}wprandom*
*⎪⌲👑${usedPrefix}wpmoto*
*⎪⌲👑${usedPrefix}pentol*
*⎪⌲👑${usedPrefix}caricatura*
*⎪⌲👑${usedPrefix}hacker*
*⎪⌲👑${usedPrefix}planeta*
*⎪⌲👑${usedPrefix}randomprofile*
┏━━━✵`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      conn.sendMessage(m.chat, {audio: { url: 'https://files.catbox.moe/us06px.mp3' }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                                                                                                                                                                                                                                                           
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] تحتوي هذه القائمة على خطأ داخلي، ولهذا السبب لم يكن من الممكن إرسالها.*', m);
  }
};                         
handler.command = /^(help)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
