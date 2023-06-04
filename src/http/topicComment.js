import request from "./axios";

export function getPage(data){
	return request({
		url: '/mall/cms-topic-comment/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/cms-topic-comment/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/cms-topic-comment/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/cms-topic-comment/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/cms-topic-comment/edit',
		method: 'post',
		data
	});
}

