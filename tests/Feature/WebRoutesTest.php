<?php

namespace Tests\Feature;

use App\Models\User;
// use Illuminate\Testing\Assert;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class WebRoutesTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_homepage_redirects_if_unauthenticated(): void
    {
        $response = $this->get('/');


        $response->assertStatus(302);
    }
    public function test_homepage_returns_200_if_authenticated(): void
    {
        $response = $this->get('/');

        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/');

        $response->assertOk();
    }

    public function test_homepage_renders_an_inertia_component_task_dashboard(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/');

        $response->assertInertia(fn (Assert $page) => $page
            ->component('TaskDashboard'));
    }

    public function test_logout_redirects_to_login(): void
    {
        $response = $this->get("logout");

        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/logout');

        $response->assertRedirect("/login");
    }
    public function test_dashboard_renders_an_inertia_component_dashboard(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/dashboard');

        $response->assertInertia(fn (Assert $page) => $page
            ->component('Dashboard'));
    }
}
