const { ready } = require('../../config/ready/index')
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(ready),
        client.user.setActivity('봇 개발중 | 개발자: 카시#7777', { type: 'WATCHING' })
    }
}