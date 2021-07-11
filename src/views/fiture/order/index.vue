import axios from 'axios';

<template>
  <!-- eslint-disable -->
  <div id="order">
    <h1 style="text-align: center">物流签收</h1>
    <el-col :span="8" class="inputOrder">
      <span style="margin: 10px 10px">请输入原始订单ID</span>
      <el-input
        placeholder="请输入原始订单ID"
        v-model="inputValue"
        clearable
        class="inputOrder"
        value="testddd"
      >
      </el-input>
    </el-col>
    <el-row style="float: right" class="operatorButton">
      <el-button @click="jumpOrder">审核订单</el-button>
      <el-button type="primary" @click="handleCk">订单出库</el-button>
      <el-button type="primary" @click="handleQs">订单签收</el-button>
      <el-button type="primary" @click="handleCkDbl"
        >订单出库（拆单）</el-button
      >
      <el-button type="primary" @click="handleQsDbl"
        >订单签收（拆单）</el-button
      >
    </el-row>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  // TODO 使用axios请求接口
  // https://github.com/axios/axios
  methods: {
    jumpOrder() {
      window.open(
        "http://stable.fe-ecommerce.nt.qa.fiture.com/order/investigate",
        "_blank"
      );
    },
    handleCk() {
      console.log(this.inputValue);
      axios
        .get(
          "https://tianqiapi.com/api?version=history&appid=&appsecret=&city=青岛&year=2018&month=5"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleQs() {
      console.log(this.inputValue);
      axios({
        method: "get",
        headers: { "Content-Type": "application/json" },
        headers: { AA: "VV" },
        url: "https://tianqiapi.com/api?version=history&appid=&appsecret=&city=青岛&year=2018&month=5",
        data: {
          name: "cc",
        },
      });
    },
    handleCkDbl() {
      console.log(this.inputValue);
      // axios请求put接口
      axios({
        method: "put",
        headers: { "Content-Type": "application/json" },
        headers: { AA: "VV" },
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: {
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        },
      });
    },
    handleQsDbl() {
      console.log(this.inputValue);
      // fetch请求接口https://jsonplaceholder.typicode.com/guide/
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.operatorButton {
  margin: 80px 60px 80px 60px;
}
.inputOrder {
  margin: 10px 10px 10px 10px;
}
</style>
