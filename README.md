# Crypto-test <!-- omit in toc -->

加密測試

- [參考](#參考)
- [編碼](#編碼)
- [對稱加密](#對稱加密)
- [非對稱加密](#非對稱加密)
- [單向雜湊(Hash)](#單向雜湊hash)
- [加密 & 雜湊](#加密--雜湊)
- [數位簽章(Digital Signature)](#數位簽章digital-signature)
- [RSA 加密資料過長怎麼半](#rsa-加密資料過長怎麼半)
- [RSA + AES](#rsa--aes)
- [Library](#library)

## 參考

- 密碼學、Hash、編碼: https://medium.com/d-d-mag/%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%A0%E9%9C%80%E8%A6%81%E6%87%82%E4%B8%80%E9%BB%9E%E5%AF%86%E7%A2%BC%E5%AD%B8-709c090452aa
- 加密與雜湊的差別: https://blog.m157q.tw/posts/2017/12/25/differences-between-encryption-and-hashing/
- 數位簽章: https://ithelp.ithome.com.tw/articles/10188465

## 編碼

- 其實不算加密，只是將資料編碼方便計算、或是在網路上傳遞。實際使用時很常看到，所以特別提出來
- 像是 UTF-8, ASCII, Unicode, base64 編碼等等。

## 對稱加密

- 只有一把私鑰，加解密的規則
  - 私鑰加密 => 私鑰解密
- 目前 DES 已被 AES 取代
- AES 詳細說明與範例: https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/591152

## 非對稱加密

- 有公鑰 & 私鑰，加解密的規則，不過通常是**公鑰加密 => 私鑰解密**
  - 公鑰加密 => 私鑰解密 (通常會是這個)
  - 私鑰加密 => 公鑰解密
- RSA 是目前最有影響力的公鑰加密算法，缺點是有限制加密資料大小
- 2009 年 12 月 12 日，RSA-768（768 bits, 232 digits）也被成功分解了，目前比較安全的 key 長度為 RSA-1024 或 RSA-2048

## 單向雜湊(Hash)

- 加密與雜湊的差別，參考:https://blog.m157q.tw/posts/2017/12/25/differences-between-encryption-and-hashing/
- 簡單來說，雜湊就是把輸入值透過演算法"單向"轉換成一串雜湊值，雜湊值理論上是無法逆向得到原始的明文的，根本無法拿來做資料的傳遞
- 目前 MD5, SHA1 都已經被淘汰，請使用比較安全的 SHA2

此外，還有一個問題要解決。雖然 hash 值不可逆，但駭客能夠預先生成常見明文與 hash 的對照表（又叫做彩虹表），如果找到 hash 能夠對應的明文就能夠破解密碼。  
因此，比較好的做法是雜湊時加上一組亂數（通常被稱作 salt）一起加密。讓駭客沒辦法輕易透過預先生成的雜湊表來查詢明文。

## 加密 & 雜湊

- 雜湊和加密很容易被人搞混的原因，主要是因為，雜湊和加密通常是一起使用的，常常被拿在一起講，所以久而久之就搞混了
- 加密需要密鑰，且可以透過解密得到原文。（加密可逆）
- 雜湊不需密鑰，無法逆向解出原始輸入。（雜湊不可逆）
- 舉例
  - 傳送方: SHA 將原文轉換成雜湊值 => RSA 公鑰加密雜湊值 => 傳送資料
  - 接收方: 接收資料 => RSA 私鑰解密拿到雜湊值 => 將原文用 SHA 轉換雜湊值 與 接收到的雜湊值做檢查

## 數位簽章(Digital Signature)

- 主要使用雜湊與加密演算法的組合，雜湊可以確保完整，透過安全的金鑰加密雜湊則可以確保正確的識別

## RSA 加密資料過長怎麼半

- 對資料進行 hash ，因 hash 長度是固定的，**但是 hash 過後的資料無法還原**
- 使用 RSA + AES 的方式，下面說明

## RSA + AES

- 當資料太長、加密過慢時可以用此方法
- 參考: https://ithelp.ithome.com.tw/articles/10188528
- 簡單來說:
  - 加密: RSA 對 AES 的 key 加密，AES 對資料加密
  - 解密: RSA 解密 AES 的 key，取得 key 後，AES 對資料解密

## Library

- jsencrypt: https://github.com/travist/jsencrypt
- crypto-js: https://github.com/brix/crypto-js
