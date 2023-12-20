from pwn import xor

key = b"pt,username,score,gameId,custTkn,playId,params,hasFailed"

def dec(a):
    b = [int(a[_ : _ + 2], 16) for _ in range(0, len(a), 2)]
    c = xor(b, b"Y")
    d = [int(c[_ : _ + 2], 16) for _ in range(0, len(c), 2)]
    e = xor(d, key)
    print(e)

def enc(a):
    b = xor(a, key)
    c = "".join([hex(_)[2:].zfill(2) for _ in b])
    d = xor(c, b"Y")
    e = "".join([hex(_)[2:] for _ in d])
    print(e)

enc(
    '{"pt":534612,"username":"Т. БОЛДБААТАР","score":200,"gameId":"2023_11_7","custTkn": "qUEwSKsTnW0RlWJk1unHuJ4SzpAOYA9egLwWGGkY2nja1rJtef4bidC4fPY4","playId":"1czD9bcV9gDbgXAYtTLR","params":"200 undefined True","hasFailed":false,}'
)

"dec(693b6c6f6c3a69686c686c3f6d6e6c3d6c6c6c3b6c6d683c6c3f6d686838696869696c3c69606969696969696f3b6c3c693c3b6a3d6e6c3d6c6d616d3f383b3c3b6b38693f6e3b683c3d60603f6c3f3a3c693b683c6b3b683a3f386a3b3a3b613a686c686f386d6a6838693f6938686f686c6c6f686f6d6e6d6a6c6c6c3c6d3a696f693a69616d606a38696e6d3d6d616d6e683c6c6e6c6a6c3c6a386e616c6c6e6a6c6d6c6e6c3f6c6f6a6e683c683d6c616b6d696e693f6c3b6e6a6d6d693c69686a6d6a6e686f6a3c6a616c3f6a3a693f6b6d6e6f6a6a696c6a3b6b3f693f6d6869686d6b6a3d696f6b3f6d6f6a3d683b683d6b6d6f6a6b386b6b6c6f686e696b6f6968696a6f6b386b6b6b6b6a3d683c693d683f686b6d6c6b6f6b6868386d60686f6c61696a68696b3d6b6e6861686f6a686b3b6c6c6d3f6c3f693c6861693d686b6a3f6b61693d6d3c6c3f6d6f6c6b6d6c6d3f693f6a6e6c3a6869693d6a6e6c6d696b6f616868696d6a6e6a6a6a3a6c616a6a6b3d6a3f6d6e6f3b6d61693c686a686d6968686c6a6068616d3a686f6c6b6c3c6c686d606f6068686d6b686d696d686d6961696a686f6d616d616a6c69686a6a696d6d3b6d696d6e693a6868696e6f38686d68386960686e69386d6a6c6e696a6d3d683f686969386c3c6861)"