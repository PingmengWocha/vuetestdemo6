<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-item" >
      <span class="item" :class="{active: currentIndex === index}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TabControl",
      props: {
        titles: {
          type: Array,
          default (){
            return []
          }
        }
      },
      data (){
        return {
          currentIndex: 0
        }
      },
      methods: {
        itemClick: function (index) {
          this.currentIndex = index;

          this.$emit('itemClick',index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
  }
  .tab-item{
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .item.active{
    padding: 5px;
    color: #ff5777;
    border-bottom: 2px solid #ff5777;
  }
  .item{
    padding: 5px;
  }
</style>
