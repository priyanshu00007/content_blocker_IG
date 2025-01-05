# Instagram 18+ Blocker Extension

This project is a **Chrome Extension** designed to block explicit content on Instagram. Users can enable or disable the blocker directly from the extension popup. The extension blocks 18+ content based on keywords and can be enhanced to use image recognition and custom filters.

---

## ✅ Features
- Block 18+ and explicit content on Instagram based on keywords.
- Enable/Disable blocker with a clickable button in the popup.
- Content blocking applied dynamically on Instagram pages.
- Customizable keyword list for blocking.
- Optional image-based content blocking using TensorFlow.js.

---

## 🛠️ Technologies Used
- **HTML** for building the popup interface.
- **CSS** for styling the extension.
- **JavaScript** for handling user interactions and content blocking.
- **Chrome APIs** for storage and scripting.
- **TensorFlow.js** for optional image-based content blocking.

---

## 📂 Folder Structure
```
blocker-extension/
├── manifest.json
├── popup.html
├── style.css
├── popup.js
├── content.js
└── icon.png
```

---

## 🚀 How to Run the Extension
1. **Clone the repository** or download the files.
2. Go to **chrome://extensions/** in your Chrome browser.
3. Enable **Developer Mode** (top-right corner).
4. Click **Load Unpacked** and select your extension folder.
5. The extension will appear in your browser toolbar.

---

## 📋 Key Functionalities
1. **Popup Interface**
   - The popup interface includes a button to toggle the blocker on or off.
   - The status of the blocker is displayed to the user.

2. **Content Script**
   - The content script dynamically scans Instagram pages for keywords indicating explicit content.
   - Matches are hidden from view to protect users from exposure.

3. **Chrome Storage API**
   - The extension uses the Chrome Storage API to save the state of the blocker (enabled/disabled).

---

## 🧩 Additional Enhancements
1. **Image-Based Blocking Using TensorFlow.js**
   - Integrate **TensorFlow.js** to block posts containing explicit images.
   - Requires a pre-trained model for image classification.

2. **Custom Keyword Blocking**
   - Allow users to add their own keywords to block specific content.
   - Store custom keywords using **Chrome Storage API**.

3. **Blocker Status Badge on Extension Icon**
   - Show the blocker status directly on the extension icon using **chrome.action.setBadgeText**.
   - Use different colors for enabled and disabled states.

4. **Customization Options**
   - Provide users with settings to customize the blocking behavior, such as selecting which keywords to block and enabling image-based blocking.

---

## 🔧 API Requirements for Image-Based Blocking
1. **TensorFlow.js**
   - Use the TensorFlow.js library to implement image-based content blocking.
   - Load a pre-trained model that can classify explicit images.

2. **Chrome Storage API**
   - Use the Chrome Storage API to store user preferences, such as the list of blocked keywords and the status of image-based blocking.

3. **MutationObserver API**
   - Use the MutationObserver API to dynamically monitor changes on the Instagram page and block new content as it loads.

---

## 🤝 Contribution
Feel free to contribute by adding new features, fixing bugs, or suggesting improvements.

---

## 📞 Contact
For any queries or issues, feel free to reach out!

---

Let me know if you need further assistance or enhancements!


