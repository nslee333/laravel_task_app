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

function addTask() {

  const

}

function deleteTask() {

}

export { getTasks, addTask, deleteTask };
