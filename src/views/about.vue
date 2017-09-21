<template>
    <div class='aboutUs'>
        <p>复辉投资（FOSHINEINVEST）是一家早期投资公司，以
            <span>天使轮</span>，
            <span>PreA</span>和
            <span>A轮</span>投资为主，专注投资于
            <span>Ai</span>，
            <span>大数据</span>等方向的初创团队，挖掘团队在具体商业场景下进行领先应用的能力，观察团队能否建立起符合逻辑的商业模式，</p>
        <p> 同时，复辉提供优秀的投后管理和资源对接，扶持和协助初创团队顺利成长，快速找到成功的商业增长路径。</p>
        <p>复辉投资的资金主要来源于一些成功的实业企业家，他们既可以为创业者提供很多的行业资源，也可以为创业者提供管理实操经验，成为创业者的战略合伙人。</p>
        <div class='Investments '>
            <h2> 目前已经投资企业包括：</h2>
            <div class='tzqy'>
                <router-link to="www.editorai.com/" class='img'>
                    <img src="/static/1.png" alt="">
                </router-link>
                <div class='img'>
                    <img src="/static/2.png " width='50px;' alt=" ">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.aboutUs {
    width: 830px;
    margin: auto;
}

.aboutUs p {
    font-size: 16px;
    color: #5a5a5a;
    line-height: 25px;
    text-align: justify;
}

.aboutUs p span {
    font-size: 16px;
    color: #72c02c;
    line-height: 25px;
    text-align: justify;
}

.Investments {}

.tzqy {
    display: flex;
    padding: 100px;
}


.Investments .img {
    flex: 1;
    width: 25%;
}

.Investments .img img {}
</style>

