<template>
  <div>
    <input type="text" name="search_bar" id="#search_bar" :placeholder="hint" v-model="keyword" @keydown.enter="search" >
    <button @click="search">search</button>
    <ul>
      <li v-for="(item,index) in news" v-bind:key="index">
        <a :href="item.url">{{item.title}}</a>
      </li>
    </ul>
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
        this.keyword = "";
      }
      else {
        this.hint = msgType.emptyKeyword;
      }
    }
  }
}
</script>

