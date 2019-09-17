<template lang="pug">
  header
    .header-area
      h1.logo
        a(href="#")
          em 선한영향력
          strong Green Dream
      button.menu(type="button" @click="showPopup('open')")
    .menu-popup(v-show="popup")
      .popup-area
        button.close(type="button" @click="showPopup('close')")
        .search-area
          h1 검색
          .search
            input(type="text")
            button(type="button")
        .which-area
          h1 지역
          ul
            li
              a(href="#") 서울  
            li
              a(href="#") 인천  
            li
              a(href="#") 경기 
            li
              a(href="#") 충청북도  
            li
              a(href="#") 충청남도
            li
              a(href="#") 전라북도
            li
              a(href="#") 전라남도
            li
              a(href="#") 강원도
            li
              a(href="#") 경상북도
            li
              a(href="#") 경상남도
            li
              a(href="#") 제주도
        
</template>

<script>
export default {
  name: "CHeader",
  data() {
    return {
      popup: false
    };
  },
  methods: {
    // 팝업창
    showPopup(payload) {
      switch (payload) {
        case "open":
          this.popup = true;
          break;
        case "close":
          this.popup = false;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./../sass/App";
.header-area {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu {
    overflow: hidden;
    width: 20px;
    height: 20px;
    border: 0 none;
    background: url("https://image.flaticon.com/icons/svg/462/462998.svg")
      no-repeat;
  }
}
.menu-popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(#000, 0.5);
  .popup-area {
    position: relative;
    width: 300px;
    height: 500px;
    padding: 40px 40px 20px 20px;
    background: #fff;
    border: 1px solid #ccc;
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      overflow: hidden;
      width: 20px;
      height: 20px;
      border: 0 none;
      background: url("https://image.flaticon.com/icons/svg/151/151882.svg")
        no-repeat;
    }
    .search-area {
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      margin-bottom: 20px;
      h1 {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 16px;
      }
      .search {
        border: 1px solid #ccc;
        input {
          width: 266px;
          height: 32px;
          line-height: 32px;
          padding: 0;
          border: 0 none;
          font-size: 14px;
        }
        button {
          overflow: hidden;
          width: 32px;
          height: 32px;
          padding: 10px;
          border: 0 none;
          background: url("https://image.flaticon.com/icons/svg/49/49116.svg")
            no-repeat center center;
          background-size: 60%;
        }
      }
    }
    .which-area {
      h1 {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 16px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 10px;
          margin-bottom: 10px;
          a {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
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
  }
}
</style>
