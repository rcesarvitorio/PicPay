/// <reference types="cypress" />

import data from '../fixtures/auth'

Cypress.Commands.add('createUser', (params) => {
  cy.request({
    method: 'POST',
    url: '/users',
    headers: data.HEADERS,
    body: params
  })
})

Cypress.Commands.add('consultUser', (_id = '', email = '') => {
  cy.request({
    method: 'GET',
    url: '/users',
    qs: {
      id: _id,
      email: email
    },
    headers: data.HEADERS
  })
})

Cypress.Commands.add('modifyUser', (params, name, nameChange) => {
  cy.request({
    method: 'PUT',
    url: `/users/${params}`,
    headers: data.HEADERS,
    body: {
      name: `${name} ${nameChange}`
    }
  })
})

Cypress.Commands.add('deleteUser', (params) => {
  cy.request({
    method: 'DELETE',
    url: `/users/${params}`,
    headers: data.HEADERS
  })
})