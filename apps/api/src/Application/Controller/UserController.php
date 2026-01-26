<?php

namespace Application\Controller;

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
        // none for now
    }
}
