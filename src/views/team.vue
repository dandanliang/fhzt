<template>
    <div class="team">

        <!-- item开始符 -->
        <div class="item">
            <!-- item1开始符 -->
            <div class='item1' v-for='item in items'>
                <div class='box'>
                    <div class='item-img'>
                        <img :src="item.imgUrl" alt="" style='width:237px;height:237px;' class='img'>
                    </div>
                    <router-link to='/names' class='names'>{{item.name}}</router-link>
                    <p>{{item.position}}</p>
                    <div class='txt'>
                        <span>{{item.txt1}}</span> |
                        <span>{{item.txt2}}</span>
                    </div>
                </div>
            </div>
            <!-- item1结束符 -->
        </div>
        <!-- item结束符 -->
        <div class="border-btm"></div>
        <!-- item开始符 -->
        <div class="item">
            <!-- item1开始符 -->
            <div class='item1' v-for='item in tabs'>
                <img :src="item.imgUrl" alt="" style='width:237px;height:237px;' class='img'>
                <h2>{{item.name}}</h2>
                <p>{{item.position}}</p>
                <div class='txt'>
                    <span>{{item.txt1}}</span> |
                    <span>{{item.txt2}}</span>
                </div>
            </div>
            <!-- item1结束符 -->

        </div>
        <!-- item结束符 -->
        <div class="item">
            <!-- item1开始符 -->
            <div class='item1' v-for='item in tabs2'>
                <img :src="item.imgUrl" alt="" style='width:237px;height:237px;' class='img'>
                <h2>{{item.name}}</h2>
                <p>{{item.position}}</p>
                <div class='txt'>
                    <span>{{item.txt1}}</span> |
                    <span>{{item.txt2}}</span>
                </div>
            </div>
            <!-- item1结束符 -->

        </div>
        <!-- item结束符 -->
        <div class="item">
            <!-- item1开始符 -->
            <div class='item1' v-for='item in tabs2'>
                <img :src="item.imgUrl" alt="" style='width:237px;height:237px;' class='img'>
                <h2>{{item.name}}</h2>
                <p>{{item.position}}</p>
                <div class='txt'>
                    <span>{{item.txt1}}</span> |
                    <span>{{item.txt2}}</span>
                </div>
            </div>
            <!-- item1结束符 -->

        </div>
        <!-- item结束符 -->
        <div class="border-btm"></div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "王健林",
                    position: "董事总经理",
                    imgUrl: "/static/2.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "马化腾",
                    position: "董事总经理",
                    imgUrl: "/static/1.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }
            ],
            tabs: [
                {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }
            ],
            tabs2: [
                {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }
            ],
            tabs3: [
                {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }, {
                    name: "柳青",
                    position: "董事总经理",
                    imgUrl: "/static/5.jpg",
                    txt1: "消费互联网",
                    txt2: "企业服务"
                }
            ]
        }
    }

}
</script>
<style scoped>
.team {
    width: 830px;
}

.item {

    display: flex;
    /* border-bottom: 1px solid #5d6061; */
}

.box.item-img {
    width: 100%;
}

.fl {
    float: left;
}

.team .img {
    height: 237px;
    width: 275px;
    /* background: rebeccapurple; */
    margin: 0 auto;
}

.item1 .box {}

.item1 {
    flex: 2;
    width: 276px;
    height: 361px;
    margin-right: 10px;
    /* background: greenyellow; */
}

.item .names {
    margin: 10px 0;
    font-weight: 100;
    font-size: 18px;
    font-family: 'Arial Regular', Helvetica, 'microsoft yahei', sans-serif;
}

div.item2 {
    background: blue;
}

.item1 p {
    font-size: 14px;
    margin: 5px 0;
}

.item1 .txt {
    color: #72c02c;
    font-size: 14px;
}

.border-btm {
    border-bottom: 1px #ccc solid;
    margin: 20px 0;
    width: 100%;
    text-align: center;
}
</style>


