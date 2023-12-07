<!DOCTYPE html>
<html>
<head>
    <title>Formulário com Inputs em PHP</title>
</head>
<body>
    <h1>Formulário com Inputs em PHP</h1>
    
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="idade">Idade:</label>
        <input type="number" id="idade" name="idade" required><br><br>

        <label for="genero">Gênero:</label>
        <input type="radio" id="masculino" name="genero" value="Masculino">
        <label for="masculino">Masculino</label>
        <input type="radio" id="feminino" name="genero" value="Feminino">
        <label for="feminino">Feminino</label><br><br>

        <label for="interesses">Interesses:</label>
        <input type="checkbox" id="esporte" name="interesses[]" value="Esporte">
        <label for="esporte">Esporte</label>
        <input type="checkbox" id="musica" name="interesses[]" value="Música">
        <label for="musica">Música</label>
        <input type="checkbox" id="viagem" name="interesses[]" value="Viagem">
        <label for="viagem">Viagem</label><br><br>

        <label for="cidade">Cidade:</label>
        <select id="cidade" name="cidade">
            <option value="SaoPaulo">São Paulo</option>
            <option value="RioDeJaneiro">Rio de Janeiro</option>
            <option value="BeloHorizonte">Belo Horizonte</option>
            <option value="Brasilia">Brasília</option>
        </select><br><br>

        <input type="submit" value="Enviar">
    </form>

    <?php
    // Verifica se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtém os valores enviados pelo formulário
        $nome = htmlspecialchars($_POST['nome']);
        $email = htmlspecialchars($_POST['email']);
        $idade = htmlspecialchars($_POST['idade']);
        $genero = isset($_POST['genero']) ? htmlspecialchars($_POST['genero']) : '';
        $interesses = isset($_POST['interesses']) ? $_POST['interesses'] : [];
        $cidade = htmlspecialchars($_POST['cidade']);

        // Exibe os dados enviados
        echo "<h2>Dados Enviados:</h2>";
        echo "<p>Nome: $nome</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Idade: $idade</p>";
        echo "<p>Gênero: $genero</p>";
        echo "<p>Interesses: " . implode(", ", $interesses) . "</p>";
        echo "<p>Cidade: $cidade</p>";
    }
    ?>
</body>
</html>
