<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class TaskController extends Controller
{
    function get_tasks(): string
    {
        $auth_user = Auth::user();

        $user_entry = User::find($auth_user)[0];

        $tasks = $user_entry->tasks;

        return $tasks;
    }

    function add_task(string $new_task): void
    {
        $auth_user = Auth::user();
        $user_entry = User::find($auth_user)[0];
        $tasks = $user_entry->tasks;

        $decoded_tasks = json_decode($tasks);

        $decoded_tasks[] = $new_task;
        
        $user_entry->tasks = $decoded_tasks;

        $user_entry->save();
    }

    function delete_task(mixed $task_index): void
    {
        $auth_user = Auth::user();
        $user_entry = User::find($auth_user)[0];
        $tasks = $user_entry->tasks;

        $decoded_tasks = json_decode($tasks);

        unset($decoded_tasks[$task_index]);

        $user_entry->tasks = $decoded_tasks;

        $user_entry->save();
    }
}
