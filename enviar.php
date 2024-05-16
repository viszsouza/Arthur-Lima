<?php
$servername = "localhost";
$username = "u833127225_arthur";
$password = "senhaArthur11!";
$dbname = "u833127225_banco_arthur";

// Criar a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Capturar dados do formulário
$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

// Preparar e executar a inserção
$sql = "INSERT INTO dados (nome, email, telefone) VALUES ($nome, $email, $telefone)";
$stmt = $conn->prepare($sql);


if ($stmt->execute()) {
    echo "Registro inserido com sucesso!";
    // Redireciona para o link desejado
    header('Location: https://api.whatsapp.com/send?phone=558184338374&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20alcan%C3%A7ar%20mais%20pessoas%20com%C2%A0o%C2%A0Tr%C3%A1fego%C2%A0Pago');
} else {
    echo "Erro ao inserir registro: " . $stmt->error;
}

next()

// Fechar a conexão
$stmt->close();
$conn->close();
?>