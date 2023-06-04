import request from "./axios";

export function getTopicPage(data){
	return request({
		url: '/mall/cms-topic/page',
		method: 'post',
        data
	});
}

export function getTopicOne(id){
	return request({
		url: `/mall/cms-topic/one/${id}`,
		method: 'get',
	});
}

export function delTopicOne(id){
	return request({
		url: `/mall/cms-topic/del/${id}`,
		method: 'get'
	});
}

export function addTopicOne(data){
	return request({
		url: '/mall/cms-topic/add',
		method: 'post',
		data
	});
}

export function updateTopicOne(data){
	return request({
		url: '/mall/cms-topic/edit',
		method: 'post',
		data
	});
}

