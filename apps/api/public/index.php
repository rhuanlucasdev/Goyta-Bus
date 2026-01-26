<?php

declare(strict_types=1);

use Application\Controller\SiteController;
use Infrastructure\ORM\Database;
use Infrastructure\Http\Router;
use Application\Controller\UserController;

// Permite qualquer origem (em produção, você pode trocar pelo endereço do seu site hospedado)
header("Access-Control-Allow-Origin: *");

// Permite os métodos HTTP que sua API vai usar
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

// Permite cabeçalhos específicos (como Content-Type ou Authorization)
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Responde imediatamente a requisições do tipo OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

require __DIR__ . '/../vendor/autoload.php';
$dbConfig = require __DIR__ . '/../src/config/database.php';

Database::connect(
    $dbConfig['dsn'],
    $dbConfig['username'],
    $dbConfig['password']
);


$router = new Router();

$router->get('/', [SiteController::class, 'debugging']);
$router->post('/auth/check-email', [UserController::class, 'getEmail']);
$router->post('/auth/login', [UserController::class, 'login']);
$router->post('/auth/register', [UserController::class, 'register']);


$router->dispatch();
