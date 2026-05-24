#!/usr/bin/env node

import { caesar, end } from "../src/caesar.js";
import { atbash } from "../src/atbash.js";

caesar("Привет как дела! Я Ы @", 10)
end("Щътлоь фйф нохй! И Е @", 10)

atbash("Привет как дела! Я Ы @")

