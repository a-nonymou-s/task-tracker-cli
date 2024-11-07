# Task Tracker CLI

A simple command-line tool for tracking tasks in a JSON file, allowing you to add, update, delete, and list tasks based on their status.

## Features

- **Add** tasks with a description
- **Update** task descriptions
- **Delete** tasks by ID
- **List** tasks by status (`todo`, `in-progress`, `done`)
- **Mark** tasks as in-progress or done

## Installation

1. Clone this repository.
2. Ensure Node.js is installed.

## Usage

Use the following commands in the CLI:

- **Add a task**: `node task-cli.js add "Task description"`
- **Delete a task**: `node task-cli.js delete <task_id>`
- **List tasks**: `node task-cli.js list [status]`
- **Update a task**: `node task-cli.js update <task_id> "New description"`
- **Mark as in-progress**: `node task-cli.js mark-in-progress <task_id>`
- **Mark as done**: `node task-cli.js mark-done <task_id>`

## Examples

```bash
node task-cli.js add "Write README file"
node task-cli.js list todo
node task-cli.js update 1 "Write detailed README file"
node task-cli.js mark-done 1
```

## File Structure

Tasks are stored in a JSON file `tasks.json` and are managed with JSON read and write operations.

## License

This project is licensed under the MIT License.
