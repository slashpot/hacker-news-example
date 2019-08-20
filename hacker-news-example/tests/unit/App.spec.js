import { createLocalVue, mount } from '@vue/test-utils';
import App from '../../src/App.vue'
import { msgType } from '../../src/helper/enum';

describe('given App component', () => {
    it('should show "search..." in text placeholder at beginning', () => {
        const wrapper = mount(App);
        expect(wrapper.vm.$data.hint).toBe("search...");
    });

    it('should show "please type keyword" in text placeholder when searching with empty keyword', () => {
        const wrapper = mount(App);
        wrapper.vm.search();
        expect(wrapper.vm.$data.hint).toBe(msgType.emptyKeyword);
    });

    it('should call getNews api when searching with valid keyword', () => {
        
    });

    it('should show apiError msg in text placeholder when get error of getNews api', () => {
        
    });

    it('should clear keyword after searching', () => {
        
    });
});