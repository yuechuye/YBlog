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
                        <div class="post_cover left">
                            <img style="height: 100%;width: 100%;"
                                src="https://img.hongyoubizhi.com/picture/pages/regular/2023/02/10/14/106449882_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000"
                                alt="">
                            </img>
                        </div>
                        <div class="recent-post-info">
                            <div class="post-info">

                                <a href="" style="text-decoration: none; color:black;font-size: 24px;">
                                    Mysql 查询优化之 Using filesort
                                </a>

                                <div class="article-meta-wrap">
                                    <span class="post-meta-date">发表于9 天前|更新于9 天前|MYSQL|MYSQL•优化</span>
                                    <!-- <span class="article-meta"></span>
                                    <span class="article-meta tags"></span> -->
                                </div>

                                <div class="content">Mysql 查询优化之 Using filesort最近在优化分页查询的时候，遇到了一个问题，如下（基于Mysql Innodb）
                                    我们先建一个</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 分页 -->
                <!-- <div class="pagetion">分页</div> -->
            </div>

            <div class="home-bottom-right">

                <div class="user-info y-card-box-radius">
                    <!-- 头像 -->
                    <div class="user-info-img">
                        <img class="user-info-img"
                            src="https://img.hongyoubizhi.com/picture/pages/regular/2023/10/25/11/120651659_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000"
                            alt="User Profile Picture">
                    </div>

                    <div class="nick-name">
                        Yuechu
                    </div>

                    <div class="author-info__description">
                        Yuechu`blog
                    </div>

                    <div class="card-info-data">

                        <a class="text-decoration data-pjax-state" href="">
                            <div class="headline">文章</div>
                            <div class="length-num">1</div>
                        </a>

                        <a class="text-decoration data-pjax-state" href="">
                            <div class="headline">标签</div>
                            <div class="length-num">2</div>
                        </a>

                        <a class="text-decoration data-pjax-state" href="">
                            <div class="headline">分类</div>
                            <div class="length-num">3</div>
                        </a>

                    </div>


                    <a class="follow-me text-decoration" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                        </svg>





                        <span>Follow Me</span>

                    </a>

                    <div class="card-info-social-icons">
                        <a style="    margin: 0 10px;" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="rgb(76, 73, 72)"
                                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                            </svg>
                        </a>
                        <a style="    margin: 0 10px;"  href="">

                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 15">
                               <path fill="rgb(76, 73, 72)"
                                    d="M.5 2.5A1.5 1.5 0 0 1 2 1h12a1.5 1.5 0 0 1 1.5 1.5v1.208L8 7.926L.5 3.708z" />
                                  <path fill="rgb(76, 73, 72)"
                                    d="M.5 4.855V12.5A1.5 1.5 0 0 0 2 14h12a1.5 1.5 0 0 0 1.5-1.5V4.855L8 9.074z" />
                            </svg>


                        </a>
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

.recent-posts {
    width: 100%;
    height: 90%;
}

.recent-post-item {
    width: 870px;
    height: 250px;
    border-radius: 10px;
    overflow: hidden;
    /* 设置圆角 */
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
    /* 添加阴影效果 */
    background-color: #ffffff;
    /* 背景颜色 */
    box-sizing: border-box;
    /* 确保 padding 不影响宽度和高度 */
}

.left {
    float: left;
}

.right {
    float: right;
}

.post_cover {
    position: relative;
    overflow: hidden;
    /* 隐藏超出部分 */
    width: 370px;
    height: 250px;
    background-size: cover;
    background-position: center;
}

.post_cover img {
    transition: transform 0.3s ease;
    /* 添加过渡效果 */
    width: 100%;
    /* 图片宽度为容器宽度 */
    height: auto;
    /* 自动高度 */
}

.post_cover img:hover {
    transform: scale(1.1);
    /* 鼠标悬停时放大1.1倍 */
}

.recent-post-info {
    float: right;
    width: 500px;
    height: 250px;
    display: flex;
    align-items: center;
    /* 垂直居中 */
}

.post-info {
    height: 160px;
    width: 440px;
    margin: 0 auto;
    /* background-color: pink; */
    /* display: flex;
    align-items: center; */
    /* 垂直居中 */
    /* background-color: antiquewhite; */
}


.article-meta-wrap {
    height: 50px;
    line-height: 50px;
    margin: 6px 0;
    font-size: 13px;
    color: #858585;
    /* background-color: red; */
}

.content {
    font-size: 15px;
    color: #4c4948;
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
    /* border: 1px solid black; */
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
    height: 47px;
    line-height: 47px;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
}

.author-info__description {
    color: #4c4948;
    font-size: 15px;
    text-align: center;
}

.card-info-data {
    margin: 14px 0 4px;
    height: 65px;
    /* background-color: red; */
}

.follow-me {
    display: block;
    height: 36px;
    background-color: rgb(73, 177, 245);
    text-align: center;
    line-height: 36px;
    color: #ffffff;
}

.card-info-social-icons {
    height: 42px;
    line-height: 42px;
    text-align: center;
}

.data-pjax-state {
    width: 33%;
    display: inline-block;
    text-align: center;
    /* background-color: red; */
}

.headline {
    font-size: 15px;
    height: 30px;
}

.length-num {
    font-size: 21px;
    height: 42px;
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