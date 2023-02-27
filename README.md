# AI-aides


本项目最初只是想对GPT-3模型进行一个封装，后来发现了由 [acheong08](https://github.com/acheong08) 大佬提供的ChatGPT接口，于是将这个AI小助手接入了ChatGPT，比起GPT-3，可玩性更高啦！

本项目基于`Python` 和 `uni-app` 构建，目前只支持 `Android` 端使用。



更新：

V2.2.2新增前端设置服务器地址功能；优化UI，适配H5端。

V2.2.0修改后端接口；新增查询在线机器人数量的接口；新增本地缓存，避免每次使用都需要手动输入帐号密码。

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

- 拉取本仓库到本地（需要Nodejs环境，HBuilder X编辑器）

- 在服务器设置中配置后端服务器地址。
- 通过 HBuilder X 云打包apk，安装到手机即可。

**注意：部署H5端前，建议将**

**`/ai_aides(Client)/pages/main/login/login.vue`和`/ai_aides(Client)/pages/main/form/index.vue`**

**中的接口进行更改，并将**

**`/ai_aides(Client)/pages/main/index/index.vue`**

**中的`服务器设置`按钮关闭，避免手动设置服务器地址。**





## 测试截图：

### App端

![4.jpgCF84A65723D1F60705A304301C188138](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpgCF84A65723D1F60705A304301C188138.jpg)

![4.jpg4CE37E195003AC37ED73776E8AD19BB6](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpg4CE37E195003AC37ED73776E8AD19BB6.jpg)

![4.jpgDD388427B495A6C012978E54BDFB718C](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpgDD388427B495A6C012978E54BDFB718C.jpg)

![4.jpgB65EB95506D04A0B0E0A95AD74DDDBFD](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpgB65EB95506D04A0B0E0A95AD74DDDBFD.jpg)



### H5端

![image-20230227165724151](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/image-20230227165724151.png)

![image-20230227165736094](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/image-20230227165736094.png)

















