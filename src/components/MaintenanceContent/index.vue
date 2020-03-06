<template>
  <div class="maintain-content">
    <!-- <h1>Hello writing</h1> -->
    <div>
     
      <h1>We're fixing a few things</h1>
      <p>We should be back online soon.</p>
      <br >
      <br >
      <br >
      <br >
      <img :src="require('@/assets/maintain.png')" />
    </div>
  </div>
</template>
<style lang="scss">
.maintain-content {
  align-self: center;
  text-align: center;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
  h1 {
    text-align: center;
    color: dodgerblue;
    font-size: 54px;
        margin: 7px;
  }
  p {
        max-width: 65%;
    margin: auto !important;
    color: #716f6f;
    font-size: 31px;
    font-weight: 700;
    margin: 0px;
  }
}
</style>