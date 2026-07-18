# Day 14 Assignment: Backend Basics with Node.js

**Course Module:** B.Tech Curriculum (Web and Mobile App Development)  
**Student Name:** Rupa Reddy Kunam  
**Location:** Hyderabad, India  

---

## Part A — Theory Questions

### 1. Explain backend development and how it differs from frontend.
* **Backend Development** focuses on server-side logic, database interactions, authentication, performance, and API design. It is the "brain" of a web application that runs on a server invisible to the user.
* **Frontend Development** focuses on the user interface (UI) and user experience (UX) that runs inside the browser, rendering pages and capturing user input.
* *Difference:* Frontend is about layout and user actions; Backend is about data storage, security, and processing logic.

### 2. Explain why frontend alone is not enough, with three examples.
A frontend alone cannot perform operations that require persistent storage or secret processing:
1. **User Authentication:** Login forms require verifying passwords against a secure database; doing this in the browser exposes credentials.
2. **Persistent Storage:** An e-commerce app needs to store order history; if kept only in browser state, it wipes out on reload.
3. **Third-Party Integrations:** Fetching secret credentials or APIs (like credit card payments) must be done securely on a server to hide API keys from the public browser inspector.

### 3. Explain client-server architecture and the request-response cycle.
* **Client-Server Architecture:** A network model where clients (browsers, mobile apps) make requests for resources, and servers (Node.js backend, Apache) listen for requests, process them, and return the resources.
* **Request-Response Cycle:**
  1. The client sends an HTTP Request (comprising request line, headers, and body).
  2. The server receives and processes the request.
  3. The server sends back an HTTP Response (comprising status code, response headers, and body) to the client.

### 4. Explain what Node.js is and how it runs JavaScript outside the browser.
* **Node.js** is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine.
* **How it runs JS outside the browser:** Node wraps the V8 engine and extends JS with low-level C++ bindings to provide OS-level capabilities (like file system access, network socket connections, and process management) that are blocked inside the browser sandbox.

### 5. Explain the V8 engine and Node.js = V8 + capabilities.
* **V8 Engine:** Google's open-source, high-performance engine that compiles JavaScript into native machine code instead of executing it as raw text.
* **Node.js = V8 + capabilities:** Node.js uses the V8 engine for compiling and executing code, but adds an ecosystem of C++ wrappers providing OS features (file system `fs`, networking `http`, processes `child_process`) that JavaScript cannot access natively.

### 6. Explain modules and the difference between CommonJS and ES Modules.
* **Modules:** Code files separated to keep functions modular and reusable.
* **CommonJS:** The traditional Node.js standard. Uses `require()` to import and `module.exports` to export.
* **ES Modules (ESM):** The modern JavaScript standard. Uses `import` and `export`. Enabled in Node by setting `"type": "module"` in `package.json` or naming files with `.mjs` extensions.

### 7. Explain the event loop and event-driven architecture.
* **Event Loop:** Node.js's execution model. Node runs on a single thread. When asynchronous tasks are initiated (like database queries), Node delegates them to C++ helper threads and continues execution. When completed, callbacks are queued, and the Event Loop processes them sequentially, preventing blocking.
* **Event-Driven Architecture:** A design pattern where flow is determined by events (e.g., event emitters triggering listeners).

### 8. Explain synchronous vs. asynchronous execution and why async matters.
* **Synchronous:** Instructions are executed sequentially. Each line blocks the thread until it finishes, which slows down operations during heavy file reading or API queries.
* **Asynchronous:** Instructions start and run in the background. The main execution path continues immediately, and a callback handles results when finished.
* **Why it matters:** Asynchronous processing enables a single Node thread to handle thousands of concurrent requests without blocking.

### 9. Explain callbacks, promises, and async/await.
These are the three ways to handle asynchronous code in JavaScript:
* **Callbacks:** Passing a function as an argument to be executed after another function finishes. Too many nested callbacks lead to "Callback Hell".
* **Promises:** Objects representing the eventual completion (or failure) of an asynchronous task. Chainable via `.then()` and `.catch()`.
* **Async/Await:** Syntactic sugar built on top of Promises. `async` functions return a promise, and `await` pauses execution until the promise resolves, yielding clean code that reads like synchronous flow.

### 10. Explain HTTP methods, status codes, and JSON.
* **HTTP Methods:** Action verbs specifying the request intent:
  * `GET`: Fetch data.
  * `POST`: Submit new data.
  * `PUT`/`PATCH`: Update existing records.
  * `DELETE`: Remove records.
* **Status Codes:** Three-digit server response indicators:
  * `2xx` (e.g., `200 OK`): Success.
  * `3xx` (e.g., `301 Redirect`): Redirection.
  * `4xx` (e.g., `404 Not Found`): Client Error.
  * `5xx` (e.g., `500 Server Error`): Server Failure.
* **JSON (JavaScript Object Notation):** A lightweight, text-based data format for exchanging structured information between clients and servers.

---

## Part B — Practical Exercises

### 1 & 2. CommonJS Modules
* **Files:** [mathModule.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/mathModule.js) & [app.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/app.js)
* Exports `add` and `subtract` helper methods in `mathModule` and imports them in `app.js` using `require()`.

### 3. File System (fs) Operations
* **File:** [fileHelper.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/fileHelper.js)
* Writes, appends, and reads text content to/from a local `output.txt` file using `fs.writeFileSync`, `fs.appendFileSync`, and `fs.readFileSync`.

### 4. Path & OS Information Printing
* **File:** [pathOsHelper.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/pathOsHelper.js)
* Calls `os.platform()`, `os.cpus()`, and `os.freemem()` to output hardware specs, and exercises `path.basename()` and `path.resolve()` functions.

### 5. Event Emitter Implementation
* **File:** [eventHelper.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/eventHelper.js)
* Creates a `UserStatusEmitter` class that inherits from Node's built-in `EventEmitter`, registering and triggering listeners for `login` and `logout` actions.

---

## Part C — Backend Challenges & Part E Mini Projects

We created a combined multi-resource server in [server.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/server.js) that implements Parts C and E:

### 1. HTTP Server Setup (C1, C2, C3, C4)
* Listens on `http://localhost:3000`.
* Returns JSON responses.
* Handled routes:
  * `/` (Root Welcome JSON)
  * `/about` (Information JSON)
  * `/contact` (Developer details JSON)
  * Unmatched routes return a `404 Route Not Found` JSON payload.

### 2. Student & Course Information Backend (C5, E1, E4)
* Dynamic lookup path matching: `/api/students/:id`.
* Returns students database list (`/api/students`) and courses database (`/api/courses`).

### 3. Books API (E2)
* Lists books data JSON on `/api/books` and supports dynamic individual book lookup on `/api/books/:id`.

### 4. Node.js CLI Mini Projects (E3, E5)
* **File Notes Saver ([noteSaver.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/noteSaver.js)):** Command Line utility to add notes (`node noteSaver.js add "Text"`) and read them (`node noteSaver.js read`).
* **SysInfo Tool ([sysInfo.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/sysInfo.js)):** Prints CPU model and core counts.

---

## Part D — Node.js Asynchronous Tester

* **File:** [asyncTester.js](file:///C:/Users/kunam/.gemini/antigravity-ide/scratch/Day-14-Assignment/day14-assignment/asyncTester.js)
* Compiles all asynchronous models in one file:
  * **Callback Read:** `fs.readFile()` callback signature (D1).
  * **Promises Read:** `fs.promises.readFile().then().catch()` (D2).
  * **Async/Await Read:** `async` function mapping `await` in try-catch block (D3).
  * **Custom Delay Promise:** Resolves custom timeout timer values (D4).
  * **Sync vs Async Order Comparison:** Logs start and stop times to demonstrate blocking synchronous reads vs non-blocking asynchronous reads (D5).

---

## Part F — Research Activities

### 1. Express.js framework
* **Express.js** is a fast, unopinionated, minimalist web framework for Node.js.
* **Why it's used:**
  * Simplifies routing syntax (e.g., `app.get('/items/:id')` instead of regex url split matching).
  * Provides middleware support out of the box (for logging, body parsing, CORS).
  * Standardizes HTTP responses, header configurations, and static file serving.

### 2. REST APIs Architectural Style
* **REST (Representational State Transfer)** is an architectural style for designing networked applications.
* **Key constraints:**
  * **Statelessness:** Each request from client to server must contain all the information needed to understand and process it.
  * **Client-Server Separation:** The client and server can evolve independently.
  * **Uniform Interface:** Interacting with resources using standardized URIs and HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).

### 3. Middleware in Backend Development
* **Middleware** functions are code blocks that run sequentially during the request-response cycle, executing between the server receiving a request and sending a response.
* **Uses:** Authentication checks, requests body parsers (`express.json()`), CORS setups, and logs reporting.

### 4. SQL vs. NoSQL Databases
* **SQL (Relational Databases):** E.g., PostgreSQL, MySQL, SQLite.
  * *Structure:* Relational tables with strict schemas.
  * *Use Case:* Financial ledgers or complex join queries.
* **NoSQL (Non-Relational Databases):** E.g., MongoDB, Redis.
  * *Structure:* Document-based (like JSON), key-value pairs, or graphs.
  * *Use Case:* Unstructured data, real-time analytics, or rapid prototype scaling.

### 5. Password Hashing & Bcrypt
* **Password Hashing:** Transforming a password string into a fixed-length string of characters using a one-way mathematical function. It cannot be decrypted back.
* **Why it's used:** To protect user passwords. If a database is leaked, attackers only see hashes, not plaintext credentials.
* **Bcrypt:** A password hashing function that automatically incorporates **Salting** (appending random noise to passwords before hashing to prevent rainbow table attacks) and features a customizable **Work Factor** to slow down brute-force attacks.
