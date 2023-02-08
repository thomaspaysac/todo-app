import './style.css';
import { createTasklistContainer, loadTasklistDetails, resetContentContainer } from './dom-create.js';
import { format, formatDistanceToNow } from 'date-fns';

// Global variables
const taskListsContainer = [];
let newTask;


// DOM Elements
const NEW_TASK_FORM = document.getElementById('add-task_form');
const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
const NEW_TASK_BUTTON = document.querySelector('.new-task__button');
const BACKDROP = document.querySelector('.backdrop');
const NEW_TASK_MODAL = document.querySelector('.add-task__modal');
const REMOVE_TASKLIST_BUTTON = document.querySelector('.remove-tasklist__button');


// General functions
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Factory function for creating new single tasks
const Task = (title, description, deadline, priority, tasklist) => {
  return { title, description, deadline, priority, tasklist };
};

// Factory function for creating tasklists, unto which we can push single tasks
const Tasklist = (title, description) => {
  const content = [];
  return { title, description, content };
};

// Modals
const openModal = (modal) => {
  BACKDROP.style.display = 'block';
  modal.style.display = 'block';
};

const closeModal = () => {
    BACKDROP.style.display = 'none';
    NEW_TASK_MODAL.style.display = 'none';
};

BACKDROP.addEventListener('click', () => {
  BACKDROP.style.display = 'none';
  NEW_TASK_MODAL.style.display = 'none';
});

NEW_TASK_BUTTON.addEventListener('click', () => {
  openModal(NEW_TASK_MODAL);
});

// TASKS AND TASKLISTS ACTIONS: Create, Remove, Edit
//
// Get tasks infos from form, put it in newTask variable for use in other functions
const getFormData = (() => {NEW_TASK_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(NEW_TASK_FORM);
  const taskData = Object.fromEntries(formData);
  if (taskData.taskList === '') {
    taskData.taskList = 'General tasks'; // Create a general takslist to put single tasks into
  }
  const tasklist = capitalizeString(taskData.taskList);
  const title = capitalizeString(taskData.taskTitle);
  const description = taskData.taskDescription;
  const deadline = taskData.taskDeadline;
  const priority = taskData.taskPriority;
  newTask = Task(title, description, deadline, priority, tasklist);
  addTaskToTaskList(newTask);
  closeModal();
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

const removeTasklist = () => {
  const REMOVE_TASKLIST_BUTTON = document.querySelector('.remove-tasklist__button');

  REMOVE_TASKLIST_BUTTON.addEventListener('click', () => {
    const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; 
    const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
    let removeConfirmation = prompt('Do you really want to remove this tasklist?');
    if (removeConfirmation.toLowerCase() === 'yes') {
      console.log('Removing tasklist...');
      for (let i = 0; i < taskListsContainer.length; i++) { 
        if (taskListsContainer[i] === targetTaskList) { 
          taskListsContainer.splice(i, 1);
        }
      }
      createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
      displayController(); // Reload the click actions on sidebar tasklists
      resetContentContainer(); // Empty the content container
    } else {
      return;
    }
  }
);
};

// When clicking on a takslist name, update the display with the list of tasks
const displayController = () => {
  const tasklist_block = document.getElementsByClassName('sidebar-tasklist');
  const tasklist = document.getElementsByClassName('tasklist-title');
  for (let i = 0; i < tasklist.length; i++) {
    tasklist_block[i].addEventListener('click', () => {
       // Get the name of the clicked tasklist
      const clicked_task = tasklist[i].textContent;
      // Use the takslist name to find the tasklist in the taskListsContainer
      const clickedTaskList = taskListsContainer.find(({ title }) => title === clicked_task);
      loadTasklistDetails(clickedTaskList);
      removeTasklist();
    });
  }
};


// Test purpose

TEST_BUTTON.addEventListener('click', () => {
    console.log(taskListsContainer);
});