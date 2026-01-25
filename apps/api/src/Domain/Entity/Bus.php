<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class Bus extends Model
{
    protected static string $table = 'buses';
    protected static string $primaryKey = 'id';

    protected int $id;

    protected string $plate, $brand, $model;
    protected int $capacity;
    protected string $created_at, $updated_at;

    public function __get(string $property)
    {
        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Bus");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {
        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Bus");
        }

        $this->$property = $value;
    }

}