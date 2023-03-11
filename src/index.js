import './style.css'; 
import { createTasklistContainer, loadTasklistDetails, resetContentContainer, loadFiltersDetails, loadUserGuide, loadEmptyMessage } from './dom-create.js';
import { format, parseISO, formatDistanceToNow, isBefore, isEqual } from 'date-fns';

// Global variables
let taskListsContainer = [];
let newTask;
let sortingOrderDeadlines;
let sortingOrderPriority = false;

// DOM Elements
const NEW_TASK_FORM = document.getElementById('add-task_form');
const NEW_TASK_BUTTON = document.querySelector('.new-task__button');
const BACKDROP = document.querySelector('.backdrop');
const NEW_TASK_MODAL = document.querySelector('.add-task__modal');
const REMOVE_TASKLIST_MODAL = document.querySelector('.remove-tasklist__modal');
const USER_GUIDE_BUTTON = document.querySelector('.user-guide__button');


// GENERAL FUNCTIONS
const CapitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const UpdateInterface = (tasklist, sortingOrderDeadlines, sortingOrderPriority) => {
  loadTasklistDetails(tasklist, sortingOrderDeadlines, sortingOrderPriority);
  createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
  deleteTask(); // Reload delete function for remaining tasks
  deleteTasklist(); // Reload delete tasklist function
  editTasklist(); // Reload edit function
  editTask();
  SortTasklist(tasklist);
  displayController();
  populateStorage();
};

// Factory function for creating new single tasks
const Task = (title, description, deadline, priority, tasklist, checked) => {
  return { title, description, deadline, priority, tasklist, checked };
};

// Factory function for creating tasklists, unto which we can push single tasks
const Tasklist = (title, description) => {
  const content = [];
  let color;
  return { title, description, color, content };
};


// MODALS
const OpenModal = (modal) => {
  BACKDROP.style.display = 'block';
  modal.style.display = 'block';
};

const CloseModal = () => {
    BACKDROP.style.display = 'none';
    NEW_TASK_MODAL.style.display = 'none';
    REMOVE_TASKLIST_MODAL.style.display = 'none';
};

BACKDROP.addEventListener('click', () => CloseModal());

NEW_TASK_BUTTON.addEventListener('click', () => {
  NEW_TASK_FORM.reset();
  OpenModal(NEW_TASK_MODAL);
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
  const tasklist = CapitalizeString(taskData.taskList);
  const title = CapitalizeString(taskData.taskTitle);
  if (taskData.taskDescription === '') {
    taskData.taskDescription = 'No description.';
  }
  const description = taskData.taskDescription;
  const deadline = taskData.taskDeadline;
  const priority = taskData.taskPriority;
  const checked = false;
  newTask = Task(title, description, deadline, priority, tasklist, checked);
  addTaskToTaskList(newTask);
  CloseModal();
  });
})();

// Add the newTask to its task list if it exist, create one if it doesnt
const addTaskToTaskList = (newTask) => {
  // If the tasklist title is already in the database, this will return the tasklist object. Otherwise, returns undefined
  const targetTaskList = taskListsContainer.find(({ title }) => title === newTask.tasklist);
  if (targetTaskList === undefined) { // i.e. no tasklist with this name exists yet
    const newTaskList = Tasklist(newTask.tasklist, ''); // Create new tasklist
    taskListsContainer.push(newTaskList);
    (newTaskList.content).push(newTask);
    newTaskList.description = 'There is no description yet...';
    UpdateInterface(newTaskList);
    populateStorage();
  } else {
    (targetTaskList.content).push(newTask); // Add to existing tasklist
    UpdateInterface(targetTaskList);
    populateStorage();
  }
};

// Delete a tasklist
const deleteTasklist = () => {
  const REMOVE_TASKLIST_BUTTON = document.querySelector('.remove-tasklist__button');
  const REMOVE_TASKLIST_MODAL = document.querySelector('.remove-tasklist__modal');
  const REMOVE_CANCEL_BTN = document.querySelector('.remove-cancel__button');
  const REMOVE_CONFIRM_BTN = document.querySelector('.remove-confirm__button');
  REMOVE_TASKLIST_BUTTON.addEventListener('click', () => {
    OpenModal(REMOVE_TASKLIST_MODAL);
    const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; // Find the current tasklist name
    const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
    REMOVE_CANCEL_BTN.addEventListener('click', () => CloseModal());
    REMOVE_CONFIRM_BTN.addEventListener('click', () => {
      for (let i = 0; i < taskListsContainer.length; i++) { 
        if (taskListsContainer[i] === targetTaskList) { 
          taskListsContainer.splice(i, 1);
        }
      }
      createTasklistContainer(taskListsContainer); // Update the sidebar tasklists
      displayController(); // Reload the click actions on sidebar tasklists
      resetContentContainer(); // Empty the content container
      populateStorage();
      if (taskListsContainer.length === 0) {
        loadEmptyMessage();
      }
      CloseModal();
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
      UpdateInterface(targetTaskList);
    });
  }
};

// Edit a tasklist
const editTasklist = () => {
  const TASKLIST_NAME_ELEMENT = document.querySelector('.content__tasklist-title');
  const TASKLIST_DESCRIPTION_ELEMENT = document.querySelector('.content__tasklist-description');
  const TASKLIST_COLOR_PICKER = document.querySelector('.content__tasklist-color-picker');
  const targetTaskListName = TASKLIST_NAME_ELEMENT.textContent;
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  TASKLIST_NAME_ELEMENT.addEventListener('click', () => { // Edit the tasklist title
    TASKLIST_NAME_ELEMENT.contentEditable = "true";
  });
  TASKLIST_NAME_ELEMENT.addEventListener('blur', () => {
    TASKLIST_NAME_ELEMENT.contentEditable = 'false';
    targetTaskList.title = TASKLIST_NAME_ELEMENT.textContent; // Update tasklist in array
    targetTaskList.content.forEach(task => {
      task.tasklist = targetTaskList.title;
    });
    UpdateInterface(targetTaskList);
  });

  TASKLIST_DESCRIPTION_ELEMENT.addEventListener('click', () => {
    TASKLIST_DESCRIPTION_ELEMENT.contentEditable = 'true';
  });
  TASKLIST_DESCRIPTION_ELEMENT.addEventListener('blur', () => {
    TASKLIST_DESCRIPTION_ELEMENT.contentEditable = 'false';
    targetTaskList.description = TASKLIST_DESCRIPTION_ELEMENT.textContent;
    UpdateInterface(targetTaskList);
  });

  TASKLIST_COLOR_PICKER.addEventListener('blur', () => {
    targetTaskList.color = TASKLIST_COLOR_PICKER.value;
    UpdateInterface(targetTaskList);
  });
};

const editTask = () => { // Live edit of a single task
  // Find the current tasklist name, then search for it in the taskslists array and return it
  const targetTaskListName = document.querySelector('.content__tasklist-title').textContent; 
  const targetTaskList = taskListsContainer.find(({ title }) => title === targetTaskListName);
  // Single tasks are stored as objects in the tasklist.content property. Create a shortcut to access the wanted task.
  const targetTask = targetTaskList.content;

  // Check task
  const task_checkbox = document.querySelectorAll('.task-checkbox');
  task_checkbox.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (el.checked) {
        targetTask[i].checked = true;
      } else if (!el.checked) {
        targetTask[i].checked = false;
      }
      UpdateInterface(targetTaskList);
    });
  });

  // Edit task title
  const SINGLE_TASK_TITLE = document.querySelectorAll('.single-task__title');
  for (let i = 0; i < SINGLE_TASK_TITLE.length; i ++) {
    SINGLE_TASK_TITLE[i].addEventListener('click', () => {
      SINGLE_TASK_TITLE[i].contentEditable = 'true';
    });
    SINGLE_TASK_TITLE[i].addEventListener('blur', () => {
      SINGLE_TASK_TITLE[i].contentEditable = 'false';
      targetTask[i].title = SINGLE_TASK_TITLE[i].textContent;
      UpdateInterface(targetTaskList);
    });
  }

  // Edit task description
  const SINGLE_TASK_DESCRIPTION = document.querySelectorAll('.single-task__description');
  for (let i = 0; i < SINGLE_TASK_DESCRIPTION.length; i++) {
    SINGLE_TASK_DESCRIPTION[i].addEventListener('click', () => {
      SINGLE_TASK_DESCRIPTION[i].contentEditable = 'true';
    });
    SINGLE_TASK_DESCRIPTION[i].addEventListener('blur', () => {
      SINGLE_TASK_DESCRIPTION.contentEditable = 'false';
      targetTask[i].description = SINGLE_TASK_DESCRIPTION[i].textContent;
      UpdateInterface(targetTaskList);
    });
  }

  // Edit task deadline
  const SINGLE_TASK_DEADLINE = document.querySelectorAll('.single-task__deadline');
  for (let i = 0; i < SINGLE_TASK_DEADLINE.length; i++) { 
    const editableDeadline = document.createElement('input');
    editableDeadline.type = 'date';
    SINGLE_TASK_DEADLINE[i].addEventListener('click', () => {
      editableDeadline.value = SINGLE_TASK_DEADLINE[i].textContent;
      SINGLE_TASK_DEADLINE[i].replaceWith(editableDeadline);
    });
    editableDeadline.addEventListener('blur', () => {
      editableDeadline.replaceWith(SINGLE_TASK_DEADLINE[i]);
      targetTask[i].deadline = editableDeadline.value;
      UpdateInterface(targetTaskList);
    });
  }

  // Edit task priority
  const SINGLE_TASK_PRIORITY = document.querySelectorAll('.single-task__priority');
  SINGLE_TASK_PRIORITY.forEach((el, i) => {
    const editablePriority = document.createElement('input');
    editablePriority.type = 'number';
    editablePriority.min = '1';
    editablePriority.max = '3';
    el.addEventListener('click', () => {
      editablePriority.value = targetTask[i].priority;
      SINGLE_TASK_PRIORITY[i].replaceWith(editablePriority);
    });
    editablePriority.addEventListener('blur', () => {
      targetTask[i].priority = editablePriority.value;
      editablePriority.replaceWith(SINGLE_TASK_PRIORITY[i]);
      UpdateInterface(targetTaskList);
    });
  });
};

// SORTING FUNCTIONS: Sort tasks by deadline or by priority
const getDeadlines = (() => {
  const allFutureDeadlines = [];
  let sortedDeadlines = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // For each tasklist, add task to allDeadlines array only if its deadline is set in the future and the task is not checked
  const getAllDeadlines = () => {
    allFutureDeadlines.length = 0;
    sortedDeadlines = [];
    taskListsContainer.forEach(tasklist => {
      tasklist.content.forEach(task => {
        if (!task.checked && !isBefore(parseISO(task.deadline), today) && task.deadline !== '' || parseISO(task.deadline) === today) {
          allFutureDeadlines.push(task);
        }
      });
    });
    sortedDeadlines = allFutureDeadlines.sort( // Sort all tasks by descending deadline
      (task1, task2) => (task1.deadline > task2.deadline) ? 1 : (task1.deadline < task2.deadline) ? -1 : 0
    );
  };

  const getDay = () => {
    const deadlineToday = [];
    getAllDeadlines();
    sortedDeadlines.forEach(task => {
      const timeToDeadline = formatDistanceToNow(parseISO(task.deadline));
      if (timeToDeadline.includes('hour')) { // Check if the deadline is in less than 24 hours
        deadlineToday.push(task);
      }
    });
    loadFiltersDetails('Next 24 hours', deadlineToday, taskListsContainer);
    LoadCheckboxes(deadlineToday);
    displayController();
  };

  const getWeek = () => {
    const deadlineWeek = [];
    getAllDeadlines();
    sortedDeadlines.forEach(task => {
      const timeToDeadline = formatDistanceToNow(parseISO(task.deadline));
      if (timeToDeadline.includes('hours')) {
        deadlineWeek.push(task);

      } else if (timeToDeadline.includes('day')) {
        const daysToDeadline = timeToDeadline.replace(/\D/g, "");
        if (daysToDeadline <= 7) { // Check if the deadline is 7 days or less
          deadlineWeek.push(task);
        }
      }
    });
    loadFiltersDetails('This week', deadlineWeek, taskListsContainer);
    LoadCheckboxes(deadlineWeek);
    displayController();
  };

  const getMonth = () => {
    const deadlineMonth = [];
    getAllDeadlines();
    sortedDeadlines.forEach(task => {
      const timeToDeadline = formatDistanceToNow(parseISO(task.deadline));
      if (timeToDeadline.includes('hour')) {
        deadlineMonth.push(task);
      } else if (timeToDeadline.includes('day')) {
        const daysToDeadline = timeToDeadline.replace(/\D/g, "");
        if (daysToDeadline < 31) { // Check if the deadline is in less than 31 days
          deadlineMonth.push(task);
        }
      }
    });
    loadFiltersDetails('This month', deadlineMonth, taskListsContainer);
    LoadCheckboxes(deadlineMonth);
    displayController();
  };

  const getFurther = () => {
    const deadlineFurther = [];
    getAllDeadlines();
    sortedDeadlines.forEach(task => {
      const timeToDeadline = formatDistanceToNow(parseISO(task.deadline));
      if (timeToDeadline.includes('month') || timeToDeadline.includes('year')) {
        deadlineFurther.push(task);
      }
    });
    loadFiltersDetails('Further...', deadlineFurther, taskListsContainer);
    LoadCheckboxes(deadlineFurther);
    displayController();
  };

  return {
    getDay,
    getWeek,
    getMonth,
    getFurther,
  };
})();

// Change sort order when viewing tasklists
const SortTasklist = (tasklist) => {
  const label_deadline = document.querySelector('.label-deadline');
  const label_priority = document.querySelector('.label-priority');
  label_deadline.addEventListener('click', () => {
    sortingOrderPriority = false;
    if (sortingOrderDeadlines === undefined || sortingOrderDeadlines === 'descending') {
      sortingOrderDeadlines = 'ascending';
      tasklist.content.sort( // Sort all tasks by ascending deadline
        (task1, task2) => (task1.deadline > task2.deadline) ? 1 : (task1.deadline < task2.deadline) ? -1 : 0);
      UpdateInterface(tasklist, sortingOrderDeadlines);
    } else if (sortingOrderDeadlines === 'ascending') {
      sortingOrderDeadlines = 'descending';
      tasklist.content.sort( // Sort all tasks by descending deadline
        (task1, task2) => (task1.deadline < task2.deadline) ? 1 : (task1.deadline > task2.deadline) ? -1 : 0);
      UpdateInterface(tasklist, sortingOrderDeadlines);
    }
  });
  label_priority.addEventListener('click', () => {
    sortingOrderPriority = true;
    sortingOrderDeadlines = undefined;
    tasklist.content.sort(
      (task1, task2) => (task1.priority < task2.priority) ? 1 : (task1.priority > task2.priority) ? -1 : 0);
    UpdateInterface(tasklist, sortingOrderDeadlines, sortingOrderPriority);
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
      UpdateInterface(clickedTaskList);
    });
  }
};

// Filter tasks by deadline
const day_filter_button = document.getElementById('deadline-today');
day_filter_button.addEventListener('click', () => {
  getDeadlines.getDay();
});
const week_filter_button = document.getElementById('deadline-week');
week_filter_button.addEventListener('click', () => {
  getDeadlines.getWeek();
});
const month_filter_button = document.getElementById('deadline-month');
month_filter_button.addEventListener('click', () => {
  getDeadlines.getMonth();
});
const further_filter_button = document.getElementById('deadline-further');
further_filter_button.addEventListener('click', () => {
  getDeadlines.getFurther();
});

//Click on task name in deadlines view -> load corresponding tasklist content

// When click on checkbox, find the right task and toggle 'checked'. Grey out the text.
const LoadCheckboxes = (array) =>  {
  const filtered_checkbox = document.querySelectorAll('.filtered-task-checkbox');
  filtered_checkbox.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (!array[i].checked) {
        array[i].checked = true;
      } else if (array[i].checked) {
        array[i].checked = false;
      }
    });
  });
};

USER_GUIDE_BUTTON.addEventListener('click', () => {
  loadUserGuide();
});

// LOCAL STORAGE
const populateStorage = () => {
  localStorage.savedTasklists = JSON.stringify(taskListsContainer);
};

const loadLocalStorage = () => {
  if (JSON.parse(localStorage.savedTasklists).length !== 0) {
  taskListsContainer = JSON.parse(localStorage.savedTasklists);
  createTasklistContainer(JSON.parse(localStorage.savedTasklists));
  } else {
    loadUserGuide();
  }
  displayController();
};

loadLocalStorage();

// Test purpose
/*const TEST_BUTTON = document.getElementById('superbutton'); // test purpose
TEST_BUTTON.addEventListener('click', () => {
  const logo_container = document.querySelector('.logo__container');
  console.log(logo_container.innerHTML);
});*/