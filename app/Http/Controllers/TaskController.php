<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class TaskController extends Controller
{
    function get_tasks()
    {
        // & Grab the current user.
        $user = User::find();

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
