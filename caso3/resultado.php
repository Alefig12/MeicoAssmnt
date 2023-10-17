<!DOCTYPE html>
<html>
<head>
    <title>Resultado de la Suma</title>
</head>
<body>
    <h1>Resultado de la Suma</h1>
    <?php
    if (isset($_GET['numero1']) && isset($_GET['numero2'])) {
        $numero1 = intval($_POST['numero1']);
        $numero2 = intval($_POST['numero2']);
        $suma = $numero1 + $numero2;
        echo "La suma de $numero1 y $numero2 es: $suma";
    } else {
        echo "Por favor, ingrese dos números.";
    }
    ?>
</body>
</html>
