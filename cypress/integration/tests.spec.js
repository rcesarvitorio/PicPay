/// <reference types="cypress" />

import faker from 'faker'
import validUser from '../fixtures/validUser'
import invalidUser from '../fixtures/invalidUser'



const typeGnd = ['Male', 'Female']
const typeStt = ['Active', 'Inactive']
const gender = faker.random.arrayElement(typeGnd)
const status = faker.random.arrayElement(typeStt)

const userFaker = {
  BODY: {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    gender: gender,
    status: status
  }
}

describe('Testes de API para o Desafio Pic-Pay', () => {
    it('/POST - Criar usuário válido com sucesso', () => {

    })

    it('/POST - Criar usuário já existente', () => {

    })

    it('/POST - Criar usuário sem nome', () => {

    })

    it('/GET - Listar todos os usuários com sucesso', () => {

    })

    it('/GET - Listar um usuário válido por id', () => {

    })

    it('/GET - Listar um usuário válido por email', () => {

    })

    it('/GET - Listar um usuário não existente', () => {

    })

    it('/PUT - Alterar o nome de um usuário existente com sucesso', () => {

    })

    it('/DELETE - Deletar um usuário existente com sucesso', () => {

    })


})