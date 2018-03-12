<template>
	<section class="product">
		<p>产品介绍内容：</p>
		<div class="product-text">
			<div @click="dialogVisibleOne = true">
				<textarea  class="add-descript" v-model="text"></textarea>
			</div>
			<i class="el-icon-circle-close" @click="hiddenI"></i>
		</div>
		<!-- <div class="product-add">
			<div class="el-upload el-upload--picture-card" @click="addText()">
				<i class="el-icon-plus"></i>
			</div>
		</div> -->
		<el-row :gutter="20">
            <el-col :span="6">
                <div class="product-part" @click="dialogVisibleTwo = true">
                    <p class="product-name"><span>名称：</span>视觉设计</p>
					<p class="product-name"><span>细称：</span>UI级用户体验设计</p>
                    <p class="product-img"><span>图标：</span><img src="../../src/assets/product_01.png"></p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="product-part"  @click="dialogVisibleTwo = true">
                    <p class="product-name"><span>名称：</span>资深网页/UI设计师</p>
					<p class="product-name"><span>细称：</span>UI级用户体验设计</p>
                    <p class="product-img"><span>图标：</span><img src="../../src/assets/product_02.png"></p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="product-part"  @click="dialogVisibleTwo = true">
                    <p class="product-name"><span>名称：</span>资深JAVA开发工程师</p>
					<p class="product-name"><span>细称：</span>UI级用户体验设计</p>
                    <p class="product-img"><span>图标：</span><img src="../../src/assets/product_03.png"></p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="product-part"  @click="dialogVisibleTwo = true">
                    <p class="product-name"><span>名称：</span>前端开发工程师</p>
					<p class="product-name"><span>细称：</span>UI级用户体验设计</p>
                    <p class="product-img"><span>图标：</span><img src="../../src/assets/product_04.png"></p>
                </div>
            </el-col>
		</el-row>
		<!-- 模态框一 -->
		<el-dialog
		title="提示"
		:visible.sync="dialogVisibleOne"
		width="30%"
		:before-close="oneHandleClose">
		<textarea cols="30" rows="10" v-model="text"></textarea>
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisibleOne = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisibleOne = false">确 定</el-button>
		</span>
		</el-dialog>
			<!-- 模态框二 -->
		<el-dialog
			title="编辑"
			:visible.sync="dialogVisibleTwo"
			width="40%"
			:before-close="handleClose"
			class="dtitle">
				<p>
					<span>名称：</span>
					<el-input v-model="inputName"></el-input>
				</p>
				<p>
					<span>细称：</span>
					<el-input v-model="inputDetil"></el-input>
				</p>
                <p class="product-icon">
					<span>图标：</span>
					<el-upload
					action="https://jsonplaceholder.typicode.com/posts/"
					list-type="picture-card"
					:on-preview="handlePictureCardPreview"
					:on-remove="handleRemove"
					:file-list="fileList">
					<i class="el-icon-plus"></i>
					</el-upload>
				</p>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisibleTwo = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
				</span>
		</el-dialog>
	</section>
</template>

 <script>
	export default {
	data() {
      return {
		 	text: '目前，公司在基于教育培训行业的移动端APP开发，智能工作平台、数据分析系统建设等方面均取得了长足的进展，并不断探索文化电商、内容电商、人文教育数字化等前沿领域。公司将连接线上线下的学习交流空间，搭建高效的互联网学习平台及企业信息化管理体系视为己任，未来亦将突破现有领域，努力推动先进的互联网交互技术和信息管理技术的实践运用。',
			fileList:[{name: 'qinhan.jpeg', url: 'http://www.shbaoyuantech.com/img/icon-01.png'}],
			dialogVisibleTwo: false,
			dialogVisibleOne: false,
			dialogImageUrl: '',
			inputName:'视觉设计',
			inputDetil:'UI级用户设计',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
		},
	  oneHandleClose(done) {
        this.$confirm('确认更改？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
		},
	 handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
	  },
	  addText(){
		  var obj = this.text;
		  this.text.push(obj);
		  console.log(obj);
	  },
	  hiddenI(){
		  console.log("点击消失")
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
.product .product-add{
	cursor: pointer;
	height: 80px;
}
.product .product-add .el-upload--picture-card {
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
.product .product-text textarea{
	cursor: pointer;
}
.product .product-text i{
	position: absolute;
	font-size: 20px;
    right: 0px;
    top: 0px;
	cursor: pointer;
}
.product .product-part {
    width: 80%;
    padding: 20px;
    color: #455761;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    cursor: pointer;
}
.product .el-dialog .el-upload{
	float: none;
	margin-top: 0px;
}
.product .product-img{
    margin: 20px 0px;
}
.product .product-img img{
    width: 50px;
}
.product .product-img span{
    font-size: 18px;
    font-weight: bold;
}
.product .product-name span{
    font-size: 18px;
    font-weight: bold;
}
.product .product-duty span{
    font-size: 18px;
    font-weight: bold;
}
.product .product-duty-details{
    padding-left: 20px;
}
/* 模态框一 */
.el-dialog__body textarea{
	width: 100%;
	border-radius: 6px;
	color: #455761;
	font-size:15px;		
} 
/* 模态框二 */
.dtitle .el-input{
	width: 30%;
}
.dtitle p {
    margin: 20px 0px 20px 20px;
}
.product .el-upload-list--picture-card .el-upload-list__item{
    border-radius: 50%;
}
.product .el-upload--picture-card{
    border-radius: 50%;
}

</style>
