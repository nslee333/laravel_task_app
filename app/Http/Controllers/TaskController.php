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

        $user_entry = $user::find($auth_user)[0];

        $tasks = $user_entry->tasks;

        return $tasks;
    }

    function add_task(string $new_task) 
    {
        $auth_user = Auth::user();
        $user_entry = User::find($auth_user)[0];
        $tasks = $user_entry->tasks;
        

        $decoded_tasks = json_decode($tasks);
        $decoded_tasks[] = $new_task;
        $new_encoded_array = json_encode($decoded_tasks);

        // $tasks = $new_encoded_array;
        $user_entry->tasks = $new_encoded_array;

        return $user_entry->save();
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
