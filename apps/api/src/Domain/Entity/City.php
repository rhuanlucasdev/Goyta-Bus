<?php

namespace Domain\Entity;

use Exception;
use Infrastructure\ORM\Model;

class City extends Model
{
    protected static string $table = 'cities';
    protected static string $primaryKey = 'id';

    protected int $id;

    protected string $name, $uf;
    protected string $created_at, $updated_at;

    private const STATES_LIST = ['ac' => 'Acre', 'al' => 'Alagoas', 'ap' => 'Amapá', 'am' => 'Amazonas', 'ba' => 'Bahia', 'ce' => 'Ceará', 'df' => 'Distrito Federal', 'es' => 'Espírito Santo', 'go' => 'Goiás', 'ma' => 'Maranhão', 'mt' => 'Mato Grosso', 'ms' => 'Mato Grosso do Sul', 'mg' => 'Minas Gerais', 'pa' => 'Pará', 'pb' => 'Paraíba', 'pr' => 'Paraná', 'pe' => 'Pernambuco', 'pi' => 'Piauí', 'rj' => 'Rio de Janeiro', 'rn' => 'Rio Grande do Norte', 'rs' => 'Rio Grande do Sul', 'ro' => 'Rondônia', 'rr' => 'Roraima', 'sc' => 'Santa Catarina', 'sp' => 'São Paulo', 'se' => 'Sergipe', 'to' => 'Tocantins'];

    public function __get(string $property)
    {
        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on City");
        }

        return $this->$property;
    }

    public function __set(string $property, $value): void
    {
        if (!property_exists($this, $property)) {
            throw new Exception("Property {$property} does not exist on City");
        }

        if($property === 'uf'){
            $value = strtolower($value);

            if(!array_key_exists($value, self::STATES_LIST)){
                throw new Exception("This state does not exist");
            }
        }

        $this->$property = $value;
    }

}