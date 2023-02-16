import { parseISO, formatDistanceToNow, isBefore } from 'date-fns';

const sidebar_tasklists = document.querySelector('.sidebar-tasklists');
const content_container = document.querySelector('.content-output');

const resetContentContainer = () => {
  content_container.textContent = '';
};

// Create sidebar content
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

// Populate main content div when clicking on sidebar
const loadTasklistDetails = (tasklist) => {
  content_container.textContent = ''; // empty the div before updating
// Generate tasklist header
  const content_tasklist_header = document.createElement('div');
  content_tasklist_header.classList.add('content__tasklist-header');
  content_container.appendChild(content_tasklist_header);
  const tasklist_title = document.createElement('h2');
  tasklist_title.classList.add('content__tasklist-title');
  tasklist_title.textContent = tasklist.title;
  content_tasklist_header.appendChild(tasklist_title);
  const remove_tasklist_button = document.createElement('div');
  remove_tasklist_button.classList.add('remove-tasklist__button');
  content_tasklist_header.appendChild(remove_tasklist_button);
// Generate tasklist description
  const tasklist_description = document.createElement('div');
  tasklist_description.classList.add('content__tasklist-description');
  tasklist_description.textContent = tasklist.description;
  content_container.appendChild(tasklist_description);
// Generate tasks container
  const tasks_display = document.createElement('div');
  tasks_display.classList.add('content__single-tasks-display');
  content_container.appendChild(tasks_display);
// Generate columns labels
  const data_legends = document.createElement('div');
  data_legends.classList.add('data_legends');
  tasks_display.appendChild(data_legends);
  const empty_div = document.createElement('div');
  data_legends.appendChild(empty_div);
  const label_task = document.createElement('div');
  label_task.textContent = 'Task';
  data_legends.appendChild(label_task);
  const label_deadline = document.createElement('div');
  label_deadline.textContent = 'Deadline';
  data_legends.appendChild(label_deadline);
  const label_priority = document.createElement('div');
  label_priority.textContent = 'Priority';
  data_legends.appendChild(label_priority);
  const label_actions = document.createElement('div');
  label_actions.textContent = 'Delete';
  data_legends.appendChild(label_actions);
// Generate display of each task
  (tasklist.content).forEach(task => {
    const single_task_container = document.createElement('div');
    single_task_container.classList.add('single-task__container');
    tasks_display.appendChild(single_task_container);
    const single_task_datas = document.createElement('div');
    single_task_datas.classList.add('single-task__datas');
    single_task_container.appendChild(single_task_datas);
    const task_checkbox = document.createElement('input');
    task_checkbox.type = "checkbox";
    task_checkbox.classList.add('task-checkbox');
    if (task.checked) {
      task_checkbox.checked = true;
    }
    single_task_datas.appendChild(task_checkbox);
    const single_task_title = document.createElement('h3');
    single_task_title.classList.add('single-task__title');
    single_task_title.textContent = task.title;
    if (task.checked) {
      single_task_title.style.color = '#aaaaaa';
    } else if (!task.checked) {
      single_task_title.style.color = '#000000';
    }
    single_task_datas.appendChild(single_task_title);
    const single_task_deadline = document.createElement('div');
    single_task_deadline.classList.add('single-task__deadline');
    if (task.deadline === '') {
      single_task_deadline.textContent = '-';
    } else {
      single_task_deadline.textContent = task.deadline;
    }
    single_task_datas.appendChild(single_task_deadline);
    const timeToDeadline = document.createElement('div');
    timeToDeadline.classList.add('time-to-deadline');
    if (task.deadline === '') {
      timeToDeadline.textContent = '';
    } else if (isBefore(parseISO(task.deadline), new Date())) {
      timeToDeadline.textContent = formatDistanceToNow(parseISO(task.deadline)) + ' ago';
    } else {
      timeToDeadline.textContent = formatDistanceToNow(parseISO(task.deadline)) + ' left';
    }
    single_task_deadline.appendChild(timeToDeadline);
    const single_task_priority = document.createElement('div');
    single_task_priority.classList.add('single-task__priority');
    single_task_priority.textContent = '★'.repeat(task.priority);
    if (task.priority === '') {
      single_task_priority.textContent = '-';
      single_task_priority.style.color = '#aaaaaa';
    }
    if (task.priority === '1') {
      single_task_priority.style.color = '#A7C7E7';
    } else if (task.priority === '2') {
      single_task_priority.style.color = '#77DD77';
    } else if (task.priority === '3') {
      single_task_priority.style.color = '#ff6961';
    }
    single_task_datas.appendChild(single_task_priority);
    const remove_single_task_button = document.createElement('div');
    remove_single_task_button.classList.add('remove-single-task__button');
    single_task_datas.appendChild(remove_single_task_button);
    const single_task_description = document.createElement('div');
    single_task_description.classList.add('single-task__description');
    single_task_description.textContent = task.description;
    single_task_container.appendChild(single_task_description);
  });
};

const loadFiltersDetails = (filter, deadlineArray) => {
  content_container.textContent = ''; // empty the div before updating
// Generate tasklist header
  const content_tasklist_header = document.createElement('div');
  content_tasklist_header.classList.add('content__tasklist-header');
  content_container.appendChild(content_tasklist_header);
  const tasklist_title = document.createElement('h2');
  tasklist_title.classList.add('content__tasklist-title');
  tasklist_title.textContent = filter;
  content_tasklist_header.appendChild(tasklist_title);
// Generate tasks container
  const tasks_display = document.createElement('div');
  tasks_display.classList.add('content__single-tasks-display');
  content_container.appendChild(tasks_display);
// Generate columns labels
  const data_legends = document.createElement('div');
  data_legends.classList.add('filtered-task-data_legends');
  tasks_display.appendChild(data_legends);
  const empty_div = document.createElement('div');
  data_legends.appendChild(empty_div);
  const label_task = document.createElement('div');
  label_task.textContent = 'Tasklist : Task';
  data_legends.appendChild(label_task);
  const label_deadline = document.createElement('div');
  label_deadline.textContent = 'Deadline';
  data_legends.appendChild(label_deadline);
  const label_priority = document.createElement('div');
  label_priority.textContent = 'Priority';
  data_legends.appendChild(label_priority);
// Generate display of each task
  (deadlineArray).forEach(task => {
    const filtered_task_datas = document.createElement('div');
    filtered_task_datas.classList.add('filtered-task__datas');
    tasks_display.appendChild(filtered_task_datas);
    const task_checkbox = document.createElement('input');
    task_checkbox.type = "checkbox";
    filtered_task_datas.appendChild(task_checkbox);
    const filtered_task_tasklist = document.createElement('h3');
    filtered_task_tasklist.textContent = task.tasklist +' :';
    filtered_task_datas.appendChild(filtered_task_tasklist);
    const filtered_task_title = document.createElement('div');
    filtered_task_title.classList.add('filtered-task__title');
    filtered_task_title.textContent = task.title;
    filtered_task_datas.appendChild(filtered_task_title);
    const filtered_task_deadline = document.createElement('div');
    filtered_task_deadline.classList.add('filtered-task__deadline');
    filtered_task_deadline.textContent = task.deadline;
    filtered_task_datas.appendChild(filtered_task_deadline);
    const filtered_task_priority = document.createElement('div');
    filtered_task_priority.classList.add('filtered-task__priority');
    filtered_task_priority.textContent = '★'.repeat(task.priority);
    if (task.priority === '') {
      filtered_task_priority.textContent = '-';
      filtered_task_priority.style.color = '#aaaaaa';
    }
    if (task.priority === '1') {
      filtered_task_priority.style.color = '#A7C7E7';
    } else if (task.priority === '2') {
      filtered_task_priority.style.color = '#77DD77';
    } else if (task.priority === '3') {
      filtered_task_priority.style.color = '#ff6961';
    }
    filtered_task_datas.appendChild(filtered_task_priority);
  });
};

export { resetContentContainer, createTasklistContainer, loadTasklistDetails, loadFiltersDetails };