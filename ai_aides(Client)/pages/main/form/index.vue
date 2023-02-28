<template>
	<view class="container">

		<scroll-view class="scrollview" id="scrollview" scroll-y="true" :scroll-into-view="position">
			<view class="uni-chatMsgCnt" v-for="(item, index) in msgList">
				<view class="msg-l">
					<image src="../../../static/wxlogo.png"
						style="width: 40px; height: 40px; margin-top: 10px; margin-left: 10px;"
						v-show="item.from=='ai'"></image>
					<view class="msgitem-ai" v-show="item.from=='ai'">{{ item.text }}</view>
				</view>
				<view class="msg-r">
					<view class="msgitem-me" v-show="item.from=='me'">{{ item.text }}</view>
					<image src="../../../static/me.png"
						style="width: 40px; height: 40px; margin-top: 10px; margin-right: 10px;"
						v-show="item.from=='me'"></image>
				</view>
			</view>
			
			<view :id="'msg'+(msgList.length)"></view>
			
		</scroll-view>
		
		<view class="inputframe" id="inputframe">
			<input class="input" cursor-spacing="10" type="text" placeholder=" 请输入信息" v-model="send_text" @keydown.enter="send"></input>
			<button class="btn" @click="send">发送</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList: [],
				send_text: "",
				num: 0,
				position: "",
				token: "",
				server_host: "",
				bot_number: 0
			};
		},
		onLoad(options) {
			this.token = options.token;
			this.server_host = uni.getStorageSync('server_host');
			// setInterval(function() {
			// 	uni.request({
			// 		url: "http://chat.api.aliyungpt.com/get_info",
			// 		success:function(res){
			// 			let data = JSON.parse(res.data["chatbots"])
			// 			this.bot_number = Object.keys(data).length / 90;
			// 		}
			// 	})
			// }, 3*1000)
		},
		mounted() {
			this.welcome()
		},
		updated() {

		},
		methods: {
			welcome() {
				let welcome_msg_1 = {
					from: "ai",
					text: "欢迎使用AI小助手~"
				};
				let welcome_msg_2 = {
					from: "ai",
					text: "这是一个基于Chat-GPT实现的人工智能助手，可以帮助您解答学习、生活以及工作中的各种问题。"
				};
				this.msgList.push(welcome_msg_1);
				this.msgList.push(welcome_msg_2);
			},
			send() {
				if (this.send_text !== "") {
					const _this = this;
					let msg = {
						from: "me",
						text: this.send_text
					};
					this.msgList.push(msg);
					let send_msg = this.send_text;
					this.send_text = "";
					
					let pre_msg = {
						from: "ai",
						text: "AI小助手正在思考..."
					};
					this.msgList.push(pre_msg);
					
					setTimeout(() => {
						_this.num = _this.msgList.length
						_this.position = 'msg' + (_this.num)
					}, 100)
					
					uni.request({
						// 后端接口地址
						url: _this.server_host + "/chat",
						method: "POST",
						data: {
							"token": _this.token,
							"content": send_msg
						},
						success: function(res) {
							_this.msgList.pop();
							if(res.data['code'] === '1') {
								let msg = {
									from: "ai",
									text: res.data.text
								};
								_this.msgList.push(msg);
								plus.device.vibrate(150);
								setTimeout(() => {
									_this.num = _this.msgList.length
									_this.position = 'msg' + (_this.num)
								}, 100)
							} else {
								let msg = {
									from: "ai",
									text: "未登录，请登陆后重试"
								};
								_this.msgList.push(msg);
								plus.device.vibrate(150);
								setTimeout(() => {
									_this.num = _this.msgList.length
									_this.position = 'msg' + (_this.num)
								}, 100)
							}
						},
						fail: function(res) {
							_this.msgList.pop();
							let msg = {
								from: "ai",
								text: "服务器出了点问题，稍后再试试吧~"
							};
							_this.msgList.push(msg);
							plus.device.vibrate(150);
							setTimeout(() => {
								_this.num = _this.msgList.length
								_this.position = 'msg' + (_this.num)
							}, 100)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scrollview {
		height: calc(100vh - 150rpx - env(safe-area-inset-bottom));
	}

	.uni-chatMsgCnt {
		width: 100%;

		.msg-l {
			width: 100%;
			display: flex;
			justify-content: flex-start;
		}

		.msg-r {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}

		.msgitem-ai {
			width: fit-content;
			height: fit-content;
			max-width: 60%;
			margin: 10px;
			padding: 10px;
			border-radius: 10px;
			background-color: #F0F8FF;
			word-break: break-all;
			white-space: pre-line;
			font-size: 12px;
		}

		.msgitem-me {
			width: fit-content;
			height: fit-content;
			max-width: 60%;
			margin: 10px;
			padding: 10px;
			border-radius: 10px;
			background-color: #26B3A0;
			word-break: break-all;
			white-space: pre-line;
			font-size: 12px;
		}
	}

	.inputframe {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: row;
		background-color: mediumaquamarine;

		.input {
			background-color: white;
			flex: 1;
			height: 40px;
			bottom: 10px;
			line-height: 40px;
			margin-top: 10px;
			margin-left: 10px;
			margin-right: 5px;
			padding-left: 10px;
			padding-right: 10px;
			border-radius: 10px;
		}

		.btn {
			height: 40px;
			margin-top: 10px;
			margin-right: 10px;
			border-radius: 10px;
			background-color: white;
			text-align: center;
			font-size: 16px;
		}
	}
</style>
