<?php

namespace Application\Controller;

use Application\Service\Session;
use Domain\Entity\User;

class UserController
{
    public function getEmail(): void
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        $email = $data['email'] ?? null;

        if (!$email) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Email is required']);
            return;
        }

        $user = User::findBy('email', $email);
        header('Content-Type: application/json');
        echo json_encode([
            'exists' => !empty($user)
        ]);
        exit;
    }

    public function login(): void 
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        if (!$email) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Email is required']);
            return;
        }

        if (!$password) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Password is required']);
            return;
        }

        $user = User::findBy('email', $email);
        if(empty($user)){
            http_response_code(401);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Your credentials are wrong']);
            return;
        }

        if(!$user->verifyPassword($password)){
            http_response_code(401);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Your credentials are wrong']);
            return;
        }
        
        Session::create('user_id', $user->id);

        Session::create('user_data', [
            'user_id' => $user->id,
            'user_name' => $user->name,
            'user_email' => $user->email,
            'user_cpf' => $user->cpf,
        ]);

        $session = Session::load();

        header('Content-Type: application/json');
        echo json_encode([
            'message' => 'Login successful',
            'user' => $session->user_data,
        ]);
        exit;
    }

    public function register(): void
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;
        $name = $data['name'] ?? null;
        $cpf = $data['cpf'] ?? null;

        if (!$email) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Email is required']);
            return;
        }

        if (!$password) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Password is required']);
            return;
        }

        if (!$name) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Name is required']);
            return;
        }

        if (!$cpf) {
            http_response_code(400);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Cpf is required']);
            return;
        }

        $user = new User();
        
        $user->name = $name;
        $user->email = $email;
        $user->cpf = $cpf;
        $user->password = $password;
        
        $user->save();

        Session::create('user_id', $user->id);

        Session::create('user_data', [
            'user_id' => $user->id,
            'user_name' => $user->name,
            'user_email' => $user->email,
            'user_cpf' => $user->cpf,
        ]);

        $session = Session::load();

        header('Content-Type: application/json');
        echo json_encode([
            'message' => 'Login successful',
            'user' => $session->user_data,
        ]);
        exit;
    }
}
