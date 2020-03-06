<template>
  <el-container class="setting-profile">
    <div>
      <div class="info-title">
        Profile Setting
      </div>

      <br />
      <div>
        <el-table  :data="tableData" style="width: 100%">
            <el-table-column
                prop="infoItem"
                width="300">
            </el-table-column>
            <el-table-column class="infoValue"
                prop="infoValue"
                width="300">
            </el-table-column>
        </el-table>
        
      </div>
      <br />
      <el-row>
      <el-button  class="card-edit-btn">Edit Profile</el-button>
      </el-row>
      <el-row class="rowgap">
          <div class="info-title">
            Current Plan
        </div>
      </el-row>
      <el-row class="trialSpan">
         <p>Pro (50,000 progressives/month) &nbsp  | &nbsp <span>14 days left on the trial</span></p>
      </el-row>
      <hr class="divider" />
      <el-row class="chargeDiv">
         <p>Your card on file will be changed $49.00 on 02/01/2020</p>
      </el-row>
      <hr class="divider" />
      <br />
      <el-button  class="card-change-btn">CHANGE PLAN</el-button>
      <el-button  class="card-cancel-btn">CANCEL PLAN</el-button>
    </div>
  </el-container>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            infoItem: 'First Name',
            infoValue: 'Tom'
          }, {
            infoItem: 'Last Name',
            infoValue: 'Tom'
          }, {
            infoItem: 'Contract Number',
            infoValue: '+123456789'
          }, {
            infoItem: 'Email',
            infoValue: 'Sample@gmail.com'
          }]
        }
      }
    }
</script>

<style lang="scss">
.el-table tr{
    height:60px;
}

.setting-profile {
  padding: 70px 100px;
  .info-title {
    font-size: 28px;
    color: #666666;
    font-weight: bold;
  }
  .divider {
    border-width: 0.5px;
    margin: 10px 0;
    border-color: rgba(0, 0, 0, 0.09);
  }
  .el-table_1_column_2  div{
      color:black;
      
  }
  .el-table .cell{
      font-weight: bold;
  }
  .card-edit-btn {
      background-color: white;
      color: #d2d2d2;
      box-shadow: none;
      border: 2px solid #d2d2d2;
      padding: 5px 35px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
      &:focus {
        outline: 0;
      }
    }
 .card-change-btn{
     background-color: white;
      color: #69C9D6;
      box-shadow: none;
      border: 2px solid #69C9D6;
      padding: 5px 35px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
      &:focus {
        outline: 0;
      }
 }
 .card-cancel-btn{
      background-color: #69C9D6;
      color: white;
      box-shadow: none;
      border: 2px solid #69C9D6;
      padding: 5px 35px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
      &:focus {
        outline: 0;
      }
 }

 .rowgap{
     margin-top:40px;
     margin-bottom: 20px;
 }
 .trialSpan {
     p{
         font-weight: bold;
     }
     span{
     color: #69C9D6;
    }
 }
 .chargeDiv{
     color: #666666;
 }
 
  
}
</style>
