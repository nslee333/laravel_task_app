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

        // $tasks = $new_encoded_array; // ? Why does this not work?
        $user_entry->tasks = $new_encoded_array;

        return $user_entry->save();
    }

    function delete_task(mixed $task_index)
    {
        $auth_user = Auth::user();
        $user_entry = User::find($auth_user)[0];
        $tasks = $user_entry->tasks;

        $decoded_tasks = json_decode($tasks);

        // return gettype($task_index);
        // return $task_index;

        return $decoded_tasks;

        // ! Stopped at trying to debug this crap :)

        // return $decoded_tasks[$task_index];

        // unset($decoded_tasks[$task_index]);

        // // ! Cannot use object of type stdClass as array

        // $encoded_tasks = json_encode($decoded_tasks);

        // $user_entry->tasks = $encoded_tasks;

        // $user_entry->save();
    }
}
