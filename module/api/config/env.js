require('dotenv').config({
    path: "../.env"
});
module.exports={
    cz_host: process.env.DB_HOST || '0',
    cz_port: process.env.DB_PORT || '0',
    cz_name: process.env.DB_NAME || 'null',
    cd_user: process.env.DB_USER || 'null',
    cz_pw: process.env.DB_PW || '0',
    cz_support_id: process.env.DISCORD_BOT_SUPPORT_SERVERID || '0',
    cz_prefix: process.env.DISCORD_BOT_PREFIX || '!',
    cz_token: process.env.DISCORD_BOT_TOKEN || '0',
    cz_public: process.env.DISCORD_BOT_PUBLIC_KEY || '0',
}