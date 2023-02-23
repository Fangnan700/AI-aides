<template>
	<view class="content">
		<view class="confirm" v-show="!isAdmin">
			<u-input class="admin_input" v-model="username" type="text" placeholder="请输入管理员账号" />
			<u-input class="admin_input" v-model="password" type="password" placeholder="请输入管理员密码" />
			<view class="wrong" v-show="wrong">账号/密码错误，请检查后重试</view>
			<u-button id="admin_btn" shape="circle" @click="confirm">确定</u-button>
		</view>
		<view class="confirm" v-show="isAdmin">
			<u-input class="admin_input" v-model="ch_email" type="text" placeholder="请输入ChatGPT账号" />
			<u-input class="admin_input" v-model="ch_password" type="password" placeholder="请输入ChatGPT密码" />
			<u-input class="admin_input" v-model="ch_proxy" type="text" placeholder="请输入代理地址(选填)" />
			<view class="success" v-show="reset_success">服务器重置成功</view>
			<view class="wrong" v-show="reset_fail">服务器重置失败</view>
			<u-button id="admin_btn" shape="circle" @click="reset">重置服务器</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAdmin: false,
				wrong: false,
				reset_success: false,
				reset_fail: false,
				username: "",
				password: "",
				ch_email: "",
				ch_password: "",
				ch_proxy: null
			}
		},
		methods: {
			confirm() {
				// 验证管理员权限
				if (this.username === "<your admin username>" && this.password === "<your admin password>") {
					this.isAdmin = true
				} else {
					this.wrong = true
				}
			},
			reset() {
				const _this = this;
				uni.showLoading({
					title: "正在重置..."
				})
				uni.request({
					// 后端接口地址
					url: "http://<your host:your port>/reset",
					method: "POST",
					data: {
						"config_data": {
							"email": this.ch_email,
							"password": this.ch_password,
							"proxy": this.ch_proxy
						}
					},
					success: function(res) {
						uni.hideLoading();
						if(res.data["code"] === "1") {
							_this.reset_success = true
						} else {
							_this.reset_fail = true
						}
					},
					fail: function(res) {
						uni.hideLoading();
						_this.reset_fail = true
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.confirm {
			width: 80%;
			margin-top: 100px;
			margin-left: auto;
			margin-right: auto;

			.admin_input {
				height: 30px;
				margin-top: 10px;
				padding: 10px;
				border-radius: 20px;
			}
			
			.wrong {
				width: 100%;
				margin-top: 10px;
				text-align: center;
				color: red;
			}
			
			.success {
				width: 100%;
				margin-top: 10px;
				text-align: center;
				color: #26B3A0;
			}

			#admin_btn {
				width: 100%;
				height: 50px;
				margin-top: 10px;
				background-color: #26B3A0;
				color: #ffffff;
				font-size: 18px;
			}
		}
	}
</style>
