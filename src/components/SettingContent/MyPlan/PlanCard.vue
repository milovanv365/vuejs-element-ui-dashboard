<template>
    <el-card shadow="hover" :body-style="{ background: '#f5f5f5' }">
        <div class="plancard">
            <h1>{{title}}</h1>
            <img :src="src">
            <p>{{description}}</p>
            <el-divider></el-divider>
            <el-button type="primary" size="medium">CONTACT US</el-button>
        </div>
    </el-card>
</template>

<script>
    export default {
        props: {
          title: String,
          description: String,
          src:String
        },
    };
</script>

<style  lang="scss">
    .plancard{
        h1{
            text-align: center;
            margin-top: auto;
            font-size: 25px;
            font-family: "Poppins";
            color: $writtio-grey-3;
            line-height: 1.2;
            font-weight: bold;
            margin-bottom: 10px;
        }
        p{
            text-align: center;
            padding: 25px 0;
            margin: 0px 70px;
            font-size: 12px;
            font-family: "Poppins";
            color: $writtio-grey-3;
            line-height: 1.2;
        }
        .el-button {
            width: 100%;
            background: $writtio-primary;
        }
        img {
            height: 200px;
            width: 200px;
            margin: 30px 60px;
        }
    }
</style>
