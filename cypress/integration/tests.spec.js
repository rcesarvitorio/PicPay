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