import axios from "axios";


function getTasksReq() {

  const getResponse = axios.get('/tasks')
    .then(function(response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return getResponse;
}

function addTaskReq(newTask: string) {

  const addResponse = axios.post("/tasks", {
    new_task: newTask
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error)  {
      return error;
    });

    return addResponse;
}

function deleteTaskReq(taskIndex: number) {

  const deleteResponse = axios.delete("tasks", { data: {
      task_index: taskIndex
    }})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return deleteResponse;
}

export { getTasksReq, addTaskReq, deleteTaskReq };
