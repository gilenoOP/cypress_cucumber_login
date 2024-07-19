    #language:pt

    Funcionalidade: Login
    Como um usuário regular do sistema, eu quero poder fazer login
    Para que eu possa acessar minhas informações e também os recursos exclusivos do sistema

    Contexto:
        Dado que acesso a página de login

    Cenário: realizar login
    #O Gherkin abaixo é um padrão de escrita pensando na usabilidade (É O MAIS INDICADO, pois facilita para o desenvolvedor e retira a necessidade de fazer função para cada mínimo passo)

        Quando submeto minhas credenciais com "qa" e "xperience"
        Então sou autenticado no sistema

    Esquema do Cenário: Tentativa de fazer login
        Quando submeto minhas credenciais com "<user>" e "<password>"
        Então sistema apresenta mensagem impeditiva "<notice>"

        Exemplos:
        | user  | password  | notice                         |
        |       | xperience | Informe o seu nome de usuário! |
        | qa    |           | Informe a sua senha secreta!   |
        | teste | xperience | Oops! Credenciais inválidas :( |
        | qa    | 123456    | Oops! Credenciais inválidas :( |