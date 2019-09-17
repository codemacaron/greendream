<template lang="pug">
  .banner
    h1 공지
    p 
      | 결식아동 무료 제공 상점들을 쉽게 검색 할 수 있도록 만든 곳 입니다.
      br
      | 선한 마음으로 시작한 곳 입니다. 많은 배려 부탁드립니다.
</template>

<script>
export default {
  name: "CBanner"
};
</script>

<style lang="scss">
@import "./../sass/App";
.banner {
  padding: 20px;
  margin-bottom: 20px;
  background: rgba(#dedfdf, 0.2);
  border: 1px solid #ccc;
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
