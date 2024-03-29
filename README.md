# Aplicação Redirect Webhook

## Sobre

Esta aplicação serve como um middleware, recebendo notificações sem autenticação e redirecionando-as para um servidor que exige autenticação. Facilitando a integração entre sistemas de webhook com diferentes requisitos de segurança.

## Pré-Requisitos

Para utilizar esta aplicação, você precisa ter o Docker e o Docker Compose instalados em seu sistema. Se você não os tem instalados, siga os links abaixo para instalação:

- [Instalar Docker](https://docs.docker.com/get-docker/)
- [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Configuração

A aplicação pode ser configurada através de variáveis de ambiente no arquivo `docker-compose.yml`. As seguintes variáveis precisam ser ajustadas conforme a sua necessidade:

- `WEBHOOK_URL`: URL de destino para onde as notificações recebidas serão redirecionadas.
- `WEBHOOK_USER`: Nome de usuário usado para autenticação no servidor de destino.
- `WEBHOOK_PASS`: Senha usada para autenticação no servidor de destino.
- `PORT`: Porta na qual a aplicação irá rodar. Esta porta deve corresponder à especificada na seção `ports`.

## Utilização em produção

Siga os passos abaixo para colocar sua aplicação em funcionamento:

1. **Preparação**: Crie o arquivo docker-compose.yml (ou com o nome que desejar) com o seguinte conteudo:

```bash
version: "3.7"
services:
  redirect_webhook:
    image: marcelogbjunior/redirect_webhook:1.0.0
    network_mode: "host"
    container_name: redirect_webhook
    environment:
      - WEBHOOK_URL=https://webhook.site/
      - WEBHOOK_USER=user
      - WEBHOOK_PASS=pass
      - PORT=3000
    ports:
      - 3000
    volumes:
      - ".:/web"
    restart: always
```


2. **Configuração**: Abra o arquivo `docker-compose.yml` e ajuste as variáveis de ambiente conforme descrito na seção de configuração.

3. **Execução**: No terminal, navegue até o diretório do projeto e execute o comando para iniciar a aplicação em modo desanexado (background).

```bash
docker-compose up -d
```

4. **Verificação**: A aplicação agora deve estar rodando e pronta para receber e redirecionar notificações. Você pode verificar o status do container.

```bash
docker ps
```

## Manutenção

Para parar e remover os contêineres da aplicação, use o comando.

```bash
docker-compose down
```

Para visualizar os logs da aplicação, utilize o comando.

```bash
docker logs redirect_webhook
```

## Licença

Informe aqui a licença sob a qual o projeto é disponibilizado, por exemplo, MIT, GPL, etc.

---

Esperamos que esta ferramenta facilite a integração de seus sistemas de webhook. Agradecemos pelo uso e apoio ao projeto!
