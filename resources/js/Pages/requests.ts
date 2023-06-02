import axios from "axios";


function getTasks() {

  const getResponse = axios.get('/tasks')
    .then(function(response) {
      return response;
    })
    .catch(function (error) {
      return Error(error);
    });

  return getResponse;
}

function addTask(newTask: string) {

  const addResponse = axios.post("/tasks", {
    new_task: newTask
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error)  {
      return Error(error);
    });

    return addResponse;
}

function deleteTask(taskIndex: number) {

  const deleteResponse = axios.delete("tasks", { data: {
      task_index: taskIndex
    }})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return Error(error);
    });

  return deleteResponse;
}

export { getTasks, addTask, deleteTask };
