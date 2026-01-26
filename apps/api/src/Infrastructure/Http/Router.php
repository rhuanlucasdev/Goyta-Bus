<?php

namespace Infrastructure\Http;

class Router
{
    private array $routes = [];

    public function get(string $uri, array $action): void
    {
        $this->addRoute('GET', $uri, $action);
    }

    public function post(string $uri, array $action): void
    {
        $this->addRoute('POST', $uri, $action);
    }

    private function addRoute(string $method, string $uri, array $action): void
    {
        $this->routes[] = [
            'method' => $method,
            'uri' => trim($uri, '/'),
            'action' => $action,
        ];
    }

    public function dispatch(): void
    {
        $requestUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        $requestMethod = $_SERVER['REQUEST_METHOD'];

        foreach ($this->routes as $route) {
            if ($route['method'] !== $requestMethod) {
                continue;
            }

            $pattern = preg_replace('#\{[^/]+\}#', '([^/]+)', $route['uri']);
            $pattern = "#^{$pattern}$#";

            if (preg_match($pattern, $requestUri, $matches)) {
                array_shift($matches);

                [$controller, $method] = $route['action'];

                $instance = new $controller();
                call_user_func_array([$instance, $method], $matches);
                return;
            }
        }

        http_response_code(404);
        echo json_encode(['error' => 'Route not found']);
    }
}
