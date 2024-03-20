{
    const tasks = [{
        content: "test",
        done: true,
    },
    {
        content: "test2",
        done: false,
    }];

    const render = () => {
        let addTextToHtml = "";
        const tasksElement = document.querySelector(".js-tasks");
        for (const task of tasks) {
            addTextToHtml += `
        <li>
        ${task.content}
        </li>`
        };
        tasksElement.innerHTML = addTextToHtml;
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const newTaskElemnt = document.querySelector(".js-newTask");
            const newTask = newTaskElemnt.value.trim();
            if(newTask !== "") {
                tasks.push({
                    content: newTask,
                });
                render();
                newTaskElemnt.value = "";
            }
        });
    };
    init();
}