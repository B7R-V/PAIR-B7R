// plugins/ق11.js
// ✧ 2B - YoRHa Unit No.2 Type B - قسم المطور 🔧 (للمطور فقط)

import { existsSync } from 'fs'
import { join } from 'path'
import { prepareWAMessageMedia, generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import { theme } from '../core/theme.js';

let handler = async (m, { conn, usedPrefix: _p, isROwner, isOwner }) => {
  // ✅ التحقق: إذا كان المستخدم ليس مطور → لا يحدث شيء
  if (!isROwner && !isOwner) {
    return;
  }

  try {
    // حساب البنج
    let old = performance.now()
    let neww = performance.now()
    let speed = (neww - old).toFixed(4)

    // معلومات المستخدم
    const user = await conn.getName(m.sender)
    const fecha = new Date().toLocaleDateString('ar-SA', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'    
    })
    const hora = new Date().toLocaleTimeString('ar-SA')

    await conn.sendMessage(m.chat, { react: { text: '🔧', key: m.key } });

    // صورة قسم المطور
    const imageUrl = 'https://file.garden/aauvg01sjleV_ic1/nier%20automata%20by%20GoddessMechanic.jpg';
    const imageRes = await fetch(imageUrl);
    const imageBuffer = Buffer.from(await imageRes.arrayBuffer());
    const media = await prepareWAMessageMedia({ image: imageBuffer }, { upload: conn.waUploadToServer });

    let menuText = `   ⃝⃘︢︣֟፝ · ͟͟͞͞𝐘𝐨𝐑𝐇𝐚· ͟͟͞͞➳ 𝟐𝐁
𓉘᳟ี ⃞̸͢𑁃 ̚𓉝᳟ี ͟͟͞͞┄꯭๋━┄꫶︦┄꯭๋━┄꫶︦┄꯭๋━┄꫶︦━┄꫶︦┄꯭๋━┄꯭๋━┄꫶︦┤
│
│ ❄️ *قـسـم الـمـطـور*
│
│ ❄️ ═══════════════ ❄️
├ׁ̟̇˚₊· ͟͟͞͞➳❥ الاسم: ${user}
├ׁ̟̇˚₊· ͟͟͞͞➳❥ الرقم: ${m.sender.split('@')[0]}
├ׁ̟̇˚₊· ͟͟͞͞➳❥ البينج: ${speed}ms
├ׁ̟̇˚₊· ͟͟͞͞➳❥ التاريخ: ${fecha}
├ׁ̟̇˚₊· ͟͟͞͞➳❥ الوقت: ${hora}
│
│ ❄️ ═══════════════ ❄️
│ 🔧 *أوامر المطور:*
│
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بلوقن
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بلوقن لست
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بلوقن عرض
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بلوقن حذف
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بنج
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}حظر_جروب
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}اطلع
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}اخر30
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}كود
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بصمه
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}تنفيذ
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}بوست
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}اعاده
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}لفل_اب
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}سكربتي
├ׁ̟̇˚₊· ͟͟͞͞➳❥ ${_p}هش
│
│ ❄️ ═══════════════ ❄️
│ ⚠️ *جميع الأوامر للمطور فقط*
│
𓉘᳟ี ⃞̸͢𑁃 ̚𓉝᳟ี ͟͟͞͞┄꯭๋━┄꫶︦┄꯭๋━┄꫶︦┄꯭๋━┄꫶︦━┄꫶︦┄꯭๋━┄꯭๋━┄꫶︦╯`;

    const channel = "https://whatsapp.com/channel/0029VbCJtCILI8YQz9VFQQ2w"
    const developerNumber = "201002435496"
    const developerContact = `https://wa.me/${developerNumber}`

    const nativeFlowPayload = {
      body: { text: menuText },
      footer: { text: '❄️ 2B - YoRHa Unit No.2 Type B ❄️' },
      header: {
        hasMediaAttachment: true,
        subtitle: '🔧 قـسـم الـمـطـور',
        imageMessage: media.imageMessage
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: "📂 عـرض الأقـسـام",
              sections: [
                {
                  title: "اخـتـر الـقـسـم الـمـطـلـوب",
                  rows: [
                    { "title": "👮‍♂️ قـسـم الأدمن", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق1" },
                    { "title": "🎨 قـسـم الاسـتـيـكـر", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق2" },
                    { "title": "🎮 قـسـم الألـعـاب", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق3" },
                    { "title": "🔍 قـسـم الـبـحـث و الـتـحـمـيـل", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق4" },
                    { "title": "🧰 قـسـم الأدوات", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق5" },
                    { "title": "📚 قـسـم الـمـانـجـا", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق6" },
                    { "title": "🤖 الـذكـاء الاصـطـنـاعـي", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق7" },
                    { "title": "🎌 قـسـم الـنـقـابـات", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق8" },
                    { "title": "🖼️ قـسـم الـصـور", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق9" },
                    { "title": "⛄ قـسـم الـتـسـلـيـة", "description": "❄️ 2B - YoRHa Unit No.2 Type B ❄️", "id": ".ق10" }
                  ]
                }
              ]
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: "📢 الـقـنـاة",
              url: channel
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: "👑 الـمـطـور",
              url: developerContact
            })
          }
        ],
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: `⚡ ${speed}ms`,
            url: developerContact,
            copy_code: `المطور: +${developerNumber}`,
            expiration_time: Date.now() + 86400000
          },
          bottom_sheet: {
            in_thread_buttons_limit: 1,
            divider_indices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 999],
            list_title: "❄️ قـائـمـة أقـسـام 2B",
            button_title: "▻ عـرض الأقـسـام ⚡"
          },
          tap_target_configuration: {
            description: "ابـدأ الآن مـع 2B - YoRHa Unit",
            canonical_url: developerContact,
            domain: "https://ryzobot.vercel.app",
            button_index: 0
          }
        })
      }
    };

    const interactiveMessage = proto.Message.InteractiveMessage.fromObject(nativeFlowPayload);
    const fkontak = await makeFkontak();
    const msg = generateWAMessageFromContent(m.chat, { interactiveMessage }, { 
      userJid: conn.user.jid, 
      quoted: fkontak 
    });
    
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

  } catch (e) {
    console.error('[2B-Developer]', e);
    await conn.sendMessage(m.chat, { 
      text: theme.build([
        { type: 'title', text: '❄️ 2B: "خطأ"' },
        { type: 'warning', text: 'حدث خطأ في تحميل قسم المطور' }
      ])
    }, { quoted: m });
  }
}

async function makeFkontak() {
  try {
    const res = await fetch('https://file.garden/aauvg01sjleV_ic1/nier%20automata%20by%20GoddessMechanic.jpg');
    const thumb2 = Buffer.from(await res.arrayBuffer());
    return {
      key: { participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: '2B' },
      message: { locationMessage: { name: '❄️ 2B - YoRHa Unit No.2 Type B ❄️', jpegThumbnail: thumb2 } },
      participant: '0@s.whatsapp.net'
    };
  } catch {
    return undefined;
  }
}

handler.help = ['ق11'];
handler.tags = ['main'];
handler.command = ['ق11'];
handler.rowner = true;

export default handler;