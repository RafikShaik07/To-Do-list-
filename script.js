document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">❌</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', toggleComplete);
        li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }

    function toggleComplete(event) {
        event.currentTarget.classList.toggle('completed');
    }

    function deleteTask(event) {
        event.stopPropagation(); 
        const li = event.currentTarget.parentElement;
        li.remove();
    }

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
