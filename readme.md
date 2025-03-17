# **Web Scraper Chatbot - Integration Guide & Documentation**

## **📌 Project Overview**
The Web Scraper Chatbot is designed to **scrape web data** and provide **intelligent responses** to user queries. The project consists of:
- **Backend**: Built using **Node.js (Express.js)** with a Python-based scraper (`scrapper.py`).
- **Frontend**: Implemented inside **Jupyter Notebook (`.ipynb`)**.
- **AI Model**: Utilizes **Groq API** for generating chatbot responses.

---

## **🔧 Prerequisites**
Ensure you have the following installed:

### **For Backend**
✅ Node.js (**Check with** `node -v`)
✅ npm (**Check with** `npm -v`)
✅ Python (**Check with** `python --version`)
✅ Pip (**Check with** `pip --version`)
✅ Required Node.js Packages:
   ```sh
   npm install express cors cookie-parser http-errors morgan ejs
   ```
✅ Required Python Packages:
   ```sh
   pip install requests beautifulsoup4 chromadb langchain_groq tqdm
   ```

### **For Frontend (Jupyter Notebook)**
✅ Jupyter Notebook (**Check with** `jupyter --version`)
✅ Python Libraries:
   ```sh
   pip install notebook ipywidgets
   ```

---

## **📂 Project Structure**
```
Web_Scraper_Chatbot/
│-- backend/
│   │-- app.js          # Main Express.js server
│   │-- scrapper.js     # Node.js script to call Python scraper
│   │-- scrapper.py     # Python web scraper & chatbot logic
│   │-- test1.py        # Alternative Python script
│   │-- package.json    # Node.js dependencies
│   │-- package-lock.json
│-- frontend/
│   │-- Use_Chatbot_1.ipynb  # Jupyter Notebook Frontend
```

---

## **🚀 Step 1: Run the Backend**
1️⃣ **Navigate to the backend folder**:
```sh
cd path/to/Web_Scraper_Chatbot/backend
```

2️⃣ **Install dependencies**:
```sh
npm install
```

3️⃣ **Start the backend server**:
```sh
npm start
```
Expected Output:
```
Server running on http://localhost:3000
```

---

## **🖥️ Step 2: Start Jupyter Notebook (Frontend)**
1️⃣ **Navigate to the frontend directory**:
```sh
cd path/to/Web_Scraper_Chatbot/frontend
```

2️⃣ **Start Jupyter Notebook**:
```sh
jupyter notebook
```

3️⃣ Open `Use_Chatbot_1.ipynb` and **run all cells**.

---

## **🔄 Step 3: API Integration (Backend & Frontend)**
### **Backend API Endpoints**
| Endpoint       | Method | Description |
|---------------|--------|-------------|
| `/query`      | POST   | Gets chatbot response from Groq API |
| `/crawl`      | POST   | Crawls a website and extracts links |
| `/scrape`     | POST   | Scrapes content from provided URLs |

### **Frontend API Calls (Using Python `requests`)**
#### **1️⃣ Send Query to Chatbot**
```python
import requests
query = "What is web scraping?"
response = requests.post("http://localhost:3000/query", json={"query": query})
print(response.json())
```

#### **2️⃣ Crawl URLs**
```python
homepage = "https://example.com"
response = requests.post("http://localhost:3000/crawl", json={"homepage": homepage, "maxPages": 5})
print(response.json())
```

#### **3️⃣ Scrape Website Content**
```python
urls = ["https://example.com/page1", "https://example.com/page2"]
response = requests.post("http://localhost:3000/scrape", json={"urls": urls})
print(response.json())
```

---

## **🛠 Step 4: Convert Notebook to Python Script (Optional)**
If you want to run the chatbot as a Python script instead of using Jupyter Notebook:
```sh
jupyter nbconvert --to script Use_Chatbot_1.ipynb
python Use_Chatbot_1.py
```

---

## **📌 Step 5: Deployment Guide (Optional)**
To deploy the chatbot online:
- **Backend**: Deploy Node.js on **AWS EC2, Heroku, or Railway.app**.
- **Frontend**: Convert to a web UI using Flask/Streamlit or deploy Jupyter Notebook.

---

## **⚠️ Error Handling & Troubleshooting**
### **1️⃣ Backend Not Starting?**
🔹 Run `npm install` to reinstall dependencies.  
🔹 Check for errors in `app.js`.

### **2️⃣ Jupyter Notebook Not Opening?**
🔹 Run `pip install notebook` again.  
🔹 Try `jupyter notebook --generate-config`.

### **3️⃣ API Not Responding?**
🔹 Make sure the backend is running (`npm start`).  
🔹 Use `curl` to check API manually:
```sh
curl -X POST http://localhost:3000/query -H "Content-Type: application/json" -d '{"query": "Hello"}'
```

---

## **✅ Conclusion**
You have now successfully:
- Integrated the **backend (Node.js & Python)** with the **frontend (Jupyter Notebook)**.
- Connected the **chatbot UI** with the **web scraper**.
- Tested API calls for **chatbot queries, web crawling, and scraping**.

📌 **Next Steps**: Deploy the chatbot, improve UI, or extend functionalities. 🚀

---

### **💡 Need Further Assistance?**
Feel free to ask for help in debugging, hosting, or improving the chatbot! 🎯

