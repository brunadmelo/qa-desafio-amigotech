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

## Manual Test Documentation

The manual test documentation for the mobile feature is available in:

- `manual-tests/manual-tests.xlsx`

If needed, the same content can also be accessed through Google Sheets:

- [Google Sheets version](https://docs.google.com/spreadsheets/d/1-KYpubY1cFcKgMH530euotplYJ38NEVQX_4qHWGIjaA/edit?usp=sharing)

The spreadsheet contains the following tabs:

- **Test Cases**
- **Test Execution**
- **Bug Reports**


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
├── manual-tests/
│   └── manual-tests.xlsx
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
```


## Installation

Clone the repository:

```bash
git clone https://github.com/brunadmelo/qa-desafio-amigotech.git
```

Navigate to the project folder:

```bash
cd qa-desafio-amigotech
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```


## Running the Tests

Run all automated tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login-success.spec.ts
```

Run tests in a specific browser (example: Chromium):

```bash
npx playwright test --project=chromium
```

Run tests in debug mode:

```bash
npx playwright test --debug
```


## Test Reports

After the test execution, Playwright automatically generates an HTML report.

To open the report locally:

```bash
npx playwright show-report
```