import Vue from 'vue';
import Shop from '@/views/Shop';

describe('Shop.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Shop);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.shop h1').textContent)
      .toEqual('Shop');
  });
});
