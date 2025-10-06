document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
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

        // Add event listeners for the new task
        li.addEventListener('click', toggleComplete);
        li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }

    // Function to toggle task completion
    function toggleComplete(event) {
        event.currentTarget.classList.toggle('completed');
    }

    // Function to delete a task
    function deleteTask(event) {
        event.stopPropagation(); // Prevents the parent li's click event from firing
        const li = event.currentTarget.parentElement;
        li.remove();
    }

    // Event listener for the "Add" button
    addBtn.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});