<template lang="pug">
  #app
    c-header
    .wrap
      router-view
    c-footer
</template>

<script>
import CHeader from "./components/header";
import CFooter from "./components/footer";
export default {
  name: "App",
  components: { CHeader, CFooter }
};
</script>

<style lang="scss">
@import "./sass/App";
@font-face {
  font-family: "Nanum Square";
  src: url("./assets/font/NanumSquareR.eot");
  src: url("./assets/font/NanumSquareR.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/NanumSquareR.woff") format("woff"),
    url("./assets/font/NanumSquareR.ttf") format("truetype"),
    url("./assets/font/NanumSquareOTFR.svg#9e23ceb0c858ca37642ba540402577eb")
      format("svg");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Nanum Square";
  src: url("./assets/font/NanumSquareB.eot");
  src: url("./assets/font/NanumSquareB.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/NanumSquareB.woff") format("woff"),
    url("./assets/font/NanumSquareB.ttf") format("truetype"),
    url("./assets/font/NanumSquareOTFB.svg#a41a1fda1fdf3dafd3394867a156b1cf")
      format("svg");
  font-style: normal;
  font-weight: 700;
}

#app {
  font-family: "Nanum Square", "Avenir", Helvetica, Arial, sans-serif;
  text-align: left;
  color: #000;
}
.wrap {
  padding: 120px 20px 0 20px;
}
</style>
