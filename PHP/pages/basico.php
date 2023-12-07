<!DOCTYPE html>
<html>
<head>
    <title>Saudações em PHP</title>
</head>
<body>
    <h1>Saudações em PHP</h1>
    
    <?php
    // Variáveis
    $nome = "Maria";
    $idade = 30;
    $altura = 1.65;
    $temperatura = 25.5;
    $estaChovendo = true;

    // Estruturas de controle
    if ($idade >= 18) {
        echo "<p>$nome é maior de idade.</p>";
    } else {
        echo "<p>$nome é menor de idade.</p>";
    }
    ?>

    <p>Altura de <?php echo $nome; ?>: <?php echo $altura; ?> metros.</p>

    <?php
    if ($temperatura > 20 && $estaChovendo) {
        echo "<p>Está quente e chovendo.</p>";
    } elseif ($temperatura > 20 && !$estaChovendo) {
        echo "<p>Está quente e não está chovendo.</p>";
    } else {
        echo "<p>Não está tão quente.</p>";
    }

    // Função simples
    function saudacao($nome) {
        return "Olá, $nome! Como você está?";
    }

    // Chamando a função e exibindo dentro do parágrafo HTML
    echo "<p>" . saudacao($nome) . "</p>";
    ?>
</body>
</html>