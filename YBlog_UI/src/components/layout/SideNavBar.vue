<template>
    <div id="side-nav-bar">
        <div class="items">
            <div class="item">
                个人信息组件
            </div>

            <div class="item">
                公告组件
            </div>

            <div class="item">
                最新文章组件
            </div>

            <div class="item">
                分类组件
            </div>


            <div class="item">
                标签组件
            </div>

            <div class="item">
                归档组件
            </div>

            <div class="item">
                网站资讯组件
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#side-nav-bar {
    width: 200px;
    /* 固定宽度 */
    height: 100%;
    /* 占据整个视口高度 */
    /* position: fixed; */
    /* 固定位置 */
    /* top: 0;
    right: 100px; */
    /* 放置在左侧 */
    border-right: 1px solid #ccc;
    /* 边框 */
    /* background-color: red; */
}

.items{
    width: 100%;
}

.item{
    height: 200px;
}


</style>