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


## Design and Automation Strategy

### 1. Page Object Model (POM)

The project uses **Page Object Model** to separate page interactions from test logic.

This approach makes the code easier to:

- read
- maintain
- reuse
- update when selectors change

Examples of page objects implemented in this project:

- `HomePage`
- `LoginPage`
- `ProductsPage`
- `CartPage`
- `ContactPage`


### 2. Fixture for Authenticated Scenarios

A reusable fixture was created for scenarios that require a user already created and authenticated.

This fixture dynamically creates a user and prepares the test environment before execution.

It is mainly used for scenarios that require login before the main flow, such as:

- Logout
- Place Order

Using fixtures improves:

- test isolation
- test reliability
- code reuse


### 3. Cross-Browser Execution

Tests run across multiple browsers supported by Playwright:

- Chromium
- Firefox
- WebKit

During implementation, some browser-specific behaviors were identified, including:

- third-party advertisements
- overlay elements blocking interactions
- popup dialogs
- strict locator conflicts caused by duplicate elements

To improve stability across browsers, the following strategies were applied:

- improved locator strategies
- scoped selectors
- explicit waits when required
- fixture-based authentication
- handling of unexpected dialogs or external behaviors


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