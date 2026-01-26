<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class Route extends Model
{
    protected static string $table = 'routes';
    protected static string $primaryKey = 'id';

    protected int $id;
    protected int $origin_city_id, $destination_city_id;
    protected string $created_at, $updated_at;

    public function __get(string $property)
    {
        if($property == 'origin_city'){
            return City::find($this->origin_city_id);
        }

        if($property == 'destination_city'){
            return City::find($this->destination_city_id);
        }

        if($property == 'stopovers'){
            return RouteStopover::where('route_id', $this->id);
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Route");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {
        if($property === 'destination_city'){
            $property = 'destination_city_id';

            if($value instanceof City){
                $value = $value->id;
            }
        }

        if($property === 'origin_city'){
            $property = 'origin_city_id';

            if($value instanceof City){
                $value = $value->id;
            }
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Route");
        }

        if ($property === 'origin_city_id') {

            if(!is_int($value)){
                throw new Exception('origin_city_id must be an integer');
            }

            if(City::find($value) == null){
                throw new Exception('origin city does not exist');
            }

            if(isset($this->destination_city_id) and $value === $this->destination_city_id){
                throw new Exception('origin and destination cities cannot be the same');
            }

        }

        if ($property === 'destination_city_id') {

            if(!is_int($value)){
                throw new Exception('destination_city_id must be an integer');
            }

            if(City::find($value) == null){
                throw new Exception('destination city city does not exist');
            }

            if(isset($this->origin_city_id) and $value === $this->origin_city_id){
                throw new Exception('origin and destination cities cannot be the same');
            }

        }

        $this->$property = $value;
    }

}
