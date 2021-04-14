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
    let _id
    it('/POST - Criar usuário válido com sucesso', () => {
        cy.createUser(userFaker.BODY).then((response) => {
            _id = response.body.data.id
            expect(response.status).to.eq(httpStatus.OK)
            expect(response.body.data.id).to.eq(_id)
          })

    })

    it('/POST - Criar usuário já existente', () => {
        cy.fixture('validUser').then(() => {
            cy.createUser(validUser).then((response) => {
              expect(response.status).to.eq(httpStatus.OK)
              expect(response.body.data[0].message).to.deep.eq(
                'has already been taken'
              )
            })
          })

    })

    it('/POST - Criar usuário sem nome', () => {
        cy.fixture('invalidUser').then(() => {
            cy.createUser(invalidUser).then((response) => {
              expect(response.status).to.eq(httpStatus.OK)
              expect(response.body.data[0].message).to.deep.eq("can't be blank")
            })
          })
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