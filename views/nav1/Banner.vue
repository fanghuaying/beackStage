<template>
  <section class="banner">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"         
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="fileList2"> 
        <!-- action   添加的是后台接口 -->
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
  </section>
  
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        fileList2: [{name: 'banner04.jpeg', url: 'http://www.shbaoyuantech.com/img/banner04.jpg'},
					{name: 'banner01.jpeg', url: 'http://www.shbaoyuantech.com/img/banner01.jpg'},
					{name: 'banner02.jpeg', url: 'http://www.shbaoyuantech.com/img/banner02.jpg'},
				]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>


<style>
.banner .el-upload-list__item,.el-upload--picture-card {
	width: 500px;
  	height: 225px;
}
.el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    line-height: 146px;
    vertical-align: top;
}
</style>

