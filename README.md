# e-chat-test-work
## Task:
Create a simple task management application (Todo App) using Vue 3. Users should be able to add, mark as completed, delete, and optionally edit tasks. The application should persist task state even after page reload.

### The user interface should include the following elements:

- Input Field: A field where users can input the text of a new task.

- Task List: A list of added tasks. Each task should have options for marking as completed, deleting, and optionally editing.

- "Add" Button **+** : A button that adds a new task to the task list after entering text in the input field.

- "Edit" Button ![Edit](https://raw.githubusercontent.com/Honchar007/e-chat-test-work/main/src/assets/Edit.svg): A button that allows users to edit the text of a task after it has been added.

- "Save" Button ![Save](https://raw.githubusercontent.com/Honchar007/e-chat-test-work/main/src/assets/save.svg): A button that allows users to save the text of a task after it has already been edited.

- "Remove" Button ![Save](https://raw.githubusercontent.com/Honchar007/e-chat-test-work/main/src/assets/close.svg): A button that allows users to remove task.

### Requirements:
- Added tasks should be stored in the application state and should not disappear after page reload.
- The layout and design should be simple, yet readable and aesthetic.

### Solution:
- Create a Vue 3 project using Vue CLI or other development tools.
- Create basic components such as InputCustom, CheckboxCustom, ButtonCustom.
- Create a TodoItem component responsible for displaying, editing, and deleting individual tasks.
- Create a AddToDo component responsible for creating individual tasks.
- Use Vuex to manage state and store the list of tasks. Tasks should be stored in the Vuex store to persist them after page reload.
- Add event handlers for adding, editing, and deleting tasks.
- Implement Vuex to store task state and update the task list upon user interaction.
- Add functionality for editing tasks and update the task state in the Vuex store.
- Launch the application and ensure that tasks are correctly added, edited, marked as completed, and deleted.
- Test the application to ensure that tasks are persisted even after page reload.
### 
![image](https://github.com/Honchar007/e-chat-test-work/assets/54860596/406326e1-6a13-42a6-a754-9ab625980bbb)
