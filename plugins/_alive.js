import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[ABHI-MD-v1]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I'm ABHI-MD-v1\n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│ ABHI-MD-v1
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 『♡ɪᴛⷨᴢⷷꪻ♴͢𝐀ʙʜɪ⋆͢𝐒ᴇ͛ʀ͎𠟈  ᭄
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/917356952058
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😌
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing ABHI-MD-v1! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
