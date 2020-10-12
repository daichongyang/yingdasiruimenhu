import axios from "axios"

export const parkList = (params) => { return axios.post("park/park/list/page", params) } //查询公园分页列表
export const peripheryList = (params) => { return axios.post("park/periphery/list/page", params) } //查询公园周边分页列表
export const tourist = (params) => { return axios.post("park/tourist/list/page", params) } //查询景点分页列表
export const getMessage = (params) => { return axios.post("park/Message/getMessage", params) } //获取资讯