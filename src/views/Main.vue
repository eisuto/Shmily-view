<template>
    <div class="main">
        <Sidebar />
        <div class="container">
            内部路由
            <router-view />
        </div>
            <RightBar class="rightbar" />
            <MessageBox />
    </div>
</template>

<script>
    import Sidebar from "@/components/Sidebar";
    import MessageBox from "@/components/MessageBox";
    import RightBar from "@/components/RightBar";
    export default {
        name: "Main",
        components: {
            RightBar,
            MessageBox,
            Sidebar
        }
    }
</script>


<style lang="scss" scoped>
    .main {
        position: relative;
        max-width: 1250px;
        max-height: 100vh;
        display: flex;
        margin: 0 auto;
        .container {
            width: 100%;
        }
    }
    @media (max-width: 1290px) {
        #app {
            max-width: 1000px !important;
            margin: 0 auto !important;
        }
    }
</style>

