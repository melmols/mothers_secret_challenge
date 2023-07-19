# Code Analysis Challenge

## Description

Mother Secret is a Node.js application that serves as a server. It utilizes the Express framework and provides functionality for `Data Traversal Vulnerability` and `YAML Injection Vulnerability`.

## Installation

Install dependencies using.

```
npm install
```

## Development

Start server using.

```
npm start
```

Start development with realtime updates.

```
npm run dev
```

App will be running on this address: [http://localhost:3000/](http://localhost:3000/)


## The End-points of the server side.

| Method | Path          | Body                | Description                                                                        |
| ------ | ------------- | ------------------- | ---------------------------------------------------------------------------------- |
| POST   | /api/nostromo | {file_path:""}      | Use the `file_path` from the body to open that file in the file system and return its content. |
| POST   | /yaml         | {file_path:""}      | Calls `yaml.load()` on an existing file on the server using `file_path`.             |

