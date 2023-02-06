const sidebar_tasklists = document.querySelector('.sidebar-tasklists');
const content_container = document.querySelector('.content-output');

const createTasklistContainer = (taskListsArray) => {
  sidebar_tasklists.textContent = '';
  taskListsArray.forEach(el => {
    const tasklist_block = document.createElement('li');
    tasklist_block.classList.add('sidebar-tasklist');
    sidebar_tasklists.appendChild(tasklist_block);
    const tasklist_title = document.createElement('div');
    tasklist_title.classList.add('tasklist-title');
    tasklist_title.textContent = el.title;
    tasklist_block.appendChild(tasklist_title);
    (el.content).forEach(el => {
      const tasklist_content = document.createElement('ul');
      tasklist_content.classList.add('tasklist-subtasks');
      tasklist_content.textContent = el.title;
      tasklist_block.appendChild(tasklist_content);
    });
  });
};

const loadTasklistDetails = (tasklist) => {
  content_container.textContent = '';
  const tasklist_title = document.createElement('h2');
  tasklist_title.textContent = tasklist.title;
  content_container.appendChild(tasklist_title);
  (tasklist.content).forEach(tsk => {
    const singleTaskContainer = document.createElement('div');
    content_container.appendChild(singleTaskContainer);
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = tsk.title;
    singleTaskContainer.appendChild(taskTitle);
    const taskDesc = document.createElement('div');
    taskDesc.textContent = tsk.description;
    singleTaskContainer.appendChild(taskDesc);
  });
};

export { createTasklistContainer, loadTasklistDetails };