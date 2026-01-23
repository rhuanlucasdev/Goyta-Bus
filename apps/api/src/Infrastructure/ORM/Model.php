<?php

namespace Infrastructure\ORM;

use Exception;
use PDO;

abstract class Model
{
  protected static string $table;
  protected static string $primaryKey = 'id';

  public static function find(int $id): ?static
  {
    $pdo = Database::getConnection();
    $stmt = $pdo->prepare(
      "SELECT * FROM " . static::$table . " WHERE " . static::$primaryKey . " = :id"
    );
    $stmt->execute(['id' => $id]);

    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    return $data ? static::mapToObject($data) : null;
  }

  public function save(): bool
  {
    $pdo = Database::getConnection();
    $fields = get_object_vars($this);

    $pk = static::$primaryKey;

    if (isset($this->$pk)) {
      $id = $fields[static::$primaryKey];
      unset($fields[static::$primaryKey]);

      $columns = array_keys($fields);
      $setClause = implode(
        ", ",
        array_map(fn($col) => "$col = :$col", $columns)
      );

      $query = "UPDATE " . static::$table . "
                      SET $setClause
                      WHERE ". static::$primaryKey . "= :id";

      $stmt = $pdo->prepare($query);
      $fields[static::$primaryKey] = $id;

      return $stmt->execute($fields);
    }

    // INSERT
    unset($fields[static::$primaryKey]);

    $columns = array_keys($fields);
    $placeholders = array_map(fn($col) => ":$col", $columns);

    $query = "INSERT INTO " . static::$table . " (" . implode(", ", $columns) . ")
                  VALUES (" . implode(", ", $placeholders) . ")";

    $stmt = $pdo->prepare($query);
    $success = $stmt->execute($fields);

    $pk = static::$primaryKey;

    if ($success) {
      $this->$pk = (int) $pdo->lastInsertId();
    }

    return $success;
  }

  public function delete(): bool
  {

    $pk = static::$primaryKey;

    if (!isset($this->$pk)) {
      throw new Exception('Cannot delete model without primary key');
    }

    $pdo = Database::getConnection();
    $stmt = $pdo->prepare(
      "DELETE FROM " . static::$table . " WHERE " . static::$primaryKey . " = :id"
    );

    $success = $stmt->execute(['id' => $this->$pk]);

    if ($success) {
      unset($this->$pk);
    }

    return $success;
  }

  private static function mapToObject(array $data): static
  {
    $object = new static();

    foreach ($data as $key => $value) {
      if (property_exists($object, $key)) {
        $object->$key = $value;
      }
    }

    return $object;
  }
}
