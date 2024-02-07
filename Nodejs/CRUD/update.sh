#!/bin/bash

# Caminho para o diretório do projeto git
PROJETO_DIR="/crud"

# Comando para atualizar o repositório git
git -C "$PROJETO_DIR" pull origin master

# Verifica se houve alguma alteração
if [ $? -eq 0 ]; then
    echo "Atualização do repositório concluída com sucesso."
    # Reinicia o docker compose
    echo "Reiniciando ..."
    docker-compose -f "$PROJETO_DIR/docker-compose.yml" restart
    
    npm 

    if [ $? -eq 0 ]; then
        echo "Docker Compose reiniciado com sucesso."
    else
        echo "Erro ao reiniciar o Docker Compose."
        exit 1
    fi
else
    echo "Erro ao atualizar o repositório. Verifique o log do git."
    exit 1
fi
