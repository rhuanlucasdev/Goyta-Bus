<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class Travel extends Model
{
    protected static string $table = 'travels';
    protected static string $primaryKey = 'id';

    protected int $id, $route_id, $bus_id, $driver_id;

    protected string $status;
    protected string $departure_time, $arrival_time, $created_at, $updated_at;

    private const VALID_STATUS_LIST = ['scheduled', 'in_transit', 'completed', 'cancelled'];

    public function __get(string $property)
    {
        
        if($property == 'driver'){
            return Driver::find($this->driver_id);
        }

        if($property == 'route'){
            return Route::find($this->route_id);
        }

        if($property == 'bus'){
            return Bus::find($this->bus_id);
        }

        if($property == 'bookings'){
            return Booking::where('travel_id', $this->id);
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Travel");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {

        if($property == 'bus'){
            $property = 'bus_id';

            if($value instanceof Bus){
                $value = $value->id;
            }
        }

        if($property == 'driver'){
            $property = 'driver_id';

            if($value instanceof Driver){
                $value = $value->id;
            }
        }

        if($property == 'route'){
            $property = 'route_id';

            if($value instanceof Route){
                $value = $value->id;
            }
        }

        if ($property === 'bus_id') {

            if(!is_int($value)){
                throw new Exception('bus_id must be an integer');
            }

            if(Bus::find($value) == null){
                throw new Exception('bus does not exist');
            }

        }

        if ($property === 'driver_id') {

            if(!is_int($value)){
                throw new Exception('driver_id must be an integer');
            }

            if(Driver::find($value) == null){
                throw new Exception('driver does not exist');
            }

        }

        if ($property === 'route_id') {

            if(!is_int($value)){
                throw new Exception('route_id must be an integer');
            }

            if(Route::find($value) == null){
                throw new Exception('user does not exist');
            }

        }

        if ($property === 'status') {
            if(!in_array($value, self::VALID_STATUS_LIST)){
                throw new Exception('this is not a valid status');
            }
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Travel");
        }

        $this->$property = $value;
    }

    public function totalSeats(){
        return $this->bus->capacity;
    }

    public function seatAvailable($seat): bool{
        if($seat > $this->totalSeats()){
            return false;
        }
        foreach($this->bookings as $booking){
            if($booking->seat_number == $seat){
                return false;
            }
        }
        return true;
    }

}