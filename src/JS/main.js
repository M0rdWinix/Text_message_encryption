import { encryptFunction } from "./encryptFunction.js";
import { decryptFunction } from "./decryptFunction.js";
import { saveFunction } from "./save.js";
import { downloadFunction } from "./download.js";

document.getElementById('buttonEncryptId').addEventListener('click', encryptFunction)
document.getElementById('buttonDecryptId').addEventListener('click', decryptFunction)
document.getElementById('buttonSave').addEventListener('click', saveFunction)
document.getElementById('buttonDownload').addEventListener('click', downloadFunction)