<template>
	<view class="container">
		<view class="form">
			<view class="logo">
				<u--image src="/static/wxlogo.png" shape="circle" width="200rpx" height="200rpx">
				</u--image>
			</view>
			<u-transition :show="true" mode="slide-left">
				<view class="title">AI小助手</view>
			</u-transition>
			<u-transition :show="true" mode="slide-right">
				<view class="desc">基于Chat-GPT实现的智能小助手</view>
			</u-transition>
			<view class="btn-group">
				<view class="btn" v-on:click="onToLogin">
					<u-button shape="circle" iconColor="#ffffff" color="#26B3A0" icon="chat" text="开始体验">
					</u-button>
				</view>
				<view class="btn">
					<u-button shape="circle" color="#26B3A0" :plain="true" icon="reload" text="服务器设置" @click="onToAdmin"></u-button>
				</view>
				<view class="btn">
					<u-button shape="circle" color="#26B3A0" :plain="true" icon="share" text="项目GitHub地址" @click="gotoGitHub"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			};
		},
		mounted() {
			
		},
		methods: {
			onToForm() {
				uni.navigateTo({
					url: '/pages/main/form/index'
				})
			},
			onToLogin() {
				uni.navigateTo({
					url: '/pages/main/login/login'
				})
			},
			onToAdmin() {
				uni.navigateTo({
					url: '/pages/main/admin/admin'
				})
			},
			gotoGitHub() {
				plus.runtime.openURL('https://github.com/Fangnan700/AI-aides')
			}
		}
	}
</script>

<style lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 400rpx;
		overflow-y: hidden;

		.title {
			font-size: 38rpx;
			font-weight: bolder;
			margin-top: 15rpx;
		}

		.desc {
			margin-top: 15rpx;
			font-size: 28rpx;
			color: #666;
		}

		.btn-group {
			width: 600rpx;

			.btn {
				margin: 30rpx 0rpx;

				.u-button {
					height: 100rpx;
				}
			}
		}
	}
</style>
