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