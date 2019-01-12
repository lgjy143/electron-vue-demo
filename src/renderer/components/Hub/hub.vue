<template>
<div>
    <el-row :gutter="10" class="mt-10">
        <el-col :span="8" v-for="(o) in 6" :key="o" class="mt-10">
            <div class="grid-content bg-purple">
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {

}


</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 226px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

/*
 .text {
    font-size: 14px;
}

.item {
    margin-bottom: 10px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 200px;
    margin-bottom: 5px; 
} */
</style>
