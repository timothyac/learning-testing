const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: (firstName, lastName) => {
    const user = { firstName };
    user["lastName"] = lastName;
    return user;
  }
};

module.exports = functions;
