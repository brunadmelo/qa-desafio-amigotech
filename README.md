# QA Automation Challenge

This repository contains the automated test solution for the QA technical challenge using **Playwright** and **TypeScript**.

The project was designed to automate the requested test cases from [Automation Exercise](https://automationexercise.com), following good automation practices such as:

- Page Object Model (POM)
- reusable fixtures for authenticated flows
- clear project structure
- execution instructions for evaluators


## Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **Git / GitHub**


## Project Goal

The goal of this project is to automate the selected test cases from the challenge in a structured and maintainable way.

The implementation focuses on:

- readability
- maintainability
- separation of concerns
- reusable components
- stable selectors and flows when possible


## Automated Test Cases

The following test cases were automated:

- **Test Case 1**: Register User
- **Test Case 2**: Login User with correct email and password
- **Test Case 3**: Login User with incorrect email and password
- **Test Case 4**: Logout User
- **Test Case 5**: Register User with existing email
- **Test Case 6**: Contact Us Form
- **Test Case 8**: Verify All Products and product detail page
- **Test Case 9**: Search Product
- **Test Case 10**: Verify Subscription in home page
- **Test Case 15**: Place Order: Register before Checkout


## Project Structure

```bash
qa-desafio-amigotech
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── userFixture.ts
│
├── pages/
│   ├── cartPage.ts
│   ├── contactPage.ts
│   ├── homePage.ts
│   ├── loginPage.ts
│   └── productsPage.ts
│
├── test-results/
├── playwright-report/
│
├── tests/
│   ├── contact.spec.ts
│   ├── login-fail.spec.ts
│   ├── login-success.spec.ts
│   ├── logout.spec.ts
│   ├── order.spec.ts
│   ├── products.spec.ts
│   ├── register-existing.spec.ts
│   ├── register.spec.ts
│   └── subscription.spec.ts
│
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md