# AI-aides


本项目最初只是想对GPT-3模型进行一个封装，后来发现了由 [acheong08](https://github.com/acheong08) 大佬提供的ChatGPT接口，于是将这个AI小助手接入了ChatGPT，比起GPT-3，可玩性更高啦！

本项目基于`Python` 和 `uni-app` 构建，~~目前只支持 `Android` 端使用~~。



**更新：**

V2.2.3新增后端高并发支持，使用Gunicorn + Redis实现多线程；支持使用DockerCompose构建镜像；前端优化UI。

V2.2.2新增前端设置服务器地址功能；优化UI，适配H5端。

V2.2.0修改后端接口；~~新增查询在线机器人数量的接口~~；新增本地缓存，避免每次使用都需要手动输入帐号密码。

V2.1.0支持使用ChatGPT的帐号密码登录，可以部署到服务器后供多人使用。



使用方法如下：

## Server端：

拉取本仓库到服务器上（需要能访问外网，最好是境外服务器，并且要安装好docker和docker-compose）

**没有安装docker和docker-compose可以参考以下命令**

安装docker：

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

安装docker-compose：

截至项目开发时，docker-compose最新版本为：2.16.0，可在[此处](https://github.com/docker/compose/releases)查看最新版本，将下面的版本版本号替换即可。

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```shell
sudo chmod +x /usr/local/bin/docker-compose
```



**拉取源代码**

```
git clone https://github.com/Fangnan700/AI-aides.git
```

```shell
cd ./AI-aides/ai_aides(Server)
```



**根据需要修改Dockerfile、docker-compose.yml和gunicorn.conf**

```dockerfile
# 基础镜像
FROM python:3.10

# 运行目录
WORKDIR /app

# 根据依赖包列表安装依赖
COPY requirements.txt /app/
RUN pip install --upgrade --no-cache-dir -r requirements.txt

# 复制所有文件到镜像内
COPY . /app

# 暴露5000端口到宿主机
EXPOSE 5000

# 项目启动命令，使用gunicorn启动
CMD ["gunicorn", "-c", "gunicorn.conf", "app:app"]
```

```yaml
version: "1"
services:
  web:
    build: .
    command: gunicorn -c gunicorn.conf app:app
    volumes:
      - .:/app
    ports:
      - "80:5000"
    depends_on:
      - redis
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
```

根据需要修改`docker-compose.yml`中`web`的`ports`，即可将服务运行在宿主机的指定端口。

```conf
# gunicorn.conf

# 并行工作进程数
workers = 4
# 指定每个工作者进程的线程数
threads = 4
# 监听内网端口5000
bind = '0.0.0.0:5000'
# 设置守护进程,将进程交给supervisor管理
daemon = 'false'
# 工作模式协程
worker_class = 'gevent'
# 设置最大并发量
worker_connections = 2000
# 设置进程文件目录
pidfile = './gunicorn.pid'
# 设置访问日志和错误信息日志路径
accesslog = './log/gunicorn_acess.log'
errorlog = './log/gunicorn_error.log'
# 设置日志记录水平
loglevel = 'warning'
```

**注意！！！**

如果运行时报错：访问Redis服务被拒绝，请按以下步骤修改`app.py`

1. 在服务器上运行`ifconfig docker0 | grep "inet " | awk '{ print $2 }`查看`docker0`的IP
2. 将`app.py`中的redis连接配置修改为docker0对应的IP

```python
redis_pool = redis.ConnectionPool(host='<your docker0's IP>', port='6379', decode_responses=False)
redis_p = redis.Redis(host='<your docker0's IP>', port=6379, decode_responses=False)
```





**构建镜像**

```shell
sudo docker-compose build
```



**开始运行**

```shell
sudo docker-compose up
```



## App端：

- 拉取本仓库到本地（需要Nodejs环境，HBuilder X编辑器）

- 在服务器设置中配置后端服务器地址。
- 通过 HBuilder X 云打包apk，安装到手机即可。

**注意：**

H5页面由Uniapp直接导出，代码经过混淆，比较难读懂，但只需要修改以下两个地方即可直接部署：

1、`pages-main-login-login.70f92203.js`

```js
// 这里的接口根据自己的服务器来修改
url: "<your server's host and port>/login",
```

2、`pages-main-form-index.5990799a.js`

```js
// 这里的接口根据自己的服务器来修改
url: "<your server's host and port>/chat",
```



## 测试截图：

### App端

![4.jpgCF84A65723D1F60705A304301C188138](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpgCF84A65723D1F60705A304301C188138.jpg)

![4.jpg4CE37E195003AC37ED73776E8AD19BB6](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpg4CE37E195003AC37ED73776E8AD19BB6.jpg)

![4.jpgDD388427B495A6C012978E54BDFB718C](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpgDD388427B495A6C012978E54BDFB718C.jpg)

![4.jpgB65EB95506D04A0B0E0A95AD74DDDBFD](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/4.jpgB65EB95506D04A0B0E0A95AD74DDDBFD.jpg)



### H5端

![image-20230227165724151](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/image-20230227165724151.png)

![image-20230227165736094](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/image-20230227165736094.png)

![image-20230228103155627](https://yvling-typora-image-1257337367.cos.ap-nanjing.myqcloud.com/typora/image-20230228103155627.png)















