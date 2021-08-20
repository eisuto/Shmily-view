<template>
  <div class="container">
    <div class="header">
      <CustomText font="fw-heavy xlarge">新鲜事</CustomText>
      <icon name="settings" />
    </div>
    <div class="contentBox">
      <div class="content" v-for="i in showMore" :key="i">
        <CustomText font="small">突发新闻</CustomText>
        <CustomText font="fw-bold" tag="p">#22级开始毕业设计</CustomText>
        <CustomText font="small">15.8K 参与</CustomText>
        <icon class="threeDots" name="threeDots" />
      </div>
      <div class="content show">
        <custom-text font="large" @click.native="showMore = 10"
          >更多</custom-text
        >
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "TrendsForYou",
  components: { CustomText },
  data() {
    return {
      showMore: 5
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  border-radius: 15px;
  width: 100%;
  background: #F7F9F9;
  .header {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    svg {
      width: 22px;
      fill: #ffff;
    }
  }
  .contentBox {
    .content {
      padding: 0 15px;
      cursor: pointer;
      border-top: 1px solid #EFF3F4;
      &:hover {
        background: #EFF1F1;
      }
      padding: 10px 15px;
      position: relative;
      .threeDots {
        position: absolute;
        right: 15px;
        top: 10px;
        width: 25px;
        fill: #8899a6;
        padding: 3px;
        transition: 200ms;
        border-radius: 50%;
        &:hover {
          background: rgba(#fb7f26, 0.1);
          fill: #fb7f26;
          cursor: pointer;
        }
      }
      span {
        color: #8899a6;
      }
      &.show {
        padding: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        cursor: pointer;
        span {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
          color: #fb7f26;
          padding: 15px 10px;
        }
      }
    }
  }
}
</style>
