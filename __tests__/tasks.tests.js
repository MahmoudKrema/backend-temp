// __tests__/taskManager.test.js

import taskManager from '../src/utils/tasks.js';

// const taskManager = require('../src/utils/tasks.js');

test('adds a task to the task manager', () => {
  // Write a test for the addTask function
  const task = {
    name: "task1",
  }
  taskManager.addTask(task);
  expect(taskManager.tasks).toStrictEqual([task]);
});

test('marks a task as completed', () => {
  // Write a test for the completeTask function
});

test('deletes a task from the task manager', () => {
  // Write a test for the deleteTask function
});
