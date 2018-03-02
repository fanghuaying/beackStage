<template>
    <section class="join">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="join-part" @click="dialogVisible = true">
                    <p class="join-name"><span>名称：</span>高级开发经理</p>
                    <p class="join-img"><span>图标：</span><img src="../../src/assets/icon_01.png"></p>
                    <div class="join-duty">
                        <span>岗位职责：</span>
                        <div class="join-duty-details">
                            <p>1.及时与业务、产品经理沟通需求；</p>
                            <p>2.设计并编写相关的代码和必要的文档 ；</p>
                            <p>3.严格遵守相关的开发流程等，设计经过架构组综合评审；</p>
                            <p>4.及时完成必要的单元测试，集成测试，代码复查等 。</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="join-part"  @click="dialogVisible = true">
                    <p class="join-name"><span>名称：</span>资深网页/UI设计师</p>
                    <p class="join-img"><span>图标：</span><img src="../../src/assets/icon_02.png"></p>
                    <div class="join-duty">
                        <span>岗位职责：</span>
                        <div class="join-duty-details">
                            <p>1.及时与业务、产品经理沟通需求；</p>
                            <p>2.设计并编写相关的代码和必要的文档 ；</p>
                            <p>3.严格遵守相关的开发流程等，设计经过架构组综合评审；</p>
                            <p>4.及时完成必要的单元测试，集成测试，代码复查等 。</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="join-part"  @click="dialogVisible = true">
                    <p class="join-name"><span>名称：</span>资深JAVA开发工程师</p>
                    <p class="join-img"><span>图标：</span><img src="../../src/assets/icon_03.png"></p>
                    <div class="join-duty">
                        <span>岗位职责：</span>
                        <div class="join-duty-details">
                            <p>1.及时与业务、产品经理沟通需求；</p>
                            <p>2.设计并编写相关的代码和必要的文档 ；</p>
                            <p>3.严格遵守相关的开发流程等，设计经过架构组综合评审；</p>
                            <p>4.及时完成必要的单元测试，集成测试，代码复查等 。</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="join-part"  @click="dialogVisible = true">
                    <p class="join-name"><span>名称：</span>前端开发工程师</p>
                    <p class="join-img"><span>图标：</span><img src="../../src/assets/icon_04.png"></p>
                    <div class="join-duty">
                        <span>岗位职责：</span>
                        <div class="join-duty-details">
                            <p>1.及时与业务、产品经理沟通需求；</p>
                            <p>2.设计并编写相关的代码和必要的文档 ；</p>
                            <p>3.严格遵守相关的开发流程等，设计经过架构组综合评审；</p>
                            <p>4.及时完成必要的单元测试，集成测试，代码复查等 。</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 模态框 -->
		<el-dialog
			title="编辑"
			:visible.sync="dialogVisible"
			width="40%"
			:before-close="handleClose"
			class="dtitle">
				<p>
					<span>名称：</span>
					<el-input v-model="inputName"></el-input>
				</p>
                <p>
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
				<p>
					<span>职责：</span>
					<el-input
					type="textarea"
					:autosize="{ minRows: 2, maxRows: 4}"
					v-model="inputDuty">
					</el-input>
				</p>
                <p>
					<span>任职资格：</span>
					<el-input
					type="textarea"
					:autosize="{ minRows: 2, maxRows: 4}"
					v-model="inputStatus">
					</el-input>
				</p>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</span>
			</el-dialog>
    </section>
</template>
<script>
  export default {
    data() {
      return {
			fileList:[{name: 'qinhan.jpeg', url: 'http://www.shbaoyuantech.com/img/join-icon-001.png'}],
			dialogVisible: false,
			dialogImageUrl: '',
			inputName:'高级开发经理',
			inputDuty:'1.及时与业务、产品经理沟通需求；2.设计并编写相关的代码和必要的文档 ；3.严格遵守相关的开发流程等，设计经过架构组综合评审；4.及时完成必要的单元测试，集成测试，代码复查等 。',
            inputStatus:'1.及时与业务、产品经理沟通需求；2.设计并编写相关的代码和必要的文档 ；3.严格遵守相关的开发流程等，设计经过架构组综合评审；4.及时完成必要的单元测试，集成测试，代码复查等 。'
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
	handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  };
</script>
<style>
.join .join-part {
    width: 80%;
    padding: 20px;
    color: #455761;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    cursor: pointer;
}
.join .join-img{
    margin: 20px 0px;
}
.join .join-img img{
    width: 50px;
}
.join .join-img span{
    font-size: 18px;
    font-weight: bold;
}
.join .join-name span{
    font-size: 18px;
    font-weight: bold;
}
.join .join-duty span{
    font-size: 18px;
    font-weight: bold;
}
.join .join-duty-details{
    padding-left: 20px;
}
/* 模态框 */
.dtitle .el-input{
	width: 30%;
}
.dtitle p {
    margin: 20px 0px 20px 20px;
}
.join .el-upload-list--picture-card .el-upload-list__item{
    border-radius: 50%;
}
.join .el-upload--picture-card{
    border-radius: 50%;
}

</style>
