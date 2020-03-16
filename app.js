//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//To load  all event listeners
loadEventListeners();

//Function to load all event listeners
function loadEventListeners(){
    //Add task evenet
    form.addEventListener('submit', addTask);

    //Remove task event 
    taskList.addEventListener('click', removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTasks);

    //Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

//Add task function
function addTask(e){
    e.preventDefault();
    if(taskInput.value === ''){
        alert('Add a task');
        return;
    }
    //Create li element
    const li = document.createElement('li');
    //Add a class
    li.className = 'collection-item';
    //Create the text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create a new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
    //Clear the input
    taskInput.value = '';
}

//Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks(){
    //taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    //Take all list items. QuerySelector return array node List 
    document.querySelectorAll('.collection-item').forEach(task =>{
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}