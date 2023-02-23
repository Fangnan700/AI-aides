# AI-aides


本项目最初只是想对GPT-3模型进行一个封装，后来发现了由 [acheong08](https://github.com/acheong08) 大佬提供的ChatGPT接口，于是将这个AI小助手接入了ChatGPT，比起GPT-3，可玩性更高啦！

本项目基于`Python` 和 `uni-app` 构建，目前只支持 `Android` 端使用。

V2.1.0支持使用ChatGPT的帐号密码登录，可以部署到服务器后供多人使用。



使用方法如下：

## Server端：

拉取本仓库到服务器上（需要能访问外网，最好是境外服务器，并且要安装好docker）

**没有安装docker可以参考以下命令**

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
```

```shell
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
```

```shell
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```shell
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```shell
sudo chmod a+r /etc/apt/keyrings/docker.gpg
sudo apt-get update
```

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```shell
sudo systemctl enable docker
sudo systemctl start docker
```



**拉取源代码**

```
git clone https://github.com/Fangnan700/AI-aides.git
```

```shell
cd ./AI-aides/ai_aides(Server)
```



**构建镜像**

```shell
sudo docker build -t aides-server .
```



**开始运行**

```shell
sudo docker run -itd -p <your port>:5000 aides-server
```



## App端：

拉取本仓库到本地（需要Nodejs环境，HBuilder X编辑器）

修改`/ai_aides(Client)/pages/main/form/index.vue`

```js
// 后端发送接口地址
url: "http://<your host:your port>/chat"
```

修改`/ai_aides(Client)/pages/main/login/login.vue`

```js
// 后端登录接口地址
url: "http://<your host:your port>/login"
```

通过 HBuilder X 云打包apk，安装到手机即可。





## 测试截图：

![3F99A75DA387B21A4CA28D7D6A814657.jpgA7A8D1D8746AFBC9AB87272DBCCC7509](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpgA7A8D1D8746AFBC9AB87272DBCCC7509.jpg)



![3F99A75DA387B21A4CA28D7D6A814657.jpg85DBFEC212C93F9CEB94759E7CAC54B3](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpg85DBFEC212C93F9CEB94759E7CAC54B3.jpg)



![3F99A75DA387B21A4CA28D7D6A814657.jpgDE2C0A9875D8A0B1523A09BCD94C8F87](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpgDE2C0A9875D8A0B1523A09BCD94C8F87.jpg)

