# Backend Development – Node.js

# 1. Introduction to Node.js

### What is Node.js?

- Node.js is an **open-source, cross-platform JavaScript runtime environment** built on Google's Chrome V8 JavaScript Engine.
- It allows us to execute JavaScript code outside the browser, especially on the server side.
- Before Node.js, JavaScript was primarily used for client-side development inside web browsers.
- Node.js was introduced by **Ryan Dahl in 2009**.

**In simple words:** Node.js allows us to use JavaScript for backend development, such as handling server requests, connecting to databases, and building APIs.

### How does Node.js work?

**V8 JavaScript Engine:**
- V8 is Google's open-source JavaScript engine, developed for the Chrome browser.
- It converts JavaScript code into machine code so that the computer's processor can execute it.
- Node.js uses this engine to execute JavaScript outside the browser.

**Basic working:**

```text
JavaScript Code
      |
      v
Node.js Runtime
      |
      v
V8 JavaScript Engine
      |
      v
Machine Code
      |
      v
Execution
```

**Important:** Node.js is more than just the V8 engine. It also provides additional features such as file system access, networking, operating system interaction, and other built-in APIs.

---

# 2. Why Node.js?

Node.js is particularly useful for applications that involve frequent input/output operations.

### 1. I/O-Bound Applications

- I/O stands for Input/Output.
- These applications spend most of their time waiting for operations such as database queries, file reading, and API requests.
- Node.js handles these operations efficiently using its asynchronous, non-blocking I/O model.

**Example:** An application that retrieves user information from a database.

### 2. Data Streaming Applications

- Streaming applications process data continuously in smaller chunks instead of waiting for the entire data to be downloaded or processed.
- Node.js supports streams, which makes it useful for handling large amounts of data efficiently.

**Example:** Video streaming and file uploading applications.

### 3. Real-Time Chat Applications

- Node.js supports real-time communication using technologies such as WebSockets.
- It can handle multiple simultaneous connections efficiently.

**Example:** WhatsApp-like messaging applications and live chat systems.

### Other Use Cases

- REST API development.
- Real-time applications.
- Microservices.
- Collaborative applications.
- Backend services for web and mobile applications.

---

# 3. Important Features of Node.js

1. **Asynchronous:** Node.js can perform operations without waiting for one operation to finish before starting another.
2. **Non-Blocking I/O:** It does not block the main JavaScript execution thread while waiting for I/O operations to complete.
3. **Event-Driven:** Node.js uses events and callbacks to handle asynchronous operations.
4. **Single-Threaded JavaScript Execution:** JavaScript code normally runs on a single main thread, while Node.js uses additional mechanisms such as the event loop and libuv to handle asynchronous work.
5. **Cross-Platform:** Node.js runs on Windows, Linux, and macOS.
6. **Scalable:** It is suitable for applications that need to handle many concurrent connections.

---

# 4. NPM (Node Package Manager)

### What is NPM?

- NPM stands for **Node Package Manager**.
- It is the default package manager for Node.js.
- It helps developers install, manage, update, and share JavaScript packages and libraries.
- NPM also provides an online package registry where developers can publish and download packages.

### Common NPM Commands

| Command | Description |
|---|---|
| `npm -v` | Checks the installed NPM version. |
| `npm init` | Creates a package.json file through an interactive setup. |
| `npm init -y` | Creates package.json with default settings. |
| `npm install package-name` | Installs a package. |
| `npm uninstall package-name` | Removes an installed package. |
| `npm list` | Displays installed packages. |
| `npm install` | Installs dependencies listed in package.json. |

### What is package.json?

- `package.json` is an important configuration file in a Node.js project.
- It stores information about the project, including its name, version, dependencies, and scripts.
- It helps manage the packages required by the application.

---

# 5. REPL in Node.js

### What is REPL?

- REPL stands for **Read, Evaluate, Print, Loop**.
- It is an interactive feature of Node.js that allows us to execute JavaScript code directly in the terminal without creating a separate JavaScript file.
- It is useful for experimenting with code, testing small expressions, and debugging.

### Four Steps of REPL

**1. R – Read**
- Reads the input entered by the user.
- Parses the input and prepares it for execution.

**2. E – Evaluate**
- Executes or evaluates the entered JavaScript expression.

**3. P – Print**
- Displays the result of the evaluated expression.

**4. L – Loop**
- Repeats the process until the user exits the REPL.

### How to Open REPL?

Open the terminal and type:

```bash
node
```

### Example:

```javascript
> 10 + 20
30

> let name = "Mehnaz"
undefined

> name
'Mehnaz'

> 5 * 5
25
```

### How to Exit REPL?

```text
Ctrl + C (twice)
```

Alternatively, type:

```javascript
.exit
```

---

# 6. Creating and Running a JavaScript File Using Node.js

### Step 1: Create a JavaScript File

In Windows Command Prompt, type:

```cmd
type nul > app.js
```

Alternatively, in PowerShell:

```powershell
New-Item app.js -ItemType File
```

You can also create the file directly in VS Code.

### Step 2: Write JavaScript Code

Inside `app.js`:

```javascript
console.log("Hello from Node.js!");
```

### Step 3: Execute the File

Open the terminal in the same directory and type:

```bash
node app.js
```

**Output:**

```text
Hello from Node.js!
```

**Important:** 

- `node` is used to execute JavaScript files through Node.js.
- Unlike the browser, Node.js does not provide browser-specific objects such as `window` and `document` by default.

---

# 7. Node.js Core Modules

### What are Core Modules?

- Core modules are built-in modules provided by Node.js.
- They provide ready-made functionality for performing common operations without installing additional packages.
- We can directly import and use them in our applications.

### Commonly Used Core Modules

| Module | Description |
|---|---|
| `fs` | Used to work with files and directories (read, write, update, delete). |
| `http` | Used to create HTTP servers and handle HTTP requests and responses. |
| `path` | Used to work with file and directory paths. |
| `os` | Provides information about the operating system. |
| `events` | Used to work with event-driven programming. |
| `url` | Used to parse and work with URLs. |
| `crypto` | Provides cryptographic functionality such as hashing and encryption. |

### How to Import a Core Module?

Example using the `os` module:

```javascript
const os = require('os');

console.log(os.platform());
console.log(os.arch());
```

**Explanation:**

- `require()` is used to import a module using CommonJS.
- `os` is the module name.
- `os.platform()` returns the operating system platform.
- `os.arch()` returns the CPU architecture.

**Note:** Node.js supports both CommonJS (`require`) and ES Modules (`import`) for working with modules.

---

*End of Node.js Introduction Notes.*