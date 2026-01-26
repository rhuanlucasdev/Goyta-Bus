<?php

    namespace Application\Service;

    class Session{

        public function __construct(){
            if(!session_id()){
                session_start();
            }
        }

        /**
         * Carrega o objeto da sessao
         *
         * @return object|null
         */
        public static function load(): ?object{
            if (!session_id()) {
                session_start();
            }
            return (object) $_SESSION;
        }

        /**
         * Retorna se há um usuário autenticado ou nao
         *
         * @return boolean
         */
        public static function auth(): bool{
            if (!session_id()) {
                session_start();
            }
            return isset($_SESSION['user_id']);
        }

        /**
         * Retorna se uma determinada chave está setada
         *
         * @param string $chave
         * @return boolean
         */
        public static function check(string $chave): bool{
            if (!session_id()) {
                session_start();
            }
            return isset($_SESSION[$chave]);
        }

        /**
         * cria uma chave e atribui um valor a ela
         *
         * @param string $chave
         * @param mixed $valor
         * @return void
         */
        public static function create(string $chave, mixed $valor): void{
            if (!session_id()) {
                session_start();
            }
            $_SESSION[$chave] = is_array($valor) ? (object) $valor : $valor;
        }

        /**
         * Limpa uma determinada chave da sessao
         *
         * @param string $chave
         * @return void
         */
        public static function clean(string $chave): void{
            unset($_SESSION[$chave]);
        }

        /**
         * Destroi a sessao
         *
         * @return void
         */
        public static function destroy(): void{
            session_destroy();
        }

        public function __get($atributo){
            if(!empty($_SESSION[$atributo])){
                return $_SESSION[$atributo];
            } else{
                return null;
            }
        }

    }

?>