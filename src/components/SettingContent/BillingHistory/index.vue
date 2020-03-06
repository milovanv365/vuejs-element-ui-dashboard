<template>
  <el-container class="billing-history">
    <div>
      <div class="info-title">
        Billing Information
      </div>
      <div class="last-payment-block">
        <div>
          <div class="last-payment-title">
            Last Payment:
          </div>
          <div class="last-payment-date">
            09/25/2019
          </div>
        </div>
        <div class="p-block flex-x align-center">
          <div>
            <img
              class="master-card-logo"
              :src="require('@/assets/master.jpg')"
            />
          </div>
          <div>
            <div class="card-ending-title">
              Master Card ending in 1234
            </div>
            <div class="card-expiry">
              Expires: 01/2024
            </div>
          </div>
        </div>
        <div class="p-block">
          <button class="card-update-btn">UPDATE</button>
        </div>
      </div>
      <hr class="divider" />
      <div>
        <div class="history-block">
          <div class="flex-x align-center space-between">
            <div class="info-title">
              Billing History
            </div>
            <div class="next-payment-info">
              Next Payment on <span>10/25/2019</span>
            </div>
          </div>
          <div class="flex-x align-center space-between history-tbl-header">
            <div>
              DATE
            </div>
            <div>
              AMOUNT
            </div>
          </div>
          <div class="flex-x align-center space-between history-tbl-body">
            <div>
              08/25/2019
            </div>
            <div>
              $100
            </div>
          </div>
          <div class="flex-x align-center space-between history-tbl-body">
            <div>
              07/25/2019
            </div>
            <div>
              $100
            </div>
          </div>
          <div class="flex-x align-center space-between history-tbl-body">
            <div>
              06/25/2019
            </div>
            <div>
              $100
            </div>
          </div>
          <div class="flex-x align-center space-between history-tbl-body">
            <div>
              05/25/2019
            </div>
            <div>
              $100
            </div>
          </div>
          <div class="flex-x align-center space-between history-tbl-body">
            <div>
              04/25/2019
            </div>
            <div>
              $100
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>

export default {};
</script>

<style lang="scss">
.flex-x {
  display: flex;
  &.align-center {
    align-items: center;
  }
  &.space-between {
    justify-content: space-between;
  }
}
.master-card-logo {
  width: 20px;
  margin-right: 15px;
}
.history-tbl-body {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.history-tbl-header {
  color: #d2d2d2;
  font-size: 14px;
  font-size: 500;
  padding: 20px 0 15px 0;
}
.history-tbl-body {
  font-size: 16px;
}
.history-block {
  .next-payment-info {
    color: #666666;
    span {
      font-weight: 600;
    }
  }
}
.billing-history {
  padding: 70px 100px;
  .info-title {
    font-size: 24px;
    color: #666666;
    font-weight: 900;
  }
  .divider {
    border-width: 0.5px;
    margin: 30px 0;
    border-color: rgba(0, 0, 0, 0.09);
  }
  .last-payment-block {
    display: flex;
    font-size: 17px;
    padding-top: 20px;
    .p-block {
      padding-left: 20px;
    }
    .last-payment-title {
      font-weight: 600;
    }
    .card-ending-title {
      font-weight: 500;
    }
    .card-expiry {
      color: #d2d2d2;
      font-size: 14px;
    }
    .card-update-btn {
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
  }
}
</style>
