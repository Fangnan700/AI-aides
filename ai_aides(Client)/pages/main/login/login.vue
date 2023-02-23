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
			<u-button id="admin_btn" shape="circle" @click="login">登录ChatGPT</u-button>
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
		methods: {
			login() {
				const _this = this;
				uni.showLoading({
					title: "正在登录..."
				})
				uni.request({
					// 后端登录接口地址
					url: "http://<your host:your port>/login",
					method: "POST",
					data: {
						"login_data": {
							"username": _this.ch_email,
							"password": _this.ch_password
						}
					},
					success: function(res) {
						console.log(res);
						uni.hideLoading();
						if (res.data["code"] === "1") {
							_this.ch_token = res.data['token'];
							_this.success = true;
							setTimeout(()=>{
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
						_this.wrong = true
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

			#admin_btn {
				width: 100%;
				height: 45px;
				margin-top: 10px;
				background-color: #26B3A0;
				color: #ffffff;
				font-size: 16px;
			}
		}
	}
</style>
