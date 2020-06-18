
// const signPubKey = `-----BEGIN PUBLIC KEY-----
// MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN/+jKUvo0JVJ7UaU6iRqLP4PO
// CYU68sCqZGNsdBo86/D8BM4VqxrOZaP0cYkfVZ2dS/Q4kxNCQddo6PrrI5cKnwWu
// uhZOOOv4ZWrEJv3ptqWPfxT4AFJfffk+mSihDhFmTCbuZPBHqX7mhHWeqjxP/NEa
// eWB33kW9JLThrC7QXwIDAQAB
// -----END PUBLIC KEY-----`
// const signPriKey = `-----BEGIN RSA PRIVATE KEY-----
// MIICXgIBAAKBgQDN/+jKUvo0JVJ7UaU6iRqLP4POCYU68sCqZGNsdBo86/D8BM4V
// qxrOZaP0cYkfVZ2dS/Q4kxNCQddo6PrrI5cKnwWuuhZOOOv4ZWrEJv3ptqWPfxT4
// AFJfffk+mSihDhFmTCbuZPBHqX7mhHWeqjxP/NEaeWB33kW9JLThrC7QXwIDAQAB
// AoGAW0vAavKtarDjxj2gAbpDplUG4Ch+AGsXkiydl7I48qkKi1bB0v6bCcAoEqzC
// vb1e9hh0ayJblbDCe/9NPSrvw/yt7MQmTj3sfBSvLMksEl7SB6pyPn8m8Owjakdm
// Cl33bYm91RVkJVZruVgiAFbq3GyblgTvhBQi6tH9/oXJE5ECQQDq1vwUFO4O67/6
// R2IE/C4j8FmgM3Wr8eUUsiwoCKZ4t0a6MBx8bDB14pN5eVeSo8VsaMJs7kxPCPFQ
// D/2JAMMXAkEA4I+sYZCSX/iI3I/p5jSlWGi8lkgReQnzjIV/TduO+67vZFBKnyEc
// 4a9PxjLbq0DmzCpyd9a4F3BZYgDTE1zJ+QJBAJ/BRlTG9Dd0SvIQs26euyi5rc7c
// kvU4plVQ69cEI3NFgrjQV+CQnNrlGtvtHxTjkj8weOsvpPuzIq4LYrdbrFsCQQC/
// SkQqnC/EZv+W+1ThEAmlhRrY3a1csRhxpKqsFRL43Kz6g9b9NQTYTzGigWJUwKWa
// V7JI2XTaKo9Jh7BGdy1pAkEA14sUun5vPMMivhy4sbixYm92ShqV59zIdqU1MQgt
// JPsb28jrLUhrkkCftBggExC6S80yb0xvVMGvjsKeFOZzjQ==
// -----END RSA PRIVATE KEY-----
// `

// 官方範例: https://nodejs.org/api/crypto.html#crypto_class_sign
// 但還未找到方法載入 crypto
// const crypto = require('crypto')

// const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// })

// const sign = crypto.createSign('SHA256')
// sign.update('some data to sign')
// sign.end()
// const signature = sign.sign(privateKey)

// const verify = crypto.createVerify('SHA256')
// verify.update('some data to sign')
// verify.end()
// console.log(verify.verify(publicKey, signature))

// Prints: true