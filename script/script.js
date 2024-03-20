{
    const tasks = [{
        content: "ad",
    }];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });
        render();
    };

    const toogleButtonTasks = (index) => {
        tasks[index].done = !tasks[index].done
        render();
    };

    const removeButtonTasks = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const bindButtonTasks = () => {
        const toogleButton = document.querySelectorAll(".js-toogleButton");
        toogleButton.forEach((toogleButton, index) => {
            toogleButton.addEventListener("click", () => {
                toogleButtonTasks(index);
            });
        });

        const removeButton = document.querySelectorAll(".js-removeButton");
        removeButton.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeButtonTasks(index);
            });
        });
    };

    const render = () => {
        let addTextToHtml = "";
        const tasksElement = document.querySelector(".js-tasksList");
        for (const task of tasks) {
            addTextToHtml += `
        <li class="tasksList__item">
            <button class="tasksListButton tasksListButton--toogle js-toogleButton">
                ${task.done ? "Y" : "N"}
            </button>
            <span class="${task.done ? "taskDone" : ""}">  
                ${task.content}
            </span>
            <button class="tasksListButton tasksListButton--reomve js-removeButton">
                X
            </button>
        </li>`
        };

        tasksElement.innerHTML = addTextToHtml;
        bindButtonTasks()
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElemnt = document.querySelector(".js-newTask");
        const newTask = newTaskElemnt.value.trim();
        if (newTask !== "") {
            addNewTask(newTask);
            newTaskElemnt.value = "";
        }
        newTaskElemnt.focus();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();

}