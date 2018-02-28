<template>
	<section class="product">
		<p>产品介绍内容：</p>
		<div class="product-text">
			<textarea  class="add-descript" v-model="text"></textarea>
			<i class="el-icon-circle-close"></i>
		</div>
		<div class="el-upload el-upload--picture-card">
			<i class="el-icon-plus"></i>
		</div>
		<el-upload
				class="upload-demo"
				action="https://jsonplaceholder.typicode.com/posts/"
				:on-preview="handlePreview"
				:on-remove="handleRemove"
				:file-list="fileList2"
				list-type="picture">
				<div>
					<el-button size="medium" icon="el-icon-plus" type="info">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</div>
		</el-upload>
	</section>
</template>

 <script>
	export default {
	data() {
		return {
			text: '目前，公司在基于教育培训行业的移动端APP开发，智能工作平台、数据分析系统建设等方面均取得了长足的进展，并不断探索文化电商、内容电商、人文教育数字化等前沿领域。公司将连接线上线下的学习交流空间，搭建高效的互联网学习平台及企业信息化管理体系视为己任，未来亦将突破现有领域，努力推动先进的互联网交互技术和信息管理技术的实践运用。',
			fileList2: [{name: '视觉设计', url: 'http://www.shbaoyuantech.com/img/icon-01.png'},
						{name: '移动开发', url: 'http://www.shbaoyuantech.com/img/icon-02.png'},
						{name: '网站优化', url: 'http://www.shbaoyuantech.com/img/icon-03.png'},
						{name: '系统开发', url: 'http://www.shbaoyuantech.com/img/icon-04.png'},
					]
		};
	},
	methods: {
		handleRemove(file, fileList) {
			console.log(file, fileList);
			},
		handlePreview(file) {
			console.log(file);
			}
		}
	}
</script>

<style>
.product .el-upload{
	float: right;
	margin-top: 20px;
	margin-bottom: 20px;
}
.product .add-descript{
	width: 98%;
	color: #606266;
	border:1px solid #c0ccda;
	border-radius: 6px;
	padding: 10px;
	margin-top:10px;
	margin-bottom: 10px; 
}
.product .el-upload--picture-card {
    overflow: hidden;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 52px;
    line-height: 52px;
    vertical-align: top;
}
.product .product-text{
	position: relative;
}
.product .product-text i{
	position: absolute;
	font-size: 20px;
    right: 0px;
    top: 0px;
}
</style>
