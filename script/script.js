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
    };
    init();
}