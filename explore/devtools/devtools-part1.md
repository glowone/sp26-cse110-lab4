# Lab 4 DevTools - Part 1: Network Tab Analysis

## Questions about the Downloaded JSON File

### 1. What is the name of the new json file?

**Answer:** `cityLots.json`

**Explanation:** Visible in the Network tab file list, this is the JSON file that was downloaded by the page.

---

### 2. Which file initiated the download of the new file?

**Answer:** `pageScript.bundle.js`

**Explanation:** Looking at the Network tab's Initiator column, the pageScript.bundle.js file initiated the download of cityLots.json. This bundled JavaScript file contains the code that fetches the JSON data.

---

### 3. What is the file size of the downloaded file?

**Answer:** Approximately **246 bytes** (uncompressed) or **548 kB total transferred** for all requests

---

### 4. How long did it take to download?

**Answer:** Less than a second

---

### 5. What was your User-Agent for the browser that made the request?

**Answer:** Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36

---

### 6. In the response header, what type of server did it come from?

**Answer:** GitHub.com

---

### 7. When was the file last modified?

**Answer:** Tue, 21 Apr 2026 05:07:14 GMT

---

### 8. What was the Content-Type of the file?

**Answer:** `application/json`

---

### 9. Which function inside the initiating file made the request?

**Answer:** expose.js:2

---