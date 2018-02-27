<template>
  <section>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="fileList2">
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
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>


<style>
.el-upload-list--picture-card .el-upload-list__item{
  text-align: center;
}
.el-upload-list--picture-card .el-upload-list__item-thumbnail{
  width: 90%;
}
</style>

