<template>
    <div id="home">
      <NavBar class="home-nav">
        <div slot="center">购物街</div>
      </NavBar>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <recommendView :recommends="recommend"></recommendView>
      <FeatureView class="feature"></FeatureView>
      <TabControl :titles="titles" @itemClick="tabClick"></TabControl>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  // import GoodsList from './childComps/GoodsList'

  import TabControl from 'components/content/tabControl/TabControl'
  import NavBar from 'components/common/navbar/NavBar'

  import {getHomeMultidata} from "network/home";

  export default {
      name: "Home",
      components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl
        // GoodsList
      },
      data() {
        return {
          banners: [],
          recommend: [],
          titles: [
            "流行",
            "新款",
            "精选"
          ],
          goods: {
            "pop": {page: 0, list: []},
            "news": {page: 0, list: []},
            "sell": {page: 0, list: []},
          }
        }
      },
      created() {
        //1.请求多个数据
        getHomeMultidata().then(res => {
          console.log(res.data)
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      methods: {
        tabClick (index) {
          console.log(index)
        }
      }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    color: white;
    background-color: var(--color-tint);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tabcontrol{
    position: sticky;
    top: 44px;
  }
</style>
