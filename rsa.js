

const pubKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv/zrJuOFQ/v9pOwnJkAp
k/gcnEwReDQ2MtRC21SgRmIQUEw4fjWB5UqMcud15OZpluuAJBqgqumHRjOBba/g
qJHj3TdCUsfCcT+NU+ho/jEsC9NdgWRgquROs9GzGaISAewP+Mnq/KMeTeYWorss
LLpvgAt55pWPLqKMWpM/nKWQ47qJD3Arr3lsMb8jNk9RKD+lxbTPw0KZiezHZv3O
wR4NLAg+J+L/G0QF7YjC/5Y/CCNtDtaUAbqsAtrgjjRVBZsgcJ6JPUu7lx2+IHT9
c/sDaiNv+/PF/MeS7XShc6zqBHuFqYO435eXrlYoE1gynZi66SShUt5dmjUX1950
WQIDAQAB
-----END PUBLIC KEY-----`

const priKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAv/zrJuOFQ/v9pOwnJkApk/gcnEwReDQ2MtRC21SgRmIQUEw4
fjWB5UqMcud15OZpluuAJBqgqumHRjOBba/gqJHj3TdCUsfCcT+NU+ho/jEsC9Nd
gWRgquROs9GzGaISAewP+Mnq/KMeTeYWorssLLpvgAt55pWPLqKMWpM/nKWQ47qJ
D3Arr3lsMb8jNk9RKD+lxbTPw0KZiezHZv3OwR4NLAg+J+L/G0QF7YjC/5Y/CCNt
DtaUAbqsAtrgjjRVBZsgcJ6JPUu7lx2+IHT9c/sDaiNv+/PF/MeS7XShc6zqBHuF
qYO435eXrlYoE1gynZi66SShUt5dmjUX1950WQIDAQABAoIBAQCw7Lgb13JZS2Dc
2k/dvSVT2kMreiJjPuJvhxKxo1QsaHSWOxeYn2C8WC4EOe94aSoHTbGCFBPaTWk/
NXniBkGntwJhO2pgdPxoduOb3sLa9Z+cqkUyV7mJ4unwZqCBT8z+fnfdkt59wSjN
KuvTPWAhPBJC0tCcwVj45g0n7yihBo5B75I1WNdMzhvuRC5UyRINrjRWHVvY9pv2
HIHSPk5dGlz+VkZEgLjNMe9XHDG7GSX7u7/skArIKRMxdKkV4VooyMpIKiVMi8CZ
sLCjBVGzi/75aGNSW363Zpz9syNYmZovD8WsPQypCW7Odw7MQlbMn3Jzt8mkWm12
Cl2xfkmxAoGBAOKPH0KvfYbiTN4HMpX/ggR9OrTmMcdU9aK6vi3sPJqZFV2MAlle
OhoY4fC0HPdJ/NP0qOHAX7tb4/UPxLoYqJlo7TzFVQ13OXjhvmd3oLY6SNwOP4FB
AAQYRXcdkKog4PeTZxyCTKI1g3Mitdu7204f8DkrfRrGya8kRzNsz/PlAoGBANjv
up6z1BaIfd1H9hk2R2S5XLeUpNZTzEekx5s8RC7hsnPHf1pUXEyB64xD9wBnh8FH
wJHovzARMcdY2fDJIeHhBWGerd0m728uAImHtBcacMkc1Cpd0rhdQ9GBWH95OtAR
GO9EflWFRetQaDFegbUgiSxuSoI4BHKkKpnWeJ9lAoGBAIepYfOhd83r9lFBCBZv
kCA2CJBIAui0Q/30SmrfOY7tObDxZHq1BJ+Z5LkocOvWvvEAYJwFgI2FQaP9lDRH
DbYG8X/hPcO5b42lx0jXhkF39ybl1TsFfAf3rKjd6EEnPO6isiyNDWxYFOU9lJ4G
CBTo5QSmuNvuytf4JjZx4rfNAoGAEDg8V8lSPi0OXBEZUWFBjUJesEso1+2EBIdJ
dU3YOzkcwpNT7kkIbZ/5II+kVB9pgwX+W+pvAQUIF8OI5/vh0KWmZVob3cEffcyO
tbmzuVZ8wEyrgE9rheVTQMLO/xjtUMk2eA1C9Nn2FFX6tFZAlG5OU0gbwgi2LGwh
00a51hECgYA4pKi6JR1qozpxgMVLwkbscKTB8EaWKP8Brn7oeczSdwwFoZ+F3Qpf
FPMyoyhNN2M1La/OAbZktCL7P3JOmYmO+eJQSt/HU4nMSaEXdYYu+aETANRbylBU
BUipKrYA/5BqVEpejB5SFdlceHNI55tDiT4LIc4hfFdIQcjEXZm36w==
-----END RSA PRIVATE KEY-----
`

// const pubKey = `-----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2zhHXzRFsP37MJx8iuOY
// zw6LRa8p9ZwF1w9dkyFf9EAh6ZdYR27NOgJ8xqmy9ywhqv9I9tYBfxXKVGIjW8C/
// 6wkWl11RYEjLjj9vnGYf8hdjBBDblqu0D4ykIEgiacbPMgpzuK1xwvcHBZwCBRR0
// q9eZv//y1IQg2tXavDNYm5sOpY9Ssx8kahlB1QaDv3b7LKizPtcKCfGPva8Cqj/3
// aLazrD1l5gCB2Q7kQ18Q51PHqAVn6qLJ6ivCxgPRKDSU210mdT/0zHZ/WpDUnRgy
// A8SU4bF5G8JcDrpKB9o/6HidQTtoJuRCPgCP7ptPvX5uokJe8ZzZ/zI6RhpLD9jn
// awIDAQAB
// -----END PUBLIC KEY-----`

// const priKey = `-----BEGIN PRIVATE KEY-----
// MIIEogIBAAKCAQEA2zhHXzRFsP37MJx8iuOYzw6LRa8p9ZwF1w9dkyFf9EAh6ZdY
// R27NOgJ8xqmy9ywhqv9I9tYBfxXKVGIjW8C/6wkWl11RYEjLjj9vnGYf8hdjBBDb
// lqu0D4ykIEgiacbPMgpzuK1xwvcHBZwCBRR0q9eZv//y1IQg2tXavDNYm5sOpY9S
// sx8kahlB1QaDv3b7LKizPtcKCfGPva8Cqj/3aLazrD1l5gCB2Q7kQ18Q51PHqAVn
// 6qLJ6ivCxgPRKDSU210mdT/0zHZ/WpDUnRgyA8SU4bF5G8JcDrpKB9o/6HidQTto
// JuRCPgCP7ptPvX5uokJe8ZzZ/zI6RhpLD9jnawIDAQABAoIBAF2Q08WqxeQZQ1Eo
// OW/+XIZjqsX/UWVnRobYJBRcNlxF0zOkSSWUATw1O5R/ccdVqrkVZMsV5GWdo1II
// 4RaUWlWy91V7mvQBngAEy1pxrEjj+nsNxuu0NZI9cP/mSenj1SOCmonEXb3dOb4H
// LEWGyZVe3Fy6naZfDrbYeBfDwpoG9dWh67GJN3++BjomByON7252kHMLOcnRCt2y
// vLKAk2Kf2uY4Hm2i38bkouNZlNzwuOW837aLxdfKbpbpNNpCzIUCkMXNPCCzq4hx
// yMphOEnR0iGyWDLbxJ3LJGVD1IrfY6uJagtQcBoi42wwS2SksKORoR0Vlax+CjPo
// mVk7B0ECgYEA+vsRJP3ctpGUE4zawv4+34aku/NmlAgIN1FxHn1MzFrxKXq5muZG
// mM/z0A8j88BwwXNF1PlBPTcLb+edhhw+NKMMvwqnF2OajBYvZ9Xueq6908AEshY6
// HuE/kdYQeM3MLCxAUCn8iniVhtRxLDEi0qNcLw2Evbd76OdIe4qPUakCgYEA35qb
// c+1fDA6TjLqkU/pRYHfMQi4VJyTrY6LrZDgaiojtkzd0TUVXwE+uqo2o+P8nD8+7
// BXVI1et2qQgidetryft62ly9rMbCuaUfoQQiL+Qk/jwZ/5tLxG4YQq3QbILcVp/J
// 4Ma9OKT+HMToNixVjqsCZ9cAG2HtGG1Ty1ShxPMCgYBZhVQILcScGjEHCCa/hpBG
// inAX2imsg3DqylHe3jKWcZmzgeLSLXDg8Mu2WrAoMWwGlGdEH+P1Qb0CnUrCmzBU
// 9hOF0PbokM5/SSp/jv8RI2LyNHt4ShVRDmbuTbxyWnWJC/+kmFVLztcG0J/Nc3lI
// SJyI6/l88gVwfY6NAk88gQKBgFPnoA2QNOpBTfywzJj2hTK9wVfUEvvtTqbEq6+f
// ndX+K6fiVzHno1X2kIRPQ+irVe0I9hTGPd6HzK8A7m1xObFBPIhT5JjAvLEM1SGG
// e42c/oSn6NmRXI0JAvGCZ4NQV33p18cQzFBFGVWSTdCGMlSmtvBgLRoZVO6ll5vk
// 1g8hAoGAZeyKUjqNOtHmy5Rvs3z5wlKS2O+zgvYKo2pN7giPT86u4loiqFsKrzf/
// 0fjY4IW3zyAehNfT9fzk1BABUQb0TglYFK2wqxxHpBf/g+biwcfJwV4tHaR8vqlH
// wCmhKuLA4m6iFc8deFB2nD5EcHEDHmL3ughHWih93viVkwFS8BU=
// -----END PRIVATE KEY-----
// `


const password = 'zxcv1234'

/* RSA 非對稱加密 */

// 創建 "公鑰加密" 物件 
const encrypt = new JSEncrypt()

// 設公鑰
encrypt.setPublicKey(pubKey) //You can use also setPrivateKey and setPublicKey, they are both alias to setKey

// 加密(公鑰)
const enc = encrypt.encrypt(password)
// const enc = `DRRU4SzilS/hKT9rIiQAot+iLDXh7GCfDAp8Jt+YlCsQe1ZNQVEk0Cef3mCLdfPe1zW3P0eLtz3lfFst3qrdLK8nYBohsOxFDRA3833AvuL2E2Q8jg/JmhPDuSQ++5i6XPY9OwLtd6uKNrSSPVntWke1bEbB2JEsjLDeAqPsJ0BnV1jHq9wkvbFGhUmUi3WvlSz58hwqAdkRbGEiCJexw080vUsQD/Zqck5jM/mVZCi4ny5nxwhSi9NLn9IZarFNogMo/GGXiHYVf0YF6N5DadruBaspcMG3vmhc4p2XVLO07vvdv3u0+WT8oUDv3OpnQVyDD/VtY3CCyahdKeIGlw==`

// 創建 "私鑰解密" 物件
const decrypt = new JSEncrypt()

// 設私鑰
decrypt.setPrivateKey(priKey)

// 解密(私鑰)
const dec = decrypt.decrypt(enc)

console.log(`rsa: ${ enc } ${ dec }`)

/* 數位簽章 */
// 此 library 已拔掉
