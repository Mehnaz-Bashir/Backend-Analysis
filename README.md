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
# 8. File System Module (fs) in Node.js

### What is the fs Module?

- `fs` stands for File System.
- It is a built-in Node.js core module.
- It allows us to perform operations on files and directories, such as creating, reading, writing, updating, and deleting files.
- We don't need to install any external package to use it.

### Importing the fs Module

```javascript
const fs = require("fs");
```

## Common fs Module Methods

### 1. mkdirSync()

- Used to create a new directory (folder).
- Sync stands for synchronous execution.

```javascript
fs.mkdirSync("mehnaz");
```

This creates a folder named `mehnaz`.

### 2. writeFileSync()

- Used to create a new file and write data into it.
- If the file already exists, its previous content gets overwritten.

```javascript
fs.writeFileSync("mehnaz/bio.txt", "My name is Mehnaz Bashir");
```

This creates `bio.txt` inside the `mehnaz` folder and writes the given text into it.

### 3. appendFileSync()

- Used to add new content to an existing file.
- It does not remove the previous content.

```javascript
fs.appendFileSync("mehnaz/bio.txt", " Learning Node.js");
```

This adds the new text at the end of the existing file.

### 4. readFileSync()

- Used to read the content of a file.
- We can use `utf8` encoding to get the output as a readable string.

```javascript
const data = fs.readFileSync("mehnaz/bio.txt", "utf8");

console.log(data);
```

**Output:**

```text
My name is Mehnaz Bashir Learning Node.js
```

### 5. renameSync()

- Used to rename an existing file or move it to another location.

```javascript
fs.renameSync("mehnaz/bio.txt", "mehnaz/myBio.txt");
```

This renames `bio.txt` to `myBio.txt`.

### 6. unlinkSync()

- Used to delete a file.

```javascript
fs.unlinkSync("mehnaz/myBio.txt");
```

This deletes the `myBio.txt` file.

### 7. rmdirSync()

- Used to delete an empty directory (folder).

```javascript
fs.rmdirSync("mehnaz");
```

This deletes the `mehnaz` folder if it is empty.

---

## Important Notes

- `Sync` means synchronous execution.
- Synchronous operations execute one operation at a time and block further JavaScript execution until the operation finishes.
- `fs` is a built-in Node.js module, so no installation is required.
- `writeFileSync()` overwrites existing file content.
- `appendFileSync()` adds content without removing existing content.
- `unlinkSync()` deletes files, whereas `rmdirSync()` removes empty directories.


---

# 9. Synchronous vs Asynchronous in Node.js

## What is Synchronous (Sync)?

- Synchronous means executing operations one after another.
- The next operation waits until the current operation is completed.
- It blocks the execution of further JavaScript code until the current operation finishes.
- It is also known as **blocking execution**.

### Example: readFileSync()

```javascript
const fs = require("fs");

console.log("1. Start");

const data = fs.readFileSync("bio.txt", "utf8");

console.log(data);

console.log("3. End");
```

**Execution Order:**

```text
1. Start
    |
    v
Read bio.txt
    |
    v
Wait until file is completely read
    |
    v
Print file data
    |
    v
3. End
```

**Explanation:**

- First, `Start` is printed.
- Then `readFileSync()` reads the file.
- JavaScript waits until the file-reading operation is completed.
- After reading the file, its content is printed.
- Finally, `End` is printed.

---

## What is Asynchronous (Async)?

- Asynchronous means an operation can start without blocking the execution of the remaining JavaScript code.
- The program does not need to wait for the current operation to finish before executing the next statement.
- Once the operation is completed, its callback function is executed with the result.
- It is also known as **non-blocking execution**.

### Example: readFile()

```javascript
const fs = require("fs");

console.log("1. Start");

fs.readFile("bio.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

console.log("3. End");
```

**Execution Order:**

```text
1. Start
    |
    v
Start reading bio.txt
    |
    v
Continue executing next statement
    |
    v
3. End
    |
    v
File reading completes
    |
    v
Callback executes and prints data
```

**Explanation:**

- First, `Start` is printed.
- Then `readFile()` starts reading the file.
- Since it is asynchronous, JavaScript does not wait for the file-reading operation.
- The next statement executes and prints `End`.
- When file reading is completed, the callback function executes and prints the file content.

---

## Difference Between Synchronous and Asynchronous

| Synchronous (Sync) | Asynchronous (Async) |
|---|---|
| Executes operations sequentially. | Allows other code to execute while waiting. |
| Blocks further JavaScript execution during the operation. | Does not block the main JavaScript thread while waiting for I/O. |
| The next operation waits for the current operation. | The next operation can execute without waiting for the current I/O operation. |
| Easier to understand. | Requires handling callbacks, promises, or async/await. |
| Can reduce application responsiveness. | Helps improve application responsiveness. |
| Example: `readFileSync()` | Example: `readFile()` |

---

## Synchronous and Asynchronous File System Methods

| Synchronous Methods | Asynchronous Methods |
|---|---|
| `mkdirSync()` | `mkdir()` |
| `writeFileSync()` | `writeFile()` |
| `appendFileSync()` | `appendFile()` |
| `readFileSync()` | `readFile()` |
| `renameSync()` | `rename()` |
| `unlinkSync()` | `unlink()` |
| `rmdirSync()` | `rmdir()` |

**Note:** The asynchronous callback-based methods generally accept a callback function to handle the result or error.

---

## Real-Life Example

### Synchronous

Imagine you order food at a restaurant and stand at the counter until your food is ready. You do not do anything else during that time.

### Asynchronous

Imagine you order food, sit at your table, and use your phone while waiting. When your food is ready, the waiter informs you.

---

## Why is Asynchronous Programming Important in Node.js?

- Node.js is designed to handle multiple concurrent operations efficiently.
- Asynchronous programming prevents the main JavaScript thread from being blocked while waiting for I/O operations.
- It helps applications remain responsive.
- It is particularly useful for server-side applications that handle multiple client requests.

## Important Points to Remember

1. Sync means blocking execution.
2. Async means non-blocking execution.
3. `readFileSync()` is a synchronous method.
4. `readFile()` is an asynchronous method.
5. Synchronous operations wait for completion before moving to the next statement.
6. Asynchronous operations allow other JavaScript code to execute while waiting for I/O completion.
7. Asynchronous programming is important in Node.js backend development.

---

---

# 10. OS Module in Node.js

## What is the OS Module?

- OS stands for **Operating System**.
- It is a built-in core module in Node.js.
- It provides information about the operating system on which the Node.js application is running.
- It helps us access system-related information such as platform, CPU architecture, memory, hostname, and more.
- We don't need to install any external package to use it.

### Importing the OS Module

```javascript
const os = require("os");
```

## Commonly Used OS Module Methods

### 1. os.arch()

- Returns the CPU architecture of the operating system.

```javascript
console.log(os.arch());
```

**Example Output:**
```text
x64
```

### 2. os.platform()

- Returns the operating system platform.

```javascript
console.log(os.platform());
```

**Example Output:**
```text
win32
```

### 3. os.hostname()

- Returns the hostname of the computer.

```javascript
console.log(os.hostname());
```

**Example Output:**
```text
DESKTOP-ABC123
```

### 4. os.cpus()

- Returns information about the CPU cores available on the system.
- It provides details such as CPU model, speed, and times.

```javascript
console.log(os.cpus());
```

### 5. os.totalmem()

- Returns the total amount of system memory (RAM) in bytes.

```javascript
console.log(os.totalmem());
```

### 6. os.freemem()

- Returns the amount of currently free system memory in bytes.

```javascript
console.log(os.freemem());
```

### 7. os.homedir()

- Returns the home directory of the current user.

```javascript
console.log(os.homedir());
```

**Example Output:**
```text
C:\Users\hp
```

### 8. os.uptime()

- Returns the system uptime in seconds.
- It tells us how long the system has been running.

```javascript
console.log(os.uptime());
```

## Important OS Module Methods – Summary

| Method | Description |
|---|---|
| `os.arch()` | Returns CPU architecture. |
| `os.platform()` | Returns operating system platform. |
| `os.hostname()` | Returns computer hostname. |
| `os.cpus()` | Returns CPU information. |
| `os.totalmem()` | Returns total RAM in bytes. |
| `os.freemem()` | Returns free RAM in bytes. |
| `os.homedir()` | Returns user's home directory. |
| `os.uptime()` | Returns system uptime in seconds. |

### Example: Using Multiple OS Methods

```javascript
const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("System Uptime:", os.uptime());
```

---

# 11. Path Module in Node.js

## What is the Path Module?

- The Path module is a built-in core module in Node.js.
- It provides utilities for working with file and directory paths.
- It helps us create, manipulate, join, and extract information from file paths.
- It handles differences in path formats between operating systems such as Windows and Linux.
- We don't need to install any external package to use it.

### Importing the Path Module

```javascript
const path = require("path");
```

## Commonly Used Path Module Methods

### 1. path.basename()

- Returns the last portion of a given path.
- Generally, it returns the file name, including its extension.

```javascript
const path = require("path");

const filePath = "D:/Backend-Analysis/index.js";

console.log(path.basename(filePath));
```

**Output:**
```text
index.js
```

### 2. path.dirname()

- Returns the directory name of a given path.
- It removes the last portion (file name) from the path.

```javascript
const path = require("path");

const filePath = "D:/Backend-Analysis/index.js";

console.log(path.dirname(filePath));
```

**Output:**
```text
D:/Backend-Analysis
```

### 3. path.extname()

- Returns the extension of a file, including the dot.

```javascript
const path = require("path");

const filePath = "D:/Backend-Analysis/index.js";

console.log(path.extname(filePath));
```

**Output:**
```text
.js
```

### 4. path.join()

- Joins multiple path segments into a single path.
- It automatically handles the appropriate path separator according to the operating system.

```javascript
const path = require("path");

const filePath = path.join("folder", "student", "bio.txt");

console.log(filePath);
```

**Output on Windows:**
```text
folder\student\bio.txt
```

### 5. path.resolve()

- Converts a sequence of path segments into an absolute path.
- It resolves the path relative to the current working directory if the path is not already absolute.

```javascript
const path = require("path");

const filePath = path.resolve("folder", "student", "bio.txt");

console.log(filePath);
```

**Example Output:**
```text
C:\Users\hp\Backend-Analysis\folder\student\bio.txt
```

### 6. path.parse()

- Returns detailed information about a given path in the form of an object.
- It provides properties such as root, dir, base, ext, and name.

```javascript
const path = require("path");

const filePath = "D:/Backend-Analysis/index.js";

console.log(path.parse(filePath));
```

**Output:**
```javascript
{
  root: 'D:/',
  dir: 'D:/Backend-Analysis',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
```

### 7. path.isAbsolute()

- Checks whether a given path is absolute or relative.
- Returns `true` if the path is absolute; otherwise, returns `false`.

```javascript
const path = require("path");

console.log(path.isAbsolute("D:/Backend-Analysis/index.js"));
console.log(path.isAbsolute("index.js"));
```

**Output:**
```text
true
false
```

## Important Path Module Methods – Summary

| Method | Description |
|---|---|
| `path.basename()` | Returns the file name from a path. |
| `path.dirname()` | Returns the directory portion of a path. |
| `path.extname()` | Returns the file extension. |
| `path.join()` | Joins multiple path segments. |
| `path.resolve()` | Generates an absolute path. |
| `path.parse()` | Returns detailed path information as an object. |
| `path.isAbsolute()` | Checks whether a path is absolute. |

---

# 12. Difference Between OS and Path Modules

| OS Module | Path Module |
|---|---|
| Provides information about the operating system. | Provides utilities for handling file paths. |
| Used to access system-related information. | Used to manipulate file and directory paths. |
| Example: `os.platform()` | Example: `path.join()` |
| Example: `os.arch()` | Example: `path.basename()` |

## Important Points to Remember

1. Both `os` and `path` are built-in Node.js core modules.
2. We can import them using `require()`.
3. The OS module provides system information.
4. The Path module helps us work with file and directory paths.
5. `path.join()` joins path segments.
6. `path.resolve()` generates an absolute path.
7. `path.basename()` extracts the last portion of a path.
8. `path.extname()` extracts the file extension.

---

---

# 12. Import and Export Modules in Node.js

## What are Modules?

- Modules are reusable blocks of code that help us organize our application.
- Instead of writing all the code in a single file, we can divide it into multiple files.
- We can export functions, variables, and objects from one file and use them in another file.
- This makes the code more organized, reusable, and easier to maintain.

## Why do we use Modules?

1. **Code Reusability:** We can use the same code in multiple files.
2. **Code Organization:** We can divide a large application into smaller files.
3. **Maintainability:** It becomes easier to manage and update code.
4. **Avoid Repetition:** We don't need to write the same functions again and again.

## CommonJS Module System

Node.js supports the CommonJS module system, which uses:

- `module.exports` – Used to export functions, variables, and objects from a file.
- `require()` – Used to import exported modules into another file.

### 1. Exporting a Single Function

Suppose we have two files:

```text
importExportModule/
    |
    |-- index.js
    |
    |-- operator.js
```

**operator.js**

```javascript
const add = (a, b) => {
    return a + b;
};

module.exports = add;
```

**Explanation:**

- We created an arrow function named `add`.
- `module.exports = add` exports the function.
- Now this function can be used in another file.

**index.js**

```javascript
const oper = require("./operator");

console.log(oper(5, 6));
```

**Output:**

```text
11
```

**Explanation:**

- `require("./operator")` imports the exported function from `operator.js`.
- `oper` stores the imported function.
- `oper(5, 6)` calls the function with two arguments.
- The result is 11.

**Important:** When we export a single function directly, we can call it using the imported variable.

### 2. Exporting Multiple Functions and Variables

We can also export multiple functions and variables from a single file.

**operator.js**

```javascript
const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a * b;
};

const name = "Mehnaz";

module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;
module.exports.name = name;
```

**Explanation:**

- We created three functions: `add`, `sub`, and `mult`.
- We also created a variable named `name`.
- Using `module.exports`, we exported all these functions and the variable.
- Each property is made available to other files.

**index.js**

```javascript
const oper = require("./operator");

console.log(oper.add(5, 6));
console.log(oper.sub(15, 6));
console.log(oper.mult(15, 6));
console.log(oper.name);
```

**Output:**

```text
11
9
90
Mehnaz
```

### 3. Another Way: Object Destructuring

Instead of repeatedly writing `oper.add()`, `oper.sub()`, etc., we can directly extract the required functions and variables using object destructuring.

**index.js**

```javascript
const { add, sub, mult, name } = require("./operator");

console.log(add(5, 6));
console.log(sub(15, 6));
console.log(mult(15, 6));
console.log(name);
```

**Output:**

```text
11
9
90
Mehnaz
```

**Explanation:**

- `require("./operator")` imports the exported object.
- `{ add, sub, mult, name }` extracts the properties from that object.
- Now we can directly use their names without writing `oper.` every time.

---

## Important Terms to Remember

| Term | Description |
|---|---|
| `module.exports` | Exports functions, variables, or objects from a module. |
| `require()` | Imports a module into another file. |
| `./` | Represents the current directory when specifying a relative module path. |
| Object Destructuring | Extracts properties from an object into separate variables. |

## Difference Between the Two Exporting Approaches

| Single Export | Multiple Exports |
|---|---|
| Exports one function or value directly. | Exports multiple functions or values. |
| `module.exports = add` | `module.exports.add = add` |
| Imported function can be called directly. | Imported properties can be accessed using dot notation or destructuring. |

## Important Points to Remember

1. Node.js allows us to divide code into multiple modules.
2. `module.exports` is used to export data from a file.
3. `require()` is used to import data from another file.
4. We can export a single function directly.
5. We can also export multiple functions and variables using object properties.
6. Object destructuring allows us to access exported properties directly.
7. `./operator` refers to the `operator.js` file in the current directory.

**Note:** If we assign `module.exports` directly more than once, the previous exported value is replaced. To export multiple functions, use object properties or export an object containing all the functions.

---

---

# 13. NPM and Important Project Files

## What is NPM?

- NPM stands for Node Package Manager.
- It is the default package manager for Node.js.
- It is used to install, manage, and update external packages (libraries) in a project.
- It also provides an online registry where developers can find and download packages.

## Important NPM Commands

| Command | Purpose |
|---|---|
| `npm init` | Creates a package.json file. |
| `npm init -y` | Creates package.json with default settings. |
| `npm install package-name` | Installs a package. |
| `npm uninstall package-name` | Removes a package. |
| `npm install` | Installs all dependencies listed in package.json. |
| `npm list` | Displays installed packages. |

## Important Files and Folders

When we install an NPM package, some important files and folders are created.

### 1. node_modules

- It is a folder that contains all the installed packages and their dependencies.
- It is automatically created when we install packages.
- It can become large because it stores package files.

### 2. package.json

- It is the main configuration file of a Node.js project.
- It contains project information such as name, version, scripts, and dependencies.
- It keeps track of the packages required by the project.

### 3. package-lock.json

- It is automatically generated or updated when NPM installs or changes packages.
- It stores the exact installed versions of packages and their dependency details.
- It helps maintain consistent installations across different systems.

## Difference Between Important Files

| Name | Purpose |
|---|---|
| `node_modules` | Stores installed packages. |
| `package.json` | Stores project details and dependency requirements. |
| `package-lock.json` | Stores exact dependency versions and installation details. |



---

---

# 14. Nodemon in Node.js

## What is Nodemon?

- Nodemon is an NPM package used during Node.js development.
- It automatically restarts the Node.js application whenever changes are made to the code.
- It saves us from manually restarting the application after every change.

### Installing Nodemon

```bash
npm install --save-dev nodemon
```

### Running a File Using Nodemon

```bash
npx nodemon index.js
```

### Important Points

- Nodemon automatically detects file changes.
- It restarts the application whenever the file is saved.
- It is mainly used during development.
- `--save-dev` installs a package as a development dependency.

---

# 15. Module Wrapper Function in Node.js

## What is Module Wrapper Function?

- Node.js internally wraps every CommonJS module's code inside a function before executing it.
- This function is called the Module Wrapper Function.
- It provides special variables to every CommonJS module.

### Module Wrapper Function Syntax

```javascript
(function(exports, require, module, __filename, __dirname) {

    // Your JavaScript code

});
```

### Five Parameters of Module Wrapper Function

| Parameter | Description |
|---|---|
| `exports` | Used to export values from a module. |
| `require` | Used to import other modules. |
| `module` | Represents the current module. |
| `__filename` | Returns the absolute path of the current file. |
| `__dirname` | Returns the absolute path of the current directory. |

## Example 1: __dirname and __filename

```javascript
console.log(__dirname);
console.log(__filename);
```

**Output example:**

```text
C:\Users\hp\Desktop\Backend-Analysis

C:\Users\hp\Desktop\Backend-Analysis\index.js
```

- `__dirname` gives the current directory path.
- `__filename` gives the complete file path.

## Example 2: module and exports

```javascript
console.log(module);
console.log(exports);
```

- `module` represents the current module.
- `exports` is initially a reference to `module.exports`.
- `module.exports` is used to export functions, variables, and objects.

## Why is Module Wrapper Function Used?

1. It provides a separate scope to each CommonJS module.
2. It prevents variables from automatically becoming global.
3. It provides special variables such as `require`, `module`, `__dirname`, and `__filename`.
4. It helps Node.js manage modules independently.

## Important Points to Remember

- Node.js internally creates the Module Wrapper Function.
- We don't need to write it manually.
- It is used with the CommonJS module system.
- It contains five parameters: `exports`, `require`, `module`, `__filename`, and `__dirname`.

---

---

# 16. Web Server and Routing in Node.js

## 1. What is a Web Server?

- A web server is a software system that receives requests from clients and sends responses.
- It allows users to access web pages and other resources through a browser.
- Node.js can create a web server using its built-in `http` module.

## 2. HTTP Module

- HTTP stands for HyperText Transfer Protocol.
- It is a built-in Node.js module used to create HTTP servers and handle HTTP requests and responses.
- We don't need to install it separately.

```javascript
const http = require("http");
```

## 3. Creating a Web Server

Node.js provides the `http.createServer()` method to create a web server.

### Syntax

```javascript
http.createServer((req, res) => {
    // Handle request and send response
});
```

### Important Objects

**1. Request (req)**

- The request object contains information about the client's request.
- It can be used to access the requested URL, headers, and other request details.
- Example: `req.url`

**2. Response (res)**

- The response object is used to send a response back to the client.
- We can send text, HTML, and other data using it.
- Example: `res.end()`

## 4. What is Routing?

- Routing means directing a client's request to the appropriate response based on the requested URL.
- Different URLs can display different content.
- In Node.js, we can create basic routing using `req.url` and conditional statements.

### Example of Routing

```javascript
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Hello from the home page");

    } else if (req.url === "/about") {
        res.end("Hello from the About Us page");

    } else if (req.url === "/contact") {
        res.end("Hello from the Contact Us page");

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Error: Page doesn't exist!</h1>");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on port 8000");
});
```

### Explanation

- `http.createServer()` creates the HTTP server.
- `req.url` checks which URL the client has requested.
- `res.end()` sends the response and ends it.
- `if-else` conditions handle different routes.
- If the requested URL doesn't match any route, a 404 error is returned.

## 5. Important HTTP Methods

| Method | Purpose |
|---|---|
| `http.createServer()` | Creates an HTTP server. |
| `res.writeHead()` | Sends the response status code and headers. |
| `res.end()` | Sends the response and ends it. |
| `server.listen()` | Starts the server and listens for incoming requests. |

## 6. Understanding server.listen()

```javascript
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on port 8000");
});
```

- `8000` – Port number on which the server listens.
- `127.0.0.1` – Localhost (the current computer).
- Callback function – Executes when the server starts listening.

### How to Access the Server?

After running the file:

```bash
node index.js
```

Open your browser and visit:

| URL | Response |
|---|---|
| `http://127.0.0.1:8000/` | Home page |
| `http://127.0.0.1:8000/about` | About Us page |
| `http://127.0.0.1:8000/contact` | Contact Us page |
| `http://127.0.0.1:8000/xyz` | 404 Error |

## 7. What is a 404 Error?

- HTTP 404 is a status code that means the requested resource was not found.
- It is returned when the requested page or route does not exist.

## Important Points to Remember

1. Node.js provides a built-in `http` module to create web servers.
2. `http.createServer()` creates the server.
3. `req` represents the incoming request.
4. `res` represents the outgoing response.
5. `req.url` helps identify the requested route.
6. `res.end()` sends the response and ends it.
7. `server.listen()` starts the server.
8. Port 8000 is the port used in our example.
9. A 404 status code indicates that the requested resource was not found.

---
---

# 17. JSON in Node.js

## What is JSON?

- JSON stands for JavaScript Object Notation.
- It is a lightweight format used to store and exchange data.
- JSON stores data in key-value pairs.
- It is commonly used to exchange data between a client and a server.

### JSON Example

```json
{
    "name": "Mehnaz",
    "age": 24,
    "course": "MCA"
}
```

### Important JSON Methods

| Method | Purpose |
|---|---|
| `JSON.stringify()` | Converts a JavaScript object into a JSON string. |
| `JSON.parse()` | Converts a JSON string into a JavaScript object. |

### Important Points

- JSON data is written using key-value pairs.
- Keys and string values must use double quotes.
- JSON is commonly used in APIs to exchange data.
- JSON files use the `.json` extension.

---

# 18. User API in Node.js

## What is an API?

- API stands for Application Programming Interface.
- It allows two applications to communicate with each other.
- In Node.js, APIs are commonly used to receive requests and send responses.

## What is a User API?

- A User API is an API used to manage user-related information.
- It can perform operations such as creating, reading, updating, and deleting user data.

### Common User API Operations

| Operation | Purpose |
|---|---|
| Create User | Adds a new user. |
| Get User | Retrieves user information. |
| Update User | Modifies existing user information. |
| Delete User | Removes a user. |

### Important Points

- APIs allow communication between clients and servers.
- User APIs commonly exchange data in JSON format.
- HTTP methods such as GET, POST, PUT, and DELETE are used for different operations.

---

# 19. Event Module in Node.js

## What is Event Module?

- Node.js provides a built-in module called `events`.
- It allows us to create, listen for, and trigger our own events.
- It is useful for handling event-based operations.

## EventEmitter

- EventEmitter is a class provided by the `events` module.
- We create an object of EventEmitter to work with events.

### Importing Event Module

```javascript
const EventEmitter = require("events");

const event = new EventEmitter();
```

### Important Event Methods

| Method | Purpose |
|---|---|
| `event.on()` | Registers a listener for an event. |
| `event.emit()` | Triggers an event. |
| `event.once()` | Registers a listener that executes only once. |

## Example 1: Creating and Triggering an Event

```javascript
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Mehnaz Bashir");
});

event.emit("sayMyName");
```

**Output:**

```text
Your name is Mehnaz Bashir
```

**Explanation:**

- `EventEmitter` imports the event module.
- `new EventEmitter()` creates an event object.
- `event.on()` registers an event listener.
- `event.emit()` triggers the registered event.

## Example 2: Registering Multiple Listeners

```javascript
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Mehnaz Bashir");
});

event.on("sayMyName", () => {
    console.log("Your age is 24");
});

event.on("sayMyName", () => {
    console.log("Your course is MCA");
});

event.emit("sayMyName");
```

**Output:**

```text
Your name is Mehnaz Bashir
Your age is 24
Your course is MCA
```

**Explanation:**

- We registered three listeners for the same event.
- When `event.emit()` is called, all three listeners execute.
- They execute in the order in which they were registered.

## Example 3: Event with Callback Parameters

We can also pass arguments while triggering an event.

```javascript
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkPage", (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "OK");
```

**Output:**

```text
Status code is 200 and the page is OK
```

**Explanation:**

- `event.on()` registers a listener with two parameters: `sc` and `msg`.
- `event.emit()` triggers the event and passes two arguments.
- The callback receives these arguments and displays them.

## Example 4: Using once()

```javascript
event.once("sayHello", () => {
    console.log("Hello Mehnaz!");
});

event.emit("sayHello");
event.emit("sayHello");
```

**Output:**

```text
Hello Mehnaz!
```

The listener executes only once, even though the event is emitted twice.

## Important Points to Remember

1. `events` is a built-in Node.js module.
2. EventEmitter is a class used to create event-based functionality.
3. `event.on()` registers an event listener.
4. `event.emit()` triggers an event.
5. Multiple listeners can be registered for the same event.
6. We can pass arguments through `event.emit()`.
7. `event.once()` executes a listener only once.

---
---

# 20. Streams in Node.js

## What are Streams?

- Streams are used to handle data in small chunks instead of loading the entire data into memory at once.
- They are useful for reading and writing large files.
- Streams make data handling more memory-efficient and faster.

## Why do we use Streams?

1. To handle large files efficiently.
2. To reduce memory usage.
3. To process data in chunks.
4. To read or write data without waiting for the entire file to load.

## What is a Chunk?

- A chunk is a small piece of data.
- Streams process data chunk by chunk instead of handling the complete data at once.

## Types of Streams in Node.js

Node.js provides four main types of streams.

| Type | Description |
|---|---|
| Readable | Used to read data. |
| Writable | Used to write data. |
| Duplex | Used for both reading and writing data. |
| Transform | Used to modify data while reading and writing. |

## 1. Readable Stream

- A readable stream is used to read data from a source.
- Example: Reading a large file.

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("read.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log(chunk);
});
```

## 2. Writable Stream

- A writable stream is used to write data to a destination.
- Example: Writing data into a file.

```javascript
const fs = require("fs");

const writeStream = fs.createWriteStream("write.txt");

writeStream.write("Hello Node.js!");
writeStream.end();
```

## 3. Duplex Stream

- A duplex stream is used for both reading and writing data.
- It can read and write independently.

Example: TCP sockets.

## 4. Transform Stream

- A transform stream is a type of duplex stream.
- It is used to modify or transform data while it is being read and written.

Example: Compressing or encrypting data.

## Important Stream Methods and Events

| Method / Event | Purpose |
|---|---|
| `createReadStream()` | Creates a readable stream. |
| `createWriteStream()` | Creates a writable stream. |
| `.write()` | Writes data into a stream. |
| `.end()` | Signals that no more data will be written. |
| `.on("data")` | Listens for incoming data chunks. |
| `.on("end")` | Executes when reading is completed. |
| `.on("error")` | Handles stream errors. |
| `.pipe()` | Connects a readable stream to a writable stream. |

## What is pipe()?

- `pipe()` is used to transfer data from a readable stream to a writable stream.
- It makes transferring large amounts of data easier.

### Example

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("read.txt");

const writeStream = fs.createWriteStream("write.txt");

readStream.pipe(writeStream);
```

**Explanation:**
- `readStream` reads data from `read.txt`.
- `writeStream` writes data into `write.txt`.
- `pipe()` transfers data directly from the readable stream to the writable stream.

## Difference Between Normal File Reading and Streams

| Normal Reading | Streams |
|---|---|
| Reads the entire file into memory (for example, `readFile`). | Reads data in smaller chunks. |
| Can consume more memory for large files. | More memory-efficient for large files. |
| Suitable for smaller files. | Suitable for large files and continuous data. |

## Important Points to Remember

1. Streams handle data in small chunks.
2. Streams help reduce memory usage.
3. Node.js provides four types of streams.
4. Readable streams read data.
5. Writable streams write data.
6. Duplex streams support both reading and writing.
7. Transform streams modify data while processing it.
8. `pipe()` connects readable and writable streams.

---
