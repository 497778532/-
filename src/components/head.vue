<template>
  <div id="head">
    <div class="head_inner2">
      <div class="logo2"><img src="/static/images/m1_logo.jpg" alt="湖南蝶之林生物科技有限公司" width="200" height="90"></div>
      <div class="head_banner2">
        <div class="company_name">

          <h1><p class="name_chinese">湖南蝶之林生物科技有限公司</p></h1>
          <p class="name_english">Welcome to Our Website! The Service You Deserve.</p>

        </div>
        <div class="hot_line">
          <p>服务热线:<span>0396-52025525</span></p>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  #head{
    width: 100%;
  }
  #head .head_inner2 {
    width: 960px;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    _padding-bottom: 0px;
  }
  #head .head_inner2 .logo2 {
    width: 200px;
    height: 90px;
    float: left;
  }
  #head .head_inner2 .head_banner2 {
    background: url(/static/images/no.jpg);
    width: 760px;
    height: 90px;
    float: left;
  }
  #head .head_inner2 .head_banner2 .company_name {
    float: left;
    padding-left: 20px;
    padding-top: 20px;
  }
  #head .head_inner2 .head_banner2 .company_name p.name_chinese {
    font-family: "黑体";
    font-size: 30px;
    font-weight: bold;
    color: #333;
  }
  #head .head_inner2 .head_banner2 .company_name p.name_english {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #666;
  }
  #head .head_inner2 .head_banner2 .hot_line {
    float: right;
    padding-top: 40px;
    padding-right: 10px;
  }
  #head .head_inner2 .head_banner2 .hot_line p {
    font-family: "黑体";
    font-size: 22px;
    font-weight: bold;
    color: #6dd300;
  }
  #head .head_inner2 .head_banner2 .hot_line p span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-weight: bold;
    color: #6dd300;
  }

</style>
