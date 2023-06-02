<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\App;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $task_controller = new TaskController;

    $tasks = $task_controller->get_tasks();

    return Inertia::render('TaskDashboard', [
        'data' => $tasks
    ]);

})->middleware('auth');

// ? this group of routes might be completely unnecessary.

// ^ delete tasks => Need to pass task[index] to function.

Route::middleware('auth')->group(function () {
    Route::patch("/tasks", [TaskController::class, 'add_task'])->name("tasks.add");

    // Route::delete("/tasks", [
    //     data: {

    //     }, 
    //     TaskController::class, 'delete_task'
    // ])->name("tasks.delete");

    Route::delete("/tasks", function() {
        $tasks = "Do Laundry";

        return App::call("TaskController@add_task", ["tasks" => $tasks]);
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
