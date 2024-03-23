
const taskManager = {
    tasks: [],

    addTask(task) {
        this.tasks.push(task);
        console.log(`Task "${task}" added successfully.`);
    },

    showTasks() {
        console.log(this.tasks);
    }

};

export default taskManager;