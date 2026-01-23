<?php

declare(strict_types=1);

use Domain\Entity\User;

require __DIR__ . '/../vendor/autoload.php';

echo 'GoytaBus API running';

echo '<br>';

$user = new User();

$user->name = 'Raphael';
$user->email = 'raphael@email.com';
$user->password = '123456';

var_dump($user);
