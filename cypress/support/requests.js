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