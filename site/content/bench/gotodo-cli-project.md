---
title: "Building a CLI Task Manager in Go"
date: "2026-02-05"
layout: "page"
draft: false
collections:
    - bench
tags:
    - go
    - projects
    - cli
---

Today I took a break from web frameworks and built something raw and terminal-native: **a CLI Task Manager in Go**.

## Why a CLI Tool?

I wanted something that lives entirely in my terminal—no browser tabs, no bloated Electron apps. Just pure command-line efficiency with local data persistence. Sometimes the best tools are the ones that get out of your way.

## What I Built

Using Go 1.25, I implemented a fully functional task management system with:

- **CRUD Operations**: Add, Edit, Delete, and List tasks with simple commands
- **JSON Storage**: A generic storage layer using `encoding/json` for persistent local data
- **Clean UX**: Beautiful table rendering powered by the `aquasecurity/table` package

## The Interesting Bits

The most challenging part was parsing command flags for editing tasks. I wanted a clean syntax like `gotodo edit 1:Buy groceries`, where the ID and new content are separated by a colon.

The solution? `strings.SplitN` to manually parse the input and split on the first colon only. It's simple but effective—exactly what CLI tools should be.

```go
// Parse input like "1:new task title"
parts := strings.SplitN(input, ":", 2)
id := parts[0]
newTitle := parts[1]
```

## Tech Stack

- **Go 1.25** for performance and simplicity
- **encoding/json** for data persistence
- **aquasecurity/table** for terminal UI

## What's Next?

I'm thinking about adding due dates, priority levels, and maybe even categories. But for now, it does exactly what I need—nothing more, nothing less.

Check out the source code on [GitHub](https://github.com/sameermanvi/gotodo)!
