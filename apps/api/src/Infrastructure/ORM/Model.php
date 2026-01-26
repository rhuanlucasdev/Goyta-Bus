<?php

namespace Infrastructure\ORM;

use Exception;
use PDO;
use Infrastructure\ORM\Database;

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

  public static function findBy(string $column, mixed $value): ?static
  {
      $pdo = Database::getConnection();

      $query = "SELECT * FROM " . static::$table . " WHERE {$column} = :value LIMIT 1";
      $stmt = $pdo->prepare($query);
      $stmt->execute(['value' => $value]);

      $data = $stmt->fetch(PDO::FETCH_ASSOC);

      return $data ? static::mapToObject($data) : null;
  }

  public static function where(string $column, mixed $value): array
  {
      $pdo = Database::getConnection();

      $query = "SELECT * FROM " . static::$table . " WHERE {$column} = :value";
      $stmt = $pdo->prepare($query);
      $stmt->execute(['value' => $value]);

      $results = [];

      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
          $results[] = static::mapToObject($row);
      }

      return $results;
  }

  public function save(): bool
  {
    $pdo = Database::getConnection();

    $fields = array_filter(
      get_object_vars($this),
      fn($key) => !in_array($key, ['created_at', 'updated_at']),
      ARRAY_FILTER_USE_KEY
    );

    $pk = static::$primaryKey;

    if (isset($this->$pk)) {
      $id = $this->$pk;
      unset($fields[static::$primaryKey]);

      if (empty($fields)) {
        return true;
      }
      
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

  public static function findWhere(string $column, mixed $value): ?array
  {
    $db = Database::getConnection();

    $table = 'users';

    $sql = "SELECT * FROM {$table} WHERE {$column} = :value LIMIT 1";
    $stmt = $db->prepare($sql);
    $stmt->execute(['value' => $value]);

    $result = $stmt->fetch();
    return $result ?: null;
  }
}
