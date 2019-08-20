import { createLocalVue, mount } from '@vue/test-utils';
import App from '../../src/App.vue'

describe('given App component', () => {
    it('should show "search..." in text placeholder at beginning', () => {
        const wrapper = mount(App);
        console.log('wrapper.vm.$data: ', wrapper.vm.$data);
        expect(wrapper.vm.$data.hint).toBe("search...");
    });

    it('should show "please type keyword" in text placeholder when searching with empty keyword', () => {
        
    });

    it('should call getNews api when searching with valid keyword', () => {
        
    });

    it('should show apiError msg in text placeholder when get error of getNews api', () => {
        
    });

    it('should clear keyword after searching', () => {
        
    });
});