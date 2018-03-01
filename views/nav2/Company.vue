<template>
	<section class="company">
		<ul class="inewslist">
			<li @click="dialogVisible = true">
				<div class="imgbox">
					<img src="../../src/assets/conpany_01.jpg">
				</div>
				<h3>高级开发经理</h3>
				<p>
					上海秦汉胡同艺术品有限公司成立于2004年。旗下秦汉胡同国学书院，以传承和弘扬中国优秀传统文化为崇高使命，以中国传统文化的教育培训、
					传播发展和学术研究为主要内容，从“大国学、大文化”的视角对中国人的思想哲学、思维秉性、情感特质和文化艺术等进行冷静、客观、深入地研究分析，
					努力从中萃取能承载中国未来创新和引领民族发展的智慧精华，帮助和引导青少年儿童从小树立欣赏大美、胸怀大爱、顺从大道的人文品格；为现代家庭提供“听香读画，
					吃墨看茶”的人文艺术环境，寓“观书论道”与“家庭亲子”于一体，让他们畅享书斋耕读乐趣；向现代社会倡导以和谐友爱为核心，包含分享、创造力、优雅在内的积极精神。
				</p>
			</li>
			<li @click="dialogVisible = true">
				<div class="imgbox">
					<img src="../../src/assets/conpany_02.png" alt="">
				</div>
				<h3>资深网页/UI设计师</h3>
				<p>
					上海秦汉胡同艺术品有限公司成立于2004年。旗下秦汉胡同国学书院，以传承和弘扬中国优秀传统文化为崇高使命，以中国传统文化的教育培训、
					传播发展和学术研究为主要内容，从“大国学、大文化”的视角对中国人的思想哲学、思维秉性、情感特质和文化艺术等进行冷静、客观、深入地研究分析，
					努力从中萃取能承载中国未来创新和引领民族发展的智慧精华，帮助和引导青少年儿童从小树立欣赏大美、胸怀大爱、顺从大道的人文品格；为现代家庭提供“听香读画，
					吃墨看茶”的人文艺术环境，寓“观书论道”与“家庭亲子”于一体，让他们畅享书斋耕读乐趣；向现代社会倡导以和谐友爱为核心，包含分享、创造力、优雅在内的积极精神。
				</p>
			</li>
			<li @click="dialogVisible = true">
				<div class="imgbox">
					<img src="../../src/assets/conpany_03.jpg" alt="">
				</div>
				<h3>前端开发工程师</h3>
				<p>
					上海秦汉胡同艺术品有限公司成立于2004年。旗下秦汉胡同国学书院，以传承和弘扬中国优秀传统文化为崇高使命，以中国传统文化的教育培训、
					传播发展和学术研究为主要内容，从“大国学、大文化”的视角对中国人的思想哲学、思维秉性、情感特质和文化艺术等进行冷静、客观、深入地研究分析，
					努力从中萃取能承载中国未来创新和引领民族发展的智慧精华，帮助和引导青少年儿童从小树立欣赏大美、胸怀大爱、顺从大道的人文品格；为现代家庭提供“听香读画，
					吃墨看茶”的人文艺术环境，寓“观书论道”与“家庭亲子”于一体，让他们畅享书斋耕读乐趣；向现代社会倡导以和谐友爱为核心，包含分享、创造力、优雅在内的积极精神。
				</p>
			</li>
			<div class="el-upload el-upload--picture-card"  @click="dialogVisible = true">
				<i class="el-icon-plus"></i>
			</div>
		</ul>
		<!-- 模态框 -->
		<el-dialog
			title=" "
			:visible.sync="dialogVisible"
			width="40%"
			:before-close="handleClose"
			class="dtitle">
				<p>
					<span>标题：</span>
					<el-input v-model="inputTitle"></el-input>
				</p>
				<p>
					<span>转载：</span>
					<el-input v-model="inputSource"></el-input>
				</p>
				<p>
					<span>时间：</span>
					<el-input v-model="inputTime"></el-input>
				</p>
				<p>
					<span>内容：</span>
					<el-input
					type="textarea"
					:autosize="{ minRows: 2, maxRows: 4}"
					placeholder=""
					v-model="content">
					</el-input>
				</p>
				<p>
					<span>图片：</span>
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
			fileList:[{name: 'qinhan.jpeg', url: 'http://localhost:8080/static/img/qinhan.9f39635.jpg'}],
			dialogVisible: false,
			dialogImageUrl: '',
			inputTitle:'秦汉胡同简介',
			inputSource:'抱元科技',
			inputTime:'2016-11-10',
			content:'上海秦汉胡同艺术品有限公司成立于2004年。旗下秦汉胡同国学书院，以传承和弘扬中国优秀传统文化为崇高使命，以中国传统文化的教育培训、传播发展和学术研究为主要内容，从“大国学、大文化”的视角对中国人的思想哲学、思维秉性、情感特质和文化艺术等进行冷静、客观、深入地研究分析，努力从中萃取能承载中国未来创新和引领民族发展的智慧精华，帮助和引导青少年儿童从小树立欣赏大美、胸怀大爱、顺从大道的人文品格；为现代家庭提供“听香读画，吃墨看茶”的人文艺术环境，寓“观书论道”与“家庭亲子”于一体，让他们畅享书斋耕读乐趣；向现代社会倡导以和谐友爱为核心，包含分享、创造力、优雅在内的积极精神。'
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
.company .inewslist {
  width: 90%;
  list-style: none;
  margin: 0 auto 10px;
  font-size: 0;
  text-align: center;
  height: 396px;
}
.company .inewslist li {
    font-size: 12px;
    width: 20%;
    height: 334px;
    margin: 30px 1.5% 0 1.5%;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    background: #fff;
    border-radius: 3px;
    padding-bottom: 30px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    cursor: pointer;
}
.company .inewslist .imgbox {
    width: 100%;
    height: 150px;
    display: block;
    overflow: hidden;
}
.company .inewslist .imgbox img{
  width: 100%;
}
.company .inewslist h3 {
    margin: 18px auto 8px;
    padding: 0 10px;
    font-size: 18px;
    line-height: 30px;
    color: #455761;
	 overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    white-space: nowrap;
}
.company .inewslist p {
    line-height: 20px;
    padding: 10px 18px 0;
    text-indent: 20px;
    color: #455761;
    text-align: justify;
    text-justify: distribute-all-lines;
    text-justify: inter-ideograph;
	 overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 6;
}
.company .inewslist .el-upload--picture-card {
    overflow: hidden;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 20%;
    height: 364px;
    line-height: 334px;
    vertical-align: top;
	 margin: 30px 1.5% 0 1.5%;
	 padding-bottom: 30px;
}
/* 模态框 */
.dtitle .el-input{
	width: 30%;
}
.dtitle p {
    margin: 20px 0px 20px 20px;
}

</style>
