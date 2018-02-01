<template>
  <div class="stage">
    <el-container>
		<el-header>
			header
		</el-header>
    	<el-container	>
			<el-aside>
				aside
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
    return {};
  }
};
</script>

<style scoped>
.el-header{
	width: 100%;
	background: #99CCFF;
}
.el-aside{

}
</style>

