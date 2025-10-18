// Vigenère byte-wise (mã hóa & giải mã)
function vigenereBytes(data, key, mode = 'enc') {
  if (!key) return data;
  const keyBytes = new TextEncoder().encode(key);
  return new Uint8Array(
    data.map((b, i) => {
      const k = keyBytes[i % keyBytes.length];
      return mode === 'enc' ? (b + k) & 0xFF : (b - k + 256) & 0xFF;
    })
  );
}

// Tải file Uint8Array về máy
function saveFile(data, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([data]));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

// Xử lý mã hóa / giải mã
async function handleFile(mode) {
  const file = document.querySelector('#file').files[0];
  const key = document.querySelector('#key').value;
  const status = document.querySelector('#status');

  if (!file || !key) return (status.textContent = '⚠️ Thiếu file hoặc key');

  status.textContent = '⏳ Đang xử lý...';
  const input = new Uint8Array(await file.arrayBuffer());
  const output = vigenereBytes(input, key, mode);
  const name = file.name.replace(/(\.\w+)?$/, `-${mode}$1`);
  saveFile(output, name);
  status.textContent = `✅ Hoàn tất: ${name}`;
}

// Gắn sự kiện nút
encryptBtn.onclick = () => handleFile('enc');
decryptBtn.onclick = () => handleFile('dec');
