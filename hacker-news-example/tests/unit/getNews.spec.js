import { mockGetNewsData } from "../../src/helper/testData";
import apiUtility from "../../src/helper/apiUtility";
import { msgType } from "../../src/helper/enum";

describe('given searching news with keyword react', () => {
    it('should only get titles when response normally', async () => {
        const mockFetchPromise = {
            json: async () => mockGetNewsData
        };
        global.fetch = jest.fn(() => Promise.resolve(mockFetchPromise));
        expect(await apiUtility.getNews("react")).toEqual([
            { title: "React.js Introduction for People Who Know Just Enough JQuery", url: "http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/" },
            { title: "Blueprint – A React UI toolkit for the web", url: "http://blueprintjs.com/" },
            { title: "Evergreen: a React UI Framework built by Segment", url: "https://evergreen.segment.com" }
        ])
    });

    it('should throw exception with apiError message when request failed', async () => {
        global.fetch = jest.fn(() => Promise.reject());
        expect(apiUtility.getNews("react")).rejects.toEqual(new Error(msgType.apiError));
    });
})
