import axios from "axios";
import qs from "qs";


const service = axios.create({
	baseURL: process.env.BASE_URL,  // api的base_url
	timeout: 5000  // 请求超时时间
});

service.interceptors.request.use(config => {
	app.$vux.loading.show({
		text: '数据加载中……'
	});
	config.method === 'post'
		? config.data = qs.stringify({ ...config.data })
		: config.params = { ...config.params };
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	return config;
}, error => {  //请求错误处理   
	app.$vux.toast.show({
		type: 'warn',
		text: error
	});
	Promise.reject(error)
}
);

service.interceptors.response.use(
	response => {  //成功请求到数据        
		app.$vux.loading.hide();
		//这里根据后端提供的数据进行对应的处理        
		if (response.data.result === 'TRUE') {
			return response.data;
		} else {
			app.$vux.toast.show({
				//常规错误处理                
				type: 'warn',
				text: response.data.data.msg
			});
		}
	},
	error => {  //响应错误处理console.log('error');        
		console.log(error);
		console.log(JSON.stringify(error));
		let text = JSON.parse(JSON.stringify(error)).response.status === 404
			? '404'
			: '网络异常，请重试';
		app.$vux.toast.show({
			type: 'warn',
			text: text
		});
		return Promise.reject(error)
	}
)

export default service;

var token = localStorage.getItem('MANAGE_TOKEN');
// http request 拦截器
axios.interceptors.request.use(
	config => {
		if (stoken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.Authorization = `token ${store.state.token}`;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	});

// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if (error.response) {
			switch (error.response.status) {
				case 401:
					// 返回 401 清除token信息并跳转到登录页面
					router.replace({
						path: 'login',
						query: { redirect: router.currentRoute.fullPath }
					})
			}
		}
		return Promise.reject(error.response.data)   // 返回接口返回的错误信息
	});