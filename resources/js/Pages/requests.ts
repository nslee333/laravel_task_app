import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";


async function getTasksReq() {

  const getResponse = await axios.get('/tasks')
    .then(function(response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return getResponse;
}

async function addTaskReq(newTask: string) {

  const addResponse = await axios.post("/tasks", {
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

async function deleteTaskReq(taskIndex: number) {

  const deleteResponse = await axios.delete("tasks", { data: {
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
