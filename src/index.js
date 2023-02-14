import './style.css';
import { createTasklistContainer, loadTasklistDetails, resetContentContainer } from './dom-create.js';
import { format, parseISO, formatDistanceToNow } from 'date-fns';

// Global variables
const taskListsContainer = [];
let newTask;


// DOM Elements
const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
const NEW_TASK_FORM = document.getElementById('add-task_form');
const EDIT_TASK_FORM = document.getElementById('editTaskForm'); // Unused

const NEW_TASK_BUTTON = document.querySelector('.new-task__button');
const BACKDROP = document.querySelector('.backdrop');
const NEW_TASK_MODAL = document.querySelector('.add-task__modal');
const REMOVE_TASKLIST_MODAL = document.querySelector('.remove-tasklist__modal');


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
    REMOVE_TASKLIST_MODAL.style.display = 'none';
};

BACKDROP.addEventListener('click', () => closeModal());

NEW_TASK_BUTTON.addEventListener('click', () => {
  openModal(NEW_TASK_MODAL);
});

// TASKS AND TASKLISTS ACTIONS: Create, Delete, Edit
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
  if (taskData.taskDescription === '') {
    taskData.taskDescription = 'No description.';
  }
  const description = taskData.taskDescription;
  const date = taskData.taskDeadline;
  const ISOdate = parseISO(date);
  const formDate = format(ISOdate, 'dd/MM/yyyy');
  const deadline = formDate;
  //const deadline = taskData.taskDeadline;
  const priority = taskData.taskPriority;
  newTask = Task(title, description, deadline, priority, tasklist);
  addTaskToTaskList(newTask);
  closeModal();
  });
})();

// Add the newTask to its task list if it exist, create one if it doesnt
const addTaskToTaskList = (newTask) => {
  // If the tasklist title is already in the database, this will return the tasklist object. Otherwise, returns undefined
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

// Delete a tasklist
const deleteTasklist = () => {
  const REMOVE_TASKLIST_BUTTON = document.querySelector('.remove-tasklist__button');
  const REMOVE_TASKLIST_MODAL = document.querySelector('.remove-tasklist__modal');
  const REMOVE_CANCEL_BTN = document.querySelector('.remove-cancel__button');
  const REMOVE_CONFIRM_BTN = document.querySelector('.remove-confirm__button');
  REMOVE_TASKLIST_BUTTON.addEventListener('click', () => {
    openModal(REMOVE_TASKLIST_MODAL);
    const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; // Find the current tasklist name
    const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
    REMOVE_CANCEL_BTN.addEventListener('click', () => closeModal());
    REMOVE_CONFIRM_BTN.addEventListener('click', () => {
      for (let i = 0; i < taskListsContainer.length; i++) { 
        if (taskListsContainer[i] === targetTaskList) { 
          taskListsContainer.splice(i, 1);
        }
      }
      createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
      displayController(); // Reload the click actions on sidebar tasklists
      resetContentContainer(); // Empty the content container
      closeModal();
    });
  }
);
};

// Delete a single task from the tasklist display
const deleteTask = () => {
  const REMOVE_TASK_BTN = document.querySelectorAll('.remove-single-task__button');
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; // Find the current tasklist name
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  for (let i = 0; i < REMOVE_TASK_BTN.length; i ++) {
    REMOVE_TASK_BTN[i].addEventListener('click', () => {
      targetTaskList.content.splice(i, 1);
      loadTasklistDetails(targetTaskList);
      createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
      deleteTask(); // Reload delete function for remaining tasks
      deleteTasklist(); // Reload delete tasklist function
      editTasklist(); // Reload edit function
      displayController();
    });
  }
};

// Edit a tasklist
const editTasklist = () => {
  const TASKLIST_NAME_ELEMENT = document.querySelector('.content__tasklist-title');
  const TASKLIST_DESCRIPTION_ELEMENT = document.querySelector('.content__tasklist-description');
  const targetTaskListName = TASKLIST_NAME_ELEMENT.textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  TASKLIST_NAME_ELEMENT.addEventListener('click', () => { // Edit the tasklist title
    TASKLIST_NAME_ELEMENT.contentEditable = "true";
  });
  TASKLIST_NAME_ELEMENT.addEventListener('blur', () => {
    TASKLIST_NAME_ELEMENT.contentEditable = 'false';
    targetTaskList.title = TASKLIST_NAME_ELEMENT.textContent; // Update tasklist in array
    createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
    editTasklist(); // Reload edit function
  });
  TASKLIST_DESCRIPTION_ELEMENT.addEventListener('click', () => {
    TASKLIST_DESCRIPTION_ELEMENT.contentEditable = 'true';
  });
  TASKLIST_DESCRIPTION_ELEMENT.addEventListener('blur', () => {
    TASKLIST_DESCRIPTION_ELEMENT.contentEditable = 'false';
    targetTaskList.description = TASKLIST_DESCRIPTION_ELEMENT.textContent;
    createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
    editTasklist(); // Reload edit function
  });
};

// Edit a single task, Modal version
/*const getCurrentTaskData = (form, target) => { // Edit through form
  form.taskTitle.value = target.title;
  form.taskDescription.value = target.description;
  form.taskDeadline.value = target.deadline;
  form.taskPriority.value = target.priority;
  form.taskList.value = target.tasklist;
};

const editTaskForm = (target) => {
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  EDIT_TASK_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(EDIT_TASK_FORM);
    const taskData = Object.fromEntries(formData);
    target.tasklist = capitalizeString(taskData.taskList);
    target.title = capitalizeString(taskData.taskTitle);
    target.description = taskData.taskDescription;
    target.deadline = taskData.taskDeadline;
    target.priority = taskData.taskPriority;
    loadTasklistDetails(targetTaskList);
    deleteTasklist();
    deleteTask();
    editTasklist();
    editTask();
  });
};

const editTask = () => {
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  const edit_task_button = document.querySelectorAll('.edit-single-task__button');
  for (let i = 0; i < edit_task_button.length; i++) {
    edit_task_button[i].addEventListener('click', () => {
      const targetTaskContent = targetTaskList.content[i]; // Find clicked task
      getCurrentTaskData(EDIT_TASK_FORM, targetTaskContent); // Fill the edit form with current datas
      editTaskForm(targetTaskContent);
    });
    }
};*/

const editTask = () => { // Live edit
  // Find the current tasklist name, then search for it in the taskslists array and return it
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; 
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  // Single tasks are stored as objects in the tasklist.content property. Create a shortcut to access the wanted task.
  const targetTask = targetTaskList.content;

  // Edit task title
  const single_task_title = document.querySelectorAll('.single-task__title');
  for (let i = 0; i < single_task_title.length; i ++) {
    single_task_title[i].addEventListener('click', () => {
      single_task_title[i].contentEditable = 'true';
    });
    single_task_title[i].addEventListener('blur', () => {
      single_task_title[i].contentEditable = 'false';
      targetTask[i].title = single_task_title[i].textContent;
      createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
    });
  }

  // Edit task description
  const single_task_description = document.querySelectorAll('.single-task__description');
  for (let i = 0; i < single_task_description.length; i++) {
    single_task_description[i].addEventListener('click', () => {
      single_task_description[i].contentEditable = 'true';
    });
    single_task_description[i].addEventListener('blur', () => {
      single_task_description.contentEditable = 'false';
      targetTask[i].description = single_task_description[i].textContent;
    });
  }

  // Edit task deadline
  const single_task_deadline = document.querySelectorAll('.single-task__deadline');
  for (let i = 0; i < single_task_deadline.length; i++) { 
    const editableDeadline = document.createElement('input');
    editableDeadline.type = 'date';
    single_task_deadline[i].addEventListener('click', () => {
      editableDeadline.value = single_task_deadline[i].textContent;
      single_task_deadline[i].replaceWith(editableDeadline);
    });
    editableDeadline.addEventListener('blur', () => {
      const ISO_date = parseISO(editableDeadline.value);
      targetTask[i].deadline = format(ISO_date, 'dd/MM/yyyy');
      editableDeadline.replaceWith(single_task_deadline[i]);
      // Reload DOM elements to reflect changes and reload user actions functions
      loadTasklistDetails(targetTaskList);
      deleteTasklist();
      deleteTask();
      editTasklist();
      editTask();
    });
  }

  // Edit task priority
  const single_task_priority = document.querySelectorAll('.single-task__priority');
  single_task_priority.forEach((el, i) => {
    const editablePriority = document.createElement('input');
    editablePriority.type = 'number';
    editablePriority.min = '1';
    editablePriority.max = '3';
    el.addEventListener('click', () => {
      editablePriority.value = targetTask[i].priority;
      single_task_priority[i].replaceWith(editablePriority);
    });
    editablePriority.addEventListener('blur', () => {
      targetTask[i].priority = editablePriority.value;
      editablePriority.replaceWith(single_task_priority[i]);
      // Reload DOM elements to reflect changes and reload user actions functions
      loadTasklistDetails(targetTaskList);
      deleteTasklist();
      deleteTask();
      editTasklist();
      editTask();
    });
  });

};




// DOM ACTIONS
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
      deleteTasklist();
      deleteTask();
      editTasklist();
      editTask();
    });
  }
};


// Test purpose

TEST_BUTTON.addEventListener('click', () => {
  console.log(taskListsContainer);
});