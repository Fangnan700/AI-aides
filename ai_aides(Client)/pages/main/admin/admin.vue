<template>
	<view class="content">
		<view class="logo">
			<u--image src="/static/wxlogo.png" shape="circle" width="200rpx" height="200rpx"></u--image>
		</view>
		<u-transition :show="true" mode="slide-right">
			<view class="desc">基于Chat-GPT实现的智能小助手</view>
		</u-transition>
		<view class="confirm">
			<u-input class="admin_input" v-model="server_host" type="text" placeholder="请输入服务器域名/地址" />
			<view class="success" v-show="success">设置成功</view>
			<u-button class="admin_btn" shape="circle" @click="change">确定</u-button>
			<u-button class="reset_btn" shape="circle" color="#26B3A0" :plain="true" @click="reset">重置</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				success: false,
				server_host: ""
			}
		},
		onLoad() {
			this.ch_email = uni.getStorageSync('server_host');
			this.success = false;
		},
		methods: {
			reset() {
				this.server_host = "";
			},
			change() {
				// 设置服务器地址，未加校验
				uni.setStorageSync("server_host", this.server_host);
				this.success = true;
				setTimeout(function() {
					uni.navigateBack();
				},1000);
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.logo {
			width: 100px;
			margin-top: 100px;
			margin-left: auto;
			margin-right: auto;
		}
		
		.desc {
			width: fit-content;
			margin-top: 10px;
			margin-left: auto;
			margin-right: auto;
			color: #696969;
		}

		.confirm {
			width: 600rpx;
			margin-top: 20px;
			margin-left: auto;
			margin-right: auto;

			.admin_input {
				height: 30px;
				margin-top: 10px;
				padding: 10px;
				border-radius: 20px;
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
