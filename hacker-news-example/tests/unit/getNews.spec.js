import { mockGetNewsData } from "../../src/helper/testData";
import apiUtility from "../../src/helper/apiUtility";


describe('given searching news with keyword react', () => {
    it('should only get titles when response normally', async () => {
        const mockFetchPromise = {
            json: async () => mockGetNewsData
        };
        global.fetch = jest.fn(()=>Promise.resolve(mockFetchPromise));
        expect(await apiUtility.getNews("react")).toEqual([
            "React.js Introduction for People Who Know Just Enough JQuery",
            "Blueprint – A React UI toolkit for the web",
            "Evergreen: a React UI Framework built by Segment"
        ])
    });

    it('should throw exception with apiError message when request failed', () => {
        
    });
})
