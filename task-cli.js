const fs = require("fs");
let tasks = [];
tasks = fetchTasks();
function writeTasks(tasks) {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}
function fetchTasks() {
  if (fs.existsSync("tasks.json")) {
    const data = fs.readFileSync("tasks.json", "utf-8");
    return JSON.parse(data);
  }
  return [];
}
function nextID(tasks) {
  const ids = tasks.map((task) => task.id);
  return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}
function addTask(tasks, name) {
  const task = {
    id: nextID(tasks),
    description: name,
    status: "todo",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  tasks.push(task);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${task.id})`);
}
function deleteTask(tasks, id) {
  const newTasks = tasks.filter((task) => task.id !== parseInt(id));
  writeTasks(newTasks);
}
function fetchDoneTasks(tasks) {
  newTasks = tasks.filter((task) => task.status == "done");
  return newTasks;
}
function fetchTodoTasks(tasks) {
  newTasks = tasks.filter((task) => task.status === "todo");
  return newTasks;
}
function fetchInProgressTasks(tasks) {
  newTasks = tasks.filter((task) => task.status == "in-progress");
  return newTasks;
}
function updateTask(tasks, id, name) {
  task = tasks.find((task) => task.id === parseInt(id));
  task.description = name;
  writeTasks(tasks);
}
function markInProgress(tasks, id) {
  task = tasks.find((task) => task.id === parseInt(id));
  task.status = "in-progress";
  writeTasks(tasks);
}
function markDone(tasks, id) {
  task = tasks.find((task) => task.id === parseInt(id));
  task.status = "done";
  writeTasks(tasks);
}
const command = process.argv[2];
switch (command) {
  case "add":
    addTask(tasks, process.argv[3]);
    fetchTasks();
    break;
  case "delete":
    deleteTask(tasks, process.argv[3]);
    fetchTasks();
    break;
  case "list":
    const method = process.argv[3] ? process.argv[3] : "";
    if (method == "done") {
      console.log(fetchDoneTasks(tasks));
    } else if (method == "in-progress") {
      console.log(fetchInProgressTasks(tasks));
    } else if (method == "todo") {
      console.log(fetchTodoTasks(tasks));
    } else {
      console.log(tasks);
    }
    break;
  case "update":
    updateTask(tasks, process.argv[3], process.argv[4]);
    fetchTasks();
    break;
  case "mark-done":
    markDone(tasks, process.argv[3]);
    fetchTasks();
    break;
  case "mark-in-progress":
    markInProgress(tasks, process.argv[3]);
    fetchTasks();
    break;
  default:
    console.log("command not found! Please try again!!");
}
