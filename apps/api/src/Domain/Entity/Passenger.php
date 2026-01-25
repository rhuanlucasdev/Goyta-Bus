<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class Passenger extends Model
{
    protected static string $table = 'passengers';
    protected static string $primaryKey = 'id';

    protected int $id;
    protected int $user_id;
    protected string $created_at, $updated_at;

    public function __get(string $property)
    {
        if($property == 'user'){
            return User::find($this->user_id);
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Passenger");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {

        if($property == 'user'){
            $property = 'user_id';

            if($value instanceof User){
                $value = $value->id;
            }
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Passenger");
        }

        if ($property === 'user_id') {

            if(!is_int($value)){
                throw new Exception('user_id must be an integer');
            }

            if(User::find($value) == null){
                throw new Exception('user does not exist');
            }

        }

        $this->$property = $value;
    }

}
