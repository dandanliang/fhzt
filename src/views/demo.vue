<template>
    <div class='items'>
        <div class='_left'>
            <img src='/static/5.jpg'>
            <h1>名字</h1>
            <div>职位</div>
            <p>关系</p>
        </div>
        <div class='max'> <img src='/static/5.jpg'>
            <h1>名字</h1>
            <div>职位</div>
            <p>关系</p>
        </div>
        <div class="_right"> <img src='/static/5.jpg'>
            <h1>名字</h1>
            <div>职位</div>
            <p>关系</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.items {
    width: 830px;
    margin: auto;
    background: #e5e5e5;
    border-bottom: 1px #333 solid;
}

.items ._left {
    float: left;
    width: 276px;
    height: 391px;
    background: red;
}

.max {

    width: 276px;
    height: 391px;
    background: blue;
}

.items ._right {
    float: right;
    float: left;
    width: 276px;
    height: 391px;
    background: green;
}
</style>
