import './style.css';
import { format, formatDistanceToNow } from 'date-fns';

const NEW_TASK_FORM = document.getElementById('add-task_form');
const TASKLIST_CONTAINER = document.getElementById('tasklist-container');
const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
let latestTask;

// Factory function for creating new single tasks
const Task = (title, description, deadline, priority, tasklist) => {
  return { title, description, deadline, priority, tasklist };
};

// Factory function for creating tasklists, unto which we can push single tasks
const Tasklist = (title, description) => {
  const content = [];
  return { title, description, content };
};


// Get tasks infos from form, put it in latestTask variable for use in other functions
//
const getFormData = (() => {NEW_TASK_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(NEW_TASK_FORM);
  const taskData = Object.fromEntries(formData);
  const tasklist = taskData.taskList;
  const title = taskData.taskTitle;
  const description = taskData.taskDescription;
  const deadline = taskData.taskDeadline;
  const priority = taskData.taskPriority;
  latestTask = Task(title, description, deadline, priority, tasklist);
  });
})();

// Add the latestTask to its task list if it exist, create one if it doesnt

// If the latestTask doesn't go in a tasklist, add it directly to the DOM
// Otherwise, add the tasklist then the task to the DOM

// When clicking on a takslist name, update the display with the list of tasks

// When clicking on a task name, update the display with task infos



// Test purpose
TEST_BUTTON.addEventListener('click', () => {
  console.log(latestTask);
});
