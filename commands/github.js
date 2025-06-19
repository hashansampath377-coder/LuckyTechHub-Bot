async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 Lucky Tech Hub Bot*

*📂 GitHub Repository:*https://github.com/luckytechhub/LuckyTechHub-Bot

*📢 Official Channel:*https://youtube.com/@luckytechhub-i9u

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Lucky Tech Hub Bot',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
