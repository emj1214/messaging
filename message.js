class Message {
  constructor(message, from, date, to) {
    this.message = {
      text: message,
      from: from,
      date: date,
      to: to
    }
  }

  getMessage() {
    return this.message;
  }

  getContext() {
    return this;
  }

  // getContextLamb = () => {
  //   return this;
  // }
}

module.exports = Message;