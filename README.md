<h1 align="center"><b>
  Projeto Car Shop
</b></h1>

## Descrição
<div align="justify">
  <p>
    Projeto realizado com objetivo de construir uma API RESTful para o cadastro, listagem, alteração e deleção de veículos, sejam motocicletas ou carros. Este projeto pode ser aplicado em uma concessionária por exemplo, onde se haveria um estoque e nele teria de haver algum tipo de controle, podendo este ser feito através deste projeto backend. 
    <br>
  </p>
</div>

## Tecnologias e técnicas utilizadas
<div align="justify">
  <ul>
    <li>NodeJs</li>
    <li>Typescript</li>
    <li>Express</li>
    <li>Mongoose</li>
    <li>MongoDb</li>
    <li>Docker</li>
    <li>Mocha</li>
    <li>Sinon</li>
    <li>SOLID</li>
    <li>POO</li>
  </ul>
</div>

## Casos de uso
<div align="justify">
  <ul>
    <li>Cadastro de um novo carro.</li>
    <li>Listagem de todos os carros registrados.</li>
    <li>Listagem de um determinado carro à partir do ID fornecido.</li>
    <li>Atualização de alguma informação de um determinado carro à partir do ID fornecido.</li>
    <li>Exclução de um determinado carro à partir de um ID fornecido.</li>
    <li>Cadastro de uma nova motocicleta.</li>
    <li>Listagem de todas as motocicletas registradas.</li>
    <li>Listagem de uma determinada motocicleta à partir do ID fornecido.</li>
    <li>Atualização de alguma informação de uma determinada motocicleta à partir do ID fornecido.</li>
    <li>Exclução de uma determinada motocicleta à partir de um ID fornecido.</li>
  </ul>
</div>

## Antes de iniciar!!!
<div align="justify">
  <p><b><em>Para a execução deste projeto é necessário que você possua Docker instalado em sua máquina</em></b></p>
</div>

## Iniciando projeto

```bash
# Para clonar o projeto, em seu terminal cole este código
$ git clone https://github.com/pllsg96/project-car-shop.git

# Para acessar a pasta do projeto
$ cd project-car-shop

# Para executar os containers
$ docker-compose up -d

# Para acessar o terminal do container
$ docker exec -it car-shop bash

# Instale as dependências dentro do container, digitando no terminal
$ npm install

# Para iniciar o servidor, digite no terminal do container
$ npm run dev
```

## Rotas

<h3><b>Carros</b></h3>
<h3>Cadastro de um novo carro</h3>

```http
POST /cars
```
Os atributos necessários para criar um carro estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(atributo opcional)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |

<details>
  <summary>Exemplo de body para cadastro</summary>

```json
{
  "model": "Fiat Uno",
  "year": 2002,
  "color": "Azul",
  "status": true,
  "buyValue": 20.990,
  "doorsQty": 2,
  "seatsQty": 5
}
```
</details>

<details>
  <summary>Resposta com status<code>201</code></summary>

```json
{
    "id": "64775e702ef0fbffad2ade9c",
    "model": "Fiat Uno",
    "year": 2002,
    "color": "Azul",
    "status": true,
    "buyValue": 20.99,
    "doorsQty": 2,
    "seatsQty": 5
}
```
</details>

####


# :construction: README customizado em construção ! :construction: