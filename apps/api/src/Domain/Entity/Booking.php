<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class Booking extends Model
{
    protected static string $table = 'bookings';
    protected static string $primaryKey = 'id';

    protected int $id, $travel_id, $passenger_id;

    protected string $status;
    protected int $seat_number, $price; // o preço deve sempre ser multiplicado por 100. Exemplo: 75,50 vira 7500
    protected string $created_at, $updated_at;

    private const VALID_STATUS_LIST = [
        'pending',   // Criada, mas aguardando pagamento
        'confirmed', // Pagamento aprovado, assento garantido
        'cancelled', // Cancelada pelo cliente ou por falta de pagamento
        'refunded'   // Dinheiro devolvido após cancelamento
    ];

    public function __get(string $property)
    {
        if ($property == 'travel') {
            return Travel::find($this->travel_id);
        }

        if ($property == 'passenger') {
            return Passenger::find($this->passenger_id);
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Booking");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {

        if ($property === 'seat_number') {

            if(!isset($this->travel_id)){
                throw new Exception("Travel not set");
            }

            if($this->travel->bus->capacity < $value){
                throw new Exception("This seat does not exist");
            }

            $same_travel = self::where('travel_id', $this->travel_id);

            foreach ($same_travel as $item) {
                if($item->seat_number == $value){
                    throw new Exception("This seat is not available");
                }
            }
            
        }

        if ($property === 'travel') {
            $property = 'travel_id';

            if($value instanceof Travel){
                $value = $value->id;
            }
        }

        if ($property === 'passenger') {
            $property = 'passenger_id';

            if($value instanceof Passenger){
                $value = $value->id;
            }
        }

        if ($property === 'status') {
            if(!in_array($value, self::VALID_STATUS_LIST)){
                throw new Exception('this is not a valid status');
            }
        }

        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on Booking");
        }

        $this->$property = $value;
    }

    public function formatPrice(){
        return number_format($this->price / 100, 2, ',', '.');
    }

}