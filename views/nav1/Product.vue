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
        dialogImageUrl: ["http://www.shbaoyuantech.com/img/icon-01.png"],
        dialogVisible: false,
        fileList2: [{name: 'banner04.jpeg', url: 'http://www.shbaoyuantech.com/img/icon-01.png'},
					{name: 'banner01.jpeg', url: 'http://www.shbaoyuantech.com/img/icon-02.png'},
					{name: 'banner02.jpeg', url: 'http://www.shbaoyuantech.com/img/icon-03.png'},
					{name: 'banner02.jpeg', url: 'http://www.shbaoyuantech.com/img/icon-04.png'},
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