export default {
  name: 'Main',
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  template: /*html*/`
    <div id="main">
      <p>{{message}}</p>
      <input v-model="message" />
    </div>
  `
}
