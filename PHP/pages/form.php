<!DOCTYPE html>
<html>
<head>
    <title>Formulário em PHP</title>
</head>
<body>
    <h1>Formulário em PHP</h1>
    
    <form method="GET" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>
        <input type="submit" value="Enviar">
    </form>

    <?php
    // Verifica se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // Obtém o nome enviado pelo formulário
        $nome = htmlspecialchars($_POST['nome']);

        // Exibe a saudação personalizada
        echo "<p>Olá, $nome! Bem-vindo!</p>";
    }
    ?>
</body>
</html>