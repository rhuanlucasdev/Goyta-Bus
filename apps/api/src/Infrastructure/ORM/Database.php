<?php
// Singleton Pattern 2.15.1
namespace Infrastructure\ORM;

use PDO;
use Exception;

class Database
{

  // ? aí indica um tipo anulável (nullable type)
  private static ?PDO $connection = null;

  public static function connect(string $dsn, string $username, string $password): void
  {
    if (self::$connection === null) {
      self::$connection = new PDO(dsn: $dsn, username: $username, password: $password);
    }
  }

  public static function getConnection(): PDO
  {
    if (self::$connection === null) {
      throw new Exception("Conexão com banco de dados não estabelecida.");
    }
    return self::$connection;
  }
}
