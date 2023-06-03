<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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

        $response->assertStatus(200);
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
}
