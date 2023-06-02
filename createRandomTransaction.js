const { faker } = require("@faker-js/faker");

const transactionSchema = () => ({
  type: "DEBIT",
  paymentGateway: "ILEERO",
  userId: faker.string.uuid(),
  purpose: faker.word.sample(),
  paymentMethod: "PAYMENT_GATEWAY",
  sourceOfIncome: "Business Income",
  transactionId: faker.string.uuid(),
  firstName: faker.person.firstName(),
  modifiedDateTime: faker.date.past(),
  creationDateTime: faker.date.past(),
  emailAddress: faker.internet.email(),
  referenceNo: faker.person.firstName(),
  remittance: {
    ask: faker.finance.pin(),
    bid: faker.finance.pin(),
    fee: {
      amount: faker.finance.amount(),
    },
  },
  beneficiary: {
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    bankDetails: {
      accountNumber: faker.finance.accountNumber(),
    },
  },
  status: {
    label: "Payment Authorised",
    value: "PAYMENT_AUTHORISED",
  },
  deliveryMethod: {
    label: "Bank Deposit",
    fees: {
      amount: faker.finance.amount(),
    },
  },
  pay: {
    amount: faker.finance.amount(),
  },
  remit: {
    amount: faker.finance.amount(),
  },
  paymentStatus: {
    label: "Payment Authorised",
    value: "PAYMENT_AUTHORISED",
  },
  settlement: {
    amount: faker.finance.amount(),
  },
  sourceCurrency: {
    currencyCode: faker.finance.currencyCode(),
    currencyName: faker.finance.currencyName(),
  },
  targetCurrency: {
    currencyCode: faker.finance.currencyCode(),
    currencyName: faker.finance.currencyName(),
  },
});

const RANDOM_TRANSACTION_IDS = [
  "663d066c-2f92-43f9-9c1e-5df6ebbce980",
  "7aab7547-ace8-4651-807a-d45c364a9ecb",
  "e388bdb9-5352-4ed0-8813-6a993d03604f",
  "78fe1b11-9151-44bd-a4a4-467c0935aaad",
  "2f234e95-1d8b-4611-b7f7-871d17c236ca",
];

module.exports = {
  createRandomTransaction: () => {
    const transactions = faker.helpers.multiple(transactionSchema, {
      count: 5,
    });

    return transactions.map((transaction, index) => ({
      ...transaction,
      transactionId: RANDOM_TRANSACTION_IDS[index],
    }));
  },
};
