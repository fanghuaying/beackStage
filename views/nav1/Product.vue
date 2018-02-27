<template>
    <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
			<el-button size="medium" icon="el-icon-plus" type="info">点击上传</el-button>
			<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
           
</template>

 <script>
	export default {
	data() {
		return {
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

<style scoped>
.upload-demo{
	padding: 40px;
}
.el-upload{
	float: right;
	margin-bottom: 20px;
}
.el-upload-list{
	margin-top: 20px;
}
.el-upload-list--picture .el-upload-list__item{
	height: 320px;
}
</style>
