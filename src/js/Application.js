import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    this.addBananas();

    const content = document.createElement('p');
    content.textContent = this.emojis;
    document.querySelector('#emojis').append(content);
  }

  addBananas() {
    const mappedArray = this.emojis.map((e) => {
      return e + this.banana;
    });

    this.emojis = mappedArray;
  }
}
