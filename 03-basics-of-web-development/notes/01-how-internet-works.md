# 01. How Does the Internet Work?

## 🌐 Complete Flow (When you type a URL)

DNS Lookup: "google.com" → 142.250.190.78 (IP address)

TCP Connection: Browser connects to server port 443 (HTTPS)

HTTP Request: GET / HTTP/1.1 Host: google.com

Server Response: HTML/CSS/JS + Status 200 OK

Browser Render: Parse HTML → CSSOM → DOM → Render Tree


## 🔍 Real Example (Inspect in Chrome DevTools)

Type: example.com
Status: 200 OK
Request Headers: User-Agent, Accept, Cookie
Response Headers: Content-Type: text/html, Cache-Control
Time: 250ms (DNS: 20ms + TTFB: 150ms + Download: 80ms)

text

## 🛠️ Tools to see this live
- Chrome DevTools → Network tab
- `curl https://api.github.com/users/octocat`