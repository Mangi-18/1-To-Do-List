let date=document.querySelector('.date');
const today= new Date();
date.textContent=`${today.toLocaleDateString()}`;

let taskData=document.getElementById('.addTasks task').value;
let status=document.getElementById('status').value;
let date=document.getElementById('date').value;
let time=document.getElementById('time').value;



let subBtn=document.querySelector('.submitBtn');
subBtn.addEventListener('click',()=>{
    console.log(taskData);
});
