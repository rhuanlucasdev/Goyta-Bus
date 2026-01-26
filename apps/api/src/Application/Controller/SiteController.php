<?php

namespace Application\Controller;

use Application\Service\Session;
use Domain\Entity\User;

class SiteController
{
    public function debugging(): void
    {
        echo "<h1>Página de debugging</h1>";

        if (Session::check('user_data')) {
            
            $session = Session::load();
            $userData = $session->user_data; 

            echo "<br><strong>Dados via Instância:</strong><br>";
            var_dump($userData->user_name);
            var_dump($userData->user_email);
            var_dump($userData->user_cpf);

            echo "<hr>";
        } else {
            echo "<br><strong>Usuário nao logado</strong><br>";
        }

    }
}
