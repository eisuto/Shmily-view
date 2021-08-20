<template>
  <div class="container">
    <CustomText font="xlarge fw-heavy">主页</CustomText>
    <icon class="stars hover" name="stars" />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "HomeHeader",
  components: { CustomText }
};
</script>

<style scoped lang="scss">
.container {
  /*background: #15202b;*/
  /*background: #fff;*/
  width: 100%;
  height: 53px;
  background: #fff;
  border-bottom: 1px solid #EFF3F4;
  border-right: 1px solid #EFF3F4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 5px 0 15px;
  z-index: 99;
  span {
    cursor: pointer;
  }

  .stars {
    width: 40px;
    fill: #fb7f26;
    border-radius: 50%;
    padding: 8px;
  }
}
</style>
