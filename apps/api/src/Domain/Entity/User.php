<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class User extends Model
{
    protected static string $table = 'users';
    protected static string $primaryKey = 'id';

    protected int $id;

    protected string $name, $email, $password, $cpf;
    protected string $created_at, $updated_at;

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
            if (!$this->validatePassword($value)) {
                throw new Exception(
                    'Password must have at least 8 characters, including uppercase, lowercase, number and special character'
                );
            }

            $value = password_hash($value, PASSWORD_BCRYPT);
        }

        if ($property === 'cpf' and !$this->validateCpf($value)) {
            throw new Exception('Invalid cpf');
        }

        $this->$property = $value;
    }

    protected function validateCpf(string $cpf): bool
    {
        $cpf = preg_replace('/\D/', '', $cpf);

        if (strlen($cpf) !== 11) {
            return false;
        }

        if (preg_match('/^(.)\1*$/', $cpf)) {
            return false;
        }

        for ($t = 9; $t < 11; $t++) {
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }

            $d = ((10 * $d) % 11) % 10;

            if ($cpf[$c] != $d) {
                return false;
            }
        }

        return true;
    }
    
    private function validatePassword(string $password): bool
    {
        return preg_match(
            '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/',
            $password
        ) === 1;
    }

    public function verifyPassword($password){
        return password_verify($password, $this->password);
    }

}