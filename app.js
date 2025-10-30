let t_date=document.querySelector('.t_date');
const today= new Date();
t_date.textContent=`${today.toLocaleDateString()}`;

//write function to perform when you click the submit button
let subbtn=document.querySelector('.submitBtn');
subbtn.addEventListener('click',()=>{
    const task=document.querySelector('#task').value;
    const status=document.querySelector('#status').value;
    const date=document.querySelector('#date').value;
    const time=document.querySelector('#time').value;
    // console.log(task,status,date,time);

    if(!time || !task || !date||!status){
        alert('Please dont submit any blank data');
        return;
    }
    let newRow=document.createElement('tr');
    newRow.innerHTML=`
    <td>${task}</td>
    <td>${status}</td>
    <td>${date} ${time}</td>
    <td> <button class="delBtn">Delete </button> <button class="completedBtn">Completed</button> </td>
    `
    let tableBody=document.querySelector('.storedTasks tbody');
    console.log(tableBody);
    tableBody.appendChild(newRow);
    

    document.querySelector('#task').value='';
    document.querySelector('#status').value='';
    document.querySelector('#date').value = '';
    document.querySelector('#time').value = '';

  


})
document.querySelector('.storedTasks').addEventListener('click', function(e) {
    if (e.target.classList.contains('delBtn')) {
        e.target.closest('tr').remove();
    } else if (e.target.classList.contains('completedBtn')) {
        e.target.closest('tr').style.textDecoration = 'line-through';
    }
});

//write the function to perform when you click the clear button in the rhs
let clrbtn=document.querySelector('.clearBtn');
clrbtn.addEventListener('click',()=>{
    document.querySelector('#task').value='';
    document.querySelector('#status').value='';
    document.querySelector('#date').value='';
    document.querySelector('#time').value='';
})