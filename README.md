<div align="center">

# 🎬 YT Auto Scroll

### ⏭️ Auto-scroll for YouTube Shorts

`🧩 MV3 Extension` · `💾 Global State` · `🚫 No Background Script`

</div>

---

<div align="center">

### ✨ Features

🔁 Auto-clicks **Next** when a Short finishes<br/>
🌍 **Global** on/off state across all tabs<br/>
⚡ Instant sync via `chrome.storage.onChanged`<br/>
🪶 Minimal — popup + content script only

</div>

---

<div align="center">

### 📁 Structure

</div>

```
📦 yt-auto-scroll
 ┣ 📜 manifest.json
 ┣ 🖼️ index.html
 ┣ 🎨 style.css
 ┣ 🧠 script.js      →  popup toggle
 ┣ ⚙️ content.js     →  Shorts logic
 ┗ 🟦 icon.png
```

---

<div align="center">

### 🚀 Install

1️⃣ Open `chrome://extensions`<br/>
2️⃣ Enable **Developer mode** 🛠️<br/>
3️⃣ Click **Load unpacked** 📂<br/>
4️⃣ Pick the project folder ✅

</div>

---

<div align="center">

### 🎛️ How It Works

</div>

```
🖱️ Popup toggle
   └─▶ 💾 chrome.storage.local
          └─▶ 📡 storage.onChanged
                 └─▶ ⚙️ content.js (do the work)
```

---

<div align="center">

**Made with 🩷 for endless Shorts**

</div>
