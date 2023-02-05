const sidebar_tasklists = document.querySelector('.sidebar-tasklists');
let tasklist_content;

const createTasklistContainer = (taskListName, task) => {
  const tasklist_block = document.createElement('li');
  tasklist_block.classList.add('sidebar-tasklist');
  tasklist_block.textContent = taskListName;
  console.log(tasklist_block);
  sidebar_tasklists.appendChild(tasklist_block);
  tasklist_content = document.createElement('ul');
  tasklist_content.classList.add('tasklist-subtasks');
  tasklist_block.appendChild(tasklist_content);
};

const createTask = (taskTitle) => {
  const task = document.createElement('li');
  task.textContent = taskTitle;
  tasklist_content.appendChild(task);
  // Naviguer le DOM pour identifier à quelle tasklist appartient la nouvelle tâche à ajouter
};

export { createTasklistContainer, createTask };