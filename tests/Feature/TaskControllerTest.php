<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get_tasks_redirects_if_not_authenticated(): void
    {
        $response = $this->get('/tasks');

        $response->assertStatus(302);
    }

    public function test_get_tasks_returns_200_if_authenticated(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/tasks');

        $response->assertOk();
    }

    public function test_get_tasks_returns_json_object(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/tasks');

        $this->assertJson($response->original);
    }

    public function test_get_tasks_contains_initial_task(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/tasks');


        $data = json_decode($response->original);

        $this->assertContains("Mow the lawn", $data);
    }

    public function test_add_task_returns_200(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->post('/tasks', ['new_task' => 'Wash the dishes']);


        $response->assertOk();
    }

    public function test_delete_task_returns_200(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->delete('/tasks', ['task_index' => 0]);

        $response->assertOk();
    }
}
