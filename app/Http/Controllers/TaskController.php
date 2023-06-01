<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class TaskController extends Controller
{
    function get_tasks()
    {
        $user = new User;

        $auth_user = Auth::user();

        $user_entry = $user::find($auth_user);

        $tasks = $user_entry[0]->tasks;

        return $tasks;
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
