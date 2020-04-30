
// 範例參考: https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/591152/#outline__1_4

// 下面註解這部分是用 crypto 實作的部分，缺點就 padding 不能設定 

// import crypto from 'crypto'

// export function encrypt(text){
//   // new Buffer(key) 或用隨機產生 crypto.randomBytes(32), crypto.randomBytes(16)
//   const cipher = crypto.createCipheriv(algorithm, new Buffer(key), new Buffer(iv))
//   cipher.update(text, 'utf8')
//   return cipher.final('base64')
// }

// export function decrypt(text){
//   const cipher = crypto.createDecipheriv(algorithm, new Buffer(key), new Buffer(iv))
//   cipher.update(text, 'base64')
//   return cipher.final('utf8')
// }

// 以下是用 crypto-js 實作

// 加密會用到的資訊: key, iv
const algorithm = 'aes-256-cbc'
const key = 'aaaabbbbccccddddeeeeffffgggghhhh' // 或用 crypto.randomBytes(32)，因使用 aes256，需 32 Bytes
const iv = '1234567812345678' // 或用 crypto.randomBytes(16)，需 16 Bytes

const text = '123456789'
const aesEnc = aesEncrypt(text)
const aesDec = aesDecrypt(aesEnc)

console.log('aes:', aesEnc, aesDec)

function aesEncrypt(text){
  const result = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  return result.toString()
}

function aesDecrypt(text){
  const result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  return result.toString(CryptoJS.enc.Utf8)
}