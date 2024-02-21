# Aplicação Redirect Webhook

## Sobre

Esta aplicação serve como um intermediário, recebendo notificações sem autenticação e redirecionando-as para um servidor que exige autenticação. Funciona como um middleware sem servidor, facilitando a integração entre sistemas de webhook com diferentes requisitos de segurança.

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

## Utilização

Siga os passos abaixo para colocar sua aplicação em funcionamento:

1. **Preparação**: Clone o repositório do projeto ou baixe os arquivos necessários para o seu ambiente de trabalho.

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
