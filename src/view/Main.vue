<template lang="pug">
  .main
    c-banner
    ul.list
      li(v-for="i in 10")
        span.new New
        .head
          h1
            a(href="#") 아가플라워 (루비다육) (0)
          a.which(href="#") 인천
        ul.info            
          li
            strong 주소: 
            span 인천 계약구 장기서로 15
          li
            strong 영업시간: 
            span 09:00~20:00
          li
            strong 대상: 
            span 꿈나무
          li
            strong 분야: 
            span 원예체험&원예치료
        .tags
          a.tag(href="#") 원예
          a.tag(href="#") 체험
          a.tag(href="#") 공예
</template>

<script>
import CBanner from "./../components/banner";
export default {
  name: "Main",
  components: { CBanner }
};
</script>

<style lang="scss">
@import "./../sass/App";
.list {
  width: 100%;
  margin: 0 auto;
  > li {
    position: relative;
    padding: 40px 20px 40px 20px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 2px;
    .new {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 50px;
      hegith: 30px;
      line-height: 30px;
      color: #fff;
      text-align: center;
      background: #795b8f;
      border-radius: 2px;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      h1 {
        a {
          font-size: 20px;
          color: #000;
          text-decoration: unset;
          &:hover {
            color: #795b8f;
            text-decoration: underline;
          }
        }
      }
      .which {
        padding: 5px;
        border: 1px solid #6335a8;
        border-radius: 2px;
        background: #6335a8;
        font-size: 14px;
        color: #fff;
        text-decoration: unset;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
    ul {
      li {
        margin-bottom: 10px;
        strong {
          display: inline-block;
          width: 100px;
          font-weight: bold;
        }
        span {
          display: inline-block;
        }
      }
    }
    .tags {
      padding-top: 10px;
      border-top: 1px solid #ccc;
      .tag {
        margin-left: 5px;
        padding: 5px;
        border: 1px solid #6335a8;
        background: #fff;
        color: #000;
        border-radius: 2px;
        font-size: 14px;
        text-decoration: unset;
        &:first-of-type {
          margin-left: 0;
        }
        &:hover {
          background: #6335a8;
          color: #fff;
        }
      }
    }
  }
}
</style>
