<template>
<div>
    <el-row :gutter="10" class="mt-10">
        <el-col :span="8" v-for="(o) in 6" :key="o" class="mt-10">
            <div class="grid-content bg-purple">
                <div v-for="o in 2" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    <el-button class="no-drag hover-color" size="mini" type="text" @click="nedb_add(o)">
                        <i class="btn el-icon-edit">新增</i>
                    </el-button>
                    <el-button class="no-drag hover-color" size="mini" type="text" @click="nedb_find(o)">
                        <i class="btn el-icon-edit">查询</i>
                    </el-button>
                    __dirName path: {{dirName}}
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
var path = require('path');

export default {
    data() {
        return {
            dirName: ''
        }
    },
    mounted() {
        this.dirName = path.dirname(__dirname) + ' | ' +
            path.resolve(__dirname) //+ ' | '
            // path.extname(path.join(__dirname, 'hub.vue')) + ' | ' +
            // path.basename(__dirname)
    },
    methods: {
        nedb_add(i) {
            var doc = {
                _id: 'id1' + i,
                planet: 'Mars',
                system: 'solar',
                inhabited: false,
                satellites: ['Phobos', 'Deimos']
            }
            this.$nedb.insert(doc, function (err, newDoc) {
                console.log('err:' + err);
                console.log('newDoc:' + newDoc);
            });
        },
        nedb_find(i) {
            // 查询某一个文档
            this.$nedb.findOne({
                _id: 'id1' + i
            }, function (err, doc) {
                // doc is the document Mars
                // If no document is found, doc is null
                console.log("doc:" + JSON.stringify(doc));
            });
            // 查询所有结果集
            this.$nedb.find({}, function (err, docs) {
                console.log("docs:" + JSON.stringify(docs));
            });
        }
    }
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
