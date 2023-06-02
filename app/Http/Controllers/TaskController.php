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

    function add_task(string $new_task) 
    {
        $user = new User;
        $auth_user = Auth::user();
        $user_entry = $user::find($auth_user);
        $tasks = $user_entry[0]->tasks;
        
        $decoded_tasks = json_decode($tasks);


        $new_task_array = $decoded_tasks[] = $new_task;

        $new_encoded_array = json_encode($new_task_array);

        $tasks = $new_encoded_array;

        $user->save();

        // * Not sure if this is going to work -> need to test it

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
