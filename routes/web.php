<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
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

Route::middleware('auth')->group(function () { 

    Route::get("/tasks", [TaskController::class, 'get_tasks']);
    
    Route::post("/tasks", function(Request $request) {
        $task = $request->input('new_task');
        
        return App::call("App\Http\Controllers\TaskController@add_task", ["new_task" => $task]);
    });
    
    
    Route::delete("/tasks", function (Request $request) {
        $task_index = $request->input("task_index");

        return App::call("App\Http\Controllers\TaskController@delete_task", ["task_index" => $task_index]);
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
