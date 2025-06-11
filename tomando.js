// 1. Encontra o botão no HTML e guarda em uma constante
        const botaoTema = document.getElementById('botao');

        /**
         * 2. Função principal para:
         * - Alternar a classe 'TemasEscuro' no body
         * - Atualizar o texto do botão
         */
        function toggleTheme() {
            // Adiciona ou remove a classe do tema escuro
            document.body.classList.toggle('TemasEscuro');

            // Verifica se o tema escuro está ATIVO agora
            if (document.body.classList.contains('TemasEscuro')) {
                // Se sim, o botão deve oferecer a opção de ir para o tema claro
                botaoTema.textContent = "Ativar tema claro";
            } else {
                // Se não, o botão oferece a opção de ir para o tema escuro
                botaoTema.textContent = "Ativar tema escuro";
            }
        }

        /**
         * 3. Define o texto inicial do botão quando a página carrega.
         * Isso garante que o texto esteja correto desde o início.
         */
        function setInitialButtonText() {
            if (document.body.classList.contains('TemasEscuro')) {
                botaoTema.textContent = "Ativar tema claro";
            } else {
                botaoTema.textContent = "Ativar tema escuro";
            }
        }

        // 4. Adiciona o "ouvinte" que chama a função toggleTheme a cada clique no botão
        botaoTema.addEventListener('click', toggleTheme);

        // 5. Executa a função para definir o texto inicial assim que a página é carregada
        setInitialButtonText();