import request from "./axios";

export function getPage(data){
	return request({
		url: '/mall/cms-topic-category/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/cms-topic-category/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/cms-topic-category/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/cms-topic-category/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/cms-topic-category/edit',
		method: 'post',
		data
	});
}

