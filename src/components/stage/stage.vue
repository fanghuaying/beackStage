<template>
  <div class="stage">
    <el-container>
			<el-header>
				<el-row>
					<el-col :span="2" class="logo-div">
						<div class="logo">
							<img src="../../assets/logo_01.png">
						</div>
					</el-col>
					<el-col :span="20" class="nav-menu">
						<i class="el-icon-menu"></i>
					</el-col>
					<el-col :span="2">
						<el-col class="user">
							<el-dropdown trigger="hover">
								<span class="userinfo"><img src="../../assets/info.jpg" />方小姐</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>我的消息</el-dropdown-item>
									<el-dropdown-item>设置</el-dropdown-item>
									<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</el-col>
					</el-col>	
				</el-row>
			</el-header>
    	<el-container	class="main">
				<el-aside width="159px">
					<el-menu
						default-active="2"
						class="el-menu-vertical-demo">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>首页</span>
							</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">印象</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">招聘</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-phone"></i>
							<span slot="title">联系</span>
						</el-menu-item>
					</el-menu>
				</el-aside> 
				<el-main>
					main
				</el-main>
			</el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "stage",
  data() {
    return {
        activeIndex: '1',
        activeIndex2: '1'
      };
  },
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
  }
};
</script>

<style scoped>
/*    导航栏   */
.logo{
	display: inline-block;
	height: 100%;
}
.logo img{
	display: inline-block;
	width: 50%;
	height: 100%;
}
.el-header{
	padding: 0;
	background-color: #f4f4f4;
}
.nav-menu{
	font-size: 30px;
	line-height: 60px;
	padding-left: 20px;
}
.logo-div{
	text-align: center;
}
.user{
	line-height: 60px;
	cursor: pointer;
}
.userinfo img{
	width: 40px;
	height: 40px;
	border-radius: 20px;
	margin: 10px 0 10px 10px;
	float: right;
}
</style>

