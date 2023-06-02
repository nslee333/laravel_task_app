import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";


async function getTasksReq(): Promise<AxiosResponse | AxiosError> {

  const getResponse = await axios.get('/tasks')
    .then(function(response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return getResponse;
}

async function addTaskReq(newTask: string): Promise<AxiosResponse | AxiosError> {

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

async function deleteTaskReq(taskIndex: number): Promise<AxiosResponse | AxiosError> {

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
