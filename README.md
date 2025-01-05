Instagram 18+ Blocker Extension

This project is a Chrome Extension designed to block explicit content on Instagram. Users can enable or disable the blocker directly from the extension popup. This document outlines the features, necessary APIs, additional enhancements, and things needed to further improve the extension.

✅ Features

Block 18+ and explicit content on Instagram based on keywords.

Enable/Disable blocker with a clickable button in the popup.

Content blocking applied dynamically on Instagram pages.

🧩 Things Needed for Implementation

Chrome APIs

chrome.storage for storing user preferences (enabled/disabled state).

chrome.scripting for injecting content scripts dynamically.

chrome.action for handling the popup interface.

Permissions

storage to save user preferences.

activeTab to interact with the current tab.

scripting to inject scripts into the Instagram page.

HTML/CSS/JavaScript Files

popup.html for the extension UI.

style.css for styling the popup.

popup.js to handle UI interactions and storage.

content.js to perform content blocking on the Instagram page.

Manifest File

manifest.json to define extension metadata, permissions, and content scripts.

Icons

Add icons of different sizes (16x16, 48x48, 128x128) for branding the extension.

🔧 Additional Enhancements

Here are some additional features that can be implemented to make the extension more powerful:

1. Image-Based Blocking Using TensorFlow.js

Use TensorFlow.js to implement image recognition.

Block posts containing explicit images by detecting nudity or inappropriate content.

Requires integrating a pre-trained model for image classification.

2. Custom Keyword Blocking

Allow users to input their own custom keywords to block specific content.

Store custom keywords in Chrome Storage and dynamically apply them.

UI enhancement: Add a section in the popup to manage keywords.

3. Blocker Status Badge on Extension Icon

Show the blocker status directly on the extension icon.

Use chrome.action.setBadgeText to display "ON" or "OFF".

Use different badge colors to indicate the state (e.g., green for enabled, red for disabled).

4. Advanced Content Filtering

Implement natural language processing (NLP) to analyze text content more effectively.

Use APIs like Google Vision or Clarifai for better content filtering.

📚 APIs & Libraries to Explore

TensorFlow.js - For image recognition and filtering.

Chrome Storage API - For saving user preferences and custom keywords.

Chrome Scripting API - For injecting content blocking scripts.

Natural Language Processing Libraries - For advanced text filtering.

Clarifai API - For detecting explicit content in images.

🚀 Future Enhancements

Multi-language support for blocking explicit content in different languages.

User analytics to track how many posts are blocked.

Export/Import Settings to save user configurations.

Auto-update keywords from an external source to keep the blocker up to date.

📋 Things to Test

Verify that the blocker works correctly on different Instagram pages.

Test the enable/disable functionality from the popup.

Ensure that custom keyword blocking is working as expected.

Test image-based blocking (if implemented).

Check the badge status on the extension icon.

📂 Folder Structure

blocker-extension/
├── manifest.json
├── popup.html
├── style.css
├── popup.js
├── content.js
└── icon.png

💻 Development Tips

Use Chrome Developer Tools to debug your extension.

Enable Developer Mode in chrome://extensions/ to load your unpacked extension.

Test on Instagram pages to verify content blocking functionality.

🧪 Testing Tools

Postman - For testing APIs if you plan to use external content detection services.

Chrome DevTools - For debugging content scripts.

TensorFlow.js Model Maker - For creating custom image detection models.

🤝 Contribution

Feel free to contribute to this project by adding new features, fixing bugs, or suggesting improvements.

📞 Contact

For any queries or issues, feel free to reach out!
