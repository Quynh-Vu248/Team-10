// script.js - Vigenere byte-wise entirely client-side

function vigenereBytesUint8(inputUint8, keyStr, mode='enc') {
  if (!keyStr) return inputUint8;
  const keyBytes = new TextEncoder().encode(keyStr);
  const out = new Uint8Array(inputUint8.length);
  for (let i = 0; i < inputUint8.length; i++) {
    const k = keyBytes[i % keyBytes.length];
    if (mode === 'enc') out[i] = (inputUint8[i] + k) & 0xFF;
    else out[i] = (inputUint8[i] - k + 256) & 0xFF;
  }
  return out;
}

function downloadUint8AsFile(uint8, filename) {
  const blob = new Blob([uint8], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.getElementById('encryptBtn').addEventListener('click', () => processFile('enc'));
document.getElementById('decryptBtn').addEventListener('click', () => processFile('dec'));

async function processFile(mode) {
  const fi = document.getElementById('file');
  const key = document.getElementById('key').value;
  const status = document.getElementById('status');
  status.style.color = '';
  if (!fi.files.length) { status.textContent = 'Chưa chọn file.'; return; }
  if (!key) { status.textContent = 'Chưa nhập key.'; return; }

  const file = fi.files[0];
  status.textContent = 'Đang đọc file...';
  try {
    const arrayBuffer = await file.arrayBuffer();
    const input = new Uint8Array(arrayBuffer);
    status.textContent = 'Đang xử lý...';
    // xử lý
    const out = vigenereBytesUint8(input, key, mode);
    const ext = file.name.includes('.') ? file.name.substring(file.name.lastIndexOf('.')) : '';
    const base = file.name.replace(ext, '');
    const outName = `${base}-${mode}${ext}`;
    downloadUint8AsFile(out, outName);
    status.style.color = 'green';
    status.textContent = `Xong — file đã tải xuống: ${outName}`;
  } catch (e) {
    console.error(e);
    status.style.color = 'red';
    status.textContent = 'Lỗi khi xử lý file.';
  }
}
