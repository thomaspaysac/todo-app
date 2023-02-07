import './style.css';
import { createTasklistContainer, loadTasklistDetails } from './dom-create.js';
import { format, formatDistanceToNow } from 'date-fns';

const NEW_TASK_FORM = document.getElementById('add-task_form');
const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
const taskListsContainer = [];
let newTask;


// Factory function for creating new single tasks
const Task = (title, description, deadline, priority, tasklist) => {
  return { title, description, deadline, priority, tasklist };
};

// Factory function for creating tasklists, unto which we can push single tasks
const Tasklist = (title, description) => {
  const content = [];
  return { title, description, content };
};


// Get tasks infos from form, put it in newTask variable for use in other functions
//
const getFormData = (() => {NEW_TASK_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(NEW_TASK_FORM);
  const taskData = Object.fromEntries(formData);
  if (taskData.taskList === '') {
    taskData.taskList = 'General tasks'; // Create a general takslist to put single tasks into
  }
  const tasklist = taskData.taskList;
  const title = taskData.taskTitle;
  const description = taskData.taskDescription;
  const deadline = taskData.taskDeadline;
  const priority = taskData.taskPriority;
  newTask = Task(title, description, deadline, priority, tasklist);
  addTaskToTaskList(newTask);
  });
})();

// Add the newTask to its task list if it exist, create one if it doesnt
const addTaskToTaskList = (newTask) => {
  //If the tasklist title is already in the database, this will return the tasklist object. Otherwise, returns undefined
  const targetTaskList = taskListsContainer.find(({ title }) => title === newTask.tasklist);
  if (targetTaskList === undefined) { // i.e. no tasklist with this name exists yet
    console.log('This is a new tasklist');
    const newTaskList = Tasklist(newTask.tasklist, '');
    taskListsContainer.push(newTaskList);
    (newTaskList.content).push(newTask);
    newTaskList.description = 'There is no description yet...';
    createTasklistContainer(taskListsContainer);
    displayController();
  } else {
    console.log('Adding task to the existing tasklist...');
    (targetTaskList.content).push(newTask);
    createTasklistContainer(taskListsContainer);
    displayController();
  }
};

// If the newTask doesn't go in a tasklist, add it directly to the DOM
// Otherwise, add the tasklist then the task to the DOM


// When clicking on a takslist name, update the display with the list of tasks
const displayController = () => {
  const tasklist_block = document.getElementsByClassName('sidebar-tasklist');
  const tasklist = document.getElementsByClassName('tasklist-title');
  for (let i = 0; i < tasklist.length; i++) {
    tasklist_block[i].addEventListener('click', () => {
       // Get the name of the clicked tasklist
      const clicked_task = tasklist[i].textContent;
      // Use the takslist name to find the tasklist in the taskListsContainer
      const targetTaskList = taskListsContainer.find(({ title }) => title === clicked_task);
      loadTasklistDetails(targetTaskList);
    });
  }
};


// When clicking on a task name, update the display with task infos



// Test purpose

TEST_BUTTON.addEventListener('click', () => {
    console.log(taskListsContainer);
});