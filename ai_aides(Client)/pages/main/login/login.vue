<template>
	<view class="content">
		<view class="logo">
			<u--image src="/static/wxlogo.png" shape="circle" width="200rpx" height="200rpx"></u--image>
		</view>
		<view class="confirm">
			<u-input class="admin_input" v-model="ch_email" type="text" placeholder="请输入ChatGPT账号" />
			<u-input class="admin_input" v-model="ch_password" type="password" placeholder="请输入ChatGPT密码" />
			<view class="success" v-show="success">登录成功</view>
			<view class="wrong" v-show="wrong">登录失败</view>
			<u-button class="admin_btn" shape="circle" @click="login">登录ChatGPT</u-button>
			<u-button class="reset_btn" shape="circle" color="#26B3A0" :plain="true" @click="reset">重置</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				success: false,
				wrong: false,
				ch_email: "",
				ch_password: "",
				ch_token: ""
			}
		},
		onLoad() {
			this.ch_email = uni.getStorageSync('ch_email');
			this.ch_password = uni.getStorageSync('ch_password');
			this.success = false;
			this.wrong = false;
		},
		methods: {
			confirm() {
				if (this.username === "yvling" && this.password === "@a123456") {
					this.isAdmin = true
				} else {
					this.wrong = true
				}
			},
			reset() {
				this.ch_email = "";
				this.ch_password = "";
				uni.clearStorageSync();
			},
			login() {
				const _this = this;
				uni.showLoading({
					title: "正在登录..."
				})
				uni.request({
					// 后端接口地址
					url: "http://chat.api.aliyungpt.com/login",
					method: "POST",
					data: {
						"login_data": {
							"username": _this.ch_email,
							"password": _this.ch_password
						}
					},
					success: function(res) {
						uni.hideLoading();
						if (res.data["code"] === "1") {
							_this.ch_token = res.data['token'];
							_this.success = true;
							uni.setStorageSync('ch_email', _this.ch_email);
							uni.setStorageSync('ch_password', _this.ch_password);
							setTimeout(()=>{
								_this.success = false;
								_this.wrong = false;
								uni.navigateTo({
									url: "/pages/main/form/index?token=" + _this.ch_token
								}, 2)
							})
						} else {
							_this.wrong = true;
						}
					},
					fail: function(res) {
						uni.hideLoading();
						_this.wrong = true;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.logo {
			width: 100px;
			margin-top: 80px;
			margin-left: auto;
			margin-right: auto;
		}

		.confirm {
			width: 80%;
			margin-top: 50px;
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

			.admin_btn {
				width: 100%;
				height: 45px;
				margin-top: 10px;
				background-color: #26B3A0;
				color: #ffffff;
				font-size: 16px;
			}
			
			.reset_btn {
				margin-top: 10px;
				font-size: 16px;
			}
		}
	}
</style>
