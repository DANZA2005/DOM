const inputTarea = document.getElementById('tareatext');
const btnAdd = document.getElementById('addtarea');
const divTareas = document.getElementById('tareas');

const addTarea = () => {
    const tarea = inputTarea.value;
    const p = document.createElement('p');
    p.innerText = tarea;
    divTareas.appendChild(createTarea (tarea)); 
    inputTarea.value = '';
}

const deleteitem = (e) => {
    const pa = e.target.parentElement;
    pa.remove();
}

const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');

    p.innerText = tarea;
    button.innerText = 'Eliminar';
    button.addEventListener('click', deleteitem)
    div.appendChild(p);
    div.append(button);
    return div;
}

btnAdd.addEventListener('click', addTarea);
