import { msgType } from "./enum";

export default {
    async getNews(keyword) {
        return await fetch(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
            .then((res) => res.json())
            .then((data) => data.hits.map((x) => {return {title: x.title, url: x.url}}))
            .catch(() => { throw new Error(msgType.apiError); });
    }
}
