import axios from "axios"

export const parkList = (params) => { return axios.post("park/park/list/page", params) } //查询公园分页列表
    // export const peripheryList = (params) => { return axios.post("park/periphery/list/page", params) } //查询公园周边分页列表
export const tourist = (params) => { return axios.post("park/tourist/list/page", params) } //查询景点分页列表
export const getMessage = (params) => { return axios.post("park/Message/getMessage", params) } //获取资讯
export const getTraffic = (params) => { return axios.post("park/Message/getTraffic", params) } //获取交通介绍
export const facilitiesList = (params) => { return axios.post("park/v1.0/app/park/select/assets", params) } //公园内设施列表
export const peripheryList = (params) => { return axios.post("park/v1.0/app/periphery/list", params) } //查询公园周边列表