const sidebar_tasklists = document.querySelector('.sidebar-tasklists');

const createTasklistContainer = (taskListsArray, taskListName) => {
  sidebar_tasklists.textContent = '';
  taskListsArray.forEach(el => {
    const tasklist_block = document.createElement('li');
    tasklist_block.classList.add('sidebar-tasklist');
    tasklist_block.textContent = el.title;
    sidebar_tasklists.appendChild(tasklist_block);
    (el.content).forEach(el => {
      const tasklist_content = document.createElement('ul');
      tasklist_content.classList.add('tasklist-subtasks');
      tasklist_content.textContent = el.title;
      tasklist_block.appendChild(tasklist_content);
    });
  });
  
};

export { createTasklistContainer };