import { msgType } from "./enum";

export default {
    async getNews(keyword) {
        return await fetch(`http://hn.algolia.com/api/v1/search?query=${keyword}`)
            .then((res) => res.json())
            .then((data) => data.hits.map((x) => x.title))
            .catch(() => { throw new exception(msgType.apiError); });
    }
}