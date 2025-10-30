let t_date = document.querySelector('.t_date');
const today = new Date();
t_date.textContent = `${today.toLocaleDateString()}`;

//write function to perform when you click the submit button
let subbtn = document.querySelector('.submitBtn');
subbtn.addEventListener('click', () => {
    const task = document.querySelector('#task').value;
    const status = document.querySelector('#status').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    if (!time || !task || !date || !status) {
        alert('Please dont submit any blank data');
        return;
    }

    let newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${task}</td>
    <td>${status}</td>
    <td>${date} ${time}</td>
    <td> 
        <button class="delBtn">Delete</button> 
        <button class="completedBtn">Completed</button> 
    </td>
    `;
    let tableBody = document.querySelector('.storedTasks tbody');
    tableBody.appendChild(newRow);

    // Clear input fields
    document.querySelector('#task').value = '';
    document.querySelector('#status').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#time').value = '';

    // delete button
    newRow.querySelector('.delBtn').addEventListener('click', () => {
        newRow.remove();
        saveTasks(); // NEW
    });

    // completed button
    newRow.querySelector('.completedBtn').addEventListener('click', () => {
        newRow.style.textDecoration = 'line-through';
        saveTasks(); // NEW
    });

    saveTasks(); // NEW
});

//write the function to perform when you click the clear button in the rhs
let clrbtn = document.querySelector('.clearBtn');
clrbtn.addEventListener('click', () => {
    document.querySelector('#task').value = '';
    document.querySelector('#status').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#time').value = '';
});

// ✅ NEW FEATURE: Local Storage (everything below this line is new)

function saveTasks() {
    const rows = document.querySelectorAll('.storedTasks tbody tr');
    let tasks = [];
    rows.forEach(row => {
        const cols = row.querySelectorAll('td');
        tasks.push({
            task: cols[0].textContent,
            status: cols[1].textContent,
            deadline: cols[2].textContent,
            completed: row.style.textDecoration === 'line-through'
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]');
    const tableBody = document.querySelector('.storedTasks tbody');
    saved.forEach(item => {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${item.task}</td>
        <td>${item.status}</td>
        <td>${item.deadline}</td>
        <td> 
            <button class="delBtn">Delete</button> 
            <button class="completedBtn">Completed</button> 
        </td>
        `;
        if (item.completed) newRow.style.textDecoration = 'line-through';
        tableBody.appendChild(newRow);

        newRow.querySelector('.delBtn').addEventListener('click', () => {
            newRow.remove();
            saveTasks();
        });

        newRow.querySelector('.completedBtn').addEventListener('click', () => {
            newRow.style.textDecoration = 'line-through';
            saveTasks();
        });
    });
}

window.addEventListener('load', loadTasks); // NEW
