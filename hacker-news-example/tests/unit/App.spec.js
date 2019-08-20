import { createLocalVue, mount } from '@vue/test-utils';
import App from '../../src/App.vue';
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
        const getNews = jest.fn();
        jest.doMock('../../src/helper/apiUtility', () => ({ getNews }));
        const AppNew = require('../../src/App.vue').default;
        const wrapper = mount(AppNew);

        wrapper.vm.$data.keyword = 'react';
        wrapper.vm.search();

        expect(getNews.mock.calls.length).toBe(1);
        expect(getNews.mock.calls[0]).toEqual(['react']);
    });

    it('should show apiError msg in text placeholder when get error of getNews api', () => {
        const getNews = jest.fn(()=>{throw new Error(msgType.apiError)});
        jest.doMock('../../src/helper/apiUtility', () => ({ getNews }));
        const AppNew = require('../../src/App.vue').default;
        const wrapper = mount(AppNew);

        wrapper.vm.$data.keyword = 'react';
        wrapper.vm.search();

        expect(wrapper.vm.$data.hint).toBe(msgType.apiError);
    });

    it('should clear keyword after searching', () => {

    });

    afterEach(jest.resetModules);
});