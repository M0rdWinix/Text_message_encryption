#!/usr/bin/env node

import { caesarEncrypt } from "../src/JS/caesarEncrypt.js"
import { caesarDecrypt } from "../src/JS/caesarDecrypt.js"
/* import { atbash } from "../src/atbash.js" */

caesarEncrypt("Привет как дела! Я Ы @ 5", 10, "russian")
caesarDecrypt("Щътлоь фйф нохй! И Е @ 5", 10)

/* atbash("Привет как дела! Я Ы @") */

