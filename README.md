# Custom-browser
This is a simple front-end project that mimics a basic web browser using HTML, Tailwind CSS, and JavaScript. It supports multiple tabs, independent history stacks, back/forward navigation, and real-page loading via <iframe>.

🔐 Note: Due to browser security policies, some websites (like google.com) block loading in <iframe>. Use pages like https://example.com or your own hosted pages.

📁 Files Included
File	Purpose
index.html	The main user interface (styled with Tailwind)
app.js	Core logic for tabs, history, and navigation

🧩 Features
📑 Tabbed Browsing: Create and switch between multiple tabs.

🔙 Back / Forward: Navigate through each tab's history.

🌐 URL Bar: Type and load URLs (only those embeddable in iframes).

🧠 Independent History: Each tab remembers its own navigation state.

📦 Lightweight: Pure front-end, no backend or dependencies.

🚀 Getting Started
Download or clone this repository.

Open index.html in any modern browser.

💡 How It Works
URLs entered are stored in an array per tab.

Navigation updates the current history index.

Pages are loaded inside an <iframe>.

If a website blocks iframing, a fallback message is shown.

⚠️ Limitations
Sites with X-Frame-Options or Content-Security-Policy: frame-ancestors none won’t load inside the iframe.

This browser does not execute JavaScript on external pages or handle cookies/session storage.

🔧 Future Enhancements (Suggestions)
🗑️ Tab closing

📌 Bookmarks

🧠 Persistent history with localStorage

🌍 In-app proxy to bypass iframe blocking (server-side)

📸 Screenshot (optional)
csharp
Copy
Edit
[You can add a screenshot of the app here]
👨‍💻 Author
Kalicharan (Charan)
Made with ❤️ using pure HTML, JS, and TailwindCSS.
