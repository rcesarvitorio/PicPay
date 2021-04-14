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
    before('/POST - Criar usuário válido com sucesso', () => {
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
        cy.consultUser('').then((response) => {
            expect(response.status).to.eq(httpStatus.OK)
          })

    })

    it('/GET - Listar um usuário válido por id', () => {
        cy.consultUser(_id, null).then((response) => {
            expect(response.status).to.eq(httpStatus.OK)
            expect(response.body.data[0].name).to.deep.eq(userFaker.BODY.name)
            expect(response.body.data[0].email).to.deep.eq(userFaker.BODY.email)
          })

    })

    it('/GET - Listar um usuário válido por email', () => {
        cy.consultUser(null, userFaker.BODY.email).then((response) => {
            expect(response.status).to.eq(httpStatus.OK)
            expect(response.body.data[0].name).to.deep.eq(userFaker.BODY.name)
            expect(response.body.data[0].email).to.deep.eq(userFaker.BODY.email)
          })
    })

    it('/GET - Listar um usuário não existente', () => {
        cy.consultUser(null, 'picpay@email_invalido.com').then((response) => {
            expect(response.status).to.eq(httpStatus.OK)
            expect(response.body.meta.pagination.total).to.eq(0)
          })

    })

    it('/PUT - Alterar o nome de um usuário existente com sucesso', () => {
        cy.modifyUser(_id, userFaker.BODY.name, 'Changed').then((response) => {
            expect(response.status).to.eq(httpStatus.OK)
            expect(response.body.code).to.eq(httpStatus.OK)
            expect(response.body.data.name).to.eq(`${userFaker.BODY.name} Changed`)
          })

    })

    it('/DELETE - Deletar um usuário existente com sucesso', () => {
        cy.deleteUser(_id).then((response) => {
            console.log(_id)
            expect(response.status).to.eq(httpStatus.OK)
            expect(response.body.code).to.eq(httpStatus.NO_CONTENT)
            expect(response.body.data).to.eq(null)
          })

    })


})