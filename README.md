# AI-aides


本项目最初只是想对GPT-3模型进行一个封装，后来发现了由 [acheong08](https://github.com/acheong08) 大佬提供的ChatGPT接口，于是将这个AI小助手接入了ChatGPT，比起GPT-3，可玩性更高啦！

本项目基于`Python` 和 `uni-app` 构建，目前只支持 `Android` 端使用。



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



**修改 `config.json`**

```shell
vim ./config.json
```

```json
{
  "account": {
    "email": "<your chat-gpt account>",
    "password": "<your chat-gpt password>"
  },
  "proxy": null
}
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

拉取本仓库到本地（需要Nodejs环境，HBuilder编辑器）

修改`/ai_aides(Client)/pages/main/form/index.vue`

```js
// 后端接口地址
url: "http://<your host:your port>/chat"
```

修改`/ai_aides(Client)/pages/main/admin/admin.vue`

```js
// 后端接口地址
url: "http://<your host:your port>/reset"

// 验证管理员权限
if (this.username === "<your admin username>" && this.password === "<your admin password>")
```

通过 HBuilder 云打包App，安装到手机即可。



## 管理员功能

由于 OpenAI官方对ChatGPT帐号的限制，可能会导致帐号失效的情况，此时无需重新构建镜像，只需在App端的管理员页面中，输入新的ChatGPT帐号，重置服务器即可。（代理地址默认为null，如需使用，请确保docker能够访问代理服务器）

![3F99A75DA387B21A4CA28D7D6A814657.jpgA666FE8F74CE56851DE9B2162C8DB6DA](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpgA666FE8F74CE56851DE9B2162C8DB6DA.jpg)





## 测试截图：

![3F99A75DA387B21A4CA28D7D6A814657.jpgB72E9090FB8CE284E821A97640889FE9](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpgB72E9090FB8CE284E821A97640889FE9.jpg)



![3F99A75DA387B21A4CA28D7D6A814657.jpgB343578BB393757AC823E3BCAD4D8617](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpgB343578BB393757AC823E3BCAD4D8617.jpg)



![3F99A75DA387B21A4CA28D7D6A814657](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/3F99A75DA387B21A4CA28D7D6A814657.jpg)

## 



