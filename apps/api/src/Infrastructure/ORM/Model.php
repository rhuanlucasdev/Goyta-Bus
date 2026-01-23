<?php

namespace Infrastructure\ORM;

use Exception;
use PDO;

abstract class Model
{
  protected static string $table;

  public static function find(int $id): ?static
  {
    $pdo = Database::getConnection();
    $stmt = $pdo->prepare(
      "SELECT * FROM " . static::$table . " WHERE id = :id"
    );
    $stmt->execute(['id' => $id]);

    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    return $data ? static::mapToObject($data) : null;
  }

  public function save(): bool
  {
    $pdo = Database::getConnection();
    $fields = get_object_vars($this);

    if (isset($this->id)) {
      $id = $fields['id'];
      unset($fields['id']);

      $columns = array_keys($fields);
      $setClause = implode(
        ", ",
        array_map(fn($col) => "$col = :$col", $columns)
      );

      $query = "UPDATE " . static::$table . "
                      SET $setClause
                      WHERE id = :id";

      $stmt = $pdo->prepare($query);
      $fields['id'] = $id;

      return $stmt->execute($fields);
    }

    // INSERT
    unset($fields['id']);

    $columns = array_keys($fields);
    $placeholders = array_map(fn($col) => ":$col", $columns);

    $query = "INSERT INTO " . static::$table . " (" . implode(", ", $columns) . ")
                  VALUES (" . implode(", ", $placeholders) . ")";

    $stmt = $pdo->prepare($query);
    $success = $stmt->execute($fields);

    if ($success) {
      $this->id = (int) $pdo->lastInsertId();
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
