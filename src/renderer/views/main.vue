<template>
<div>
    <el-container class="container">
        <el-header class="header" height="40px" style="-webkit-app-region: drag">
            <header-view height="40px"/>
        </el-header>
        <el-main class="main">
            <router-view></router-view>
            <SystemInformation />
        </el-main>
    </el-container>
</div>
</template>

<script>
import SystemInformation from "../components/LandingPage/SystemInformation"
import HeaderView from "../components/Header/"

export default {
  components: {
    SystemInformation,
    HeaderView
  }
};
</Script

<style lang="scss" scoped>
.container {
    height: 100vh;
}

.header {
    background: #fafafa;
}

.main {
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-shrink: 0;
}
</style>
