<template>
  <div class="recommend-item">
    <div v-for="(item,index) in recommends" :key="index" class="recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "",
      props: {
        recommends: {
          type: Array,
          default (){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .recommend-item{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
  .recommend {
    flex: 1;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
</style>
