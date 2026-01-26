<?php

declare(strict_types=1);

use Domain\Entity\Booking;
use Domain\Entity\Bus;
use Domain\Entity\City;
use Domain\Entity\Passenger;
use Domain\Entity\Driver;
use Domain\Entity\Route;
use Domain\Entity\RouteStopover;
use Domain\Entity\Travel;
use Domain\Entity\User;
use Infrastructure\ORM\Database;

require __DIR__ . '/../vendor/autoload.php';
$dbConfig = require __DIR__ . '/../src/config/database.php';

Database::connect(
    $dbConfig['dsn'],
    $dbConfig['username'],
    $dbConfig['password']
);

echo 'GoytaBus API running';

echo '<br>';
echo '<br>';

/* $user = new User();

$user->name = 'Stefano';
$user->email = 'stefano@email.com';
$user->password = 'Root.123';
$user->cpf = '705.484.450-52'; */

$user = User::find(1);
$user2 = User::find(2);

var_dump($user);

echo '<br>';
echo '<br>';

var_dump($user2);

// $passenger = new Passenger();

// $passenger->user_id = User::findBy('name', 'Raphael')->id;

$passenger = Passenger::find(1);

echo '<br>';
echo '<br>';

var_dump($passenger);

// $driver = new Driver();

// $driver = new Driver();

// $driver->user_id = User::findBy('name', 'Stefano')->id;

$driver = Driver::find(1);

echo '<br>';
echo '<br>';

var_dump($driver);

/* $city = new City();

$city->name = "Campos dos Goytacazes";
$city->uf = "rj"; */

/* $city = new City();

$city->name = "Macaé";
$city->uf = "rj"; */

$city = City::find(1);

echo '<br>';
echo '<br>';

var_dump($city);

/* $route = new Route();

$route->origin_city = $city;
$route->destination_city = City::find(2); */

$route = Route::find(1);

echo '<br>';
echo '<br>';

var_dump($route);
echo "
    <ul>
        <li>{$route->origin_city->name}</li>
        <li>{$route->destination_city->name}</li>
    </ul>
";

/* $city30 = new City();

$city30->name = "Itaperuna";
$city30->uf = 'rj'; */

// $city30->save();

$city30 = City::findBy('name', 'Itaperuna');

var_dump($city30);

/* $stopover = new RouteStopover();

$stopover->route = 1;
$stopover->city = 3; */

$stopover = RouteStopover::find(1);

echo '<br>';
echo '<br>';

var_dump($stopover);

/* $bus = new Bus();

$bus->plate = "aaa-1111";
$bus->brand = "1001";
$bus->model = "example model";
$bus->capacity = 50; */

$bus = Bus::find(1);

echo '<br>';
echo '<br>';

var_dump($bus);

/* $travel = new Travel();

$dataPartida = new DateTime('2026-02-15 14:30:00');
$travel->departure_time = $dataPartida->format('Y-m-d H:i:s');

$dataChegada = new DateTime('2026-02-15 17:00:00');
$travel->arrival_time = $dataChegada->format('Y-m-d H:i:s');

$travel->bus = $bus;
$travel->driver = $driver;
$travel->route = $route; */

$travel = Travel::find(1);

echo '<br>';
echo '<br>';

var_dump($travel);

/* $booking = new Booking();

$booking->travel = $travel;
$booking->passenger = $passenger;
$booking->seat_number = 24;
$booking->price = 7550;
$booking->status = 'pending'; */

$booking = Booking::find(1);

echo '<br>';
echo '<br>';

var_dump($booking);

echo "<p>{$booking->formatPrice()}</p>";

// $passenger->save();

// $user->save();

// $driver->save();

// $city->save();

// $route->save();

// $stopover->save();

// $bus->save();

// $travel->save();

// $booking->save();