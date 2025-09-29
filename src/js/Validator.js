class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const validCharsRegex = /^[A-Za-z0-9_-]+$/;

    const startEndRegex = /^[A-Za-z][A-Za-z0-9_-]*[A-Za-z]$/;

    const threeDigitsRegex = /[0-9]{4,}/;

    if (
      validCharsRegex.test(this.username) &&
      startEndRegex.test(this.username) &&
      !threeDigitsRegex.test(this.username)
    ) {
      return this.username;
    } else {
      return 'Invalid name format!!!';
    }
  }
}

export default Validator;