<template>
  <div>
    <input type="text" name="search_bar" id="#search_bar" :placeholder="hint" v-model="keyword" >
    <button @click="search">search</button>

  </div>
</template>

<script>
import apiUtility from "./helper/apiUtility";
import { msgType } from './helper/enum';
export default {
  name: 'app',
  data: () => {
    return {
      hint:"search...",
      keyword: "",
      news: []
    };
  },
  methods: {
    async search() {
      if (this.keyword != "") {
        try {
          this.news = await apiUtility.getNews(this.keyword);
        } catch (error) {
          this.hint = error.message;
        }
      }
      else {
        this.hint = msgType.emptyKeyword;
      }
    }
  }
}
</script>

