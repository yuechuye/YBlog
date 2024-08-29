<template>
    <div id="top-nav-bar">
        <div class="title">
            Yuechu`blog
        </div>
        <!-- 先不使用 -->
        <div class="items" v-show="false">
            <div class="item">
                首页
            </div>
            <div class="item">
                归档
            </div>
        </div>
        <div class="seach" v-show="false">

            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"
                    d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                    d="M338.29 338.29L448 448" />
            </svg>

            搜索
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#top-nav-bar {
    width: 100%;
    height: 60px;
    /* background-color: #fff; */
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04); */
    position: fixed;
    top: 0;
    z-index: 999;
}

.title {
    float: left;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    line-height: 60px;
    height: 100%;
    width: 10%;
    /* 水平居中 */
    display: flex;
    /* 使用 Flexbox 实现垂直居中 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
}

.items {
    float: left;
    height: 100%;
    width: 70%;
}

.item {
    height: 100%;
    float: right;
    margin-right: 10px;
    /* 添加右边距 */
    text-align: center;
    /* 水平居中 */
    display: flex;
    /* 使用 Flexbox 实现垂直居中 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
}

/* 最后一个元素移除右边距 */
.item:last-child {
    margin-right: 0;
}


.seach {
    font-size: 1em;
    /* 设置字体大小 */
    color: #fff;
    height: 100%;
    float: right;
    width: 10%;
    /* 水平居中 */
    display: flex;
    /* 使用 Flexbox 实现垂直居中 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    /* background-color: red; */
}

.seach .icon,
.seach svg {
    display: inline-block;
    /* 设置为 inline-block 显示 */
    vertical-align: middle;
    /* 垂直居中对齐 */
    font-size: inherit;
    /* 继承字体大小 */
    margin-right: 0.5em;
    /* 图标与文字之间的间距 */
}
</style>