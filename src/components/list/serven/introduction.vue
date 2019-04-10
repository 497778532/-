<template>
  <div class="gongsi_main_1">
    <div class=" company_info">
      <h3>企业介绍</h3>
      <div class="company_con">
        <div class="info_img"><span>

              <p></p>
              <span>无详细介绍</span>
              <p></p></span>
        </div>
        <div class="clear"></div>
        <div class="slogan">
        </div>


        <div class="xiangxi_info">
          <h4>详细信息</h4>
          <div class="xiangxi_con">
            <ul>
              <li><span>注册时间：</span></li>
              <li><span>员工人数：</span></li>
              <li><span>注册地：</span></li>
              <li><span>法定代表人：</span></li>
              <li><span>营业额：</span></li>
              <li><span>研发人数：</span></li>
            </ul>
            <ul>
              <li><span>英文名称：</span></li>
              <li><span>品牌：</span></li>
              <li><span>主要贸易地区：</span></li>
              <li><span>主要客户：</span></li>
              <li><span>是否通过OEM认证：</span></li>
            </ul>

            <div class="clear"></div>
          </div>
        </div>


      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
   .gongsi_main_1 {
    width: 730px;
    float: right;
    background: #fff;
    margin-bottom: 10px;
  }
  .gongsi_main_1 .company_info {
    width: 730px;
  }
   .gongsi_main_1 h3 {
     color: #0e90d2;
     background: url(/static/images/title_bg01.jpg) center center;
     width: 720px;
     padding-left: 10px;
     font-family: "宋体";
     font-size: 16px;
     font-weight: bold;
     height: 36px;
     line-height: 36px;
   }
   .gongsi_main_1 .company_info .company_con {
     width: 728px;
     border-left: 1px #ddd solid;
     border-right: 1px #ddd solid;
     border-bottom: 1px #ddd solid;
   }

    .gongsi_main_1 .company_info .info_img {
     padding-left: 18px;
     padding-right: 18px;
   }
    .gongsi_main_1 .company_info .info_img span {
     display: inline;
     float: left;
     padding-right: 18px;
   }
   .gongsi_main_1 .company_info p {
     font-family: "宋体";
     font-size: 14px;
     color: #002666;
     text-indent: 28px;
     line-height: 22px;
     padding-bottom: 13px;
   }
   .gongsi_main_1 .company_info .company_con .slogan {
     width: 728px;
     padding-top: 10px;
     padding-bottom: 20px;
   }
    .gongsi_main_1 .company_info .company_con .xiangxi_info {
     width: 688px;
     padding-left: 20px;
   }
   .gongsi_main_1 .company_info .company_con .xiangxi_info h4 {
     font-size: 14px;
     border-bottom: 1px #ddd solid;
     line-height: 36px;
   }
   .gongsi_main_1 .company_info .company_con .xiangxi_info .xiangxi_con {
     padding-top: 10px;
     padding-bottom: 10px;
   }
   .gongsi_main_1 .company_info .company_con .xiangxi_info .xiangxi_con ul {
     float: left;
     width: 330px;
   }
   .gongsi_main_1 .company_info .company_con .xiangxi_info .xiangxi_con ul li {
     line-height: 22px;
   }
    .gongsi_main_1 .company_info .company_con .xiangxi_info .xiangxi_con ul li span {
     width: 90px;
     text-align: right;
   }
</style>
