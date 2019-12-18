<template>
    <div id="home">
      <NavBar class="home-nav">
        <div slot="center">购物街</div>
      </NavBar>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <recommendView :recommends="recommend"></recommendView>
      <FeatureView class="feature"></FeatureView>
      <TabControl :titles="titles" @itemClick="tabClick" class="tabcontrol"></TabControl>
      <!--<GoodsList :goodsList="showGoods"></GoodsList>-->
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
  // import Scroll from 'components/common/scroll/Scroll'


  import {
    getHomeMultidata,
    getHomeData
  } from "network/home";

  export default {
      name: "Home",
      components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl
        // Scroll
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
          },
          currentType: 'pop'
        }
      },
    computed: {
        // showGoods() {
        //   return this.goods[this.currentType].list
        // }
    },
      created() {
        //1.请求多个数据
        this.getHomeMultidata()
        this.getHomeData(this.currentType)
      },
      methods: {
        getHomeMultidata() {
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
          })
        },
        getHomeData(type) {
          const page = this.goods[type].page + 1
          getHomeData(type,page).then(res => {
            // if (page === 1){
            //   this.goods[type].list === []
            // }
            // this.goods[type].list.push(...res.data.list)es6中的语法（合并两个数组）
            // this.goods[type].list = this.goods[type].list.concat(res.data.list)(常规合并两个数组)
            // this.goods[type].page += 1
            console.log(res)
          })
        },
        tabClick (index) {
          switch (index) {
            case 0 :
              this.currentType = 'pop';
              break;
            case 1:
              this.currentType = 'news';
              break;
            case 2:
              this.currentType = 'sell';
              break;
          }
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
