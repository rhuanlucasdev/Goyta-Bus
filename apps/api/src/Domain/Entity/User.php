<?php

namespace Domain\Entity;

use Exception;
use PDO;
use Infrastructure\ORM\Model;

class User extends Model
{
    protected static string $table = 'users';
    protected static string $primaryKey = 'id';

    protected string $name, $email, $password;

    public function __get(string $property)
    {
        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on User");
        }

        if ($property === 'password') {
            throw new Exception('Access to password is not allowed');
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {
        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on User");
        }

        if ($property === 'email') {
            if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                throw new Exception('Invalid email');
            }
        }

        if ($property === 'password') {
            $value = password_hash($value, PASSWORD_BCRYPT);
        }

        $this->$property = $value;
    }

}