<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class RouteStopover extends Model
{
    protected static string $table = 'route_stopovers';
    protected static string $primaryKey = 'id';

    protected int $id;
    protected int $route_id, $city_id;
    protected string $created_at, $updated_at;

    public function __get(string $property)
    {
        if($property == 'city'){
            return City::find($this->city_id);
        }

        if($property == 'route'){
            return Route::find($this->route_id);
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on RouteStopover");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {
        if($property === 'city'){
            $property = 'city_id';

            if($value instanceof City){
                $value = $value->id;
            }
        }

        if($property === 'route'){
            $property = 'route_id';

            if($value instanceof Route){
                $value = $value->id;
            }
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on RouteStopover");
        }

        if ($property === 'city_id') {

            if(!is_int($value)){
                throw new Exception('city_id must be an integer');
            }

            if(City::find($value) == null){
                throw new Exception('this city does not exist');
            }

            if(isset($this->id) and isset($this->route_id)){
                $route = Route::find($this->id);

                foreach($route->stopovers as $stopover){
                    if($stopover->id == $this->id){
                        throw new Exception('this city is already in this route');
                    }
                }

                if($this->id == $route->destination_city_id or $this->id == $route->origin_city_id){
                    throw new Exception('this city is already in this route');
                }
            }

        }

        if ($property === 'route_id') {

            if(!is_int($value)){
                throw new Exception('route_id must be an integer');
            }

            if(Route::find($value) == null){
                throw new Exception('route does not exist');
            }
        }

        $this->$property = $value;
    }

}
