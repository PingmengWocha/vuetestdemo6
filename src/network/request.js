import originAxios from 'axios'

export function axios(option) {
  return new Promise((resolve, reject) => {
    //1.创建axios实例
    const instance = originAxios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    });

    //2.axios的拦截器
    //1.当发送网络请求时，在页面中添加一个loading组件，作为动画
    //2.某些请求要求用户必须登录，判断用户是否返回token，如果没有token跳转到login页面
    //3.对请求的参数进行序列化（看服务器是否需要序列化）
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      return err
    })
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log('来到了response拦截failure中')
      console.log(err)
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
          case 401:
            err.message = '未授权的访问'
            break
        }
      }
      return err
    })

    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })

// export function request(config) {
//   return new Promise((resolve,reject) => {
//     //1.创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     //发送网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
  })
}

