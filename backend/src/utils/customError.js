class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.message = message;
    this.name = name;
  }
}

module.exports = CustomError;
