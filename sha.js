
const shaText = 'sha256 test content'

const hash = CryptoJS.SHA256(shaText).toString()

console.log('sha:', hash)