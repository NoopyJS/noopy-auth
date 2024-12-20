const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const { users } = require('../db');

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static async create({ email, password }) {
    if (!isEmail(email)) {
      throw new Error('Please enter a valid email');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User(email, hashedPassword);
    users.push(user);
    return user;
  }

  static async findOne({ email }) {
    return users.find(user => user.email === email);
  }

  static async login(email, password) {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw new Error('incorrect password');
    }
    throw new Error('incorrect email');
  }
}

module.exports = User;
