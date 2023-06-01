<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class TaskController extends Controller
{
    function get_tasks()
    {
        // & Grab the current user.
        $user = new User;

        // ^ I need to test this -> But I need to find a way to access this.

        // TODO Maybe we need a auth route to call the taskController for these methods 
        $auth_user = Auth::user();

        $tasks = $user::find($auth_user)->tasks;

        return $tasks;


        // & $tasks = $user->tasks;

        // & return tasks to caller.
    }

    function add_task() // * Add param for new task
    {
        // & grab the current user
        // & grab their tasks.

        // & json_decode the json.
        // & push param task to array.
        // & json_encode the array back to json.
        // & save to database.

        // & Return success or failure.


    }

    function delete_task() // * index param -> task to be deleted.
    {
        // & grab the current user.
        // & grab their tasks.

        // & json_decode the json.
        // & delete the task from the tasks.
        // & json_encode the array.
        // & save to the database.

        // & return sucess or failure.
    }
}
