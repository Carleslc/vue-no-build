import html from '../utils/html.js';

export default {
  name: 'MainLayout',
  setup() {
    return {
      childComponent: Vue.inject('component', 'div'),
    }
  },
  render() {
    // If using vue-router use <router-view/> instead Vue.h and inject
    return html`
      <div id="layout">
        ${Vue.h(this.childComponent)}
      </div>
    `;
  },
}
