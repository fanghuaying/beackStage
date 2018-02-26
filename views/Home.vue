<template>
	<el-row class="container">
		<!-- 导航栏 -->
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo-div" :class="collapsed?'logo-collapse-width':'logo-width'"></el-col>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-col class="user">
					<el-dropdown trigger="hover">
						<span class="userinfo"><img src="../src/assets/info.jpg" />方小姐</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>我的消息</el-dropdown-item>
							<el-dropdown-item>设置</el-dropdown-item>
							<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-col>
		</el-col>
		<!-- 主体 -->
		<el-col :span="24" class="main">
			<!-- 侧边栏 -->
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!-- 导航菜单 折叠前 -->
				<el-menu :default-active="$route.path" id="lastclass" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
				<!-- 折叠后 -->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>
			</aside> 
			<!-- 主要内容 -->
			<!-- <section>
				<el-col :span="24">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</el-col>
			</section> -->
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
export default {
  name: "stage",
  data() {
    return {
        activeIndex: '1',
        activeIndex2: '1',
		collapsed:false,
      };
  },
	methods: {
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function (a, b) {
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		collapse:function(){
			this.collapsed=!this.collapsed;
			var uiwidth = document.getElementById('lastclass');
			if(uiwidth.offsetWidth === 0){
				uiwidth.style.width = '230px';
			}
		},
		showMenu(i,status){
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
		}
  }
};
</script>

<style scoped>
/* 整体 */
.container{
	position: absolute;
    top: 0;
    bottom: 0;
	width: 100%;
}
/*    导航栏   */
.container .header{
	height: 60px;
	line-height: 60px;
	background-color: rgba(204, 204, 153, 0.5);
}
.logo-collapse-width{
	width: 60px;
}
.logo-width{
	width: 230px;
	height: 100%;
	background-image: url(../src/assets/logo_01.png);
	background-size: 50px;
	background-repeat: no-repeat;
	background-position: center;
}
.userinfo{
	float: right;
    padding-right: 35px;
    text-align: right;
}
.tools{
	width: 18px;
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

/* 主体 */
.container .main{
	display: flex;
	position: absolute;
    top: 60px;
    bottom: 0px;
	overflow: hidden;
}
/* 侧边栏 */
.menu-collapsed{
	flex: 0 0 60px;
	width: 60px;
}
.menu-expanded{
	flex:0 0 230px;
	width: 230px;
	border-right: 1px solid rgba(204, 204, 153, 0.5);
}
.el-menu{
	border-right: none;
}
.submenu{
	position:absolute;
	top:0px;
	left:60px;
	z-index:99999;
	height:auto;
	display:none;
}
.el-submenu .el-menu {
    background-color: rgba(204, 204, 153, 0.5);
}
/* 主体内容 */
.container .main .content-container {
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
}
.container .main .content-container .breadcrumb-container .title{
    width: 200px;
    float: left;
    color: #475669;
}
.container .main .content-container .breadcrumb-container .breadcrumb-inner{
    float: right;
}
.el-breadcrumb {
    font-size: 13px;
    line-height: 1;
}
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
    color: #97a8be;
    cursor: text;
}
</style>

