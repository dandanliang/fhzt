<template>
    <div class='items '>
        <div class='clearfix'>
            <div >
                <div class='_left'>
                    <img src='/static/6.jpg' width='237px' height='237'>
                    <h3>刘秉翰</h3>
                    <div class='zw'>CEO</div>
                    <p>
                        <span>消费互联网 </span>|
                        <span> 企业服务</span>
                    </p>
                </div>
                <div class='_left'> <img src='/static/5.jpg' width='237px' height='237'>
                    <h3>柳青</h3>
                    <div class='zw'> 合伙人</div>
                    <p>
                        <span>消费互联网</span>
                    </p>
                </div>
                <div class="_right"> <img src='/static/5.jpg' width='237px' height='237'>
                    <h3>柳青</h3>
                    <div class='zw'> 合伙人</div>
                    <p>
                        <span>消费互联网</span>
                    </p>
                </div>
            </div>
            <div class="_left"> <img src='/static/5.jpg' width='237px' height='237'>
                <h3>柳青</h3>
                <div class='zw'> 合伙人</div>
                <p>
                    <span>消费互联网</span>
                </p>
            </div>
        </div>
        <div class='br-btm'></div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.items {
    width: 830px;
    margin: auto;
}

.items ._left {
    float: left;
    padding: 0 19px 19px 19px;
}

h3 {
    margin: 5px 0;
    font-weight: 100;
    font-size: 18px;
    font-family: 'Arial Regular', Helvetica, 'microsoft yahei', sans-serif;
}

.zw {
    font-size: 14px;
    margin: 5px 0;
}

._left p span,
._right p span {
    color: #72c02c;
    font-size: 14px;
}

.br-btm {
    border-bottom: 1px #ccc solid;
    /* margin: 20px 0; */
    width: 95%;
    margin: auto;
    /* visibility: hidden; */
}

.br-btm::after {
    content: "0";
    width: 15px;
    height: 1px;
    overflow: hidden;
}

.clearfix::after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    clear: both;
    visibility: hidden;
}

.clearfix {
    zoom: 1;
}

.items ._right {
    float: right;
     padding: 0 19px 19px 19px;
}
</style>
