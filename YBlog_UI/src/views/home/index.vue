<template>
    <div id="home">
        <!-- 上部 -->
        <div class="home-top">
            <div class="site-title">
                <div class="site-title-text">
                    <h1>Yuechu`blog</h1>
                </div>
                <div class="site-title-subtext">
                    <span id="simpleUsage"></span>
                </div>
            </div>
        </div>

        <!-- 分割线 -->
        <div style="height: 20px;"></div>

        <!-- 下部 -->
        <div class="home-bottom clearfix">

            <div class="home-bottom-left">
                <!-- 文章列表 -->
                <div class="recent-posts">
                    <div class="recent-post-item">
                       <div class="post_cover left">1</div>
                       <div class="recent-post-info">2</div>
                    </div>
                </div>

                <!-- 分页 -->
                <!-- <div class="pagetion">分页</div> -->
            </div>

            <div class="home-bottom-right">

                <div class="user-info">
                    <!-- 头像 -->
                    <div class="user-info-img">
                        <img class="user-info-img"
                            src="https://img.hongyoubizhi.com/picture/pages/regular/2023/10/25/11/120651659_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000"
                            alt="User Profile Picture">
                    </div>

                    <div class="nick-name">
                        Yuechu
                    </div>

                    <div>
                        11
                    </div>
                </div>
            </div>

        </div>
        <!-- 模拟页尾 -->
        <!-- <div class="fake-footer">
            <h1>footer</h1>
        
        </div> -->
    </div>
</template>

<script setup>

import { onMounted } from 'vue'
onMounted(() => {
    new TypeIt("#simpleUsage", {
        // strings: [" Welcome to Yuechu🥝のTiny Home!","Hope you have a nice day!🍭🍭🍭"],
        speed: 200,
        waitUntilVisible: true,
        loop: true,
    })
        .type("Welcome to Yuechu🥝のTiny Home!", { delay: 1000 })
        .delete()
        .type("Hope you have a nice day!🍭🍭🍭", { delay: 1000 })
        .go();
})
import TypeIt from 'typeit'
</script>

<style scoped>
.home-top {
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    position: relative;
     /* 使得 ::before 或 ::after 伪元素相对于 #home 定位  */
    overflow: hidden;
    /* 防止遮罩层溢出 */
}

.home-top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    /* 半透明黑色遮罩层 */
    z-index: 1;
    /* 确保遮罩层在图片之上 */
}

.home-top {
    background-image: url('https://img.hongyoubizhi.com/picture/pages/regular/2023/02/10/14/106449882_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000');
    background-size: cover;
    background-position: center;
    z-index: 0;
    /* 确保图片在遮罩层之下 */
}

.site-title {
    text-align: center;
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); */
    line-height: 1.5;
    position: absolute;
    top: 43%;
    padding: 0 10px;
    width: 100%;
}

.site-title-text {
    margin: 0;
    color: #ffffff;
    /* 使用纯白色 */
    font-size: 1.85em;
    position: relative;
    z-index: 2;
    /* 确保文字在遮罩层之上 */
}

.site-title-subtext {
    margin: 0;
    color: white;
    font-size: 1.5em;
    position: relative;
    z-index: 2;
    /* 确保文字在遮罩层之上 */
}



/* 下部 */
.home-bottom {
    margin: 0 auto;
    width: 1200px;
}

/* 使用after伪元素清除浮动 */
/* 清除浮动元素样式 */
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}





.home-bottom-left {
    float: left;
    width: 870px;
    height: 1200px;
    /* display: inline-block; */
    /* background-color: red; */
}

.recent-posts{
    width: 74%;
    background-color: red;
}

 
 

.home-bottom-right {
    float: right;
    width: 300px;
    height: 1200px;
    /* display: inline-block; */
    /* background-color: pink; */
}

.user-info {
    height: 400px;
    border: 1px solid black;
    padding: 15px;
    /* background-color: red; */
}


/* 旋转头像 */
.user-info-img {
    margin: 0 auto;
    width: 120px;
    height: 120px;

    /* 根据需要调整大小 */

    border-radius: 50%;
    /* 设置为圆形 */
    transition: transform 0.3s ease-in-out;
    /* 平滑过渡 */
}

.user-info-img:hover {
    animation: rotate 0.3s linear forwards;
    /* 悬停时开始旋转 360° */
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}

.user-info-img:not(:hover) {
    animation: reverseRotate 0.3s linear forwards;
    /* 鼠标移开时恢复原状 */
}

@keyframes reverseRotate {
    0% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.nick-name {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-weight: 500;
    font-size: 1.57em;
}




.pagetion {
    margin-top: 10px;
    margin-bottom: 20px;
}
.fake-footer {
    height: 200px;
    text-align: center;
}



</style>